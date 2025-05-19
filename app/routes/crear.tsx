import { LayoutNavbar } from "~/layouts/LayoutNavbar";
import type { Route } from "./+types/home";

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
      <div>crear</div>
    </main>
  );
}
