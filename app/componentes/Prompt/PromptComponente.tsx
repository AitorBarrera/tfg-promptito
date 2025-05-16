import React from "react";
import { GenericButton } from "../General/GenericButton";
import { Icon } from "../General/Icon";

export const PromptComponente = () => {
  return (
    <>
      <img src="1747392244491.png" className="w-[10%] mx-auto" />
      <div className="promptComponente w-[55%] ms-auto me-16 grid grid-cols-8 gap-2 bg-background border-2 border-[#017562] text-[#B7E2DD] p-[2rem] items-center">
        <h3 className="col-span-4 text-6xl text-primary">Titulo</h3>

        <div className="vistasContainer text-center flex">
          <Icon iconName="eye" margin_right={5} />
          <span>9321</span>
        </div>

        <div className="text-center">
          <Icon iconName="star" margin_right={5} />
          <span>12</span>
        </div>

        <div className="creadoContainer col-span-2 text-end">
          <p>
            <b className="text-primary">Creado en: </b>
            <span>12/03/2025</span>
          </p>
        </div>

        <div className="temasContainer col-span-5">
          <p className="">
            <b className="text-primary">Tematicas: </b>
            <span>Conversacional, Informativo</span>
          </p>
        </div>

        <div className="autorContainer col-span-3 text-end">
          <p className="">
            <b className="text-primary">Autor: </b> <span>Pepito</span>
          </p>
        </div>

        <p className="promptTexto col-span-8 text-justify mx-auto text-light my-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
          quos quo aspernatur neque vitae excepturi, recusandae optio
          perspiciatis culpa earum at praesentium molestias ad deleniti ducimus.
          Dolore repellat repellendus quisquam.Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Nesciunt quos quo aspernatur neque vitae
          excepturi, recusandae optio perspiciatis culpa earum at praesentium
          molestias ad deleniti ducimus. Dolore repellat repellendus
          quisquam.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Nesciunt quos quo aspernatur neque vitae excepturi, recusandae optio
          perspiciatis culpa earum at praesentium molestias ad deleniti ducimus.
          Dolore repellat repellendus quisquam. Lorem ipsum, dolor sit amet
        </p>

        <div className="favoriteButtonContainer col-span-3">
          <GenericButton
            key={1}
            text={"Añadir a favoritos"}
            buttonVariant={1}
            iconName="half_star"
          />
        </div>

        <div className="copyButtonContainer col-span-3 col-start-6 text-end">
          <GenericButton
            key={2}
            text={"Copiar prompt"}
            buttonVariant={2}
            iconName="copy"
          />
        </div>
      </div>
    </>
  );
};
