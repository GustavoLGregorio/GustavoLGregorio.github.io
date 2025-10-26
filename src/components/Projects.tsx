import Project from "./Project";
import type { ProjectProps } from "./Project";
import SectionTitle from "./SectionTitle";
import { faHtml5, faCss3, faJs } from "@fortawesome/free-brands-svg-icons";
import imgEntropyParticles from "./../assets/images/entropy_particles.png";
import imgHangman from "./../assets/images/hangman.png";
import imgJapanShowcase from "./../assets/images/japan_showcase.png";
import imgLixadoraGregorio from "./../assets/images/lixadora_gregorio.png";

export default function Projects() {
    type ProjectType = ProjectProps & {
        id: number;
    };

    const projects: ProjectType[] = [
        {
            id: 0,
            title: "BrioJS",
            imageSource: imgEntropyParticles,
            imageAlt: "cat",
            description: "Framework para criação de jogos 2D",
            link: "#",
            icons: [faHtml5, faCss3, faJs],
        },
        {
            id: 1,
            title: "ParticlesJS",
            imageSource: imgEntropyParticles,
            imageAlt: "",
            description: "Ferramenta de desenhos utilizando partículas (esse fundo de tela)",
            link: "https://particles-js-pi.vercel.app/",
            icons: [faHtml5, faCss3, faJs],
        },
        {
            id: 2,
            title: "Japão Showcase",
            imageSource: imgJapanShowcase,
            imageAlt: "",
            description: "Amostra cultural sobre o Japão",
            link: "https://gustavo-projeto-japao.vercel.app/",
            icons: [faHtml5, faCss3, faJs],
        },
        {
            id: 3,
            title: "Lixadora Gregorio",
            imageSource: imgLixadoraGregorio,
            imageAlt: "",
            description:
                "Site criado para uma empresa familiar especializada em lixamento de pisos",
            link: "https://lixadora-gregorio.vercel.app/",
            icons: [faHtml5, faCss3, faJs],
        },
        {
            id: 4,
            title: "Hangman",
            imageSource: imgHangman,
            imageAlt: "",
            description: "Joguinho da forca",
            link: "https://hangman-game-weld-five.vercel.app/",
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
