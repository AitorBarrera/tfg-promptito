import React, {
  useEffect,
  useState,
  type ChangeEvent,
  type ChangeEventHandler,
} from "react";
import type { PromptUseMenuProps, PromptVariante } from "~/interfaces";
import { getPromptVariantById } from "~/services/Promptito_API";

export const PromptUseMenu = ({ promptVariant }: PromptUseMenuProps) => {
  const [promptVariantWithParameters, setPromptVariantWithParameters] =
    useState<PromptVariante | null>(null);

  const [currentTextPrompt, setCurrentTextPrompt] = useState(
    promptVariant.textoPrompt,
  );

  useEffect(() => {
    const fetchPromptVariant = async () => {
      const response = await getPromptVariantById(promptVariant.id);
      return response;
    };
    fetchPromptVariant().then((data) => setPromptVariantWithParameters(data));
  }, [promptVariant]);

  const replacingParameters = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
  ) => {
    const parameterName = event.target.name;
    let parameterValue = event.target.value;
    let textPromptToChange = currentTextPrompt;
    console.log(parameterName, parameterValue);

    const regex = new RegExp(`\{\{Parametro: ${parameterName}\}\}`);

    const matches = textPromptToChange.match(regex);
    console.log(matches);

    if (matches) {
      matches.forEach((match) => {
        textPromptToChange = textPromptToChange
          .replace(regex, parameterValue)
          .trim();
        // const paramValue = promptVariantWithParameters?.parametros?.find(
        //   (parametro) => parametro.nombre === paramName,
        // )?.valorPredeterminado;

        // if (paramValue) {
        //   parameterValue = parameterValue.replace(match, paramValue);
        // }

        console.log(textPromptToChange);

        // let newTextPrompt = textPromptToChange.replace(
        //   regex,
        //   parameterValue,
        // );
      });
    }
    // setCurrentModifiedPrompt(text);
    setCurrentTextPrompt(textPromptToChange);
  };
  return (
    <div className="flex flex-col gap-2">
      <hr className="text-grey my-6 rounded-3xl border-1" />
      <h4 className="mb-12 text-center text-lg font-bold">Usar Prompt</h4>
      <div className="grid grid-cols-5 gap-20">
        <div className="bg-primarydark col-span-3 h-[100%] w-full rounded-2xl p-8">
          <p>{currentTextPrompt}</p>
        </div>
        <form className="col-span-2 flex flex-col justify-between gap-8">
          {promptVariantWithParameters?.parametros?.map((parametro) => {
            return (
              <div key={parametro.id} className="flex flex-col gap-2">
                <label
                  htmlFor={parametro.nombre}
                  className="text-sm font-semibold capitalize"
                >
                  {parametro.nombre}
                </label>
                {parametro.tipoValor === "string" && (
                  <input
                    type="text"
                    id={parametro.nombre}
                    name={parametro.nombre}
                    defaultValue={parametro.valorPredeterminado || ""}
                    className="border-primarylight rounded-lg border p-2"
                    onChange={replacingParameters}
                  />
                )}
                {parametro.tipoValor === "number" && (
                  <input
                    type="number"
                    id={parametro.nombre}
                    name={parametro.nombre}
                    defaultValue={parametro.valorPredeterminado || ""}
                    className="border-primarylight rounded-lg border p-2"
                    onChange={replacingParameters}
                  />
                )}
                {parametro.tipoValor === "listaOpciones" && (
                  <select
                    id={parametro.nombre}
                    name={parametro.nombre}
                    defaultValue={parametro.valorPredeterminado || ""}
                    className="border-primarylight rounded-lg border p-2"
                    onChange={replacingParameters}
                  >
                    {parametro.opcionParametros?.map((opcion) => (
                      <option
                        key={opcion.id}
                        value={opcion.valor}
                        className="bg-primaryblack p-2"
                      >
                        {opcion.valor}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            );
          })}
        </form>
      </div>
    </div>
  );
};
