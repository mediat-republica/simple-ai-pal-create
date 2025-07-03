
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building2, MapPin, Phone, Mail, Clock, Users } from 'lucide-react';

export function TribunauxTab() {
  const tribunaux = [
    {
      id: 1,
      name: "Cour Suprême d'Algérie",
      type: "Cour Suprême",
      address: "Place Bir Hakem, Alger",
      phone: "+213 21 59 20 31",
      email: "contact@cour-supreme.dz",
      specialties: ["Civil", "Pénal", "Administratif"],
      horaires: "08h00 - 16h00"
    },
    {
      id: 2,
      name: "Conseil d'État",
      type: "Juridiction administrative",
      address: "Avenue Franklin Roosevelt, Alger",
      phone: "+213 21 74 85 96",
      email: "contact@conseil-etat.dz",
      specialties: ["Contentieux administratif", "Référé"],
      horaires: "08h30 - 16h30"
    },
    {
      id: 3,
      name: "Tribunal de première instance d'Alger",
      type: "Tribunal",
      address: "Rue Larbi Ben M'hidi, Alger Centre",
      phone: "+213 21 63 47 28",
      email: "tpi.alger@justice.dz",
      specialties: ["Civil", "Commercial", "Pénal"],
      horaires: "08h00 - 16h00"
    },
    {
      id: 4,
      name: "Cour d'Alger",
      type: "Cour d'appel",
      address: "Place du 1er Mai, Alger",
      phone: "+213 21 73 52 41",
      email: "cour.alger@justice.dz",
      specialties: ["Appel civil", "Appel pénal", "Appel commercial"],
      horaires: "08h00 - 16h00"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Cour Suprême": return "bg-red-100 text-red-800";
      case "Juridiction administrative": return "bg-blue-100 text-blue-800";
      case "Tribunal": return "bg-green-100 text-green-800";
      case "Cour d'appel": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tribunaux.map((tribunal) => (
          <Card key={tribunal.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-2">
                <Badge className={getTypeColor(tribunal.type)}>
                  {tribunal.type}
                </Badge>
              </div>
              <CardTitle className="text-lg flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-600" />
                {tribunal.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{tribunal.address}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{tribunal.phone}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{tribunal.email}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{tribunal.horaires}</span>
              </div>

              <div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Users className="w-4 h-4" />
                  <span>Spécialités:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {tribunal.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full mt-3">
                <Building2 className="w-4 h-4 mr-1" />
                Voir détails
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
