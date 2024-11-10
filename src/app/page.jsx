import Hero from "@/components/Hero";
import SobreMim from "@/components/SobreMim";
import Conhecimentos from "@/components/Conhecimentos";
import ProjetosSection from "@/components/ProjetosSection";
import "@/styles/Home.css";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <SobreMim></SobreMim>
      <Conhecimentos></Conhecimentos>
      <ProjetosSection></ProjetosSection>
    </>
  );
}
