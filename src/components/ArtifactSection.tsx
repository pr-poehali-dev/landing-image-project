import { Badge } from "@/components/ui/badge";

const ArtifactSection = () => {
  const artifacts = [
    {
      name: "Странник-труппа",
      pieces: "4",
      main: "Мастерство стихий",
      description:
        "Увеличивает урон заряженной атаки на 35% если персонаж использует катализатор или лук",
      priority: "Рекомендовано",
      color: "bg-purple-600",
    },
    {
      name: "Позолоченные сны",
      pieces: "4",
      main: "Мастерство стихий",
      description: "Повышает Мастерство стихий команды на 80 ед. при реакциях",
      priority: "Альтернатива",
      color: "bg-blue-600",
    },
  ];

  const stats = [
    { stat: "АТК%", value: "2311", priority: "high" },
    { stat: "Мастерство Стихий", value: "187", priority: "high" },
    { stat: "Крит. Урон", value: "88%", priority: "medium" },
    { stat: "Крит. Шанс", value: "85%", priority: "medium" },
  ];

  const artifactPieces = [
    { slot: "Цветок", stat: "HP", icon: "🌸" },
    { slot: "Перо", stat: "АТК", icon: "🪶" },
    { slot: "Песочные часы", stat: "АТК%", icon: "⏳" },
    { slot: "Кубок", stat: "Гидро урон", icon: "🏺" },
    { slot: "Корона", stat: "Крит урон", icon: "👑" },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-lime-400 text-black px-4 py-2 rounded font-bold text-center">
        Артефакты
      </div>

      {/* Рекомендуемые сеты */}
      <div className="space-y-3">
        {artifacts.map((artifact, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                🏺
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-white font-semibold">{artifact.name}</h4>
                  <Badge className={`${artifact.color} text-white`}>
                    {artifact.pieces} части
                  </Badge>
                </div>
                <Badge
                  className={
                    artifact.priority === "Рекомендовано"
                      ? "bg-green-500"
                      : "bg-gray-500"
                  }
                >
                  {artifact.priority}
                </Badge>
              </div>
            </div>
            <p className="text-gray-300 text-sm">{artifact.description}</p>
          </div>
        ))}
      </div>

      {/* Статистики и слоты артефактов */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Рекомендуемые статы */}
        <div className="bg-purple-600 rounded-lg p-4">
          <h3 className="text-white font-bold mb-3 text-center">
            Рекомендуемые статы
          </h3>
          <div className="space-y-2">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex justify-between items-center text-white"
              >
                <span className="text-sm">{stat.stat}</span>
                <span className="font-bold">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Слоты артефактов */}
        <div>
          <h3 className="text-white font-bold mb-3">
            Слоты артефактов и основные статы
          </h3>
          <div className="space-y-2">
            {artifactPieces.map((piece, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded p-3 flex items-center gap-3"
              >
                <span className="text-xl">{piece.icon}</span>
                <div className="flex-1">
                  <div className="text-white text-sm font-semibold">
                    {piece.slot}
                  </div>
                  <div className="text-blue-300 text-xs">{piece.stat}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactSection;
