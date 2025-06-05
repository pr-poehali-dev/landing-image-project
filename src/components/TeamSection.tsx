const TeamSection = () => {
  const teams = [
    {
      name: "Мета команда",
      characters: [
        { name: "Нёвилетт", element: "Гидро", role: "Main DPS" },
        { name: "Казуха", element: "Анемо", role: "Support" },
        { name: "Беннет", element: "Пиро", role: "Buffer" },
        { name: "Чжун Ли", element: "Гео", role: "Shield" },
      ],
    },
    {
      name: "Команда Цветения",
      characters: [
        { name: "Нёвилетт", element: "Гидро", role: "Main DPS" },
        { name: "Нахида", element: "Дендро", role: "Sub DPS" },
        { name: "Кокоми", element: "Гидро", role: "Healer" },
        { name: "Райден", element: "Электро", role: "Support" },
      ],
    },
  ];

  const getElementColor = (element: string) => {
    const colors = {
      Гидро: "bg-blue-500",
      Анемо: "bg-cyan-500",
      Пиро: "bg-red-500",
      Гео: "bg-yellow-500",
      Дендро: "bg-green-500",
      Электро: "bg-purple-500",
    };
    return colors[element as keyof typeof colors] || "bg-gray-500";
  };

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-center bg-purple-600 py-2 rounded">
        Команды
      </h2>

      <div className="space-y-4">
        {teams.map((team, index) => (
          <div key={index} className="bg-[#2a2a4a] rounded-lg p-4">
            <h3 className="text-white font-bold mb-3 text-center">
              {team.name}
            </h3>

            <div className="grid grid-cols-4 gap-3">
              {team.characters.map((char, charIndex) => (
                <div key={charIndex} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center border-2 border-purple-400">
                    <span className="text-white font-bold">{char.name[0]}</span>
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
      <div className="bg-[#2a2a4a] rounded-lg p-4">
        <h3 className="text-white font-bold mb-3 text-center">Ротация</h3>
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-red-600 text-white px-2 py-2 rounded text-center text-sm">
            1. Беннет Q
          </div>
          <div className="bg-cyan-600 text-white px-2 py-2 rounded text-center text-sm">
            2. Казуха E+Q
          </div>
          <div className="bg-blue-600 text-white px-2 py-2 rounded text-center text-sm">
            3. Нёвилетт E
          </div>
          <div className="bg-blue-800 text-white px-2 py-2 rounded text-center text-sm">
            4. Заряженная атака
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
