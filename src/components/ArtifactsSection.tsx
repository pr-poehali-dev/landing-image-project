const ArtifactsSection = () => {
  const artifactSets = [
    {
      name: "Странник-труппа",
      pieces: "4",
      description:
        "Увеличивает урон заряженной атаки на 35% для катализаторов и луков",
      priority: "Лучший",
    },
    {
      name: "Позолоченные сны",
      pieces: "4",
      description: "Повышает Мастерство стихий команды на 80 ед. при реакциях",
      priority: "Альтернатива",
    },
  ];

  const mainStats = [
    { slot: "🌸", name: "Цветок", stat: "HP" },
    { slot: "🪶", name: "Перо", stat: "АТК" },
    { slot: "⏳", name: "Часы", stat: "АТК%" },
    { slot: "🏺", name: "Кубок", stat: "Гидро урон" },
    { slot: "👑", name: "Корона", stat: "Крит урон" },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-center bg-purple-600 py-2 rounded">
        Артефакты
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {/* Рекомендуемые сеты */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-purple-300 text-center">
            Рекомендуемые сеты
          </h3>

          {artifactSets.map((set, index) => (
            <div key={index} className="bg-[#2a2a4a] rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-lg">
                  🏺
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-sm">
                    {set.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs">
                      {set.pieces} части
                    </span>
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        set.priority === "Лучший"
                          ? "bg-green-500"
                          : "bg-gray-500"
                      }`}
                    >
                      {set.priority}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-xs">{set.description}</p>
            </div>
          ))}
        </div>

        {/* Основные статы */}
        <div>
          <h3 className="text-lg font-semibold text-purple-300 text-center mb-3">
            Основные статы
          </h3>

          <div className="space-y-2">
            {mainStats.map((item, index) => (
              <div
                key={index}
                className="bg-[#2a2a4a] rounded-lg p-3 flex items-center gap-3"
              >
                <span className="text-xl">{item.slot}</span>
                <div className="flex-1">
                  <div className="text-white text-sm font-semibold">
                    {item.name}
                  </div>
                  <div className="text-purple-300 text-xs">{item.stat}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactsSection;
