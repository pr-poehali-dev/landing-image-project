import HeroSection from "@/components/HeroSection";
import SkillCard from "@/components/SkillCard";
import PassiveSkills from "@/components/PassiveSkills";
import Constellations from "@/components/Constellations";
import TalentTable from "@/components/TalentTable";
import ArtifactSection from "@/components/ArtifactSection";
import TeamComps from "@/components/TeamComps";

const Index = () => {
  const skills = [
    {
      title: "Активные скилы",
      type: "normal" as const,
      key: "ЛКМ",
      subtitle: "Подобно водной глади",
      description:
        "Позволяет совершать до трех ударов водяным клинком. Заряженная атака: Потребляет выносливость для нанесения урона Гидро по области.",
      details: [
        "Базовый урон: 54.2% / 62.1% / 80.4%",
        "Заряженная атака: 148.1% от АТК",
        "Время восстановления: Нет",
      ],
      color: "bg-lime-400",
    },
    {
      title: "Активные скилы",
      type: "skill" as const,
      key: "E",
      subtitle: "О слезах, в возвращении",
      description:
        "Нёвилетт призывает водяной поток, который наносит урон Пневмой Гидро и вызывает эффект Исток Справедливости.",
      details: [
        "Урон навыка: 12.8% от АТК",
        "Время восстановления: 12 сек",
        "Длительность эффекта: 30 сек",
      ],
      color: "bg-lime-400",
    },
    {
      title: "Активные скилы",
      type: "burst" as const,
      key: "Q",
      subtitle: "О волнах, в возвращении",
      description:
        "Призывает водопад, наносящий урон Пневмой Гидро по области. Если есть хотя бы 3 заряда Исток Справедливости, поглощает их все.",
      details: [
        "Урон навыка: 12.1% от АТК за заряд",
        "Время восстановления: 18 сек",
        "Потребляемая энергия: 70",
      ],
      color: "bg-lime-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-6 space-y-6">
        <HeroSection />

        <div className="space-y-4">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

        <PassiveSkills />

        <Constellations />

        <TalentTable />

        <ArtifactSection />

        <TeamComps />

        <footer className="text-center text-gray-400 text-sm pt-8">
          <p>Гайд по персонажу Нёвилетт • Обновлено: Июнь 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
