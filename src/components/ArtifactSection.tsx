import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ArtifactSection = () => {
  const artifacts = [
    {
      name: "Странник-труппа",
      pieces: "4",
      main: "Мастерство стихий",
      description: "Увеличивает урон заряженной атаки на 35%",
      priority: "Лучший",
    },
    {
      name: "Позолоченные сны",
      pieces: "4",
      main: "Мастерство стихий",
      description: "Повышает Мастерство стихий команды",
      priority: "Хороший",
    },
    {
      name: "Изумрудная тень",
      pieces: "4",
      main: "Бонус Гидро урона",
      description: "Увеличивает урон Гидро на 20%",
      priority: "Альтернатива",
    },
  ];

  const stats = [
    { stat: "АТК%", priority: "высокий", value: "46.6%" },
    { stat: "Гидро урон", priority: "высокий", value: "46.6%" },
    { stat: "Крит урон", priority: "средний", value: "62.2%" },
    { stat: "Крит шанс", priority: "средний", value: "31.1%" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Артефакты</h2>

      <div className="grid gap-4">
        {artifacts.map((artifact, index) => (
          <Card
            key={index}
            className="bg-slate-800 border-slate-700 hover:border-purple-500/50 transition-all"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-purple-300 flex items-center gap-2">
                  <span className="text-2xl">🏺</span>
                  {artifact.name}
                </CardTitle>
                <div className="flex gap-2">
                  <Badge
                    variant="outline"
                    className="text-blue-300 border-blue-300"
                  >
                    {artifact.pieces} части
                  </Badge>
                  <Badge
                    className={
                      artifact.priority === "Лучший"
                        ? "bg-yellow-500 text-black"
                        : artifact.priority === "Хороший"
                          ? "bg-green-500 text-black"
                          : "bg-gray-500 text-white"
                    }
                  >
                    {artifact.priority}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm mb-2">
                <span className="text-blue-300 font-medium">
                  Основная характеристика:
                </span>{" "}
                {artifact.main}
              </p>
              <p className="text-gray-300 text-sm">{artifact.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/30">
        <CardHeader>
          <CardTitle className="text-blue-300">
            📊 Приоритет прокачки характеристик
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-2 bg-slate-800/50 rounded"
              >
                <span className="text-gray-300">{stat.stat}</span>
                <div className="flex items-center gap-2">
                  <span className="text-blue-300 text-sm">{stat.value}</span>
                  <Badge
                    size="sm"
                    className={
                      stat.priority === "высокий"
                        ? "bg-red-500 text-white"
                        : "bg-yellow-500 text-black"
                    }
                  >
                    {stat.priority}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArtifactSection;
