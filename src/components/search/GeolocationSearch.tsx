
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Search, Filter } from 'lucide-react';

const wilayas = [
  'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar',
  'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi Ouzou', 'Alger',
  'Djelfa', 'Jijel', 'Sétif', 'Saïda', 'Skikda', 'Sidi Bel Abbès', 'Annaba', 'Guelma',
  'Constantine', 'Médéa', 'Mostaganem', 'MSila', 'Mascara', 'Ouargla', 'Oran', 'El Bayadh',
  'Illizi', 'Bordj Bou Arréridj', 'Boumerdès', 'El Tarf', 'Tindouf', 'Tissemsilt', 'El Oued',
  'Khenchela', 'Souk Ahras', 'Tipaza', 'Mila', 'Aïn Defla', 'Naâma', 'Aïn Témouchent',
  'Ghardaïa', 'Relizane', 'Timimoun', 'Bordj Badji Mokhtar', 'Ouled Djellal', 'Béni Abbès',
  'In Salah', 'In Guezzam', 'Touggourt', 'Djanet', 'El MGhair', 'El Meniaa'
];

export function GeolocationSearch() {
  const [selectedWilaya, setSelectedWilaya] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [procedureType, setProcedureType] = useState('');

  const handleSearch = () => {
    console.log('Recherche géolocalisée:', { selectedWilaya, searchQuery, procedureType });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-emerald-600" />
          Recherche par géolocalisation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Wilaya</label>
            <Select value={selectedWilaya} onValueChange={setSelectedWilaya}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner une wilaya" />
              </SelectTrigger>
              <SelectContent>
                {wilayas.map((wilaya) => (
                  <SelectItem key={wilaya} value={wilaya}>
                    {wilaya}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Type de procédure</label>
            <Select value={procedureType} onValueChange={setProcedureType}>
              <SelectTrigger>
                <SelectValue placeholder="Type de procédure" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="civil">Civil</SelectItem>
                <SelectItem value="administratif">Administratif</SelectItem>
                <SelectItem value="fiscal">Fiscal</SelectItem>
                <SelectItem value="social">Social</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Recherche</label>
            <Input
              placeholder="Mots-clés..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <Button onClick={handleSearch} className="w-full bg-emerald-600 hover:bg-emerald-700">
          <Search className="w-4 h-4 mr-2" />
          Rechercher par localisation
        </Button>
        
        {selectedWilaya && (
          <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
            <h4 className="font-medium text-emerald-800 mb-2">
              Procédures disponibles à {selectedWilaya}
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Création d'entreprise</span>
                <span className="text-emerald-600 font-medium">15-20 jours</span>
              </div>
              <div className="flex justify-between">
                <span>Permis de construire</span>
                <span className="text-emerald-600 font-medium">30-45 jours</span>
              </div>
              <div className="flex justify-between">
                <span>Certificat de résidence</span>
                <span className="text-emerald-600 font-medium">3-5 jours</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
