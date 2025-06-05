import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import PassiveSkills from "@/components/PassiveSkills";
import Constellations from "@/components/Constellations";
import ArtifactsSection from "@/components/ArtifactsSection";
import TeamSection from "@/components/TeamSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white">
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        <HeroSection />
        <SkillsSection />
        <PassiveSkills />
        <Constellations />
        <ArtifactsSection />
        <TeamSection />
      </div>
    </div>
  );
};

export default Index;
