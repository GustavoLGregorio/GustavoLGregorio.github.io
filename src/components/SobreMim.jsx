import Image from "next/image";
export default function SobreMim() {
  return (
    <section>
      <h2>Sobre</h2>
      <div>
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
      <div className="container flex w-full justify-center mt-6">
        <div className="min-w-[200px] w-[50%] max-w-[500px]">
          <Image
            src="/img/profile_pic.png"
            width={500}
            height={500}
            alt="Foto de Gustavo Luiz Gregorio"
            className="rounded-full"
          ></Image>
        </div>
      </div>
    </section>
  );
}
