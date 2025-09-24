import Technologies from "./Technologies";
import SectionTitle from "./SectionTitle";

export default function About() {
    return (
        <section className="flex flex-col">
            <SectionTitle title="sobre mim" />

            <div className="flex flex-col gap-8">
                <img
                    src="./../src/assets/images/cat.jpg"
                    alt="Foto de Gustavo Luiz Gregorio"
                    className="aspect-square w-[50%] self-center rounded-xl object-cover object-center"
                />
                <p className="cs-font-fragment-mono">
                    Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Veniam culpa in, unde
                    assumenda architecto et voluptatibus at hic
                    pariatur dolor illum dolorem numquam tempora
                    perspiciatis neque soluta quae, recusandae
                    facilis iusto amet odio totam!
                </p>
                <Technologies />
            </div>
        </section>
    );
}
