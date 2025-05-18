import { LayoutNavbar } from "~/layouts/LayoutNavbar";
import type { Route } from "./+types/home";
import { Logo } from "~/componentes/General/Logo";
import { GenericButton } from "~/componentes/General/GenericButton";
import { Link } from "react-router-dom";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Promptito Home" },
    { name: "description", content: "Welcome!" },
  ];
}

export default function Home() {
  return (
    <body className="bg-[image:var(--color-backgroundGradiant)] h-[100vh] flex flex-col">
      {/* <LayoutNavbar /> */}
      <div className="flex justify-between items-center flex-grow max-w-standard mx-auto">
        <div className="w-[35%]">
          <Logo />
        </div>
        <div className="text-center bg-primaryblack p-16 rounded-3xl">
          <h1 className="text-h1 font-weight-bold mb-2 text-text font-Tron">
            PROMPTITO
          </h1>
          <h2 className="text-h2 font-weight-bold mb-2 text-primarylight">
            Papua nueva guinea
          </h2>
          <p className="text-text mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <div className="flex justify-between gap-4">
            <Link to="/explorar">
              <GenericButton
                text="Explorar Prompts"
                onClickHandler={() => {}}
                buttonVariant={1}
                iconName="search"
              />
            </Link>
            <Link to="/usuario">
              <GenericButton
                text="Iniciar Sesion"
                onClickHandler={() => {}}
                buttonVariant={1}
                iconName="user"
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
    </body>
  );
}
