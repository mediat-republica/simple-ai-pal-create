import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  PenTool, 
  FileText, 
  Download, 
  Save, 
  Copy, 
  Wand2, 
  BookOpen,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  ClipboardList
} from "lucide-react";
import { ConsolidatedTextsSection } from "@/components/writing/ConsolidatedTextsSection";
import { ConsolidatedProceduresSection } from "@/components/writing/ConsolidatedProceduresSection";

interface EnhancedAssistedWritingSectionProps {
  language?: string;
}

export function EnhancedAssistedWritingSection({ language = "fr" }: EnhancedAssistedWritingSectionProps) {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [documentContent, setDocumentContent] = useState("");
  const [activeTab, setActiveTab] = useState("templates");

  const modelsAlgeriens = [
    {
      id: "contrat-bail",
      nom: "Contrat de bail d'habitation",
      categorie: "Contrats",
      description: "Modèle de contrat de bail conforme au droit algérien",
      clauses: ["Identification des parties", "Description du bien", "Durée et loyer", "Obligations des parties"],
      exemple: "CONTRAT DE BAIL D'HABITATION\n\nEntre les soussignés :\nM./Mme [NOM BAILLEUR], demeurant à [ADRESSE], ci-après dénommé(e) « le Bailleur »\n\net\n\nM./Mme [NOM LOCATAIRE], demeurant à [ADRESSE], ci-après dénommé(e) « le Locataire »\n\nIL A ÉTÉ CONVENU CE QUI SUIT :\n\nArticle 1 - Objet\nLe Bailleur donne en location au Locataire un logement situé à [ADRESSE COMPLETE], d'une superficie de [X] m²..."
    },
    {
      id: "statuts-sarl",
      nom: "Statuts de SARL",
      categorie: "Sociétés",
      description: "Statuts types pour création de SARL en Algérie",
      clauses: ["Dénomination sociale", "Objet social", "Capital social", "Gérance"],
      exemple: "STATUTS DE LA SOCIÉTÉ À RESPONSABILITÉ LIMITÉE\n« [DENOMINATION SOCIALE] »\n\nTITRE I - CONSTITUTION - DENOMINATION - OBJET - SIEGE - DUREE\n\nArticle 1 - Constitution\nIl est formé entre les propriétaires des parts ci-après créées et de celles qui pourraient l'être ultérieurement, une société à responsabilité limitée qui sera régie par les lois et règlements en vigueur en Algérie..."
    },
    {
      id: "requete-tribunal",
      nom: "Requête introductive d'instance",
      categorie: "Procédures",
      description: "Modèle de requête devant les tribunaux algériens",
      clauses: ["Identification des parties", "Exposé des faits", "Prétentions", "Pièces jointes"],
      exemple: "REQUÊTE INTRODUCTIVE D'INSTANCE\n\nMonsieur le Président du Tribunal de [LIEU],\n\nJ'ai l'honneur de vous exposer ce qui suit :\n\nIDENTIFICATION DU DEMANDEUR :\nM./Mme [NOM PRÉNOM], né(e) le [DATE] à [LIEU], demeurant à [ADRESSE COMPLÈTE], profession [PROFESSION]..."
    },
    {
      id: "testament",
      nom: "Testament olographe",
      categorie: "Succession",
      description: "Modèle de testament conforme au Code de la famille algérien",
      clauses: ["Identification du testateur", "Dispositions testamentaires", "Signature et date"],
      exemple: "TESTAMENT OLOGRAPHE\n\nJe soussigné(e) [NOM PRÉNOM COMPLET], né(e) le [DATE] à [LIEU DE NAISSANCE], demeurant à [ADRESSE COMPLÈTE], sain(e) de corps et d'esprit, établis par les présentes mes dernières volontés :\n\nPREMIÈREMENT : Je révoque tous testaments antérieurs..."
    }
  ];

  const suggestionsIA = [
    {
      type: "Amélioration",
      texte: "Considérez d'ajouter une clause de résiliation anticipée",
      niveau: "suggestion",
      icone: Lightbulb
    },
    {
      type: "Conformité",
      texte: "Cette clause respecte l'article 467 du Code civil algérien",
      niveau: "valide",
      icone: CheckCircle
    },
    {
      type: "Attention",
      texte: "Vérifiez la compatibilité avec la loi n° 22-01 sur l'investissement",
      niveau: "attention",
      icone: AlertTriangle
    }
  ];

  const referencesjuridiques = [
    {
      titre: "Code civil algérien - Article 467",
      contenu: "Le bail ne peut excéder trois années pour les immeubles bâtis et dix années pour les terres agricoles.",
      pertinence: "Haute"
    },
    {
      titre: "Loi n° 07-02 du 27 février 2007 - Article 15",
      contenu: "Toute société commerciale doit avoir un capital minimum fixé par la loi.",
      pertinence: "Moyenne"
    },
    {
      titre: "Code de procédure civile - Article 18",
      contenu: "La requête introductive d'instance doit contenir l'indication précise de l'objet de la demande.",
      pertinence: "Haute"
    }
  ];

  const handleTemplateSelect = (templateId: string) => {
    const template = modelsAlgeriens.find(t => t.id === templateId);
    if (template) {
      setSelectedTemplate(templateId);
      setDocumentContent(template.exemple);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
          <PenTool className="w-8 h-8 text-teal-600" />
          Rédaction Assistée Algérienne
        </h2>
        <p className="text-gray-600 text-lg">
          Outils de rédaction juridique avec modèles conformes au droit algérien
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="templates">Modèles</TabsTrigger>
          <TabsTrigger value="editor">Éditeur</TabsTrigger>
          <TabsTrigger value="suggestions">Suggestions IA</TabsTrigger>
          <TabsTrigger value="references">Références</TabsTrigger>
          <TabsTrigger value="consolidated-texts">Textes consolidés</TabsTrigger>
          <TabsTrigger value="consolidated-procedures">Procédures consolid.</TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modelsAlgeriens.map((modele) => (
              <Card key={modele.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-teal-600" />
                    {modele.nom}
                  </CardTitle>
                  <Badge variant="outline">{modele.categorie}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{modele.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <h4 className="font-medium text-sm">Clauses incluses :</h4>
                    <div className="flex flex-wrap gap-1">
                      {modele.clauses.map((clause, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {clause}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-teal-600 hover:bg-teal-700"
                      onClick={() => handleTemplateSelect(modele.id)}
                    >
                      Utiliser ce modèle
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="editor" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Éditeur de document</CardTitle>
                    <div className="flex gap-2">
                      <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                        <SelectTrigger className="w-48">
                          <SelectValue placeholder="Choisir un modèle" />
                        </SelectTrigger>
                        <SelectContent>
                          {modelsAlgeriens.map((modele) => (
                            <SelectItem key={modele.id} value={modele.id}>
                              {modele.nom}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button variant="outline" size="sm">
                        <Wand2 className="w-4 h-4 mr-2" />
                        IA
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Commencez à rédiger votre document juridique..."
                    value={documentContent}
                    onChange={(e) => setDocumentContent(e.target.value)}
                    className="min-h-96 font-mono text-sm"
                  />
                  
                  <div className="flex justify-between mt-4">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Copy className="w-4 h-4 mr-2" />
                        Copier
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        PDF
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Word
                      </Button>
                    </div>
                    <Button className="bg-teal-600 hover:bg-teal-700">
                      <Save className="w-4 h-4 mr-2" />
                      Enregistrer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Informations du document</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="titre">Titre du document</Label>
                    <Input id="titre" placeholder="Ex: Contrat de location..." />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="type">Type de document</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="contrat">Contrat</SelectItem>
                        <SelectItem value="requete">Requête</SelectItem>
                        <SelectItem value="statuts">Statuts</SelectItem>
                        <SelectItem value="testament">Testament</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="parties">Parties concernées</Label>
                    <Textarea id="parties" placeholder="Nom des parties..." rows={3} />
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    <p>Mots: {documentContent.split(/\s+/).filter(word => word.length > 0).length}</p>
                    <p>Caractères: {documentContent.length}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="suggestions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="w-5 h-5 text-teal-600" />
                Suggestions d'amélioration par IA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {suggestionsIA.map((suggestion, index) => {
                  const IconComponent = suggestion.icone;
                  const colorClass = 
                    suggestion.niveau === "valide" ? "text-green-600" :
                    suggestion.niveau === "attention" ? "text-orange-600" :
                    "text-blue-600";
                  
                  return (
                    <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                      <IconComponent className={`w-5 h-5 ${colorClass} mt-0.5`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{suggestion.type}</span>
                          <Badge variant="outline" className="text-xs">
                            {suggestion.niveau}
                          </Badge>
                        </div>
                        <p className="text-gray-600">{suggestion.texte}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Appliquer
                      </Button>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="references" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-teal-600" />
                Références juridiques algériennes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {referencesjuridiques.map((reference, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{reference.titre}</h4>
                      <Badge 
                        className={
                          reference.pertinence === "Haute" ? "bg-green-100 text-green-800" :
                          reference.pertinence === "Moyenne" ? "bg-yellow-100 text-yellow-800" :
                          "bg-gray-100 text-gray-800"
                        }
                      >
                        {reference.pertinence}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{reference.contenu}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Copy className="w-4 h-4 mr-2" />
                        Citer
                      </Button>
                      <Button variant="outline" size="sm">
                        Voir l'article complet
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="consolidated-texts" className="space-y-4">
          <ConsolidatedTextsSection />
        </TabsContent>

        <TabsContent value="consolidated-procedures" className="space-y-4">
          <ConsolidatedProceduresSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}
