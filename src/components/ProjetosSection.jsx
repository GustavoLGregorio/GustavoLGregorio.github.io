"use client";

import Projeto from "./Projeto/Projeto";
import project from "@/assets/json/projects.json";

export default function ProjetosSection() {
  return (
    <section>
      <h2>Projetos</h2>
      {project.map((el, index) => {
        return (
          <Projeto
            key={index}
            projeto={{
              title: el.title,
              image: {
                src: el.image,
                width: 96,
                height: 96,
                alt: "Alt text",
              },
              text: el.text,
            }}
          >
            <Projeto.Title></Projeto.Title>
            <Projeto.Image></Projeto.Image>
            <Projeto.Text></Projeto.Text>
          </Projeto>
        );
      })}
    </section>
  );
}
