
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Download, FileText, Calendar, Users } from 'lucide-react';

export function LoisTab() {
  const lois = [
    {
      id: 1,
      title: "Loi n° 12-07 relative à la wilaya",
      description: "Loi définissant l'organisation territoriale et administrative des wilayas en Algérie",
      category: "Administration territoriale",
      lastUpdate: "22 janvier 2024",
      articles: 145,
      views: "89.3k"
    },
    {
      id: 2,
      title: "Loi n° 18-12 relative à la prévention et à la lutte contre la discrimination et le discours de haine",
      description: "Dispositions relatives à la prévention et à la répression de toute forme de discrimination",
      category: "Droits de l'homme",
      lastUpdate: "10 janvier 2024",
      articles: 67,
      views: "76.8k"
    },
    {
      id: 3,
      title: "Loi n° 15-12 relative à la protection de l'enfant",
      description: "Ensemble des mesures de protection des droits de l'enfant",
      category: "Protection sociale",
      lastUpdate: "5 janvier 2024",
      articles: 198,
      views: "65.2k"
    },
    {
      id: 4,
      title: "Loi n° 20-06 modifiant et complétant l'ordonnance n° 66-156 portant code pénal",
      description: "Modifications apportées au code pénal algérien",
      category: "Droit pénal",
      lastUpdate: "18 décembre 2023",
      articles: 23,
      views: "134.7k"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lois.map((loi) => (
          <Card key={loi.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-green-100 text-green-800">
                  {loi.category}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Eye className="w-4 h-4" />
                  {loi.views}
                </div>
              </div>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="w-5 h-5 text-green-600" />
                {loi.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-600 mb-4">{loi.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  Mis à jour: {loi.lastUpdate}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users className="w-4 h-4" />
                  {loi.articles} articles
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
