const PassiveSkills = () => {
  const passives = [
    {
      title: "Дисциплина древнего суда",
      description:
        "Увеличивает Мастерство стихий команды на 60 ед. при кристаллизации на 15 сек.",
      level: "1",
    },
    {
      title: "Дисциплина высшего суда",
      description:
        "За каждые 1% сопротивления прерыванию сверх 100% получает 0,6% бонуса Гидро урона. Макс 30%.",
      level: "4",
    },
    {
      title: "Соблазн древнего закона",
      description:
        "При создании оружия в кузнице 10% шанс получить в 2 раза больше продукции.",
      level: "Утилити",
    },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-center bg-purple-600 py-2 rounded">
        Пассивные таланты
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {passives.map((passive, index) => (
          <div key={index} className="bg-[#2a2a4a] rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {passive.level}
              </div>
              <div className="text-xs text-purple-300 font-semibold">
                Пассивка {index + 1}
              </div>
            </div>

            <h4 className="text-white font-semibold text-sm mb-2">
              {passive.title}
            </h4>
            <p className="text-gray-300 text-xs leading-relaxed">
              {passive.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PassiveSkills;
