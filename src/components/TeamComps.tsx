const TeamComps = () => {
  const teams = [
    {
      name: "Команда с Нёвилетт + Казуха",
      description: "Лучшая команда для максимального урона",
      characters: [
        { name: "Нёвилетт", role: "Main DPS", element: "Гидро" },
        { name: "Казуха", role: "Support", element: "Анемо" },
        { name: "Беннет", role: "Buffer", element: "Пиро" },
        { name: "Чжун Ли", role: "Shield", element: "Гео" },
      ],
    },
    {
      name: "Команда с Нёвилетт + Нахида",
      description: "Команда на реакциях Цветения",
      characters: [
        { name: "Нёвилетт", role: "Main DPS", element: "Гидро" },
        { name: "Нахида", role: "Sub DPS", element: "Дендро" },
        { name: "Кокоми", role: "Healer", element: "Гидро" },
        { name: "Райден", role: "Support", element: "Электро" },
      ],
    },
    {
      name: "Команда с Нёвилетт + Фурина",
      description: "Максимальный урон для Фонтейна",
      characters: [
        { name: "Нёвилетт", role: "Main DPS", element: "Гидро" },
        { name: "Фурина", role: "Sub DPS", element: "Гидро" },
        { name: "Беннет", role: "Buffer", element: "Пиро" },
        { name: "Казуха", role: "Support", element: "Анемо" },
      ],
    },
  ];

  const getElementColor = (element: string) => {
    switch (element) {
      case "Гидро":
        return "bg-blue-500";
      case "Пиро":
        return "bg-red-500";
      case "Анемо":
        return "bg-cyan-500";
      case "Гео":
        return "bg-yellow-500";
      case "Дендро":
        return "bg-green-500";
      case "Электро":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-lime-400 text-black px-4 py-2 rounded font-bold text-center">
        Отряды и ротация
      </div>

      <div className="space-y-4">
        {teams.map((team, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4">
            <h3 className="text-white font-bold mb-2">{team.name}</h3>
            <p className="text-gray-300 text-sm mb-4">{team.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {team.characters.map((char, charIndex) => (
                <div
                  key={charIndex}
                  className="bg-gray-700 rounded-lg p-3 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {char.name[0]}
                    </span>
                  </div>
                  <div className="text-white text-sm font-semibold mb-1">
                    {char.name}
                  </div>
                  <div
                    className={`${getElementColor(char.element)} text-white text-xs px-2 py-1 rounded mb-1`}
                  >
                    {char.element}
                  </div>
                  <div className="text-gray-400 text-xs">{char.role}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Ротация */}
      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="text-white font-bold mb-3">
          Ротация для команды Нёвилетт
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
          <div className="bg-blue-600 text-white px-3 py-2 rounded">
            1. Беннет Q
          </div>
          <div className="bg-cyan-600 text-white px-3 py-2 rounded">
            2. Казуха E+Q
          </div>
          <div className="bg-blue-800 text-white px-3 py-2 rounded">
            3. Нёвилетт E
          </div>
          <div className="bg-blue-900 text-white px-3 py-2 rounded">
            4. Заряженная атака
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamComps;
