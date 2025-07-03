
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GitCompare, Clock, FileText, Building, Plus, X } from 'lucide-react';

interface ProcedureComparison {
  id: string;
  title: string;
  duration: string;
  cost: string;
  documents: number;
  institution: string;
  complexity: 'Facile' | 'Moyen' | 'Difficile';
}

const mockProcedures: ProcedureComparison[] = [
  {
    id: '1',
    title: 'Création SARL',
    duration: '15-20 jours',
    cost: '50,000 DA',
    documents: 8,
    institution: 'CNRC',
    complexity: 'Moyen'
  },
  {
    id: '2',
    title: 'Création EURL',
    duration: '10-15 jours',
    cost: '25,000 DA',
    documents: 6,
    institution: 'CNRC',
    complexity: 'Facile'
  },
  {
    id: '3',
    title: 'Création SPA',
    duration: '30-45 jours',
    cost: '200,000 DA',
    documents: 15,
    institution: 'CNRC',
    complexity: 'Difficile'
  }
];

export function ProcedureComparator() {
  const [selectedProcedures, setSelectedProcedures] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const addProcedure = (procedureId: string) => {
    if (selectedProcedures.length < 3 && !selectedProcedures.includes(procedureId)) {
      setSelectedProcedures([...selectedProcedures, procedureId]);
    }
  };

  const removeProcedure = (procedureId: string) => {
    setSelectedProcedures(selectedProcedures.filter(id => id !== procedureId));
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Facile': return 'bg-green-100 text-green-800';
      case 'Moyen': return 'bg-yellow-100 text-yellow-800';
      case 'Difficile': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const selectedProcedureData = mockProcedures.filter(p => selectedProcedures.includes(p.id));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GitCompare className="w-5 h-5 text-purple-600" />
          Comparateur de procédures
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">
            Sélectionner des procédures à comparer (max 3)
          </label>
          <Select onValueChange={addProcedure}>
            <SelectTrigger>
              <SelectValue placeholder="Choisir une procédure" />
            </SelectTrigger>
            <SelectContent>
              {mockProcedures
                .filter(p => !selectedProcedures.includes(p.id))
                .map((procedure) => (
                  <SelectItem key={procedure.id} value={procedure.id}>
                    {procedure.title}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        {selectedProcedures.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium">Procédures sélectionnées :</h4>
            <div className="flex flex-wrap gap-2">
              {selectedProcedureData.map((procedure) => (
                <Badge key={procedure.id} variant="secondary" className="gap-2">
                  {procedure.title}
                  <X 
                    className="w-3 h-3 cursor-pointer" 
                    onClick={() => removeProcedure(procedure.id)}
                  />
                </Badge>
              ))}
            </div>
          </div>
        )}

        {selectedProcedures.length >= 2 && (
          <Button 
            onClick={() => setShowComparison(true)}
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            <GitCompare className="w-4 h-4 mr-2" />
            Comparer les procédures
          </Button>
        )}

        {showComparison && selectedProcedureData.length >= 2 && (
          <div className="mt-6 space-y-4">
            <h4 className="font-bold text-lg">Tableau comparatif</h4>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-3 text-left">Critère</th>
                    {selectedProcedureData.map((procedure) => (
                      <th key={procedure.id} className="border border-gray-300 p-3 text-left">
                        {procedure.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Durée
                    </td>
                    {selectedProcedureData.map((procedure) => (
                      <td key={procedure.id} className="border border-gray-300 p-3">
                        {procedure.duration}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">
                      💰 Coût
                    </td>
                    {selectedProcedureData.map((procedure) => (
                      <td key={procedure.id} className="border border-gray-300 p-3">
                        {procedure.cost}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">
                      <FileText className="w-4 h-4 inline mr-1" />
                      Documents
                    </td>
                    {selectedProcedureData.map((procedure) => (
                      <td key={procedure.id} className="border border-gray-300 p-3">
                        {procedure.documents} documents
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">
                      <Building className="w-4 h-4 inline mr-1" />
                      Institution
                    </td>
                    {selectedProcedureData.map((procedure) => (
                      <td key={procedure.id} className="border border-gray-300 p-3">
                        {procedure.institution}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">
                      📊 Complexité
                    </td>
                    {selectedProcedureData.map((procedure) => (
                      <td key={procedure.id} className="border border-gray-300 p-3">
                        <Badge className={getComplexityColor(procedure.complexity)}>
                          {procedure.complexity}
                        </Badge>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
