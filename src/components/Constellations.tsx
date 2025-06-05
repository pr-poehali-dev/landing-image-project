const Constellations = () => {
  const constellations = [
    { level: "C1", name: "Возмездие за преступления", unlocked: true },
    { level: "C2", name: "Проклятие древнего права", unlocked: true },
    { level: "C3", name: "Справедливость времен", unlocked: false },
    { level: "C4", name: "Печать древнего договора", unlocked: false },
    { level: "C5", name: "Благословение глубин", unlocked: false },
    { level: "C6", name: "Источник чистого правосудия", unlocked: false },
  ];

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-center bg-purple-600 py-2 rounded">
        Созвездия
      </h2>

      <div className="grid grid-cols-3 gap-3">
        {constellations.map((const_, index) => (
          <div
            key={index}
            className={`rounded-lg p-4 border-2 ${
              const_.unlocked
                ? "bg-yellow-900/20 border-yellow-500"
                : "bg-[#2a2a4a] border-gray-600"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  const_.unlocked
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-600 text-gray-300"
                }`}
              >
                {const_.level}
              </div>
              {const_.unlocked && (
                <span className="text-yellow-400 text-lg">⭐</span>
              )}
            </div>

            <p
              className={`text-sm font-medium ${
                const_.unlocked ? "text-yellow-200" : "text-gray-400"
              }`}
            >
              {const_.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Constellations;
