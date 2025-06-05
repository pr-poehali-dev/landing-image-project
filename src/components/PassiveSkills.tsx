import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PassiveSkills = () => {
  const passives = [
    {
      title: "Дисциплина древнего суда",
      icon: "⚖️",
      description:
        "Когда Нёвилетт в команде, при получении кристаллизации увеличивает Мастерство стихий всех членов команды.",
    },
    {
      title: "Дисциплина высшего суда",
      icon: "🌊",
      description:
        "За каждые 1% сверх 100% сопротивления прерыванию Нёвилетт получает 0,6% бонуса к урону Гидро.",
    },
    {
      title: "Соблазн древнего закона",
      icon: "💎",
      description:
        "При создании оружия в кузнице есть 10% шанс получить в 2 раза больше продукции.",
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white">Пассивки</h2>
      <div className="grid gap-4">
        {passives.map((passive, index) => (
          <Card
            key={index}
            className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/30"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-purple-300 text-lg flex items-center gap-3">
                <span className="text-2xl">{passive.icon}</span>
                {passive.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm leading-relaxed">
                {passive.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PassiveSkills;
