
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Clock } from "lucide-react";

const recentSearches = [
  "Création entreprise SARL",
  "Permis de construire",
  "Carte d'identité nationale",
  "Passeport biométrique",
  "Acte de naissance"
];

export function RecentSearchesList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-teal-600" />
          Recherches récentes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {recentSearches.map((search, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start text-left h-auto p-3"
            >
              <Search className="w-4 h-4 mr-3 text-gray-400" />
              {search}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
