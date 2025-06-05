import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {/* Левая карточка с персонажем */}
      <div className="bg-gray-800 rounded-lg p-6 flex items-center gap-4">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=80&h=80&fit=crop&crop=face"
              alt="Нёвилетт"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <Badge className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs">
            5★
          </Badge>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Нёвилетт</h1>
          <div className="flex gap-2">
            <Badge className="bg-blue-600 text-white">Гидро</Badge>
            <Badge className="bg-purple-600 text-white">Катализатор</Badge>
          </div>
        </div>
      </div>

      {/* Правая карточка с ролью */}
      <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-6 text-white">
        <div className="text-lg font-bold mb-2">Main DPS</div>
        <div className="text-sm mb-1">Играет от заряженных атак</div>
        <div className="text-sm mb-3">Качает АТ при возвращении</div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg">
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
