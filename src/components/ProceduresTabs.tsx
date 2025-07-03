import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Plus, 
  Filter, 
  Building,
  Clock,
  CheckCircle,
  Users,
  TrendingUp,
  BarChart3,
  Upload,
  Database,
  Wand2,
  FileText,
  Calendar,
  User,
  Star,
  MessageSquare,
  Activity,
  ThumbsUp,
  UserPlus,
  Eye,
  Download,
  Share2,
  Save,
  Bot,
  MapPin,
  GitCompare,
  History
} from 'lucide-react';
import { ProcedureHistoryTab } from './procedures/ProcedureHistoryTab';
import { ProceduresPendingApprovalTab } from './procedures/ProceduresPendingApprovalTab';

interface ProceduresTabsProps {
  section: string;
  onAddProcedure?: () => void;
  onOpenApprovalQueue?: () => void;
}

export function ProceduresTabs({ section, onAddProcedure, onOpenApprovalQueue }: ProceduresTabsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProcedures, setSelectedProcedures] = useState<string[]>([]);

  const handleAddClick = () => {
    console.log('Bouton vert cliqué - Redirection vers le formulaire');
    if (onAddProcedure) {
      onAddProcedure();
    } else {
      console.error('onAddProcedure function not provided');
    }
  };

  const renderCatalogTab = () => (
    <div className="space-y-6">
      {/* Timeline and catalog content can be implemented here */}
      {/* For brevity, this example focuses on enrichment tab and pending approval tab */}
      <Card>
        <CardHeader>
          <CardTitle>Catalogue des procédures administratives</CardTitle>
          <CardDescription>
            Liste des procédures disponibles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Contenu du catalogue des procédures...</p>
        </CardContent>
      </Card>
    </div>
  );

  const renderTimelineTab = () => (
    <div className="space-y-6">
      {/* Timeline content can be implemented here */}
      <Card>
        <CardHeader>
          <CardTitle>Timeline des procédures</CardTitle>
          <CardDescription>
            Évolution chronologique des procédures
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Contenu de la timeline des procédures...</p>
        </CardContent>
      </Card>
    </div>
  );

  const renderComparisonTab = () => (
    <div className="space-y-6">
      {/* Comparison content can be implemented here */}
      <Card>
        <CardHeader>
          <CardTitle>Comparaison des procédures</CardTitle>
          <CardDescription>
            Comparer plusieurs procédures administratives
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Contenu de la comparaison des procédures...</p>
        </CardContent>
      </Card>
    </div>
  );

  const renderSearchTab = () => (
    <div className="space-y-6">
      {/* Search content can be implemented here */}
      <Card>
        <CardHeader>
          <CardTitle>Recherche des procédures</CardTitle>
          <CardDescription>
            Recherche avancée dans les procédures administratives
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Contenu de la recherche des procédures...</p>
        </CardContent>
      </Card>
    </div>
  );

  const renderEnrichmentTab = () => (
    <div className="space-y-6">
      {/* Tableau de bord simplifié */}
      <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 border-emerald-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-emerald-800">
            <BarChart3 className="w-5 h-5" />
            Tableau de bord
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-emerald-600">1,856</div>
              <div className="text-sm text-gray-600">Procédures ajoutées</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">127</div>
              <div className="text-sm text-gray-600">En cours</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-purple-600">234</div>
              <div className="text-sm text-gray-600">Validées</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-orange-600">45</div>
              <div className="text-sm text-gray-600">En attente</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions principales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={handleAddClick}>
          <CardHeader className="text-center">
            <Plus className="w-12 h-12 mx-auto text-emerald-600 mb-4" />
            <CardTitle>Ajouter une procédure</CardTitle>
            <CardDescription>
              Saisir manuellement une nouvelle procédure administrative
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={handleAddClick}>
              <Plus className="w-4 h-4 mr-2" />
              Nouvelle procédure
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="text-center">
            <Upload className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <CardTitle>Import en lot</CardTitle>
            <CardDescription>
              Importer plusieurs procédures depuis un fichier Excel/CSV
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Upload className="w-4 h-4 mr-2" />
              Import CSV/Excel
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="text-center">
            <Wand2 className="w-12 h-12 mx-auto text-purple-600 mb-4" />
            <CardTitle>Auto-remplissage intelligent</CardTitle>
            <CardDescription>
              Remplissage automatique avec IA
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              <Wand2 className="w-4 h-4 mr-2" />
              Auto-remplissage
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="text-center">
            <Database className="w-12 h-12 mx-auto text-orange-600 mb-4" />
            <CardTitle>Extraction automatique</CardTitle>
            <CardDescription>
              Importer et traiter automatiquement des procédures
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-orange-600 hover:bg-orange-700">
              <Database className="w-4 h-4 mr-2" />
              Extraction auto
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const getTabsConfig = () => {
    switch (section) {
      case 'procedures-catalog':
        return {
          defaultValue: 'catalogue',
          tabs: [
            { value: 'catalogue', label: 'Catalogue', content: renderCatalogTab() },
            { value: 'timeline', label: 'Timeline des procédures', content: renderTimelineTab() },
            { value: 'comparaison', label: 'Comparaison des procédures', content: renderComparisonTab() },
            { value: 'historiques', label: 'Historiques des versions', content: <ProcedureHistoryTab /> }
          ]
        };
      case 'procedures-enrichment':
        return {
          defaultValue: 'enrichment',
          tabs: [
            { value: 'enrichment', label: 'Alimentation', content: renderEnrichmentTab() },
            { value: 'pending-approval', label: 'Procédures administratives en attente de publication', content: <ProceduresPendingApprovalTab /> }
          ]
        };
      case 'procedures-search':
        return {
          defaultValue: 'search',
          tabs: [
            { value: 'search', label: 'Recherche', content: renderSearchTab() }
          ]
        };
      default:
        return {
          defaultValue: 'catalogue',
          tabs: [
            { value: 'catalogue', label: 'Catalogue', content: renderCatalogTab() }
          ]
        };
    }
  };

  const tabsConfig = getTabsConfig();

  return (
    <div className="space-y-6">
      <Tabs defaultValue={tabsConfig.defaultValue} className="w-full">
        <TabsList className={`grid w-full ${tabsConfig.tabs.length === 1 ? 'grid-cols-1' : 
          tabsConfig.tabs.length === 2 ? 'grid-cols-2' : 
          tabsConfig.tabs.length === 3 ? 'grid-cols-3' : 'grid-cols-4'}`}>
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
