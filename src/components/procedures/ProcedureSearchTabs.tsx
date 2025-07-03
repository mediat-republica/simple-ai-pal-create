
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter } from "lucide-react";
import { RecentSearchesList } from "./RecentSearchesList";
import { PopularProceduresList } from "./PopularProceduresList";

interface ProcedureSearchTabsProps {
  activeTab: string;
  onTabChange: (value: string) => void;
  searchQuery: string;
  onSearchQueryChange: (value: string) => void;
}

export function ProcedureSearchTabs({ 
  activeTab, 
  onTabChange, 
  searchQuery, 
  onSearchQueryChange 
}: ProcedureSearchTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="basic">Recherche simple</TabsTrigger>
        <TabsTrigger value="recent">Recherches récentes</TabsTrigger>
        <TabsTrigger value="popular">Procédures populaires</TabsTrigger>
      </TabsList>

      <TabsContent value="basic" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5 text-teal-600" />
              Recherche rapide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                placeholder="Tapez le nom d'une procédure administrative..."
                value={searchQuery}
                onChange={(e) => onSearchQueryChange(e.target.value)}
                className="flex-1"
              />
              <Button className="bg-teal-600 hover:bg-teal-700">
                <Search className="w-4 h-4 mr-2" />
                Rechercher
              </Button>
              <Button variant="outline">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="recent" className="space-y-4">
        <RecentSearchesList />
      </TabsContent>

      <TabsContent value="popular" className="space-y-4">
        <PopularProceduresList />
      </TabsContent>
    </Tabs>
  );
}
