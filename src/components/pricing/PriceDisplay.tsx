import React from 'react';

export interface PriceDisplayProps {
  tierId: string;
  basePrice: number;
  currencySymbol: string;
  className?: string;
  initialPrice: number;
}

export const PriceDisplay = React.memo(({ tierId, basePrice, currencySymbol, className = '', initialPrice }: PriceDisplayProps) => {
  return (
    <div className={`flex items-baseline ${className}`}>
      <span className="text-3xl font-bold" data-sym="true">{currencySymbol}</span>
      <span
        data-tier={tierId}
        data-base={basePrice}
        data-price="true"
        className="text-5xl font-extrabold tracking-tight animate-price inline-block"
      >
        {initialPrice}
      </span>
      <span className="text-oceanic/60 dark:text-arctic/60 ml-2">/mo</span>
    </div>
  );
});

PriceDisplay.displayName = 'PriceDisplay';
