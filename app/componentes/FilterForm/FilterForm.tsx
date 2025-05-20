import React from "react";
import "./FilterFormStyle.css";
import { useFetch } from "~/hooks";
import type { LLM } from "~/interfaces";
import { FilterFormLlms } from "./FilterFormLlms";
import { FilterFormTematicas } from "./FilterFormTematicas";
import { FormControlLabel, FormGroup, FormLabel, Switch } from "@mui/material";

export const FilterForm = () => {
  return (
    <form action="">
      <div className="flex flex-col gap-2">
        <div className="form-group">
          <label htmlFor="titlePrompt">Titulo del prompt:</label>
          <input type="text" name="titulo" id="titulo" />
        </div>

        <div className="form-group">
          <label htmlFor="nameAuthor">Nombre de autor:</label>
          <input type="text" name="nombreAutor" id="nombreAutor" />
        </div>

        <div className="form-group">
          <label htmlFor="orderBy">Ordenado por:</label>
          <select name="orderBy" id="orderBy">
            <option value="dateAsc">Fecha ascendente</option>
            <option value="dateDesc">Fecha descendente</option>
            <option value="titleAsc">Titulo ascendente</option>
            <option value="titleDesc">Titulo descendente</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="contentPrompt">Contenido del prompt:</label>
          <textarea name="contenido" id="contenido" />
        </div>

        <FormControlLabel
          control={<Switch sx={{ color: "white", backgroundImage: "white" }} />}
          label="Favoritos"
        />

        <FilterFormLlms />

        <FilterFormTematicas />
      </div>
    </form>
  );
};
