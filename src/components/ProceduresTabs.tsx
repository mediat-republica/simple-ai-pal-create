
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Clock as TimelineIcon, 
  Wand2, 
  Plus, 
  Upload, 
  Database, 
  Search, 
  Save, 
  Bot, 
  MapPin,
  Star,
  MessageSquare,
  UserPlus,
  Building2,
  Eye,
  ThumbsUp,
  Calendar
} from 'lucide-react';
import { ProcedureCatalogTab } from './procedures/ProcedureCatalogTab';
import { ProcedureFormsTab } from './procedures/ProcedureFormsTab';
import { ProcedureHistoryTab } from './procedures/ProcedureHistoryTab';
import { ProcedureComparisonSection } from './ProcedureComparisonSection';
import { ProcedureEnrichmentSection } from './ProcedureEnrichmentSection';
import { ProcedureSearchSection } from './ProcedureSearchSection';
import { ProcedureResourcesSection } from './procedures/ProcedureResourcesSection';

interface ProceduresTabsProps {
  section: string;
  onAddProcedure?: () => void;
  onOpenApprovalQueue?: () => void;
}

export function ProceduresTabs({ section, onAddProcedure, onOpenApprovalQueue }: ProceduresTabsProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddClick = () => {
    console.log('Bouton vert cliqué - Redirection vers le formulaire de procédure');
    if (onAddProcedure) {
      onAddProcedure();
    } else {
      console.error('onAddProcedure function not provided');
    }
  };

  const renderEnhancedCatalogTab = () => (
    <div className="space-y-6">
      <ProcedureCatalogTab 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onAddProcedure={handleAddClick}
      />

      {/* Procédures en vedette */}
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

      {/* Témoignages récents */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            Témoignages récents
          </CardTitle>
          <CardDescription>
            Retours d'expérience des utilisateurs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { 
                name: "Ahmed Benali", 
                role: "Citoyen", 
                comment: "Procédure très claire et rapide pour mon passeport.", 
                date: "Il y a 1 jour",
                rating: 5
              },
              { 
                name: "Fatima Zahra", 
                role: "Entrepreneur", 
                comment: "Création d'entreprise simplifiée grâce aux guides.", 
                date: "Il y a 2 jours",
                rating: 5
              },
              { 
                name: "Omar Idrissi", 
                role: "Étudiant", 
                comment: "Inscription universitaire sans complications.", 
                date: "Il y a 5 jours",
                rating: 4
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-4 border rounded-lg bg-gray-50">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-2">"{testimonial.comment}"</p>
                <p className="text-xs text-gray-500">{testimonial.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contribuez à la base de données */}
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

      {/* Institutions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-emerald-600" />
            Institutions
          </CardTitle>
          <CardDescription>
            Organismes et administrations publiques
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Ministère de l'Intérieur", type: "Ministère", count: 145 },
              { name: "Ministère de la Justice", type: "Ministère", count: 89 },
              { name: "Ministère des Finances", type: "Ministère", count: 134 },
              { name: "Commune de Rabat", type: "Collectivité", count: 67 },
              { name: "Préfecture de Casablanca", type: "Préfecture", count: 98 },
              { name: "Conseil Régional", type: "Région", count: 45 }
            ].map((institution, index) => (
              <div key={index} className="p-3 border rounded-lg hover:shadow-sm transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{institution.name}</h4>
                    <p className="text-sm text-gray-500">{institution.type}</p>
                  </div>
                  <Badge variant="outline">{institution.count}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Types de procédures */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-600" />
            Types de procédures
          </CardTitle>
          <CardDescription>
            Classification des procédures administratives
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { type: "État civil", count: 234, color: "bg-red-100 text-red-800" },
              { type: "Entreprises", count: 189, color: "bg-blue-100 text-blue-800" },
              { type: "Éducation", count: 156, color: "bg-purple-100 text-purple-800" },
              { type: "Santé", count: 123, color: "bg-green-100 text-green-800" },
              { type: "Transport", count: 98, color: "bg-orange-100 text-orange-800" },
              { type: "Logement", count: 87, color: "bg-indigo-100 text-indigo-800" },
              { type: "Fiscalité", count: 167, color: "bg-teal-100 text-teal-800" },
              { type: "Social", count: 145, color: "bg-pink-100 text-pink-800" }
            ].map((procType, index) => (
              <div key={index} className="p-4 border rounded-lg text-center hover:shadow-sm transition-shadow">
                <Badge className={`mb-2 ${procType.color}`}>
                  {procType.type}
                </Badge>
                <div className="text-2xl font-bold text-gray-900">{procType.count}</div>
                <div className="text-sm text-gray-500">procédure(s)</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSearchTab = () => (
    <div className="space-y-6">
      {/* Recherche avancée, géolocalisation et intelligente sur la même ligne */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="text-center">
            <Search className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <CardTitle>Recherche avancée</CardTitle>
            <CardDescription>
              Outils de recherche avancée avec filtres multiples et critères spécifiques
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Search className="w-4 h-4 mr-2" />
              Recherche avancée
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="text-center">
            <MapPin className="w-12 h-12 mx-auto text-emerald-600 mb-4" />
            <CardTitle>Recherche par Géolocalisation</CardTitle>
            <CardDescription>
              Trouvez des procédures spécifiques à votre wilaya en Algérie
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
              <MapPin className="w-4 h-4 mr-2" />
              Recherche géolocalisée
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="text-center">
            <Bot className="w-12 h-12 mx-auto text-purple-600 mb-4" />
            <CardTitle>Recherche Intelligente</CardTitle>
            <CardDescription>
              Recherche avancée avec traitement automatique du langage naturel et IA
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              <Bot className="w-4 h-4 mr-2" />
              Recherche IA
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Exemples de recherches populaires */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            Recherches populaires en Algérie
          </CardTitle>
          <CardDescription>
            Les procédures les plus recherchées par les citoyens algériens
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { query: "Passeport biométrique", count: "15,234 recherches", category: "État civil" },
              { query: "Création d'entreprise EURL", count: "12,567 recherches", category: "Commercial" },
              { query: "Permis de conduire", count: "18,901 recherches", category: "Transport" },
              { query: "Carte d'identité nationale", count: "22,345 recherches", category: "État civil" },
              { query: "Inscription universitaire", count: "9,876 recherches", category: "Éducation" },
              { query: "Certificat de résidence", count: "8,234 recherches", category: "Administration" }
            ].map((item, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">{item.query}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <span>{item.count}</span>
                      <Badge variant="outline" className="text-xs">{item.category}</Badge>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const getTabsConfig = () => {
    switch (section) {
      case 'procedures-catalog':
        return {
          defaultValue: 'catalogue',
          tabs: [
            { 
              value: 'catalogue', 
              label: 'Catalogue', 
              content: renderEnhancedCatalogTab()
            },
            { 
              value: 'timeline', 
              label: 'Timeline des procédures', 
              content: (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <TimelineIcon className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">Timeline des procédures</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Visualisez l'évolution chronologique des procédures administratives
                    </p>
                  </div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Évolution des procédures</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { date: "15 janvier 2025", title: "Nouvelle procédure de demande de permis", status: "Active" },
                          { date: "10 janvier 2025", title: "Simplification des démarches fiscales", status: "En cours" },
                          { date: "5 janvier 2025", title: "Mise à jour procédure état civil", status: "Terminé" }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                            <div className="flex-1">
                              <h4 className="font-medium">{item.title}</h4>
                              <p className="text-sm text-gray-500">{item.date}</p>
                            </div>
                            <Badge>{item.status}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            },
            { 
              value: 'comparaison', 
              label: 'Comparaison des procédures', 
              content: <ProcedureComparisonSection />
            },
            { 
              value: 'formulaires', 
              label: 'Formulaires', 
              content: <ProcedureFormsTab />
            },
            { 
              value: 'historiques', 
              label: 'Historiques des versions', 
              content: <ProcedureHistoryTab />
            }
          ]
        };
      case 'procedures-enrichment':
        return {
          defaultValue: 'alimentation',
          tabs: [
            { 
              value: 'alimentation', 
              label: 'Alimentation', 
              content: (
                <div className="space-y-6">
                  <Card className="bg-gradient-to-r from-emerald-50 to-blue-50">
                    <CardHeader>
                      <CardTitle>Tableau de bord des procédures</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-emerald-600">589</div>
                          <div className="text-sm text-gray-600">Procédures</div>
                        </div>
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">45</div>
                          <div className="text-sm text-gray-600">En cours</div>
                        </div>
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">234</div>
                          <div className="text-sm text-gray-600">Validées</div>
                        </div>
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-orange-600">12</div>
                          <div className="text-sm text-gray-600">En attente</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <Card className="hover:shadow-md transition-shadow">
                      <CardHeader className="text-center">
                        <Plus className="w-12 h-12 mx-auto text-emerald-600 mb-4" />
                        <CardTitle>Ajouter une procédure</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={handleAddClick}>
                          <Plus className="w-4 h-4 mr-2" />
                          Nouvelle procédure
                        </Button>
                        {onOpenApprovalQueue && (
                          <Button 
                            variant="outline" 
                            className="w-full" 
                            onClick={onOpenApprovalQueue}
                          >
                            <TimelineIcon className="w-4 h-4 mr-2" />
                            File d'approbation
                          </Button>
                        )}
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow">
                      <CardHeader className="text-center">
                        <Upload className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                        <CardTitle>Import en lot</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          <Upload className="w-4 h-4 mr-2" />
                          Import CSV/Excel
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow">
                      <CardHeader className="text-center">
                        <Wand2 className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                        <CardTitle>Auto-remplissage</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700">
                          <Wand2 className="w-4 h-4 mr-2" />
                          Auto-remplissage
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow">
                      <CardHeader className="text-center">
                        <Database className="w-12 h-12 mx-auto text-orange-600 mb-4" />
                        <CardTitle>Extraction auto</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full bg-orange-600 hover:bg-orange-700">
                          <Database className="w-4 h-4 mr-2" />
                          Extraction
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            }
          ]
        };
      case 'procedures-search':
        return {
          defaultValue: 'recherche',
          tabs: [
            { 
              value: 'recherche', 
              label: 'Recherche', 
              content: <ProcedureSearchSection />
            }
          ]
        };
      case 'procedures-resources':
        return {
          defaultValue: 'ressources',
          tabs: [
            { 
              value: 'ressources', 
              label: 'Ressources', 
              content: <ProcedureResourcesSection />
            }
          ]
        };
      default:
        return {
          defaultValue: 'catalogue',
          tabs: [
            { 
              value: 'catalogue', 
              label: 'Catalogue', 
              content: renderEnhancedCatalogTab()
            }
          ]
        };
    }
  };

  const tabsConfig = getTabsConfig();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
          <FileText className="w-6 h-6 text-emerald-600" />
          {section === 'procedures-enrichment' ? 'Alimentation de la banque de données' :
           section === 'procedures-search' ? 'Recherche' :
           section === 'procedures-resources' ? 'Ressources' :
           'Catalogue des procédures administratives'}
        </h2>
        <p className="text-gray-600">
          {section === 'procedures-enrichment' ? 'Ajoutez et enrichissez la base de données des procédures' :
           section === 'procedures-search' ? 'Outils de recherche avancée pour les procédures administratives' :
           section === 'procedures-resources' ? 'Formulaires et guides pratiques' :
           'Parcourez et gérez la collection de procédures administratives'}
        </p>
      </div>

      <Tabs defaultValue={tabsConfig.defaultValue} className="w-full">
        <TabsList className={`grid w-full ${tabsConfig.tabs.length === 1 ? 'grid-cols-1' : 
          tabsConfig.tabs.length === 2 ? 'grid-cols-2' : 
          tabsConfig.tabs.length === 3 ? 'grid-cols-3' : 
          tabsConfig.tabs.length === 4 ? 'grid-cols-4' : 'grid-cols-5'}`}>
          {tabsConfig.tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value} className="text-sm">
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {tabsConfig.tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="mt-6">
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
