import React, { useContext } from "react";
import { GenericButton } from "../General/GenericButton";
import { Icon } from "../General/Icon";
import type { PromptComponenteProps } from "~/interfaces";
import { addFavourite } from "~/services/Promptito_API";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { UserContext } from "~/contexts/UserContext";

export const PromptComponente = ({ prompt }: PromptComponenteProps) => {
  const usuarioEnBBDD = useContext(UserContext);

  return (
    <>
      <div className="promptComponente bg-background border-primarydark text-text my-6 grid grid-cols-8 items-center gap-2 rounded-2xl border-2 p-[2rem]">
        <h3 className="text-primary col-span-5 text-4xl font-black uppercase">
          {prompt.titulo}
        </h3>

        <div className="creadoContainer col-span-3 flex justify-end gap-6">
          <div className="text-end">
            <b className="text-primary">
              <Icon iconName="star" margin_right={5} />
            </b>
            <span>{prompt.enFavoritosDe.length}</span>
          </div>
          <p>
            <b className="text-primary">Creado en: </b>
            <span>{prompt.fechaCreacion}</span>
          </p>
        </div>

        <div className="temasContainer col-span-5">
          <p className="">
            <b className="text-primary">Tematicas: </b>
            <span>
              {prompt.tematicas.map((tematica) => tematica.nombre).join(", ")}
            </span>
          </p>
        </div>

        <div className="autorContainer col-span-3 text-end">
          <p className="">
            <b className="text-primary">Autor: </b>
            <span>{prompt.usuarioCreador.nombre}</span>
          </p>
        </div>

        <div className="promptTexto text-light relative col-span-8 mx-auto my-4 overflow-hidden text-justify">
          {/* <div className="promptTextoSombra bg-linear-to-b from-transparent from-80% to-black z-10 absolute h-[100%] w-[100%] "> </div> */}
          <p className="relative">{prompt.promptVariantes[0].textoPrompt}</p>
        </div>

        <div className="favoriteButtonContainer col-span-3">
          <SignedIn>
            <GenericButton
              key={1}
              text={"Añadir a favoritos"}
              buttonVariant={1}
              iconName="half_star"
              onClickHandler={() => {
                addFavourite(usuarioEnBBDD?.id ?? 0, prompt.id);
              }}
            />
          </SignedIn>
        </div>

        <div className="copyButtonContainer col-span-3 col-start-6 text-end">
          <GenericButton
            key={2}
            text={"Copiar prompt"}
            buttonVariant={1}
            iconName="copy"
            onClickHandler={() => {
              navigator.clipboard.writeText(
                prompt.promptVariantes[0].textoPrompt,
              );
            }}
          />
        </div>
      </div>
    </>
  );
};
