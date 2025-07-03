
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Download, Scale, Calendar, Users } from 'lucide-react';

export function JurisprudenceTab() {
  const jurisprudences = [
    {
      id: 1,
      title: "Arrêt n° 2024-001 de la Cour Suprême - Chambre civile",
      description: "Interprétation des dispositions relatives aux contrats de vente immobilière",
      category: "Droit civil",
      lastUpdate: "28 janvier 2024",
      articles: 12,
      views: "23.8k"
    },
    {
      id: 2,
      title: "Décision n° 2024-015 du Conseil d'État",
      description: "Contentieux administratif relatif aux marchés publics",
      category: "Droit administratif",
      lastUpdate: "22 janvier 2024",
      articles: 8,
      views: "34.5k"
    },
    {
      id: 3,
      title: "Arrêt n° 2023-456 de la Cour Suprême - Chambre pénale",
      description: "Application des peines alternatives à l'emprisonnement",
      category: "Droit pénal",
      lastUpdate: "15 janvier 2024",
      articles: 15,
      views: "67.2k"
    },
    {
      id: 4,
      title: "Décision n° 2023-789 du Tribunal administratif de Alger",
      description: "Contentieux fiscal relatif aux impôts directs",
      category: "Droit fiscal",
      lastUpdate: "10 janvier 2024",
      articles: 6,
      views: "19.4k"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jurisprudences.map((jurisprudence) => (
          <Card key={jurisprudence.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-orange-100 text-orange-800">
                  {jurisprudence.category}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Eye className="w-4 h-4" />
                  {jurisprudence.views}
                </div>
              </div>
              <CardTitle className="text-lg flex items-center gap-2">
                <Scale className="w-5 h-5 text-orange-600" />
                {jurisprudence.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-600 mb-4">{jurisprudence.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  Mis à jour: {jurisprudence.lastUpdate}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users className="w-4 h-4" />
                  {jurisprudence.articles} références
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
