
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { UserCheck, MapPin, Phone, Mail, GraduationCap, Users } from 'lucide-react';

export function AvocatsTab() {
  const avocats = [
    {
      id: 1,
      name: "Maître Ahmed Benaissa",
      specialties: ["Droit des affaires", "Droit commercial"],
      barreau: "Barreau d'Alger",
      address: "15 Rue Didouche Mourad, Alger",
      phone: "+213 21 63 85 47",
      email: "a.benaissa@avocat-alger.dz",
      experience: "15 ans",
      languages: ["Arabe", "Français", "Anglais"]
    },
    {
      id: 2,
      name: "Maître Fatima Khelifi",
      specialties: ["Droit de la famille", "Droit civil"],
      barreau: "Barreau d'Oran",
      address: "28 Boulevard de la Révolution, Oran",
      phone: "+213 41 32 67 89",
      email: "f.khelifi@avocat-oran.dz",
      experience: "12 ans",
      languages: ["Arabe", "Français"]
    },
    {
      id: 3,
      name: "Maître Omar Ziani",
      specialties: ["Droit pénal", "Droit de la défense"],
      barreau: "Barreau de Constantine",
      address: "7 Rue Larbi Ben M'hidi, Constantine",
      phone: "+213 31 94 52 36",
      email: "o.ziani@avocat-constantine.dz",
      experience: "20 ans",
      languages: ["Arabe", "Français", "Anglais"]
    },
    {
      id: 4,
      name: "Maître Samira Bouali",
      specialties: ["Droit du travail", "Droit social"],
      barreau: "Barreau d'Annaba",
      address: "12 Avenue de l'ALN, Annaba",
      phone: "+213 38 86 74 12",
      email: "s.bouali@avocat-annaba.dz",
      experience: "8 ans",
      languages: ["Arabe", "Français"]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {avocats.map((avocat) => (
          <Card key={avocat.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-2">
                <Badge className="bg-blue-100 text-blue-800">
                  {avocat.barreau}
                </Badge>
              </div>
              <CardTitle className="text-lg flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-emerald-600" />
                {avocat.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{avocat.address}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{avocat.phone}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{avocat.email}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <GraduationCap className="w-4 h-4" />
                <span>Expérience: {avocat.experience}</span>
              </div>

              <div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Users className="w-4 h-4" />
                  <span>Spécialités:</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {avocat.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-sm text-gray-600 mb-1">Langues:</div>
                <div className="flex flex-wrap gap-1">
                  {avocat.languages.map((language, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full mt-3">
                <UserCheck className="w-4 h-4 mr-1" />
                Contacter
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
