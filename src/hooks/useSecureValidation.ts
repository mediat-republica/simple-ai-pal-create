
import { useState, useCallback } from 'react';

interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => boolean;
  message: string;
}

interface ValidationRules {
  [key: string]: ValidationRule[];
}

interface ValidationErrors {
  [key: string]: string;
}

export function useSecureValidation(rules: ValidationRules) {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateField = useCallback((field: string, value: string): boolean => {
    const fieldRules = rules[field];
    if (!fieldRules) return true;

    for (const rule of fieldRules) {
      // Vérification obligatoire
      if (rule.required && (!value || value.trim() === '')) {
        setErrors(prev => ({ ...prev, [field]: rule.message }));
        return false;
      }

      // Vérification longueur minimale
      if (rule.minLength && value.length < rule.minLength) {
        setErrors(prev => ({ ...prev, [field]: rule.message }));
        return false;
      }

      // Vérification longueur maximale
      if (rule.maxLength && value.length > rule.maxLength) {
        setErrors(prev => ({ ...prev, [field]: rule.message }));
        return false;
      }

      // Vérification pattern
      if (rule.pattern && !rule.pattern.test(value)) {
        setErrors(prev => ({ ...prev, [field]: rule.message }));
        return false;
      }

      // Validation personnalisée
      if (rule.custom && !rule.custom(value)) {
        setErrors(prev => ({ ...prev, [field]: rule.message }));
        return false;
      }
    }

    // Supprimer l'erreur si la validation passe
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });

    return true;
  }, [rules]);

  const validateAll = useCallback((data: Record<string, string>): boolean => {
    let isValid = true;
    const newErrors: ValidationErrors = {};

    Object.keys(rules).forEach(field => {
      const value = data[field] || '';
      const fieldRules = rules[field];

      for (const rule of fieldRules) {
        if (rule.required && (!value || value.trim() === '')) {
          newErrors[field] = rule.message;
          isValid = false;
          break;
        }

        if (rule.minLength && value.length < rule.minLength) {
          newErrors[field] = rule.message;
          isValid = false;
          break;
        }

        if (rule.maxLength && value.length > rule.maxLength) {
          newErrors[field] = rule.message;
          isValid = false;
          break;
        }

        if (rule.pattern && !rule.pattern.test(value)) {
          newErrors[field] = rule.message;
          isValid = false;
          break;
        }

        if (rule.custom && !rule.custom(value)) {
          newErrors[field] = rule.message;
          isValid = false;
          break;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [rules]);

  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  const clearFieldError = useCallback((field: string) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  }, []);

  return {
    errors,
    validateField,
    validateAll,
    clearErrors,
    clearFieldError,
    hasErrors: Object.keys(errors).length > 0
  };
}
