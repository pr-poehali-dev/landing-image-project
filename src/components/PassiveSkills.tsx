const PassiveSkills = () => {
  const passives = [
    {
      title: "Дисциплина древнего суда",
      description:
        "Когда Нёвилетт в команде, при получении кристаллизации увеличивает Мастерство стихий всех членов команды на 60 ед. на 15 сек.",
      color: "bg-blue-600",
    },
    {
      title: "Дисциплина высшего суда",
      description:
        "За каждые 1% сверх 100% сопротивления прерыванию Нёвилетт получает 0,6% бонуса к урону Гидро. Максимум 30%.",
      color: "bg-purple-600",
    },
    {
      title: "Соблазн древнего закона",
      description:
        "При создании оружия в кузнице есть 10% шанс получить в 2 раза больше продукции. (Пассивка исследования)",
      color: "bg-green-600",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-lime-400 text-black px-4 py-2 rounded font-bold text-center">
        Пассивки
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {passives.map((passive, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4">
            <div
              className={`${passive.color} text-white px-3 py-1 rounded text-sm font-semibold mb-3 inline-block`}
            >
              Пассивка {index + 1}
            </div>
            <h4 className="text-white font-semibold mb-2">{passive.title}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              {passive.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PassiveSkills;
