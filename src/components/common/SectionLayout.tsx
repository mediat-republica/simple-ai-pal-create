
import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus } from "lucide-react";

interface SectionLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  onBack?: () => void;
  onAdd?: () => void;
  addButtonText?: string;
  className?: string;
}

export function SectionLayout({ 
  title, 
  subtitle, 
  children, 
  onBack, 
  onAdd, 
  addButtonText = "Ajouter",
  className = "" 
}: SectionLayoutProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {onBack && (
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="gap-2 text-emerald-600 hover:text-emerald-700"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour
            </Button>
          )}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            {subtitle && (
              <p className="text-gray-600 mt-1">{subtitle}</p>
            )}
          </div>
        </div>
        
        {onAdd && (
          <Button 
            onClick={onAdd}
            className="gap-2 bg-emerald-600 hover:bg-emerald-700"
          >
            <Plus className="w-4 h-4" />
            {addButtonText}
          </Button>
        )}
      </div>

      <Card className="border-gray-200 shadow-sm">
        <CardContent className="p-6">
          {children}
        </CardContent>
      </Card>
    </div>
  );
}
