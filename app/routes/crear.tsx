import { LayoutNavbar } from "~/layouts/LayoutNavbar";
import type { Route } from "./+types/home";
import { CreatePromptForm } from "~/componentes/CreatePrompt/CreatePromptForm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Promptito Crear" },
    { name: "description", content: "Crear!" },
  ];
}

export default function Crear() {
  return (
    <main className="min-h-[100dvh]">
      <LayoutNavbar />
      <h2 className="bg-primaryblack text-center">Crear/Editar Prompt</h2>
      <div className="max-w-standard border-primaryblack bg-primaryblack mx-auto mt-6 flex flex-col gap-4 rounded-2xl border-2 p-6">
        <CreatePromptForm />
      </div>
    </main>
  );
}
