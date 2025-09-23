import Technologies from "./Technologies";

export default function About() {
    return (
        <section className="flex flex-col gap-6">
            <h2 className="text-4xl">Sobre mim</h2>

            <div className="flex flex-col gap-4">
                <img
                    src="./../src/assets/images/cat.jpg"
                    alt="Foto de Gustavo Luiz Gregorio"
                />
                <p>
                    Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Veniam culpa in, unde
                    assumenda architecto et voluptatibus at hic
                    pariatur dolor illum dolorem numquam tempora
                    perspiciatis neque soluta quae, recusandae
                    facilis iusto amet odio totam!
                </p>
            </div>

            <Technologies />
        </section>
    );
}
