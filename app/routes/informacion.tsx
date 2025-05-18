import { LayoutNavbar } from "~/layouts/LayoutNavbar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Promptito Informacion" },
    { name: "description", content: "Informacion!" },
  ];
}
export default function Informacion() {
  return (
    <div>
      <LayoutNavbar />
      <div>informacion</div>
    </div>
  );
}
