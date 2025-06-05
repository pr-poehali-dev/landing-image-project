const SkillsSection = () => {
  const skills = [
    {
      key: "ЛКМ",
      title: "Обычная атака",
      subtitle: "Подобно водной глади",
      description:
        "Совершает до 3 обычных атак, которые наносят Гидро урон. Заряженная атака: Непрерывно наносит Гидро урон по области перед собой.",
      icon: "⚔️",
      keyColor: "bg-green-500",
    },
    {
      key: "E",
      title: "Элементальный навык",
      subtitle: "О слезах, в возвращении",
      description:
        "Наносит урон Пневмой Гидро по области. При попадании по противникам, получает заряды Источника правосудия.",
      icon: "🌀",
      keyColor: "bg-blue-500",
    },
    {
      key: "Q",
      title: "Взрыв стихии",
      subtitle: "О волнах, в возвращении",
      description:
        "Призывает водопад, наносящий урон Пневмой Гидро по области. Поглощает все заряды Источника правосудия.",
      icon: "💥",
      keyColor: "bg-purple-500",
    },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-center bg-purple-600 py-2 rounded">
        Навыки и таланты
      </h2>

      {skills.map((skill, index) => (
        <div key={index} className="bg-[#2a2a4a] rounded-lg overflow-hidden">
          <div className="flex">
            {/* Левая часть - клавиша и иконка */}
            <div className="bg-[#1a1a2e] p-4 flex flex-col items-center justify-center min-w-[120px]">
              <div
                className={`${skill.keyColor} text-white px-3 py-1 rounded font-bold text-lg mb-2`}
              >
                {skill.key}
              </div>
              <div className="text-3xl">{skill.icon}</div>
            </div>

            {/* Центральная часть - названия */}
            <div className="bg-[#3a3a5a] p-4 min-w-[200px]">
              <h3 className="text-white font-bold text-sm">{skill.title}</h3>
              <h4 className="text-purple-300 font-semibold text-sm mt-1">
                {skill.subtitle}
              </h4>
            </div>

            {/* Правая часть - описание */}
            <div className="flex-1 p-4">
              <p className="text-gray-300 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
