import Image from "next/image";
import profilePic from "../../../public/img/profile_pic.png";
export default function SobreMim() {
  return (
    <section>
      <h2>Sobre</h2>
      <div className="mb-8 flex flex-col gap-y-4">
        <p>
          Meu nome é Gustavo, tenho 20 anos e sou graduando em Técnologia em
          Analise e Desenvolvimento de Sistemas no Instituto Federal do
          Paraná&nbsp;
          <a href="https://ifpr.edu.br/colombo/" target="_blank">
            (IFPR)
          </a>
          .
        </p>
        <p>
          Tenho como objetivo aprender e crescer na área de informática, já
          tendo conhecimentos e experiência com hardware, agora busco me
          aprofundar profissionalmente em Software.
        </p>
      </div>
      <div className="container flex w-full justify-center">
        <div className="w-max-[500px] w-[50%]">
          <Image
            src={profilePic}
            width={500}
            height={500}
            alt="Foto de Gustavo Luiz Gregorio"
            placeholder="blur"
            className="rounded-full"
          ></Image>
        </div>
      </div>
    </section>
  );
}
