import { useFetcher } from "react-router";
import type { Route } from "./+types/home";
import { PromptComponente } from "~/componentes/Prompt/PromptComponente";
import { LayoutNavbar } from "~/layouts/LayoutNavbar";
import { useFetch } from "~/hooks";
import type { Prompt } from "~/interfaces";
import { FilterForm } from "~/componentes/FilterForm/FilterForm";
import { useState } from "react";
import { Icon } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Promptito Explorar" },
    { name: "description", content: "Explorar!" },
  ];
}

export default function Explorar() {
  const { data, isLoading, hasError } = useFetch(
    "https://localhost:7035/Prompt/paginacion?pagina=1&cantidadPorPagina=10",
  );

  const [showFilters, setShowFilters] = useState(true);

  const { datos, cantidadTotal, pagina, cantidadPorPagina, cantidadDePaginas } =
    data == null ? {} : data;

  return (
    <main className="relative flex min-h-[100dvh]">
      {showFilters && (
        <div className="bg-primary dark:bg-primaryblack dark:text-text sticky top-0 bottom-0 max-h-[100dvh] w-[25%] overflow-scroll overflow-x-hidden px-12">
          <h3 className="text-primarywhite font-Tron my-4 text-center text-2xl font-bold">
            PROMPTITO
          </h3>
          <FilterForm />
        </div>
      )}
      <div
        className={
          `relative flex flex-col` + showFilters ? "w-[100%]" : "w-[75%]"
        }
      >
        <LayoutNavbar />
        <button
          className="bg-primary sticky top-0 left-0 z-50 h-10 w-10 rounded-br-md"
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
          <iframe
            src="https://studio.pickaxe.co/_embed/YL4TIUHG61?d=deployment-0a295aa2-187c-4ebe-bc13-96ed0c343eb8"
            // style={`width: 100%; height: 500px; max-width: 700px; border-radius: 4px;`}
            className="h-[500px] w-100"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
