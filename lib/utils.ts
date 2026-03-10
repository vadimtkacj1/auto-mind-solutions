/**
 * Utility functions
 */

/**
 * Validate Israeli phone number
 */
export function validateIsraeliPhone(phone: string): boolean {
  const digitsOnly = phone.replace(/\D/g, "");
  if (!digitsOnly) return false;

  // Normalize +972... into a local 0... number (handles both +9725XXXXXXXX and +9722XXXXXXX, etc.)
  const localDigits = digitsOnly.startsWith("972") ? `0${digitsOnly.slice(3).replace(/^0/, "")}` : digitsOnly;

  // Israeli local numbers usually start with 0 and are 9–10 digits long (landline/mobile).
  // We also avoid obviously invalid prefixes like 00/01.
  return /^0[2-9]\d{7,8}$/.test(localDigits);
}

/**
 * Format Israeli phone number
 */
export function formatIsraeliPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");

  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }

  return phone;
}

/**
 * Validate email
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
