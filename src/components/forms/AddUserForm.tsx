
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { UserPlus, Mail, Phone, Building, Shield, Key } from "lucide-react";

interface AddUserFormProps {
  onClose: () => void;
  onSubmit: (userData: any) => void;
}

export function AddUserForm({ onClose, onSubmit }: AddUserFormProps) {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    institution: "",
    role: "",
    departement: "",
    notes: "",
    actif: true,
    emailVerifie: false,
    telephoneVerifie: false,
    motDePasseTemporaire: true
  });

  const roles = [
    "Administrateur",
    "Juriste Senior", 
    "Magistrat",
    "Responsable Juridique",
    "Consultant",
    "Analyste Juridique",
    "Secrétaire Juridique"
  ];

  const institutions = [
    "Ministère de la Justice",
    "Conseil d'État",
    "Cour Suprême",
    "Ministère de l'Intérieur",
    "Ministère des Finances",
    "Tribunal Administratif",
    "Cour des Comptes",
    "Conseil Constitutionnel"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getRoleColor = (role: string) => {
    const colors = {
      "Administrateur": "bg-red-100 text-red-800",
      "Juriste Senior": "bg-blue-100 text-blue-800",
      "Magistrat": "bg-purple-100 text-purple-800",
      "Responsable Juridique": "bg-teal-100 text-teal-800",
      "Consultant": "bg-orange-100 text-orange-800",
      "Analyste Juridique": "bg-green-100 text-green-800",
      "Secrétaire Juridique": "bg-gray-100 text-gray-800"
    };
    return colors[role as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <Card className="border-0 shadow-none">
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <UserPlus className="w-6 h-6 text-teal-600" />
                Ajouter un nouvel utilisateur
              </CardTitle>
              <Button variant="ghost" onClick={onClose}>
                ✕
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Informations personnelles */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-teal-600" />
                  Informations personnelles
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom *</Label>
                    <Input
                      id="nom"
                      value={formData.nom}
                      onChange={(e) => handleInputChange("nom", e.target.value)}
                      placeholder="Nom de famille"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="prenom">Prénom *</Label>
                    <Input
                      id="prenom"
                      value={formData.prenom}
                      onChange={(e) => handleInputChange("prenom", e.target.value)}
                      placeholder="Prénom"
                      required
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Contact */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-teal-600" />
                  Informations de contact
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Adresse email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="utilisateur@justice.dz"
                      required
                    />
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.emailVerifie}
                        onCheckedChange={(checked) => handleInputChange("emailVerifie", checked)}
                      />
                      <Label className="text-sm">Email vérifié</Label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="telephone">Téléphone</Label>
                    <Input
                      id="telephone"
                      value={formData.telephone}
                      onChange={(e) => handleInputChange("telephone", e.target.value)}
                      placeholder="+213 555 123 456"
                    />
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={formData.telephoneVerifie}
                        onCheckedChange={(checked) => handleInputChange("telephoneVerifie", checked)}
                      />
                      <Label className="text-sm">Téléphone vérifié</Label>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Institution et rôle */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Building className="w-5 h-5 text-teal-600" />
                  Informations professionnelles
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution *</Label>
                    <Select value={formData.institution} onValueChange={(value) => handleInputChange("institution", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner une institution" />
                      </SelectTrigger>
                      <SelectContent>
                        {institutions.map((institution) => (
                          <SelectItem key={institution} value={institution}>
                            {institution}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="departement">Département</Label>
                    <Input
                      id="departement"
                      value={formData.departement}
                      onChange={(e) => handleInputChange("departement", e.target.value)}
                      placeholder="Direction, service, bureau..."
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="role">Rôle dans le système *</Label>
                  <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un rôle" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((role) => (
                        <SelectItem key={role} value={role}>
                          <div className="flex items-center gap-2">
                            <span>{role}</span>
                            <Badge className={getRoleColor(role)} variant="outline">
                              {role}
                            </Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              {/* Paramètres de compte */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Key className="w-5 h-5 text-teal-600" />
                  Paramètres de compte
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Compte actif</h4>
                      <p className="text-sm text-gray-600">L'utilisateur peut se connecter au système</p>
                    </div>
                    <Switch
                      checked={formData.actif}
                      onCheckedChange={(checked) => handleInputChange("actif", checked)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Mot de passe temporaire</h4>
                      <p className="text-sm text-gray-600">L'utilisateur devra changer son mot de passe à la première connexion</p>
                    </div>
                    <Switch
                      checked={formData.motDePasseTemporaire}
                      onCheckedChange={(checked) => handleInputChange("motDePasseTemporaire", checked)}
                    />
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes">Notes (optionnel)</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  placeholder="Informations complémentaires sur l'utilisateur..."
                  rows={3}
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <Button
                  type="submit"
                  className="bg-teal-600 hover:bg-teal-700 flex-1"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Créer l'utilisateur
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                >
                  Annuler
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
