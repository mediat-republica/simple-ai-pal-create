
import { forwardRef, HTMLInputTypeAttribute } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface SecureInputProps {
  label: string;
  type?: HTMLInputTypeAttribute;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  error?: string;
  maxLength?: number;
  pattern?: string;
  autoComplete?: string;
}

export const SecureInput = forwardRef<HTMLInputElement, SecureInputProps>(
  ({ 
    label, 
    type = "text", 
    value, 
    onChange, 
    placeholder, 
    required = false, 
    className,
    error,
    maxLength,
    pattern,
    autoComplete = "off"
  }, ref) => {
    
    // Fonction de nettoyage des données pour éviter les injections
    const sanitizeInput = (input: string) => {
      return input
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+="[^"]*"/gi, '')
        .trim();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const sanitizedValue = sanitizeInput(e.target.value);
      onChange(sanitizedValue);
    };

    return (
      <div className={cn("space-y-2", className)}>
        <Label htmlFor={label} className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
        <Input
          ref={ref}
          id={label}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          maxLength={maxLength}
          pattern={pattern}
          autoComplete={autoComplete}
          className={cn(
            "border-gray-300 focus:border-emerald-500 focus:ring-emerald-500",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500"
          )}
        />
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

SecureInput.displayName = "SecureInput";
