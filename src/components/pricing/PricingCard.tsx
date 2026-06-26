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
  index: number;
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
  index,
}: PricingCardProps) => {
  return (
    <article
      className={`premium-card relative flex flex-col p-8 rounded-3xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl ${
        isHighlighted
          ? 'bg-gradient-to-b from-oceanic to-nocturnal text-white'
          : 'bg-oceanic/5 border border-oceanic/10 text-oceanic'
      }`}
      data-animate="pricing"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {isHighlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="bg-forsythia text-oceanic text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className={`text-3xl font-extrabold tracking-tight ${isHighlighted ? 'text-white' : ''}`}>{title}</h3>
        <p className={`mt-3 text-sm leading-[1.7] ${isHighlighted ? 'text-arctic/80' : 'text-oceanic/90'}`}>
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
            <span className={isHighlighted ? 'text-arctic/90' : 'text-oceanic font-medium'}>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-4 px-6 rounded-full font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia focus-visible:ring-offset-2 ${
          isHighlighted
            ? 'btn-primary'
            : 'bg-oceanic text-white hover:bg-nocturnal hover:shadow-lg dark:bg-white dark:text-oceanic dark:hover:bg-mint dark:hover:shadow-lg'
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
