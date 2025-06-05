import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      <h2 className="text-2xl font-bold text-white">Созвездия</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {constellations.map((const_, index) => (
          <Card
            key={index}
            className={`transition-all duration-300 ${
              const_.unlocked
                ? "bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border-yellow-500/50"
                : "bg-slate-800/50 border-slate-600/30"
            }`}
          >
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Badge
                  className={`text-lg font-bold ${
                    const_.unlocked
                      ? "bg-yellow-500 text-black"
                      : "bg-slate-600 text-gray-300"
                  }`}
                >
                  {const_.level}
                </Badge>
                {const_.unlocked && (
                  <span className="text-yellow-400 text-xl">⭐</span>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p
                className={`text-sm font-medium ${
                  const_.unlocked ? "text-yellow-200" : "text-gray-400"
                }`}
              >
                {const_.name}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Constellations;
