
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star, Building, FileText, CheckCircle } from 'lucide-react';
import { mockProcedures, institutionStats, recentCompletions } from './mockData';

export function ExampleProceduresShowcase() {
  const featuredProcedures = mockProcedures.slice(0, 3);
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'facile': return 'bg-green-100 text-green-800';
      case 'moyenne': return 'bg-yellow-100 text-yellow-800';
      case 'complexe': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'commercial': return 'bg-blue-100 text-blue-800';
      case 'civil': return 'bg-purple-100 text-purple-800';
      case 'transport': return 'bg-orange-100 text-orange-800';
      case 'social': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Section des procédures en vedette */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Procédures en vedette</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProcedures.map((procedure) => (
            <Card key={procedure.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getCategoryColor(procedure.category)}>
                    {procedure.category}
                  </Badge>
                  <Badge className={getDifficultyColor(procedure.difficulty)}>
                    {procedure.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{procedure.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {procedure.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{procedure.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{procedure.completedCount}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{procedure.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    ({procedure.completedCount} avis)
                  </span>
                </div>

                <div className="text-sm">
                  <span className="font-medium text-emerald-600">{procedure.cost}</span>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Documents requis:</div>
                  <div className="space-y-1">
                    {procedure.requiredDocuments.slice(0, 3).map((doc, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span>{doc}</span>
                      </div>
                    ))}
                    {procedure.requiredDocuments.length > 3 && (
                      <div className="text-xs text-gray-500">
                        +{procedure.requiredDocuments.length - 3} autres documents
                      </div>
                    )}
                  </div>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Voir la procédure complète
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Statistiques des institutions */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Institutions partenaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {institutionStats.map((institution, index) => (
            <Card key={index} className="text-center">
              <CardHeader className="pb-2">
                <Building className="w-8 h-8 mx-auto text-emerald-600" />
                <CardTitle className="text-lg">{institution.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600">
                  {institution.procedures}
                </div>
                <div className="text-sm text-gray-600">procédures</div>
                <div className="text-sm">
                  Durée moy. : <span className="font-medium">{institution.avgDuration}</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{institution.satisfaction}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Témoignages récents */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Témoignages récents</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentCompletions.map((completion) => (
            <Card key={completion.id} className="bg-gradient-to-br from-emerald-50 to-green-50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < completion.rating
                            ? 'text-yellow-500 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{completion.completedAt}</span>
                </div>
                <CardTitle className="text-base">{completion.procedureTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 italic mb-3">
                  "{completion.comment}"
                </p>
                <div className="text-sm font-medium text-emerald-700">
                  - {completion.userName}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Section d'appel à l'action */}
      <Card className="bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <CardContent className="p-8 text-center">
          <FileText className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Contribuez à la base de données</h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Aidez-nous à enrichir notre catalogue en ajoutant de nouvelles procédures 
            ou en améliorant les existantes. Votre contribution aide des milliers de citoyens.
          </p>
          <div className="space-x-4">
            <Button variant="secondary" size="lg">
              Ajouter une procédure
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-600">
              Suggérer une amélioration
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
