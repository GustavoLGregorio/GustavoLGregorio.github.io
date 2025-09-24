import Project from "./Project";
import type { ProjectProps } from "./Project";
import SectionTitle from "./SectionTitle";

export default function Projects() {
    type ProjectType = ProjectProps & {
        id: number;
    };
    const projects: ProjectType[] = [
        {
            id: 0,
            title: "BrioJS",
            imageSource: "./../src/assets/images/steven.png",
            imageAlt: "cat",
            description: "descrição",
        },
        {
            id: 1,
            title: "ParticlesJS",
            imageSource: "./../src/assets/images/steven.png",
            imageAlt: "",
            description: "descrição 2",
        },
        {
            id: 2,
            title: "Japão Showcase",
            imageSource: "./../src/assets/images/steven.png",
            imageAlt: "",
            description: "descrição 2",
        },
        {
            id: 3,
            title: "Hangman",
            imageSource: "./../src/assets/images/steven.png",
            imageAlt: "",
            description: "descrição 2",
        },
    ];

    return (
        <section>
            <SectionTitle title="projetos" />

            <div className="flex flex-col gap-6">
                {projects.map((project) => (
                    <Project
                        key={project.id}
                        title={project.title}
                        imageSource={project.imageSource}
                        imageAlt={project.imageAlt}
                        description={project.description}
                    />
                ))}
            </div>
        </section>
    );
}
