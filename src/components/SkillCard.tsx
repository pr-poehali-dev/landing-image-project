import { Badge } from "@/components/ui/badge";

interface SkillCardProps {
  title: string;
  type: "normal" | "skill" | "burst";
  key: string;
  subtitle: string;
  description: string;
  details: string[];
  color: string;
}

const SkillCard = ({
  title,
  type,
  key: keyBind,
  subtitle,
  description,
  details,
  color,
}: SkillCardProps) => {
  const getImage = () => {
    switch (type) {
      case "normal":
        return "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=150&fit=crop";
      case "skill":
        return "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=150&fit=crop";
      case "burst":
        return "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop";
      default:
        return "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=150&fit=crop";
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="flex">
        {/* Левая часть с заголовком */}
        <div className="bg-gray-900 px-4 py-3 flex items-center justify-between min-w-[200px]">
          <h3 className="text-white font-bold">{title}</h3>
          <Badge className={`${color} text-black font-bold text-lg px-3 py-1`}>
            {keyBind}
          </Badge>
        </div>

        {/* Правая часть с подзаголовком */}
        <div className="bg-gray-700 px-4 py-3 flex-1">
          <h4 className="text-white font-semibold">{subtitle}</h4>
        </div>
      </div>

      <div className="p-4 flex gap-4">
        {/* Изображение навыка */}
        <div className="flex-shrink-0">
          <img
            src={getImage()}
            alt={subtitle}
            className="w-32 h-24 object-cover rounded"
          />
        </div>

        {/* Описание и детали */}
        <div className="flex-1 space-y-3">
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
          <div className="space-y-1">
            {details.map((detail, index) => (
              <div key={index} className="text-blue-300 text-sm">
                • {detail}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
