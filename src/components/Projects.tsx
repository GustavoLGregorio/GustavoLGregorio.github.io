import Project from "./Project";
import type { ProjectProps } from "./Project";

export default function Projects() {
    type ProjectType = ProjectProps & {
        id: number;
    };
    const projects: ProjectType[] = [
        {
            id: 0,
            title: "primeiro",
            imageSource: "./../src/assets/images/cat.jpg",
            imageAlt: "cat",
            description: "descrição",
        },
        {
            id: 1,
            title: "primeiro",
            imageSource: "./../src/assets/images/steven.png",
            imageAlt: "",
            description: "descrição 2",
        },
    ];

    return (
        <section>
            <h2 className="mb-4 text-4xl">Projetos</h2>

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
