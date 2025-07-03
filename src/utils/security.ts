
/**
 * Utilitaires de sécurité pour l'application
 */

// Nettoyage des entrées utilisateur contre les injections XSS
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/on\w+='[^']*'/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
    .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '')
    .trim();
}

// Validation d'email sécurisée
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const sanitizedEmail = sanitizeInput(email);
  return emailRegex.test(sanitizedEmail) && sanitizedEmail.length <= 254;
}

// Validation de numéro de téléphone
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,15}$/;
  const sanitizedPhone = sanitizeInput(phone);
  return phoneRegex.test(sanitizedPhone);
}

// Validation de texte général
export function validateText(text: string, maxLength: number = 1000): boolean {
  const sanitizedText = sanitizeInput(text);
  return sanitizedText.length <= maxLength && sanitizedText.length > 0;
}

// Génération de token sécurisé
export function generateSecureToken(length: number = 32): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Hashage simple pour les identifiants (côté client)
export function simpleHash(input: string): string {
  let hash = 0;
  if (input.length === 0) return hash.toString();
  
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  return Math.abs(hash).toString(36);
}

// Validation de la force du mot de passe
export function validatePasswordStrength(password: string): {
  isValid: boolean;
  score: number;
  feedback: string[];
} {
  const feedback: string[] = [];
  let score = 0;

  if (password.length < 8) {
    feedback.push("Le mot de passe doit contenir au moins 8 caractères");
  } else {
    score += 1;
  }

  if (!/[a-z]/.test(password)) {
    feedback.push("Le mot de passe doit contenir au moins une lettre minuscule");
  } else {
    score += 1;
  }

  if (!/[A-Z]/.test(password)) {
    feedback.push("Le mot de passe doit contenir au moins une lettre majuscule");
  } else {
    score += 1;
  }

  if (!/[0-9]/.test(password)) {
    feedback.push("Le mot de passe doit contenir au moins un chiffre");
  } else {
    score += 1;
  }

  if (!/[^a-zA-Z0-9]/.test(password)) {
    feedback.push("Le mot de passe doit contenir au moins un caractère spécial");
  } else {
    score += 1;
  }

  return {
    isValid: score >= 4,
    score,
    feedback
  };
}

// Limitation du taux de requêtes (simple implémentation côté client)
class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private maxRequests: number;
  private timeWindow: number;

  constructor(maxRequests: number = 10, timeWindowMs: number = 60000) {
    this.maxRequests = maxRequests;
    this.timeWindow = timeWindowMs;
  }

  canMakeRequest(identifier: string): boolean {
    const now = Date.now();
    const requests = this.requests.get(identifier) || [];
    
    // Nettoyer les anciennes requêtes
    const validRequests = requests.filter(time => now - time < this.timeWindow);
    
    if (validRequests.length >= this.maxRequests) {
      return false;
    }
    
    validRequests.push(now);
    this.requests.set(identifier, validRequests);
    
    return true;
  }
}

export const rateLimiter = new RateLimiter();
