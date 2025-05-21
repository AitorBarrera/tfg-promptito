import { whiteAlpha } from "@clerk/themes/dist/clerk-js/src/ui/foundations";
import { Checkbox, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useFetch } from "~/hooks";
import type { FilterFormLlmsProps, LLM } from "~/interfaces";

export const FilterFormLlms = ({ handleInputChange }: FilterFormLlmsProps) => {
  const { data, isLoading } = useFetch("https://localhost:7035/Llm/dto");

  const llms = data;
  return (
    <>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <div className="form-group flex flex-col gap-2">
            <label>LLM</label>
            <RadioGroup name="llms" className="llmsFilter">
              <FormControlLabel
                key={0}
                control={
                  <Radio
                    name={`idLlm`}
                    sx={{ color: "white" }}
                    value={""}
                    onChange={handleInputChange}
                  />
                }
                label={`Ninguno`}
              />
              {llms.map((llm: LLM) => {
                return (
                  <FormControlLabel
                    key={llm.id}
                    control={
                      <Radio
                        name={`idLlm`}
                        sx={{ color: "white" }}
                        value={llm.id}
                        onChange={handleInputChange}
                      />
                    }
                    label={`${llm.nombre} ${llm.version}`}
                  />
                  // <FormControlLabel
                  //   key={llm.id}
                  //   control={
                  //     <Checkbox
                  //       name={`${llm.nombre} ${llm.version}`}
                  //       sx={{ color: "white" }}
                  //     />
                  //   }
                  //   label={`${llm.nombre} ${llm.version}`}
                  // />

                  // <label
                  // htmlFor={`${llm.nombre} ${llm.version}`}
                  // key={llm.id}
                  // className="flex items-center justify-between text-start border-b-2 pb-1 border-text">

                  //   {`${llm.nombre} ${llm.version}`}

                  //   <input
                  //     type="checkbox"
                  //     name="llm"
                  //     className="form-checkbox place-self-start self-center justify-self-start h-[18px] w-[18px] rounded"
                  //     id={`${llm.nombre} ${llm.version}`}
                  //     value={`${llm.nombre} ${llm.version}`}
                  //   />
                  // </label>
                );
              })}
            </RadioGroup>
          </div>
        </>
      )}
    </>
  );
};
