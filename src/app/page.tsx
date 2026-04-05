import {
  ContactSection,
  Hero,
  Navbar,
  ServicesSection,
  StoryMarquee,
  WorkSection,
  Footer,
  AboutSection,
} from "@/components/sections";

export default function Home() {
  return (
    <div id="top" className="relative">
      <Navbar />
      <Hero />
      <StoryMarquee />
      <main className="relative w-full">
        <WorkSection />
 <AboutSection />
        <ServicesSection />
       
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
