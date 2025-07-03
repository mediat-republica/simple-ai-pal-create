
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function ProcedureTrackingTab() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Suivi de vos demandes</CardTitle>
          <CardDescription>
            Consultez l'état d'avancement de vos procédures en cours
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                id: "REF-2024-001",
                procedure: "Permis de construire",
                status: "En cours d'instruction",
                date: "15/01/2024",
                progress: 60,
                nextStep: "Validation technique"
              },
              {
                id: "REF-2024-002",
                procedure: "Immatriculation CNRC",
                status: "Documents reçus",
                date: "12/01/2024",  
                progress: 30,
                nextStep: "Vérification des pièces"
              },
              {
                id: "REF-2024-003",
                procedure: "Déclaration fiscale",
                status: "Traitement terminé",
                date: "10/01/2024",
                progress: 100,
                nextStep: "Complété"
              }
            ].map((request, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">{request.procedure}</h4>
                    <p className="text-sm text-gray-500">Référence: {request.id}</p>
                  </div>
                  <Badge 
                    variant={request.progress === 100 ? "default" : "secondary"}
                    className={request.progress === 100 ? "bg-green-100 text-green-800" : ""}
                  >
                    {request.status}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progression</span>
                    <span>{request.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-emerald-600 h-2 rounded-full transition-all"
                      style={{ width: `${request.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                  <span>Prochaine étape: {request.nextStep}</span>
                  <span>{request.date}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
