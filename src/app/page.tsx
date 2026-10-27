import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TelemetryStrip from "@/components/TelemetryStrip";
import BentoGridSection from "@/components/BentoGridSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillMatrix from "@/components/SkillMatrix";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col">
      <Navbar />
      <main className="grow">
        <HeroSection />
        <TelemetryStrip />
        <BentoGridSection />
        <ArchitectureSection />
        <ExperienceSection />
        <SkillMatrix />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
