import {
  ContactSection,
  FuncionSection,
  Hero,
  ProcesoSection,
  ServicesSection,
  WorkSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="relative w-full">
        <FuncionSection />
        <ServicesSection />
        <ProcesoSection />
        <WorkSection />
        <ContactSection />
      </main>
    </>
  );
}
