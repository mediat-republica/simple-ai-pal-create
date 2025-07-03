
import { NomenclatureSection } from "./configuration/NomenclatureSection";
import { ComplementaryResourcesSection } from "./configuration/ComplementaryResourcesSection";
import { DataManagementSection } from "./configuration/DataManagementSection";
import { AlertsNotificationsSection } from "./configuration/AlertsNotificationsSection";
import { UserManagementSection } from "./configuration/UserManagementSection";
import { SecuritySection } from "./configuration/SecuritySection";

interface ConfigurationSectionsProps {
  section: string;
  language?: string;
}

export function ConfigurationSections({ section, language = "fr" }: ConfigurationSectionsProps) {
  const getSectionContent = () => {
    switch (section) {
      case "nomenclature":
        return <NomenclatureSection language={language} />;
      
      case "complementary-resources":
        return <ComplementaryResourcesSection language={language} />;
      
      case "data-management":
        return <DataManagementSection language={language} />;
      
      case "alerts-notifications":
        return <AlertsNotificationsSection language={language} />;
      
      case "user-management":
        return <UserManagementSection language={language} />;
      
      case "security":
        return <SecuritySection language={language} />;
      
      default:
        return <div>Section non trouvée</div>;
    }
  };

  return getSectionContent();
}
