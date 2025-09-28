import Project from "./Project";
import type { ProjectProps } from "./Project";
import SectionTitle from "./SectionTitle";
import {
    faHtml5,
    faCss3,
    faJs,
} from "@fortawesome/free-brands-svg-icons";

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
            description: "Framework para criação de jogos 2D",
            link: "#",
            icons: [faHtml5, faCss3, faJs],
        },
        {
            id: 1,
            title: "ParticlesJS",
            imageSource: "./../src/assets/images/steven.png",
            imageAlt: "",
            description:
                "Ferramenta de desenhos utilizando partículas",
            link: "#",
            icons: [faHtml5, faCss3, faJs],
        },
        {
            id: 2,
            title: "Japão Showcase",
            imageSource: "./../src/assets/images/steven.png",
            imageAlt: "",
            description: "Amostra cultural sobre o Japão",
            link: "#",
            icons: [faHtml5, faCss3, faJs],
        },
        {
            id: 3,
            title: "Hangman",
            imageSource: "./../src/assets/images/steven.png",
            imageAlt: "",
            description: "Joguinho da forca",
            link: "#",
            icons: [faHtml5, faCss3, faJs],
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
                        link={project.link}
                        icons={project.icons}
                    />
                ))}
            </div>
        </section>
    );
}
