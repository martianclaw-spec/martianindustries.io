import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { Capabilities } from "@/components/Capabilities";
import { SelectedWork } from "@/components/SelectedWork";
import { AuditOffer } from "@/components/AuditOffer";
import { About } from "@/components/About";
import { OtherProjects } from "@/components/OtherProjects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CredibilityStrip />
        <Capabilities />
        <SelectedWork />
        <AuditOffer />
        <About />
        <OtherProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
