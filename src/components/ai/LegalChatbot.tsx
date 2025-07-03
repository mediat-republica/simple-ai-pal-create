
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Bot, 
  Send, 
  User, 
  Clock,
  FileText,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  message: string;
  timestamp: Date;
  suggestions?: string[];
}

const initialMessages: ChatMessage[] = [
  {
    id: '1',
    type: 'bot',
    message: 'Bonjour ! Je suis votre assistant juridique spécialisé. Je peux vous aider avec vos questions sur les procédures administratives, les textes juridiques et bien plus encore. Comment puis-je vous aider aujourd\'hui ?',
    timestamp: new Date(),
    suggestions: [
      'Comment créer une SARL ?',
      'Quels documents pour un permis de construire ?',
      'Délai de création d\'entreprise',
      'Coût d\'une procédure administrative'
    ]
  }
];

const specializations = [
  { id: 'commercial', name: 'Droit Commercial', color: 'bg-blue-100 text-blue-800' },
  { id: 'administratif', name: 'Droit Administratif', color: 'bg-green-100 text-green-800' },
  { id: 'fiscal', name: 'Droit Fiscal', color: 'bg-purple-100 text-purple-800' },
  { id: 'social', name: 'Droit Social', color: 'bg-orange-100 text-orange-800' },
  { id: 'civil', name: 'Droit Civil', color: 'bg-pink-100 text-pink-800' }
];

export function LegalChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>('');
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulation de réponse du bot
    setTimeout(() => {
      const botResponse = generateBotResponse(message);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userMessage: string): ChatMessage => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('sarl') || message.includes('création') || message.includes('entreprise')) {
      return {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        message: `Pour créer une SARL en Algérie, voici les principales étapes :

📋 **Documents requis :**
• Statuts de la société (4 exemplaires)
• Certificat de blocage de capital
• Déclaration de souscription et de versement
• Attestation de domiciliation

⏱️ **Délai moyen :** 15-20 jours ouvrables

💰 **Coût estimé :** 50,000 DA (frais d'enregistrement et publications)

🏢 **Institution :** Centre National du Registre de Commerce (CNRC)

Souhaitez-vous plus de détails sur une étape particulière ?`,
        timestamp: new Date(),
        suggestions: [
          'Détails sur les statuts',
          'Comment bloquer le capital',
          'Où faire la domiciliation',
          'Calculer les frais exacts'
        ]
      };
    }

    if (message.includes('permis') || message.includes('construire')) {
      return {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        message: `Pour obtenir un permis de construire :

📋 **Documents principaux :**
• Plans architecturaux (4 exemplaires)
• Acte de propriété ou bail
• Certificat d'urbanisme
• Étude d'impact (si nécessaire)

⏱️ **Délai :** 2-3 mois selon la complexité

🏛️ **Où déposer :** APC (Assemblée Populaire Communale)

⚠️ **Important :** Vérifiez d'abord les règles d'urbanisme de votre commune.`,
        timestamp: new Date(),
        suggestions: [
          'Types de constructions',
          'Délais par wilaya',
          'Coût du permis',
          'Recours en cas de refus'
        ]
      };
    }

    // Réponse par défaut
    return {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      message: `Je comprends votre question. Pouvez-vous être plus spécifique ? Je peux vous aider avec :

• **Procédures administratives** (création d'entreprise, permis, etc.)
• **Textes juridiques** (lois, décrets, arrêtés)
• **Délais et coûts** des procédures
• **Documents requis** pour chaque démarche
• **Institutions compétentes**

N'hésitez pas à me poser une question plus précise !`,
      timestamp: new Date(),
      suggestions: [
        'Créer une entreprise',
        'Obtenir un document officiel',
        'Consulter une loi',
        'Calculer des délais'
      ]
    };
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion);
  };

  return (
    <div className="space-y-4">
      {/* Spécialisations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-blue-600" />
            Assistant Juridique IA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Sélectionnez un domaine de spécialisation :</p>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec) => (
                  <Badge
                    key={spec.id}
                    className={`cursor-pointer ${
                      selectedSpecialization === spec.id 
                        ? spec.color + ' ring-2 ring-blue-400' 
                        : spec.color
                    }`}
                    onClick={() => setSelectedSpecialization(
                      selectedSpecialization === spec.id ? '' : spec.id
                    )}
                  >
                    {spec.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chat Interface */}
      <Card>
        <CardContent className="p-0">
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-2 max-w-[80%] ${
                  msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    msg.type === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {msg.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  
                  <div className={`rounded-lg p-3 ${
                    msg.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="whitespace-pre-line">{msg.message}</p>
                    <p className={`text-xs mt-1 ${
                      msg.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {msg.timestamp.toLocaleTimeString('fr-FR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                    
                    {msg.suggestions && msg.type === 'bot' && (
                      <div className="mt-3 space-y-1">
                        <p className="text-xs text-gray-500">Suggestions :</p>
                        <div className="flex flex-wrap gap-1">
                          {msg.suggestions.map((suggestion, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              className="h-6 text-xs"
                              onClick={() => handleSuggestionClick(suggestion)}
                            >
                              {suggestion}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Posez votre question juridique..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputMessage)}
                className="flex-1"
              />
              <Button onClick={() => sendMessage(inputMessage)} disabled={!inputMessage.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
