
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Download, 
  Search, 
  Filter, 
  Star, 
  Calendar, 
  User, 
  Eye,
  Share2,
  Bookmark,
  FileImage,
  FileVideo,
  FileAudio
} from 'lucide-react';

export function ProcedureResourcesSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const resources = [
    {
      title: "Guide complet - Demande de passeport biométrique 2025",
      type: "PDF",
      size: "2.3 MB",
      downloads: 15420,
      rating: 4.9,
      category: "Identité",
      icon: FileText,
      color: "text-red-600"
    },
    {
      title: "Tutoriel vidéo - Création d'entreprise en ligne",
      type: "Vidéo",
      size: "45 MB",
      downloads: 8930,
      rating: 4.8,
      category: "Entreprise",
      icon: FileVideo,
      color: "text-blue-600"
    },
    {
      title: "Modèles de formulaires - État civil",
      type: "ZIP",
      size: "1.8 MB",
      downloads: 12150,
      rating: 4.7,
      category: "État civil",
      icon: FileImage,
      color: "text-green-600"
    },
    {
      title: "Guide audio - Procédures fiscales simplifiées",
      type: "Audio",
      size: "12 MB",
      downloads: 5670,
      rating: 4.6,
      category: "Fiscal",
      icon: FileAudio,
      color: "text-purple-600"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
          <FileText className="w-6 h-6 text-emerald-600" />
          Ressources pour les procédures administratives
        </h2>
        <p className="text-gray-600">
          Formulaires, guides pratiques et ressources pour vous accompagner
        </p>
      </div>

      {/* Barre de recherche */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Rechercher dans les ressources..."
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

      {/* Ressources principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, index) => {
          const IconComponent = resource.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <IconComponent className={`w-8 h-8 ${resource.color}`} />
                  <div className="flex-1">
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                      <span>{resource.type}</span>
                      <span>{resource.size}</span>
                      <Badge variant="outline">{resource.category}</Badge>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(resource.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">{resource.rating}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    <Download className="w-4 h-4 inline mr-1" />
                    {resource.downloads.toLocaleString()} téléchargements
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Eye className="w-4 h-4 mr-2" />
                    Aperçu
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Catégories de ressources */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { name: "Formulaires", count: "156 documents", color: "bg-blue-100 text-blue-800" },
          { name: "Guides pratiques", count: "89 guides", color: "bg-green-100 text-green-800" },
          { name: "Tutoriels vidéo", count: "45 vidéos", color: "bg-purple-100 text-purple-800" },
          { name: "Modèles", count: "234 modèles", color: "bg-orange-100 text-orange-800" },
          { name: "FAQ", count: "67 questions", color: "bg-red-100 text-red-800" },
          { name: "Aide juridique", count: "123 ressources", color: "bg-indigo-100 text-indigo-800" }
        ].map((category, index) => (
          <Card key={index} className="text-center hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <Badge className={`mb-2 ${category.color}`}>
                {category.name}
              </Badge>
              <div className="font-medium">{category.count}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
