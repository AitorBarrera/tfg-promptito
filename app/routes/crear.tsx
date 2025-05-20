import { LayoutNavbar } from "~/layouts/LayoutNavbar";
import type { Route } from "./+types/home";
import Button from "@mui/material/Button";
import { Accordion } from "@mui/material";

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
      <Button variant="contained" color="secondary">
        Contained
      </Button>
    </main>
  );
}
