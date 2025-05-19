import { LayoutNavbar } from "~/layouts/LayoutNavbar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Promptito Usuario" },
    { name: "description", content: "Usuario!" },
  ];
}
export default function Usuario() {
  return (
    <main className="min-h-[100dvh]">
      <LayoutNavbar />
      <div>usuario</div>
    </main>
  );
}
