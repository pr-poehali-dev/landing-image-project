import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TalentTable = () => {
  const materials = [
    { name: "Философия о справедливости", amount: "3-9", rarity: 5 },
    { name: "Драгоценный опал", amount: "6-18", rarity: 4 },
    { name: "Материалы монстров", amount: "18-54", rarity: 3 },
    { name: "Корона прозрения", amount: "1", rarity: 5 },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white">Прокачка и сборка</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-purple-300 flex items-center gap-2">
              ⚔️ Оружие
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg">
              <h4 className="text-yellow-300 font-semibold">
                От лучшего к худшему
              </h4>
              <div className="mt-2 space-y-1 text-sm text-gray-300">
                <p>🏆 Воспоминания о Фонтейне</p>
                <p>🥈 Молитва святых ветров</p>
                <p>🥉 Небесный атлас</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-green-300 flex items-center gap-2">
              💎 Возвышение
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {materials.map((material, index) => (
                <div
                  key={index}
                  className="flex justify-between p-2 bg-slate-700/50 rounded"
                >
                  <span className="text-gray-300">{material.name}</span>
                  <span className="text-blue-300">{material.amount}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TalentTable;
