
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, FileText, Clock, Users } from "lucide-react";

const popularProcedures = [
  {
    title: "Création d'entreprise SARL",
    category: "Commerce",
    duration: "15-30 jours",
    difficulty: "Moyen",
    requests: 1250
  },
  {
    title: "Demande de passeport",
    category: "Documents",
    duration: "7-14 jours", 
    difficulty: "Facile",
    requests: 2100
  },
  {
    title: "Permis de construire",
    category: "Urbanisme",
    duration: "30-60 jours",
    difficulty: "Difficile",
    requests: 890
  }
];

export function PopularProceduresList() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Facile": return "bg-green-100 text-green-800";
      case "Moyen": return "bg-yellow-100 text-yellow-800";
      case "Difficile": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-teal-600" />
          Procédures les plus demandées
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {popularProcedures.map((procedure, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{procedure.title}</h4>
                  <div className="flex items-center gap-3 mt-1">
                    <Badge variant="outline">{procedure.category}</Badge>
                    <Badge className={getDifficultyColor(procedure.difficulty)}>
                      {procedure.difficulty}
                    </Badge>
                    <span className="text-sm text-gray-600 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {procedure.duration}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600 flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {procedure.requests} demandes
                </div>
                <Button size="sm" className="mt-2 bg-teal-600 hover:bg-teal-700">
                  Voir détails
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
