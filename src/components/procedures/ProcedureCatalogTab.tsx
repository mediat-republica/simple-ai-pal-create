
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Plus, 
  Filter,
  Eye,
  FileText, 
  Building2,
  Users,
  Download,
  CheckCircle,
  Car,
  Home,
  Briefcase,
  GraduationCap,
  Shield,
  Heart,
  Banknote,
  Star,
  MessageSquare,
  UserPlus,
  ThumbsUp
} from 'lucide-react';

interface ProcedureCatalogTabProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onAddProcedure: () => void;
}

const mockProcedures = [
  {
    id: 1,
    title: "Création d'entreprise SARL",
    description: "Procédure complète pour créer une société à responsabilité limitée en Algérie",
    category: "Commerce",
    status: "Active",
    icon: Briefcase,
    color: "bg-blue-100 text-blue-800",
    duration: "15-30 jours",
    cost: "50,000 DA"
  },
  {
    id: 2,
    title: "Demande de passeport biométrique", 
    description: "Procédure pour obtenir un passeport biométrique algérien",
    category: "Documents d'identité",
    status: "Active",
    icon: Shield,
    color: "bg-green-100 text-green-800",
    duration: "7-14 jours",
    cost: "6,000 DA"
  },
  {
    id: 3,
    title: "Permis de construire individuel",
    description: "Demande d'autorisation pour construction d'habitation individuelle", 
    category: "Urbanisme",
    status: "Active",
    icon: Home,
    color: "bg-purple-100 text-purple-800",
    duration: "30-60 jours",
    cost: "Variable"
  },
  {
    id: 4,
    title: "Permis de conduire catégorie B",
    description: "Obtention du permis de conduire pour véhicules légers",
    category: "Transport", 
    status: "Active",
    icon: Car,
    color: "bg-orange-100 text-orange-800",
    duration: "Variable",
    cost: "8,500 DA"
  }
];

const stats = [
  { 
    label: "Total Procédures", 
    value: "287", 
    icon: FileText, 
    color: "text-blue-600", 
    bgColor: "bg-blue-50" 
  },
  { 
    label: "Procédures Simplifiées", 
    value: "156", 
    icon: CheckCircle, 
    color: "text-green-600", 
    bgColor: "bg-green-50" 
  },
  { 
    label: "Formulaires", 
    value: "423", 
    icon: Download, 
    color: "text-purple-600", 
    bgColor: "bg-purple-50" 
  },
  { 
    label: "Institutions", 
    value: "78", 
    icon: Building2, 
    color: "text-orange-600", 
    bgColor: "bg-orange-50" 
  }
];

const institutions = [
  { name: "Ministère de la Justice", procedures: 45 },
  { name: "Ministère de l'Intérieur", procedures: 67 },
  { name: "Ministère des Finances", procedures: 89 },
  { name: "Ministère du Commerce", procedures: 34 }
];

const procedureTypes = [
  { name: "État Civil", count: 45, icon: Users },
  { name: "Urbanisme", count: 67, icon: Home },
  { name: "Commerce", count: 89, icon: Briefcase },
  { name: "Transport", count: 34, icon: Car }
];

export function ProcedureCatalogTab({ searchTerm, setSearchTerm, onAddProcedure }: ProcedureCatalogTabProps) {
  const filteredProcedures = mockProcedures.filter(procedure =>
    procedure.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    procedure.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    procedure.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* 1. Tableau de bord */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className={`${stat.bgColor} p-4 rounded-lg text-center`}>
              <IconComponent className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* 2. Barre de recherche et actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2 flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Rechercher dans le catalogue..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtres
          </Button>
        </div>
        <Button 
          className="bg-emerald-600 hover:bg-emerald-700" 
          size="sm" 
          onClick={onAddProcedure}
        >
          <Plus className="w-4 h-4 mr-2" />
          Ajouter une procédure administrative
        </Button>
      </div>

      {/* 3. Exemples de procédures */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProcedures.map((procedure) => {
          const IconComponent = procedure.icon;
          return (
            <Card key={procedure.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <IconComponent className="w-5 h-5 text-emerald-600" />
                    <Badge className={procedure.color}>
                      {procedure.category}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-lg">{procedure.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {procedure.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Durée: {procedure.duration}</span>
                    <span>Coût: {procedure.cost}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-500">{procedure.status}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Voir détails
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {searchTerm && filteredProcedures.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">Aucune procédure trouvée pour "{searchTerm}"</p>
        </div>
      )}

      {/* 4. Institutions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-600" />
            Institutions
          </CardTitle>
          <CardDescription>
            Principales institutions gérant les procédures administratives
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {institutions.map((institution, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">{institution.name}</h4>
                  <Badge variant="outline">{institution.procedures} procédures</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 5. Types de procédures */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-600" />
            Types de procédures
          </CardTitle>
          <CardDescription>
            Classification des procédures par catégorie
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {procedureTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div key={index} className="p-4 border rounded-lg text-center hover:shadow-sm transition-shadow">
                  <IconComponent className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                  <h4 className="font-medium text-gray-900">{type.name}</h4>
                  <p className="text-sm text-gray-500">{type.count} procédures</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* 6. Procédures en vedette */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            Procédures en vedette
          </CardTitle>
          <CardDescription>
            Procédures les plus consultées et les plus appréciées
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Demande de passeport biométrique", views: "25.3k", rating: 4.9 },
              { title: "Création d'entreprise SARL", views: "18.7k", rating: 4.8 },
              { title: "Demande d'acte de naissance", views: "22.1k", rating: 4.7 },
              { title: "Inscription universitaire", views: "15.2k", rating: 4.6 }
            ].map((item, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {item.views} vues
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {item.rating}
                      </span>
                    </div>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">
                    <Star className="w-3 h-3 mr-1" />
                    Vedette
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 7. Témoignages récents */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-green-600" />
            Témoignages récents
          </CardTitle>
          <CardDescription>
            Retours d'expérience des utilisateurs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "Ahmed B.", procedure: "Passeport biométrique", comment: "Procédure très claire et rapide", rating: 5 },
              { name: "Fatima K.", procedure: "Création SARL", comment: "Documentation complète et bien expliquée", rating: 4 },
              { name: "Omar M.", procedure: "Permis de construire", comment: "Étapes détaillées, très utile", rating: 5 }
            ].map((testimonial, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.procedure}</p>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 8. Contribuez à la base de données */}
      <Card className="border-emerald-200 bg-emerald-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-emerald-800">
            <UserPlus className="w-5 h-5" />
            Contribuez à la base de données
          </CardTitle>
          <CardDescription className="text-emerald-700">
            Aidez-nous à enrichir la base de données des procédures
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <Plus className="w-4 h-4 text-emerald-600" />
                Proposer une procédure
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                Soumettez de nouvelles procédures pour enrichir la base
              </p>
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                Proposer
              </Button>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h4 className="font-medium mb-2 flex items-center gap-2">
                <ThumbsUp className="w-4 h-4 text-blue-600" />
                Améliorer la qualité
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                Signalez des erreurs ou proposez des améliorations
              </p>
              <Button size="sm" variant="outline">
                Signaler
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
