
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Network, 
  FileText, 
  Shield, 
  Globe, 
  Link2
} from 'lucide-react';
import { ExportMultiFormatsSection } from './integrations/ExportMultiFormatsSection';
import { GDPRComplianceSection } from './integrations/GDPRComplianceSection';
import { InternationalStandardsSection } from './integrations/InternationalStandardsSection';
import { BlockchainAuthSection } from './integrations/BlockchainAuthSection';

interface IntegrationsInteroperabilitySectionProps {
  language?: string;
}

export function IntegrationsInteroperabilitySection({ language = "fr" }: IntegrationsInteroperabilitySectionProps) {
  const [activeTab, setActiveTab] = useState('export');

  const tabs = [
    {
      id: 'export',
      label: 'Export Multi-formats',
      icon: FileText,
      component: ExportMultiFormatsSection
    },
    {
      id: 'gdpr',
      label: 'Conformité GDPR',
      icon: Shield,
      component: GDPRComplianceSection
    },
    {
      id: 'standards',
      label: 'Standards Juridiques',
      icon: Globe,
      component: InternationalStandardsSection
    },
    {
      id: 'blockchain',
      label: 'Blockchain Auth',
      icon: Link2,
      component: BlockchainAuthSection
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-gray-50 text-blue-600">
            <Network className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Intégrations et Interopérabilité</h2>
        </div>
        <p className="text-gray-600 max-w-4xl mx-auto">
          Configuration avancée pour l'intégration avec des systèmes externes et la conformité aux standards
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <TabsTrigger key={tab.id} value={tab.id} className="flex items-center gap-2">
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {tabs.map((tab) => {
          const Component = tab.component;
          return (
            <TabsContent key={tab.id} value={tab.id} className="space-y-6">
              <Component language={language} />
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
