
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  History, 
  Search, 
  Filter, 
  Eye, 
  Download, 
  GitCompare, 
  Calendar, 
  User, 
  FileText,
  Clock,
  AlertCircle,
  CheckCircle,
  Edit,
  Archive,
  RefreshCw,
  Building,
  Users,
  Star,
  MapPin,
  Trash2
} from 'lucide-react';

interface ProcedureSearchHistory {
  id: string;
  query: string;
  date: string;
  author: string;
  institution: string;
  type: 'Recherche simple' | 'Recherche avancée' | 'Recherche géolocalisée' | 'Recherche IA';
  results: number;
  status: 'Exécutée' | 'Sauvegardée' | 'Partagée' | 'Archivée';
  category: string;
  wilaya?: string;
  filters: string[];
  executionTime: string;
  relevance: number;
  lastAccessed: string;
}

const mockSearchHistory: ProcedureSearchHistory[] = [
  {
    id: '1',
    query: 'Création entreprise SARL Alger',
    date: '15/01/2024 14:30',
    author: 'Ahmed Benali',
    institution: 'CNRC Alger',
    type: 'Recherche avancée',
    results: 45,
    status: 'Exécutée',
    category: 'Commercial',
    wilaya: 'Alger',
    filters: ['Type: SARL', 'Wilaya: Alger', 'Secteur: Commerce'],
    executionTime: '0.8s',
    relevance: 0.92,
    lastAccessed: 'Il y a 2 heures'
  },
  {
    id: '2',
    query: 'Passeport biométrique',
    date: '15/01/2024 10:15',
    author: 'Fatima Kaddour',
    institution: 'Ministère Intérieur',
    type: 'Recherche simple',
    results: 67,
    status: 'Sauvegardée',
    category: 'État civil',
    filters: ['Type: Passeport'],
    executionTime: '0.5s',
    relevance: 0.98,
    lastAccessed: 'Il y a 4 heures'
  },
  {
    id: '3',
    query: 'Permis conduire près de moi',
    date: '14/01/2024 16:45',
    author: 'Mohamed Cherif',
    institution: 'CNAS',
    type: 'Recherche géolocalisée',
    results: 89,
    status: 'Partagée',
    category: 'Transport',
    wilaya: 'Constantine',
    filters: ['Géolocalisation', 'Rayon: 10km'],
    executionTime: '1.2s',
    relevance: 0.85,
    lastAccessed: 'Il y a 1 jour'
  },
  {
    id: '4',
    query: 'Comment obtenir un acte de naissance rapidement',
    date: '14/01/2024 09:20',
    author: 'Leila Mansouri',
    institution: 'APC Tizi Ouzou',
    type: 'Recherche IA',
    results: 34,
    status: 'Exécutée',
    category: 'État civil',
    wilaya: 'Tizi Ouzou',
    filters: ['IA: Traitement naturel', 'Urgence: Oui'],
    executionTime: '2.1s',
    relevance: 0.94,
    lastAccessed: 'Il y a 1 jour'
  },
  {
    id: '5',
    query: 'Inscription universitaire 2024',
    date: '13/01/2024 11:30',
    author: 'Karim Boudiaf',
    institution: 'MESRS',
    type: 'Recherche avancée',
    results: 156,
    status: 'Archivée',
    category: 'Éducation',
    filters: ['Année: 2024', 'Niveau: Licence'],
    executionTime: '1.5s',
    relevance: 0.87,
    lastAccessed: 'Il y a 2 jours'
  },
  {
    id: '6',
    query: 'Certificat résidence',
    date: '12/01/2024 15:10',
    author: 'Amina Berkat',
    institution: 'APC Oran',
    type: 'Recherche simple',
    results: 78,
    status: 'Exécutée',
    category: 'Administration',
    wilaya: 'Oran',
    filters: ['Type: Certificat'],
    executionTime: '0.6s',
    relevance: 0.91,
    lastAccessed: 'Il y a 3 jours'
  }
];

