import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  TextField,
} from "@mui/material";
import "./CreatePromptFormStyle.css";
import { getAllLLMs, getAllTematicas } from "~/services";
import type { LLM, Tematica } from "~/interfaces";

import React, { useEffect, useState } from "react";

export const CreatePromptForm = () => {
  const [llms, setLlms] = useState<LLM[]>([]);
  const [tematicas, setTematicas] = useState<Tematica[]>([]);

  useEffect(() => {
    getAllLLMs().then((data) => setLlms(data));
    getAllTematicas().then((data) => setTematicas(data));
  }, []);

  return (
    <form action="" className="createPromptForm">
      <div className="grid grid-cols-8 gap-8 p-16">
        <div className="col-span-4 flex flex-col gap-4">
          <TextField
            id="titulo"
            label="Titulo"
            variant="outlined"
            className="w-full"
          />
          <TextField
            id="Descripcion"
            label="Descripcion"
            variant="outlined"
            className="w-full"
            multiline={true}
            rows={4}
          />
        </div>

        <div className="col-span-2 col-start-5 flex flex-col gap-2">
          <FormLabel component="legend" className="text-primarydark">
            LLMs
          </FormLabel>
          <FormGroup className="!grid grid-cols-2">
            {llms.map((llm) => (
              <FormControlLabel
                key={llm.id}
                control={
                  <Checkbox
                    name={`${llm.nombre} ${llm.version}`}
                    value={`${llm.nombre} ${llm.version}`}
                  />
                }
                label={`${llm.nombre} ${llm.version}`}
                className="col-span-1"
              />
            ))}
          </FormGroup>
        </div>

        <div className="col-span-2 flex flex-col gap-2">
          <FormLabel component="legend" className="text-primarydark">
            Tematicas
          </FormLabel>
          <FormGroup className="!grid grid-cols-2">
            {tematicas.map((tematica) => (
              <FormControlLabel
                key={tematica.id}
                control={
                  <Checkbox
                    name={`${tematica.nombre}`}
                    value={`${tematica.nombre}`}
                  />
                }
                label={`${tematica.nombre}`}
                className="col-span-1"
              />
            ))}
          </FormGroup>
        </div>
        <h3 className="col-span-8 mt-4 text-center">
          Variante inicial del Prompt
        </h3>
        <div className="col-span-2 flex items-center">
          <TextField
            id="outlined-basic"
            label="Nombre de la variante"
            variant="outlined"
            className="w-full"
          />
        </div>

        <div className="col-span-8">
          <TextField
            id="textoPrompt"
            label="Texto del Prompt"
            variant="outlined"
            className="w-full"
            multiline={true}
            rows={4}
          />
          <small>
            Si deseas agregar parametros al prompt utiliza la sintaxis "
            {`{{Parametro: NombreParametro}}`}" en el cual se inserta el nombre
            del parametro en "NombreParametro" respetando el espacio y el resto
            de caracteres (por ejemplo:{" "}
            {`{{Parametro: leanguaje de programacion}}`}), luego pulsa el boton
            de crear parametros y configuralos a tu interes.
          </small>
        </div>
      </div>
    </form>
  );
};
