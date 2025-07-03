
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Bot } from 'lucide-react';

export function ProcedureFormsTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="text-center">
            <Download className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <CardTitle>Formulaires téléchargeables</CardTitle>
            <CardDescription>
              Accédez aux formulaires officiels au format PDF
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Télécharger formulaires
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="text-center">
            <FileText className="w-12 h-12 mx-auto text-emerald-600 mb-4" />
            <CardTitle>Formulaires en ligne</CardTitle>
            <CardDescription>
              Remplissez et soumettez directement en ligne
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
              <FileText className="w-4 h-4 mr-2" />
              Formulaires en ligne
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="text-center">
            <Bot className="w-12 h-12 mx-auto text-purple-600 mb-4" />
            <CardTitle>Assistant formulaires</CardTitle>
            <CardDescription>
              Guide intelligent pour vous aider à remplir vos formulaires
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              <Bot className="w-4 h-4 mr-2" />
              Assistant IA
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
