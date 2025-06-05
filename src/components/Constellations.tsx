import { Badge } from "@/components/ui/badge";

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
    <div className="space-y-4">
      <div className="bg-lime-400 text-black px-4 py-2 rounded font-bold text-center">
        Созвездия
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {constellations.map((const_, index) => (
          <div
            key={index}
            className={`rounded-lg p-3 border-2 ${
              const_.unlocked
                ? "bg-yellow-900/30 border-yellow-500"
                : "bg-gray-800 border-gray-600"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <Badge
                className={`font-bold ${
                  const_.unlocked
                    ? "bg-yellow-500 text-black"
                    : "bg-gray-600 text-gray-300"
                }`}
              >
                {const_.level}
              </Badge>
              {const_.unlocked && <span className="text-yellow-400">⭐</span>}
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
