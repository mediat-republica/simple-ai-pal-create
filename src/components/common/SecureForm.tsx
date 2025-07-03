
import { ReactNode, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Shield } from "lucide-react";
import { rateLimiter } from "@/utils/security";

interface SecureFormProps {
  title: string;
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  submitButtonText?: string;
  isSubmitting?: boolean;
  identifier?: string;
  showSecurityInfo?: boolean;
}

export function SecureForm({
  title,
  children,
  onSubmit,
  submitButtonText = "Enregistrer",
  isSubmitting = false,
  identifier = "default",
  showSecurityInfo = true
}: SecureFormProps) {
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Vérification du taux de requêtes
    if (!rateLimiter.canMakeRequest(identifier)) {
      alert("Trop de tentatives. Veuillez patienter avant de réessayer.");
      return;
    }
    
    onSubmit(e);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-emerald-600" />
          {title}
        </CardTitle>
        {showSecurityInfo && (
          <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <AlertTriangle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-blue-800">
              <p className="font-medium">Sécurité des données</p>
              <p>Toutes les données saisies sont automatiquement nettoyées et validées pour votre sécurité.</p>
            </div>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {children}
          
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              {isSubmitting ? "Traitement..." : submitButtonText}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
