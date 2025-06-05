import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCardProps {
  title: string;
  type: "normal" | "skill" | "burst";
  description: string;
  details: string[];
  color: string;
}

const SkillCard = ({
  title,
  type,
  description,
  details,
  color,
}: SkillCardProps) => {
  const getTypeIcon = () => {
    switch (type) {
      case "normal":
        return "🗡️";
      case "skill":
        return "⚡";
      case "burst":
        return "💥";
      default:
        return "📖";
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case "normal":
        return "Обычная атака";
      case "skill":
        return "Элементальный навык";
      case "burst":
        return "Взрыв стихии";
      default:
        return "Способность";
    }
  };

  return (
    <Card className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-white text-lg flex items-center gap-2">
            <span className="text-2xl">{getTypeIcon()}</span>
            {title}
          </CardTitle>
          <Badge className={`${color} text-black font-semibold`}>
            {getTypeLabel()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        <div className="space-y-2">
          {details.map((detail, index) => (
            <div key={index} className="flex items-start gap-2 text-sm">
              <span className="text-blue-400 mt-1">•</span>
              <span className="text-gray-300">{detail}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
