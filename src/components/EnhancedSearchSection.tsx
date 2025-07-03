
import { useState } from "react";
import { 
  Search, 
  MapPin, 
  Bot, 
  Bookmark,
  TrendingUp
} from "lucide-react";
import { SavedSearchesEnhanced } from "./SavedSearchesEnhanced";
import { SectionTabsNavigation } from "./common/SectionTabsNavigation";
import { SearchCard } from "./common/SearchCard";
import { SavedItemsList } from "./common/SavedItemsList";
import { PopularItemsList } from "./common/PopularItemsList";

export function EnhancedSearchSection() {
  const [activeTab, setActiveTab] = useState("search");

  if (activeTab === "saved-searches") {
    return <SavedSearchesEnhanced />;
  }

  const tabs = [
    { id: "search", label: "Recherche" },
    { id: "saved-searches", label: "Recherches sauvegardées", count: 18 }
  ];

  const searchCards = [
    {
      title: "Recherche avancée",
      description: "Recherche multicritères avec filtres avancés pour textes juridiques",
      icon: Search,
      buttonText: "Recherche avancée",
      buttonColor: "blue" as const
    },
    {
      title: "Recherche géographique",
      description: "Recherche par wilaya et juridiction territoriale algérienne",
      icon: MapPin,
      buttonText: "Recherche par zone",
      buttonColor: "emerald" as const
    },
    {
      title: "Recherche sémantique",
      description: "Intelligence artificielle pour comprendre le contexte juridique",
      icon: Bot,
      buttonText: "Recherche IA",
      buttonColor: "purple" as const
    }
  ];

  const savedLegalSearches = [
    {
      id: 1,
      title: "Code civil algérien - Droit de la famille",
      date: "15 jan 2025",
      results: 127,
      category: "Droit civil",
      lastAccessed: "Il y a 1 jour",
      wilaya: "National"
    },
    {
      id: 2,
      title: "Loi de finances 2025 - Dispositions fiscales",
      date: "14 jan 2025", 
      results: 89,
      category: "Droit fiscal",
      lastAccessed: "Il y a 2 jours",
      wilaya: "National"
    },
    {
      id: 3,
      title: "Règlement urbanisme - Wilaya d'Alger",
      date: "12 jan 2025",
      results: 56,
      category: "Urbanisme",
      lastAccessed: "Il y a 3 jours",
      wilaya: "Alger"
    },
    {
      id: 4,
      title: "Code du travail - Contrats de travail",
      date: "10 jan 2025",
      results: 134,
      category: "Droit social", 
      lastAccessed: "Il y a 5 jours",
      wilaya: "National"
    }
  ];

  const popularItems = [
    {
      query: "Code civil algérien",
      count: "28,456 recherches",
      category: "Droit civil",
      wilaya: "National", 
      trend: "+15%",
      description: "Ordonnance 75-58 modifiée et complétée"
    },
    {
      query: "Loi de finances 2025",
      count: "22,134 recherches",
      category: "Droit fiscal",
      wilaya: "National",
      trend: "+35%",
      description: "Nouvelles dispositions fiscales et budgétaires"
    },
    {
      query: "Code du travail",
      count: "19,876 recherches", 
      category: "Droit social",
      wilaya: "National",
      trend: "+8%",
      description: "Loi 90-11 relative aux relations de travail"
    },
    {
      query: "Code pénal algérien",
      count: "17,654 recherches",
      category: "Droit pénal",
      wilaya: "National",
      trend: "+12%",
      description: "Ordonnance 66-156 du code pénal"
    },
    {
      query: "Code de procédure civile",
      count: "15,432 recherches", 
      category: "Procédure",
      wilaya: "National",
      trend: "+18%",
      description: "Loi 08-09 du code de procédure civile"
    },
    {
      query: "Statut général de la fonction publique",
      count: "12,987 recherches",
      category: "Fonction publique",
      wilaya: "National",
      trend: "+22%",
      description: "Ordonnance 06-03 portant statut général"
    },
    {
      query: "Code de l'investissement",
      count: "11,543 recherches",
      category: "Économique", 
      wilaya: "National",
      trend: "+28%",
      description: "Loi 22-18 relative à l'investissement"
    },
    {
      query: "Code des marchés publics",
      count: "9,876 recherches",
      category: "Marchés publics",
      wilaya: "National",
      trend: "+16%",
      description: "Décret présidentiel 15-247"
    }
  ];

  const statistics = {
    monthlySearches: "189k",
    wilayas: "48",
    procedures: "2,847",
    evolution: "+18%"
  };

  return (
    <div className="space-y-6">
      <SectionTabsNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {searchCards.map((card, index) => (
          <SearchCard key={index} {...card} />
        ))}
      </div>

      <SavedItemsList
        title="Recherches sauvegardées"
        description="Vos dernières recherches de textes juridiques algériens"
        icon={Bookmark}
        items={savedLegalSearches}
        onViewAll={() => setActiveTab("saved-searches")}
      />

      <PopularItemsList
        title="Recherches populaires en Algérie"
        description="Les textes juridiques les plus consultés par les praticiens du droit"
        icon={TrendingUp}
        items={popularItems}
        statistics={statistics}
      />
    </div>
  );
}
