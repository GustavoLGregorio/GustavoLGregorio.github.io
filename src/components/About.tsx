import TechCarousel from "./TechCarousel";
import SectionTitle from "./SectionTitle";
import profile_pic from "./../assets/images/profile_pic.png";

export default function About() {
    return (
        <section className="flex flex-col">
            <SectionTitle title="sobre mim" />

            <div className="flex flex-col gap-8">
                <img
                    src={profile_pic}
                    alt="Foto de Gustavo Luiz Gregorio"
                    className="aspect-square w-[50%] self-center rounded-xl object-cover object-center"
                />
                <p className="cs-font-fragment-mono">
                    Meu nome é Gustavo, tenho 21 anos e sou graduando em
                    Técnologia em Analise e Desenvolvimento de Sistemas (TADS)
                    no Instituto Federal do Paraná (IFPR). Gosto de programar
                    jogos e ferramentas.
                </p>
                <TechCarousel />
            </div>
        </section>
    );
}
