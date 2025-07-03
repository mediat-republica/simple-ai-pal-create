
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Database, FileText, Upload, Users, Lightbulb } from 'lucide-react';
import { ExampleProceduresShowcase } from './procedures/ExampleProceduresShowcase';

export function ProcedureEnrichmentSection() {
  return (
    <div className="space-y-8">
      {/* Options d'enrichissement */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="text-center pb-4">
            <Plus className="w-12 h-12 mx-auto text-emerald-600 mb-4" />
            <CardTitle>Ajouter une procédure</CardTitle>
            <CardDescription>
              Saisir manuellement une nouvelle procédure administrative
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
              <Plus className="w-4 h-4 mr-2" />
              Nouvelle procédure
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="text-center pb-4">
            <Upload className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <CardTitle>Import en lot</CardTitle>
            <CardDescription>
              Importer plusieurs procédures depuis un fichier Excel/CSV
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Upload className="w-4 h-4 mr-2" />
              Importer un fichier
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="text-center pb-4">
            <Database className="w-12 h-12 mx-auto text-purple-600 mb-4" />
            <CardTitle>Extraction automatique</CardTitle>
            <CardDescription>
              Extraire automatiquement des données depuis des sources officielles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              <Database className="w-4 h-4 mr-2" />
              Extraction auto
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Statistiques de contribution */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="text-center bg-gradient-to-br from-emerald-50 to-green-50">
          <CardContent className="p-6">
            <FileText className="w-8 h-8 mx-auto text-emerald-600 mb-2" />
            <div className="text-2xl font-bold text-emerald-600">156</div>
            <div className="text-sm text-gray-600">Procédures totales</div>
          </CardContent>
        </Card>
        
        <Card className="text-center bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardContent className="p-6">
            <Users className="w-8 h-8 mx-auto text-blue-600 mb-2" />
            <div className="text-2xl font-bold text-blue-600">1,247</div>
            <div className="text-sm text-gray-600">Utilisateurs aidés</div>
          </CardContent>
        </Card>
        
        <Card className="text-center bg-gradient-to-br from-purple-50 to-pink-50">
          <CardContent className="p-6">
            <Plus className="w-8 h-8 mx-auto text-purple-600 mb-2" />
            <div className="text-2xl font-bold text-purple-600">23</div>
            <div className="text-sm text-gray-600">Ajouts ce mois</div>
          </CardContent>
        </Card>
        
        <Card className="text-center bg-gradient-to-br from-orange-50 to-red-50">
          <CardContent className="p-6">
            <Lightbulb className="w-8 h-8 mx-auto text-orange-600 mb-2" />
            <div className="text-2xl font-bold text-orange-600">89</div>
            <div className="text-sm text-gray-600">Améliorations</div>
          </CardContent>
        </Card>
      </div>

      {/* Showcase des exemples */}
      <ExampleProceduresShowcase />
    </div>
  );
}
