import Hero from "@/components/Hero";
import SobreMim from "@/components/Sobre/SobreMim";
import Conhecimentos from "@/components/Expertise/Expertise";
import ProjetosSection from "@/components/Projeto/ProjetosSection";
import "@/styles/Home.css";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl bg-background px-8 text-[1.1rem] text-foreground">
      <Hero></Hero>
      <Conhecimentos></Conhecimentos>
      <ProjetosSection></ProjetosSection>
      <SobreMim></SobreMim>
    </main>
  );
}