export function ProcedureSearchHistoryTab() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedWilaya, setSelectedWilaya] = useState('');

  const categories = ['Tous', 'Commercial', 'État civil', 'Transport', 'Éducation', 'Administration', 'Santé'];
  const types = ['Tous', 'Recherche simple', 'Recherche avancée', 'Recherche géolocalisée', 'Recherche IA'];
  const statuses = ['Tous', 'Exécutée', 'Sauvegardée', 'Partagée', 'Archivée'];
  const wilayas = ['Toutes', 'Alger', 'Oran', 'Constantine', 'Tizi Ouzou', 'Annaba', 'Sétif'];

  const filteredHistory = mockSearchHistory.filter(item => {
    const matchesSearch = item.query.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.institution.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === 'Tous' || item.category === selectedCategory;
    const matchesType = !selectedType || selectedType === 'Tous' || item.type === selectedType;
    const matchesStatus = !selectedStatus || selectedStatus === 'Tous' || item.status === selectedStatus;
    const matchesWilaya = !selectedWilaya || selectedWilaya === 'Toutes' || item.wilaya === selectedWilaya;
    
    return matchesSearch && matchesCategory && matchesType && matchesStatus && matchesWilaya;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Recherche simple': return 'bg-blue-100 text-blue-800';
      case 'Recherche avancée': return 'bg-purple-100 text-purple-800';
      case 'Recherche géolocalisée': return 'bg-green-100 text-green-800';
      case 'Recherche IA': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Exécutée': return 'bg-green-100 text-green-800';
      case 'Sauvegardée': return 'bg-yellow-100 text-yellow-800';
      case 'Partagée': return 'bg-blue-100 text-blue-800';
      case 'Archivée': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Exécutée': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'Sauvegardée': return <Edit className="w-4 h-4 text-yellow-600" />;
      case 'Partagée': return <Users className="w-4 h-4 text-blue-600" />;
      case 'Archivée': return <Archive className="w-4 h-4 text-gray-600" />;
      default: return <AlertCircle className="w-4 h-4 text-gray-600" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Recherche simple': return <Search className="w-4 h-4" />;
      case 'Recherche avancée': return <Filter className="w-4 h-4" />;
      case 'Recherche géolocalisée': return <MapPin className="w-4 h-4" />;
      case 'Recherche IA': return <RefreshCw className="w-4 h-4" />;
      default: return <Search className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Filtres et recherche */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-emerald-600" />
            Filtres et recherche
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Type de recherche" />
              </SelectTrigger>
              <SelectContent>
                {types.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                {statuses.map((status) => (
                  <SelectItem key={status} value={status}>{status}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedWilaya} onValueChange={setSelectedWilaya}>
              <SelectTrigger>
                <SelectValue placeholder="Wilaya" />
              </SelectTrigger>
              <SelectContent>
                {wilayas.map((wilaya) => (
                  <SelectItem key={wilaya} value={wilaya}>{wilaya}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
                setSelectedType('');
                setSelectedStatus('');
                setSelectedWilaya('');
              }}
            >
              Réinitialiser
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Statistiques rapides */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Search className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{filteredHistory.length}</p>
            <p className="text-sm text-gray-600">Recherches trouvées</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {filteredHistory.filter(h => h.status === 'Exécutée').length}
            </p>
            <p className="text-sm text-gray-600">Exécutées</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Edit className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {filteredHistory.filter(h => h.status === 'Sauvegardée').length}
            </p>
            <p className="text-sm text-gray-600">Sauvegardées</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Star className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">
              {Math.round(filteredHistory.reduce((acc, h) => acc + h.relevance, 0) / filteredHistory.length * 100)}%
            </p>
            <p className="text-sm text-gray-600">Pertinence moyenne</p>
          </CardContent>
        </Card>
      </div>

      {/* Liste de l'historique */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="w-5 h-5 text-emerald-600" />
            Historique des recherches ({filteredHistory.length} résultats)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredHistory.map((item) => (
              <div key={item.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(item.type)}
                        <h4 className="font-semibold text-lg text-gray-900">{item.query}</h4>
                      </div>
                      <Badge className={getTypeColor(item.type)}>
                        {item.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {item.results} résultats
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">Auteur:</span>
                        <span className="font-medium">{item.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">Institution:</span>
                        <span className="font-medium">{item.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">Date:</span>
                        <span className="font-medium">{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">Catégorie:</span>
                        <span className="font-medium">{item.category}</span>
                      </div>
                      {item.wilaya && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600">Wilaya:</span>
                          <span className="font-medium">{item.wilaya}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-600">Temps:</span>
                        <span className="font-medium">{item.executionTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm text-gray-600">Pertinence:</span>
                        <span className="font-medium text-sm">{Math.round(item.relevance * 100)}%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Dernier accès:</span>
                        <span className="text-sm font-medium">{item.lastAccessed}</span>
                      </div>
                    </div>

                    {item.filters.length > 0 && (
                      <div className="mb-3">
                        <span className="text-sm text-gray-600 mb-2 block">Filtres appliqués:</span>
                        <div className="flex flex-wrap gap-2">
                          {item.filters.map((filter, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {filter}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col items-end gap-3">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(item.status)}
                      <Badge className={getStatusColor(item.status)}>
                        {item.status}
                      </Badge>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        Voir
                      </Button>
                      <Button variant="outline" size="sm">
                        <RefreshCw className="w-4 h-4 mr-1" />
                        Relancer
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4 mr-1" />
                        Supprimer
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredHistory.length === 0 && (
            <div className="text-center py-12">
              <History className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-500 mb-2">Aucune recherche trouvée</h3>
              <p className="text-gray-400">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
