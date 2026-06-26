import React from 'react';

export interface PriceDisplayProps {
  tierId: string;
  price: number;
  currencySymbol: string;
  className?: string;
}

export const PriceDisplay = React.memo(({ tierId, price, currencySymbol, className = '' }: PriceDisplayProps) => {
  return (
    <div className={`flex items-baseline ${className}`}>
      <span className="text-3xl font-bold" data-sym="true">{currencySymbol}</span>
      <span
        data-tier={tierId}
        className="text-5xl font-extrabold tracking-tight animate-price inline-block"
      >
        {price}
      </span>
      <span className="text-oceanic/60 dark:text-arctic/60 ml-2">/mo</span>
    </div>
  );
});

PriceDisplay.displayName = 'PriceDisplay';
