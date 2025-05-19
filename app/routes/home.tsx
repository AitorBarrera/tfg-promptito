import { LayoutNavbar } from "~/layouts/LayoutNavbar";
import type { Route } from "./+types/home";
import { Logo } from "~/componentes/General/Logo";
import { GenericButton } from "~/componentes/General/GenericButton";
import { Link } from "react-router-dom";
import { getAllPrompts } from "~/services/Promptito_API";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Promptito Home" },
    { name: "description", content: "Welcome!" },
  ];
}

export default function Home() {
  return (
    <main className="flex h-[100dvh] flex-col bg-[image:var(--color-backgroundGradiant)]">
      {/* <LayoutNavbar /> */}
      <div className="max-w-standard mx-auto flex flex-grow items-center justify-between">
        <div className="w-[35%]">
          <Logo />
        </div>
        <div className="bg-primaryblack rounded-3xl p-16 text-center">
          <h1 className="text-h1 font-weight-bold text-text font-Tron mb-2">
            PROMPTITO
          </h1>
          <h2 className="text-h2 font-weight-bold text-primarylight mb-2">
            Papua nueva guinea
          </h2>
          <p className="text-text mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <div className="flex justify-between gap-4">
            <Link to="/usuario">
              <GenericButton
                text="Iniciar Sesion"
                onClickHandler={() => {}}
                buttonVariant={1}
                iconName="user"
              />
            </Link>
            <Link to="/explorar">
              <GenericButton
                text="Explorar Prompts"
                onClickHandler={() => {}}
                buttonVariant={1}
                iconName="search"
              />
            </Link>
            <Link to="/crear">
              <GenericButton
                text="Crear Prompt"
                onClickHandler={() => {}}
                buttonVariant={1}
                iconName="pencil"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
