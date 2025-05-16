import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { PromptComponente } from "~/componentes/Prompt/PromptComponente";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Promptito Home" },
    { name: "description", content: "Welcome!" },
  ];
}

export default function Home() {
  return (
    <>
      {/* <Welcome /> */}
      <PromptComponente />
    </>
  );
}
