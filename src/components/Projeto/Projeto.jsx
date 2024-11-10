"use client";

import React, { createContext } from "react";
import useCustomContext from "@/hooks/useCustomContext";
import Image from "next/image";
import project from "@/assets/json/projects.json";

const ProjetoContext = createContext();

function Projeto({ children, projeto }) {
  return (
    <ProjetoContext.Provider value={{ projeto }}>
      <article>{children}</article>
    </ProjetoContext.Provider>
  );
}

Projeto.Title = () => {
  const { projeto } = useCustomContext(ProjetoContext);
  return <h3>{projeto.title}</h3>;
};
Projeto.Image = () => {
  const { projeto } = useCustomContext(ProjetoContext);

  return (
    <Image
      src={projeto.image.src}
      width={projeto.image.width}
      height={projeto.image.height}
      alt={projeto.image.alt}
    ></Image>
  );
};
Projeto.Text = () => {
  const { projeto } = useCustomContext(ProjetoContext);
  return <p>{projeto.text}</p>;
};

export default Projeto;
