import { useFetch } from "~/hooks";
import type { LLM } from "~/interfaces";

export const FilterFormLlms = () => {
  const { data, isLoading } = useFetch("https://localhost:7035/Llm/dto");

  const llms = data;
  console.log(llms);
  return (
    <>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <div className="form-group flex flex-col gap-2">
            <label htmlFor="">LLM</label>
            <div className="llmsFilter">
              {llms.map((llm: LLM) => {
                return (
                  <label htmlFor="llm" key={llm.id}>
                    {`${llm.nombre} ${llm.version}`}
                    <input
                      type="checkbox"
                      name="llm"
                      id={`${llm.nombre} ${llm.version}`}
                      value={`${llm.nombre} ${llm.version}`}
                    />
                  </label>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};
