import { useFetcher } from "react-router";
import type { Route } from "./+types/home";
import { PromptComponente } from "~/componentes/Prompt/PromptComponente";
import { LayoutNavbar } from "~/layouts/LayoutNavbar";
import { useFetch } from "~/hooks";
import type { Prompt } from "~/interfaces";
import { FilterForm } from "~/componentes/FilterForm/FilterForm";

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

  const { datos, cantidadTotal, pagina, cantidadPorPagina, cantidadDePaginas } =
    data == null ? {} : data;

  return (
    <main className="flex min-h-[100dvh]">
      <div className="bg-primary dark:bg-primaryblack dark:text-text sticky top-0 bottom-0 max-h-[100dvh] w-[25%] overflow-scroll overflow-x-hidden px-12">
        <h3 className="text-primarywhite my-4 text-center text-2xl font-bold">
          PROMPTITO
        </h3>
        <FilterForm />
        <button className="bg-primary absolute top-0 right-[-300px] z-50 p-12">
          Collapse
        </button>
      </div>
      <div className="flex w-[75%] flex-col">
        <div className="flex flex-col gap-4">
          <LayoutNavbar />
          <div className="max-w-standard mx-auto flex flex-col gap-4">
            {isLoading && <p>Cargando...</p>}
            {hasError && <p>Error al cargar los prompts</p>}
            {data &&
              datos.map((prompt: Prompt) => (
                <PromptComponente key={prompt.id} prompt={prompt} />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
