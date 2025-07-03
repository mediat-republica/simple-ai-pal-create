
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SearchMethodCardProps {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  color: "blue" | "green" | "purple";
  features: string[];
}

export function SearchMethodCard({ title, icon: IconComponent, description, color, features }: SearchMethodCardProps) {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-200 hover:bg-blue-100",
    green: "bg-green-50 border-green-200 hover:bg-green-100", 
    purple: "bg-purple-50 border-purple-200 hover:bg-purple-100"
  };
  
  const iconColors = {
    blue: "text-blue-600",
    green: "text-green-600",
    purple: "text-purple-600"
  };

  return (
    <Card className={cn("cursor-pointer transition-all duration-200 hover:shadow-lg", colorClasses[color])}>
      <CardContent className="p-6 text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm border">
          <IconComponent className={cn("w-8 h-8", iconColors[color])} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <div className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
        <Button className="w-full bg-teal-600 hover:bg-teal-700">
          Commencer
        </Button>
      </CardContent>
    </Card>
  );
}
