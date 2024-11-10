import Hero from "@/components/Hero";
import SobreMim from "@/components/SobreMim";
import Conhecimentos from "@/components/Conhecimentos";
import ProjetosSection from "@/components/ProjetosSection";
import "@/styles/Home.css";

export default function Home() {
  return (
    <main className="w-full max-w-5xl bg-background text-foreground">
      <Hero></Hero>
      <Conhecimentos></Conhecimentos>
      <SobreMim></SobreMim>
      <ProjetosSection></ProjetosSection>
    </main>
  );
}
