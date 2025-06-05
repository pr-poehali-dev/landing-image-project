import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900 p-6 rounded-lg">
      <div className="flex items-center gap-6">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=120&h=120&fit=crop&crop=face"
                alt="Нёвилетт"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
          </div>
          <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-black">
            5★
          </Badge>
        </div>

        <div className="flex-1">
          <h1 className="text-4xl font-bold text-white mb-2">Нёвилетт</h1>
          <div className="flex gap-2 mb-4">
            <Badge variant="outline" className="text-blue-300 border-blue-300">
              Main DPS
            </Badge>
            <Badge
              variant="outline"
              className="text-purple-300 border-purple-300"
            >
              Hydro
            </Badge>
          </div>

          <div className="space-y-2 text-sm text-gray-300">
            <p>Играет от заряженных атак</p>
            <p>Качает АТ при возвращении</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
