
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Download, ScrollText, Calendar, Users } from 'lucide-react';

export function DecretsTab() {
  const decrets = [
    {
      id: 1,
      title: "Décret exécutif n° 23-145 fixant les modalités d'organisation des concours",
      description: "Modalités d'organisation des concours d'accès à la fonction publique",
      category: "Fonction publique",
      lastUpdate: "25 janvier 2024",
      articles: 34,
      views: "45.2k"
    },
    {
      id: 2,
      title: "Décret exécutif n° 23-132 relatif aux marchés publics",
      description: "Règles de passation et d'exécution des marchés publics",
      category: "Marchés publics",
      lastUpdate: "20 janvier 2024",
      articles: 128,
      views: "78.9k"
    },
    {
      id: 3,
      title: "Décret exécutif n° 23-098 portant organisation du ministère de l'éducation",
      description: "Structure organisationnelle du ministère de l'éducation nationale",
      category: "Éducation",
      lastUpdate: "12 janvier 2024",
      articles: 56,
      views: "32.7k"
    },
    {
      id: 4,
      title: "Décret exécutif n° 23-076 relatif à la protection de l'environnement",
      description: "Mesures de protection de l'environnement et de lutte contre la pollution",
      category: "Environnement",
      lastUpdate: "8 janvier 2024",
      articles: 89,
      views: "54.3k"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {decrets.map((decret) => (
          <Card key={decret.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-purple-100 text-purple-800">
                  {decret.category}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Eye className="w-4 h-4" />
                  {decret.views}
                </div>
              </div>
              <CardTitle className="text-lg flex items-center gap-2">
                <ScrollText className="w-5 h-5 text-purple-600" />
                {decret.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-600 mb-4">{decret.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  Mis à jour: {decret.lastUpdate}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users className="w-4 h-4" />
                  {decret.articles} articles
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="w-4 h-4 mr-1" />
                  Consulter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
