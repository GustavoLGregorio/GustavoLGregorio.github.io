"use client";

import Projeto from "./Projeto";
import project from "@/assets/json/projects.json";

export default function ProjetosSection() {
  return (
    <section>
      <h2>Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {project.map((el, index) => {
          return (
            <Projeto
              key={index}
              projeto={{
                title: el.title,
                image: {
                  src: el.image,
                  base64: el.image_base64,
                  width: 256,
                  height: 256,
                  alt: "Alt text",
                },
                description: el.description,
                stack: [...el.stack],
              }}
            >
              <Projeto.Image></Projeto.Image>
              <div className="px-6 py-4 bg-foreground text-background rounded-b-md relative z-10">
                <Projeto.Title></Projeto.Title>
                <Projeto.Text></Projeto.Text>
                <Projeto.Stack></Projeto.Stack>
              </div>
            </Projeto>
          );
        })}
      </div>
    </section>
  );
}
