"use client";

import React, { createContext, useRef } from "react";
import useCustomContext from "@/hooks/useCustomContext";
import Image from "next/image";
import "@/styles/Home.css";

const ProjetoContext = createContext();

function Projeto({ children, projeto }) {
  const articleRef = useRef();

  return (
    <ProjetoContext.Provider value={{ projeto }}>
      <article
        ref={articleRef}
        onMouseEnter={() => articleRef.current.classList.add("on-hover")}
        className="projeto custom-box-shadow-sm rounded-md"
      >
        {children}
      </article>
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
      className="projeto-image"
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
    <footer className="flex w-full flex-wrap justify-end gap-2 text-[1rem]">
      {projeto.stack.map((el, index) => {
        return (
          <span
            key={index}
            className="rounded-md bg-background px-2 py-1 font-semibold uppercase text-foreground"
          >
            {el}
          </span>
        );
      })}
    </footer>
  );
};

export default Projeto;
