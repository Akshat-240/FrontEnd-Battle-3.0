export type TierType = 'starter' | 'pro' | 'enterprise';
export type CurrencyCode = 'USD' | 'EUR' | 'INR';

export const PRICING_MATRIX: Record<TierType, { base: number }> = {
  starter: { base: 29 },
  pro: { base: 79 },
  enterprise: { base: 199 },
};

export const CURRENCY_TARIFFS: Record<CurrencyCode, { symbol: string; multiplier: number }> = {
  USD: { symbol: '$', multiplier: 1 },
  INR: { symbol: '₹', multiplier: 83.5 },
  EUR: { symbol: '€', multiplier: 0.92 },
};

export const ANNUAL_DISCOUNT = 0.8;

export function calculatePrice(tier: TierType, currency: CurrencyCode, isAnnual: boolean): number {
  const base = PRICING_MATRIX[tier].base;
  const tariff = CURRENCY_TARIFFS[currency];
  
  const price = base * tariff.multiplier * (isAnnual ? ANNUAL_DISCOUNT : 1);
  return Math.round(price);
}
