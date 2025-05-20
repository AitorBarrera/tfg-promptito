import { useFetch } from "~/hooks";
import type { LLM } from "~/interfaces";

export const FilterFormLlms = () => {
  const { data, isLoading } = useFetch("https://localhost:7035/Llm/dto");

  const llms = data;
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
                  <label 
                  htmlFor={`${llm.nombre} ${llm.version}`}
                  key={llm.id} 
                  className="flex items-center justify-between text-start border-b-2 pb-1 border-text">
                    
                    {`${llm.nombre} ${llm.version}`}
                    
                    <input
                      type="checkbox"
                      name="llm"
                      className="form-checkbox place-self-start self-center justify-self-start h-[18px] w-[18px] rounded"
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
