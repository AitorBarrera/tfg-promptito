import { useFetcher } from "react-router";
import type { Route } from "./+types/home";
import { PromptComponente } from "~/componentes/Prompt/PromptComponente";
import { LayoutNavbar } from "~/layouts/LayoutNavbar";
import { useFetch, useFilters } from "~/hooks";
import type { Prompt, Filters } from "~/interfaces";
import { FilterForm } from "~/componentes/FilterForm/FilterForm";
import { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Promptito Explorar" },
    { name: "description", content: "Explorar!" },
  ];
}

const initialFilters: Filters = {
  tituloPrompt: "",
  nombreAutor: "",
  contenidoPrompt: "",
  orderBy: "",
  idLlm: null,
  idPromptTematica: null,
  idUsuarioFavorito: null,
  esFavorito: false,
};

export default function Explorar() {
  const {
    filterState,
    onInputChange,
    onSelectChange,
    onResetFilter,
    tituloPrompt,
    nombreAutor,
    contenidoPrompt,
    orderBy,
    idLlm,
    idPromptTematica,
    idUsuarioFavorito,
    esFavorito,
  } = useFilters(initialFilters);

  const { data, isLoading, hasError } = useFetch(
    `https://localhost:7035/Prompt/paginacionFiltrado` +
      `?tituloPrompt=${tituloPrompt}` +
      `&nombreAutor=${nombreAutor}` +
      `&contenidoPrompt=${contenidoPrompt}` +
      `&orderBy=${orderBy}` +
      `&idLlm=${idLlm ?? ""}` +
      `&idPromptTematica=${idPromptTematica ?? ""}` +
      `&idUsarioFavorito=${idUsuarioFavorito ?? ""}` +
      `&esFavorito=${esFavorito}`,
  );

  const { datos, cantidadTotal, pagina, cantidadPorPagina, cantidadDePaginas } =
    data == null ? {} : data;

  const [showFilters, setShowFilters] = useState(true);

  return (
    <main className="relative flex min-h-[100dvh]">
      <div
        className={`filterContainer text-text bg-primaryblack sticky top-0 bottom-0 max-h-[100dvh] w-[25%] overflow-scroll overflow-x-hidden px-12 ${showFilters ? "block" : "w-[0%] translate-x-[-500px]"}`}
      >
        <h3 className="text-primarywhite font-Tron my-4 text-center text-2xl font-bold">
          PROMPTITO
        </h3>
        <FilterForm
          filterState={filterState as Filters}
          handleInputChange={onInputChange}
          handleSelectChange={onSelectChange}
        />
      </div>
      <div
        className={
          `relative flex flex-col` + showFilters ? "w-[100%]" : "w-[75%]"
        }
      >
        <LayoutNavbar />

        <button
          className="bg-primary sticky top-0 left-0 z-50 h-10 w-10 cursor-pointer rounded-br-md"
          onClick={() => setShowFilters(!showFilters)}
        >
          <TuneIcon />
        </button>

        <div className="max-w-standard relative mx-auto flex flex-col gap-4">
          {isLoading && <p>Cargando...</p>}
          {hasError && <p>Error al cargar los prompts</p>}
          {data &&
            datos.map((prompt: Prompt) => (
              <PromptComponente key={prompt.id} prompt={prompt} />
            ))}
        </div>
        <div className="sticky right-0 bottom-0">
          {/* <iframe
            src="https://studio.pickaxe.co/_embed/YL4TIUHG61?d=deployment-0a295aa2-187c-4ebe-bc13-96ed0c343eb8"
            // style={`width: 100%; height: 500px; max-width: 700px; border-radius: 4px;`}
            className="h-[500px] w-100"
          ></iframe> */}
        </div>
      </div>
    </main>
  );
}
