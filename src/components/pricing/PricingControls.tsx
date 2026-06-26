import React from 'react';
import { CurrencyCode } from '@/lib/pricing';

export const PricingControls = React.memo(() => {
  const currencies: CurrencyCode[] = ['USD', 'EUR', 'INR'];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 max-w-4xl mx-auto px-4">
      {/* Billing Toggle */}
      <div className="flex items-center space-x-3 bg-mint/30 dark:bg-oceanic/50 p-1.5 rounded-full ring-1 ring-oceanic/10 dark:ring-white/10" id="billing-toggle-container">
        <button
          id="btn-monthly"
          aria-pressed={false}
          className="relative w-28 py-2 text-sm font-medium rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia text-oceanic/60 hover:text-oceanic dark:text-arctic/70 dark:hover:text-white"
        >
          <div className="toggle-bg hidden absolute inset-0 bg-nocturnal rounded-full shadow-sm -z-10 animate-price"></div>
          Monthly
        </button>
        <button
          id="btn-annual"
          aria-pressed={true}
          className="relative w-28 py-2 text-sm font-medium rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia text-white shadow-sm"
        >
          <div className="toggle-bg absolute inset-0 bg-nocturnal rounded-full shadow-sm -z-10 animate-price"></div>
          Annually
        </button>
      </div>

      {/* Currency Selector */}
      <div className="flex items-center space-x-2">
        <span className="text-sm text-oceanic/60 dark:text-arctic/60 mr-2">Currency:</span>
        <div className="flex space-x-1 bg-mint/30 dark:bg-oceanic/50 p-1 rounded-lg ring-1 ring-oceanic/10 dark:ring-white/10" id="currency-selector">
          {currencies.map(c => (
            <button
              key={c}
              data-currency={c}
              aria-pressed={c === 'USD'}
              className={`currency-btn px-3 py-1 text-sm font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia ${
                c === 'USD'
                  ? 'bg-nocturnal text-white shadow-sm'
                  : 'text-oceanic/60 hover:text-oceanic dark:text-arctic/70 dark:hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
});

PricingControls.displayName = 'PricingControls';
