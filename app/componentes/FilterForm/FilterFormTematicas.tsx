import { Checkbox, FormControlLabel } from "@mui/material";
import { useFetch } from "~/hooks";
import type { Tematica } from "~/interfaces";

export const FilterFormTematicas = () => {
  const { data, isLoading } = useFetch("https://localhost:7035/tematica/dto");

  const tematicas = data;
  return (
    <>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <div className="form-group">
            <label htmlFor="">Tematica</label>
            <div className="tematicasFilter flex flex-col gap-6">
              {tematicas.map((tematica: Tematica) => {
                return (
                  <FormControlLabel
                    key={tematica.id}
                    control={
                      <Checkbox
                        name={`${tematica.nombre}`}
                        sx={{ color: "white" }}
                      />
                    }
                    label={`${tematica.nombre} `}
                  />
                  // <label htmlFor={`${tematica.nombre}`} key={tematica.id} className="flex items-center justify-between text-start border-b-2 pb-1 border-text">
                  //   {`${tematica.nombre}`}
                  //   <input
                  //     type="checkbox"
                  //     name="tematica"
                  //     className="form-checkbox place-self-start self-center justify-self-start h-[18px] w-[18px] rounded"
                  //     id={`${tematica.nombre}`}
                  //     value={`${tematica.nombre}`}
                  //   />
                  // </label>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};
