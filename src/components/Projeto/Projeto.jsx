"use client";

import React, { createContext } from "react";
import useCustomContext from "@/hooks/useCustomContext";
import Image from "next/image";
import project from "@/assets/json/projects.json";

const ProjetoContext = createContext();

function Projeto({ children, projeto }) {
  return (
    <ProjetoContext.Provider value={{ projeto }}>
      <article className="bg-[hsl(0,0%,20%,0.2)] p-4 rounded-md">
        {children}
      </article>
    </ProjetoContext.Provider>
  );
}

Projeto.Title = function ProjetoTitle() {
  const { projeto } = useCustomContext(ProjetoContext);
  return <h3>{projeto.title}</h3>;
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
      className="w-full rounded-sm"
    ></Image>
  );
};
Projeto.Text = function ProjetoText() {
  const { projeto } = useCustomContext(ProjetoContext);
  return <p>{projeto.text}</p>;
};
Projeto.Stack = function ProjetoStack() {
  const { projeto } = useCustomContext(ProjetoContext);
  return <footer>{projeto.stack}</footer>;
};

export default Projeto;
