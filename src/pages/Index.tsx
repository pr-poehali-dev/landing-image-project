import HeroSection from "@/components/HeroSection";
import SkillCard from "@/components/SkillCard";
import PassiveSkills from "@/components/PassiveSkills";
import Constellations from "@/components/Constellations";
import TalentTable from "@/components/TalentTable";
import ArtifactSection from "@/components/ArtifactSection";

const Index = () => {
  const skills = [
    {
      title: "Активные скилы",
      type: "normal" as const,
      description:
        "Обычная атака: Позволяет совершать до трех ударов водяным клинком. Заряженная атака: Потребляет выносливость для нанесения урона Гидро по области.",
      details: [
        "Базовый урон: 54.2% / 62.1% / 80.4%",
        "Заряженная атака: 148.1% от АТК",
        "Время восстановления: Нет",
      ],
      color: "bg-green-500",
    },
    {
      title: "О слезах, в возвращении",
      type: "skill" as const,
      description:
        "Нёвилетт призывает водяной поток, который наносит урон Пневмой Гидро и вызывает эффект Исток Справедливости.",
      details: [
        "Урон навыка: 12.8% от АТК",
        "Время восстановления: 12 сек",
        "Длительность эффекта: 30 сек",
      ],
      color: "bg-blue-500",
    },
    {
      title: "О древнем ритуале",
      type: "burst" as const,
      description:
        "Призывает водопад, наносящий урон Пневмой Гидро по области. Если есть хотя бы 3 заряда Исток Справедливости, поглощает их все.",
      details: [
        "Урон навыка: 12.1% от АТК за заряд",
        "Время восстановления: 18 сек",
        "Потребляемая энергия: 70",
      ],
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <HeroSection />

        <div className="grid gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

        <PassiveSkills />

        <Constellations />

        <TalentTable />

        <ArtifactSection />

        <footer className="text-center text-gray-400 text-sm pt-8">
          <p>Гайд по персонажу Нёвилетт • Обновлено: Июнь 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
