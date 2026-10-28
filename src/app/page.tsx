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
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#060913] dark:text-slate-100 flex flex-col transition-colors duration-200">
      <Navbar />
      <main className="grow">
        <HeroSection />
        <TelemetryStrip />
        <BentoGridSection />
        <ExperienceSection />
        <ArchitectureSection />
        <SkillMatrix />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
