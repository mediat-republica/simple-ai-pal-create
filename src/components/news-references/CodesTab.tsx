
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Download, BookOpen, Calendar, Users } from 'lucide-react';

export function CodesTab() {
  const codes = [
    {
      id: 1,
      title: "Code civil algérien",
      description: "Ensemble des règles qui déterminent le statut des personnes, des biens et des relations entre les personnes privées",
      category: "Droit civil",
      lastUpdate: "15 janvier 2024",
      articles: 1234,
      views: "125.5k"
    },
    {
      id: 2,
      title: "Code de procédure civile",
      description: "Règles relatives à l'organisation judiciaire et à la procédure devant les juridictions civiles",
      category: "Procédure",
      lastUpdate: "20 décembre 2023",
      articles: 867,
      views: "98.2k"
    },
    {
      id: 3,
      title: "Code de commerce",
      description: "Ensemble des dispositions relatives aux actes de commerce et aux commerçants",
      category: "Droit commercial",
      lastUpdate: "8 janvier 2024",
      articles: 543,
      views: "87.3k"
    },
    {
      id: 4,
      title: "Code pénal",
      description: "Définition des infractions et détermination des peines applicables aux auteurs",
      category: "Droit pénal",
      lastUpdate: "12 janvier 2024",
      articles: 789,
      views: "156.7k"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {codes.map((code) => (
          <Card key={code.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-blue-100 text-blue-800">
                  {code.category}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Eye className="w-4 h-4" />
                  {code.views}
                </div>
              </div>
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                {code.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-600 mb-4">{code.description}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  Mis à jour: {code.lastUpdate}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users className="w-4 h-4" />
                  {code.articles} articles
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
