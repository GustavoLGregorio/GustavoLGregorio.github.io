"use client";

import React, { createContext } from "react";
import useCustomContext from "@/hooks/useCustomContext";
import Image from "next/image";
import "@/styles/Home.css";

const ProjetoContext = createContext();

function Projeto({ children, projeto }) {
  return (
    <ProjetoContext.Provider value={{ projeto }}>
      <article className="projeto">{children}</article>
    </ProjetoContext.Provider>
  );
}

Projeto.Title = function ProjetoTitle() {
  const { projeto } = useCustomContext(ProjetoContext);
  return <h3 className="mb-2">{projeto.title}</h3>;
};
Projeto.Image = function ProjetoImage() {
  const { projeto } = useCustomContext(ProjetoContext);

  return (
    <Image
      src={projeto.image.src}
      width={projeto.image.width}
      height={projeto.image.height}
      alt={projeto.image.alt}
      placeholder="blur"
      blurDataURL={projeto.image.base64}
      className="w-full rounded-t-md object-cover object-center aspect-[3/2] projeto-image"
    ></Image>
  );
};
Projeto.Text = function ProjetoText() {
  const { projeto } = useCustomContext(ProjetoContext);
  return <p className="mb-6">{projeto.description}</p>;
};
Projeto.Stack = function ProjetoStack() {
  const { projeto } = useCustomContext(ProjetoContext);
  return (
    <footer className="w-full flex flex-wrap gap-2 justify-end text-[1rem]">
      {projeto.stack.map((el, index) => {
        return (
          <span
            key={index}
            className="bg-background text-foreground px-2 py-1 rounded-md font-semibold uppercase"
          >
            {el}
          </span>
        );
      })}
    </footer>
  );
};

export default Projeto;
