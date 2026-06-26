import React from 'react';
import { PriceDisplay } from './PriceDisplay';

export interface PricingCardProps {
  tierId: string;
  title: string;
  description: string;
  basePrice: number;
  initialPrice: number;
  currencySymbol: string;
  isHighlighted?: boolean;
  features: string[];
}

const CheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const PricingCard = React.memo(({
  tierId,
  title,
  description,
  basePrice,
  initialPrice,
  currencySymbol,
  isHighlighted = false,
  features,
}: PricingCardProps) => {
  return (
    <article
      className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl ${
        isHighlighted
          ? 'bg-gradient-to-b from-oceanic to-nocturnal text-white shadow-2xl shadow-nocturnal/20 ring-1 ring-white/10 [box-shadow:inset_0_1px_0_rgba(255,255,255,0.2),0_20px_40px_rgba(17,76,90,0.3)]'
          : 'bg-white/80 dark:bg-nocturnal/40 backdrop-blur-md border border-oceanic/10 dark:border-white/10 text-oceanic dark:text-arctic shadow-[0_8px_32px_rgba(23,43,54,0.05),inset_0_1px_0_rgba(255,255,255,0.6)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]'
      }`}
    >
      {isHighlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="bg-forsythia text-oceanic text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className={`text-2xl font-bold ${isHighlighted ? 'text-white' : ''}`}>{title}</h3>
        <p className={`mt-2 text-sm ${isHighlighted ? 'text-arctic/80' : 'text-oceanic/60 dark:text-arctic/70'}`}>
          {description}
        </p>
      </div>

      <div className="mb-8">
        <PriceDisplay tierId={tierId} basePrice={basePrice} initialPrice={initialPrice} currencySymbol={currencySymbol} className={isHighlighted ? 'text-white' : ''} />
      </div>

      <ul className="flex-1 space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm">
            <CheckIcon />
            <span className={isHighlighted ? 'text-arctic/90' : 'text-oceanic/70 dark:text-arctic/80'}>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 px-6 rounded-full font-bold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia focus-visible:ring-offset-2 ${
          isHighlighted
            ? 'bg-forsythia text-oceanic hover:bg-saffron'
            : 'bg-oceanic text-white hover:bg-nocturnal dark:bg-white dark:text-oceanic dark:hover:bg-mint'
        }`}
        aria-label={`Get started with ${title} plan`}
      >
        Get Started
      </button>
    </article>
  );
});

PricingCard.displayName = 'PricingCard';

export { PricingCard };
