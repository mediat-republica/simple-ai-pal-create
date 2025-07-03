
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Calendar, 
  Filter, 
  Star, 
  Trash2, 
  Edit,
  Play,
  BookmarkPlus,
  Clock,
  TrendingUp,
  BarChart3
} from 'lucide-react';

export function SavedSearchesSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const savedSearches = [
    {
      id: 1,
      title: "Textes juridiques sur le droit du travail 2025",
      query: "droit travail contrat CDI licenciement",
      date: "15 janvier 2025",
      results: 234,
      category: "Textes juridiques",
      filters: ["droit du travail", "2025", "contrat"],
      isRecent: true,
      isFavorite: true
    },
    {
      id: 2,
      title: "Procédures administratives - Création d'entreprise",
      query: "création entreprise SARL procédure administrative",
      date: "12 janvier 2025",
      results: 89,
      category: "Procédures",
      filters: ["création", "entreprise", "SARL"],
      isRecent: true,
      isFavorite: false
    },
    {
      id: 3,
      title: "Réglementation environnementale",
      query: "environnement pollution réglementation écologie",
      date: "10 janvier 2025",
      results: 156,
      category: "Réglementation",
      filters: ["environnement", "pollution", "écologie"],
      isRecent: true,
      isFavorite: true
    },
    {
      id: 4,
      title: "Code civil - Droit de la famille",
      query: "code civil famille mariage divorce heritage",
      date: "8 janvier 2025",
      results: 312,
      category: "Code civil",
      filters: ["famille", "mariage", "divorce"],
      isRecent: false,
      isFavorite: false
    },
    {
      id: 5,
      title: "Procédures fiscales et déclarations",
      query: "fiscal impôts déclaration TVA entreprise",
      date: "5 janvier 2025",
      results: 145,
      category: "Fiscal",
      filters: ["fiscal", "impôts", "TVA"],
      isRecent: false,
      isFavorite: true
    },
    {
      id: 6,
      title: "Jurisprudence en droit pénal",
      query: "jurisprudence pénal crime délit tribunal",
      date: "3 janvier 2025",
      results: 203,
      category: "Jurisprudence",
      filters: ["jurisprudence", "pénal", "tribunal"],
      isRecent: false,
      isFavorite: false
    }
  ];

  const quickFilters = [
    { name: "Récentes", count: 3, filter: "recent" },
    { name: "Favorites", count: 3, filter: "favorite" },
    { name: "Textes juridiques", count: 1, filter: "legal" },
    { name: "Procédures", count: 1, filter: "procedures" },
    { name: "Toutes", count: 6, filter: "all" }
  ];

  const searchStats = [
    { label: "Recherches sauvegardées", value: "24", icon: BookmarkPlus, color: "text-blue-600" },
    { label: "Recherches cette semaine", value: "12", icon: Clock, color: "text-green-600" },
    { label: "Recherches populaires", value: "8", icon: TrendingUp, color: "text-purple-600" },
    { label: "Résultats moyens", value: "189", icon: BarChart3, color: "text-orange-600" }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
          <Search className="w-6 h-6 text-emerald-600" />
          Recherches sauvegardées
        </h2>
        <p className="text-gray-600">
          Gérez et relancez vos recherches les plus importantes
        </p>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {searchStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-4 text-center">
                <IconComponent className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Barre de recherche et filtres */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Rechercher dans les recherches sauvegardées..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {quickFilters.map((filter, index) => (
            <Button key={index} variant="outline" size="sm">
              {filter.name} ({filter.count})
            </Button>
          ))}
        </div>
      </div>

      {/* Liste des recherches sauvegardées */}
      <div className="space-y-4">
        {savedSearches.map((search) => (
          <Card key={search.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{search.title}</h3>
                    {search.isFavorite && (
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    )}
                    {search.isRecent && (
                      <Badge className="bg-green-100 text-green-800 text-xs">Récent</Badge>
                    )}
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-3 font-mono bg-gray-50 p-2 rounded">
                    "{search.query}"
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {search.date}
                    </span>
                    <span>{search.results} résultats</span>
                    <Badge variant="outline">{search.category}</Badge>
                  </div>
                  
                  <div className="flex gap-1 flex-wrap">
                    {search.filters.map((filter, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {filter}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 ml-4">
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                    <Play className="w-4 h-4 mr-2" />
                    Relancer
                  </Button>
                  <div className="flex gap-1">
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Star className={`w-4 h-4 ${search.isFavorite ? 'text-yellow-500 fill-current' : ''}`} />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Actions rapides */}
      <Card>
        <CardHeader>
          <CardTitle>Actions rapides</CardTitle>
          <CardDescription>
            Créez de nouvelles recherches ou explorez des suggestions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-auto p-4 flex-col bg-blue-600 hover:bg-blue-700">
              <Search className="w-6 h-6 mb-2" />
              <span>Nouvelle recherche</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex-col">
              <Filter className="w-6 h-6 mb-2" />
              <span>Recherche avancée</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex-col">
              <TrendingUp className="w-6 h-6 mb-2" />
              <span>Recherches populaires</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
