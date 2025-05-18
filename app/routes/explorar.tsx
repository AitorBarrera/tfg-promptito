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
    <div className="h-[100vh] max-h-[100vh] overflow-hidden flex">
      <div className="w-[25%] bg-primarydark"></div>
      <div className="w-[75%] flex flex-col">
        <div className="flex flex-col gap-4 overflow-scroll">
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
