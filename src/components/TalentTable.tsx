const TalentTable = () => {
  const weapons = [
    {
      name: "Воспоминания о Фонтейне",
      rarity: 5,
      description:
        "Лучший выбор для Нёвилетта. Увеличивает урон заряженной атаки на 24%, а также даёт крит урон.",
      priority: "Лучший",
      color: "bg-yellow-500",
    },
    {
      name: "Молитва святых ветров",
      rarity: 5,
      description:
        "Универсальное оружие с критом. Увеличивает урон всех стихий на 10%.",
      priority: "Хороший",
      color: "bg-green-500",
    },
    {
      name: "Небесный атлас",
      rarity: 5,
      description: "Бесплатное 5* оружие. Даёт АТК% и урон от обычных атак.",
      priority: "Альтернатива",
      color: "bg-blue-500",
    },
  ];

  const materials = [
    { icon: "💎", name: "Философия о справедливости", amount: "114" },
    { icon: "🔥", name: "Драгоценный опал", amount: "18" },
    { icon: "⚔️", name: "Материалы монстров", amount: "36" },
    { icon: "👑", name: "Корона прозрения", amount: "3" },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-lime-400 text-black px-4 py-2 rounded font-bold text-center">
        Прокачка и сборка
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Оружие */}
        <div className="space-y-3">
          <h3 className="text-white font-bold mb-3">Оружие</h3>
          <div className="text-sm text-center bg-purple-600 text-white px-3 py-1 rounded">
            От лучшего к худшему
          </div>

          {weapons.map((weapon, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(weapon.rarity)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <span
                  className={`${weapon.color} text-black px-2 py-1 rounded text-xs font-bold`}
                >
                  {weapon.priority}
                </span>
              </div>
              <h4 className="text-white font-semibold mb-1">{weapon.name}</h4>
              <p className="text-gray-300 text-sm">{weapon.description}</p>
            </div>
          ))}
        </div>

        {/* Возвышение */}
        <div>
          <h3 className="text-white font-bold mb-3">Возвышение</h3>
          <div className="text-sm text-center bg-blue-600 text-white px-3 py-1 rounded mb-3">
            90 лвл • таланты 10-10-10
          </div>

          <div className="grid grid-cols-2 gap-2">
            {materials.map((material, index) => (
              <div key={index} className="bg-gray-800 rounded p-3 text-center">
                <div className="text-2xl mb-1">{material.icon}</div>
                <div className="text-white text-sm font-semibold">
                  {material.amount}
                </div>
                <div className="text-gray-400 text-xs">{material.name}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 bg-lime-400 text-black px-3 py-2 rounded text-center font-bold">
            Приоритет прокачки талантов:
            <br />
            АА → E → Q
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentTable;
