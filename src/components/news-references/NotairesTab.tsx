
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileCheck, MapPin, Phone, Mail, Clock, Users } from 'lucide-react';

export function NotairesTab() {
  const notaires = [
    {
      id: 1,
      name: "Maître Rachid Hamidi",
      office: "Étude Notariale Hamidi",
      address: "25 Boulevard Mohamed V, Alger",
      phone: "+213 21 74 68 93",
      email: "r.hamidi@notaire-alger.dz",
      specialties: ["Immobilier", "Successions", "Contrats"],
      horaires: "08h30 - 17h00",
      chambre: "Chambre Régionale des Notaires d'Alger"
    },
    {
      id: 2,
      name: "Maître Leila Boudali",
      office: "Cabinet Notarial Boudali",
      address: "18 Rue de la République, Oran",
      phone: "+213 41 39 52 74",
      email: "l.boudali@notaire-oran.dz",
      specialties: ["Droit de la famille", "Immobilier", "Entreprises"],
      horaires: "09h00 - 16h30",
      chambre: "Chambre Régionale des Notaires d'Oran"
    },
    {
      id: 3,
      name: "Maître Youcef Mansouri",
      office: "Étude Mansouri & Associés",
      address: "8 Avenue Aouati Mostefa, Constantine",
      phone: "+213 31 92 46 83",
      email: "y.mansouri@notaire-constantine.dz",
      specialties: ["Successions", "Contrats commerciaux", "Immobilier"],
      horaires: "08h00 - 17h30",
      chambre: "Chambre Régionale des Notaires de Constantine"
    },
    {
      id: 4,
      name: "Maître Amina Cherif",
      office: "Cabinet Notarial Cherif",
      address: "14 Rue du 8 Mai 1945, Sétif",
      phone: "+213 36 84 73 65",
      email: "a.cherif@notaire-setif.dz",
      specialties: ["Immobilier", "Contrats", "Authentifications"],
      horaires: "08h30 - 16h00",
      chambre: "Chambre Régionale des Notaires de Sétif"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notaires.map((notaire) => (
          <Card key={notaire.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-green-100 text-green-800">
                  Notaire
                </Badge>
              </div>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-emerald-600" />
                {notaire.name}
              </CardTitle>
              <p className="text-sm text-gray-600">{notaire.office}</p>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{notaire.address}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{notaire.phone}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{notaire.email}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{notaire.horaires}</span>
              </div>

              <div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Users className="w-4 h-4" />
                  <span>Spécialités:</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {notaire.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="text-xs text-gray-500">
                {notaire.chambre}
              </div>

              <Button variant="outline" size="sm" className="w-full mt-3">
                <FileCheck className="w-4 h-4 mr-1" />
                Prendre rendez-vous
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
