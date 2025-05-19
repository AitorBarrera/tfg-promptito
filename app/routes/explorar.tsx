import type { Route } from "./+types/home";
import { PromptComponente } from "~/componentes/Prompt/PromptComponente";
import { LayoutNavbar } from "~/layouts/LayoutNavbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Promptito Explorar" },
    { name: "description", content: "Explorar!" },
  ];
}

export default function Explorar() {
  return (
    <div className="overflow-hidden flex">
      <div className="w-[25%] bg-primarydark">
        <p></p>
      </div>
      <div className="w-[75%] flex flex-col">
        <div className="flex flex-col gap-4">
          <LayoutNavbar />
          <div className="flex flex-col gap-4 max-w-standard mx-auto">
            <PromptComponente />
            <PromptComponente />
            <PromptComponente />
            <PromptComponente />
          </div>
        </div>
      </div>
    </div>
  );
}
