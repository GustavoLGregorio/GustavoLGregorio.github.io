import Hero from "@/components/Hero";
import SobreMim from "@/components/Sobre/SobreMim";
import Conhecimentos from "@/components/Expertise/Expertise";
import ProjetosSection from "@/components/Projeto/ProjetosSection";
import "@/styles/Home.css";

export default function Home() {
  return (
    <main className="w-full text-[1.1rem] max-w-5xl px-8 bg-background text-foreground">
      <Hero></Hero>
      <Conhecimentos></Conhecimentos>
      <ProjetosSection></ProjetosSection>
      <SobreMim></SobreMim>
    </main>
  );
}
