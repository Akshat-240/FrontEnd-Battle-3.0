'use client';

import React, { useRef, useEffect } from 'react';
import { CurrencyCode, CURRENCY_TARIFFS, calculatePrice, TierType } from '@/lib/pricing';
import { PricingControls } from './PricingControls';
import { PricingCard } from './PricingCard';

export function PricingSection() {
  const isAnnualRef = useRef(true);
  const currencyRef = useRef<CurrencyCode>('USD');

  useEffect(() => {
    const updateDOM = () => {
      const isAnn = isAnnualRef.current;
      const curr = currencyRef.current;
      const sym = CURRENCY_TARIFFS[curr].symbol;

      // 1. Update prices
      document.querySelectorAll<HTMLElement>('[data-tier]').forEach(el => {
        const tier = el.getAttribute('data-tier') as TierType;
        if (tier) {
          const newPrice = calculatePrice(tier, curr, isAnn);
          if (el.textContent !== newPrice.toString()) {
            el.textContent = newPrice.toString();
            el.classList.remove('animate-price');
            void el.offsetWidth; // force reflow
            el.classList.add('animate-price');
          }
        }
      });

      // 2. Update currency symbols
      document.querySelectorAll<HTMLElement>('[data-sym]').forEach(el => {
        if (el.textContent !== sym) {
          el.textContent = sym;
        }
      });

      // 3. Update Billing Toggle UI
      const btnMonthly = document.getElementById('btn-monthly');
      const btnAnnual = document.getElementById('btn-annual');
      
      if (btnMonthly && btnAnnual) {
        btnMonthly.setAttribute('aria-pressed', (!isAnn).toString());
        btnAnnual.setAttribute('aria-pressed', isAnn.toString());

        const activeClass = 'text-oceanic shadow-sm'.split(' ');
        const inactiveClass = 'text-oceanic/60 hover:text-oceanic dark:text-arctic/70 dark:hover:text-white'.split(' ');

        if (isAnn) {
          btnAnnual.classList.remove(...inactiveClass);
          btnAnnual.classList.add(...activeClass);
          btnAnnual.querySelector('.toggle-bg')?.classList.remove('hidden');

          btnMonthly.classList.remove(...activeClass);
          btnMonthly.classList.add(...inactiveClass);
          btnMonthly.querySelector('.toggle-bg')?.classList.add('hidden');
        } else {
          btnMonthly.classList.remove(...inactiveClass);
          btnMonthly.classList.add(...activeClass);
          btnMonthly.querySelector('.toggle-bg')?.classList.remove('hidden');

          btnAnnual.classList.remove(...activeClass);
          btnAnnual.classList.add(...inactiveClass);
          btnAnnual.querySelector('.toggle-bg')?.classList.add('hidden');
        }
      }

      // 4. Update Currency Selector UI
      document.querySelectorAll<HTMLElement>('.currency-btn').forEach(btn => {
        const c = btn.getAttribute('data-currency');
        if (c === curr) {
          btn.setAttribute('aria-pressed', 'true');
          btn.className = 'currency-btn px-3 py-1 text-sm font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia bg-white dark:bg-nocturnal text-oceanic shadow-sm';
        } else {
          btn.setAttribute('aria-pressed', 'false');
          btn.className = 'currency-btn px-3 py-1 text-sm font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia text-oceanic/60 hover:text-oceanic dark:text-arctic/70 dark:hover:text-white';
        }
      });
    };

    // Attach Event Listeners
    const btnMonthly = document.getElementById('btn-monthly');
    const btnAnnual = document.getElementById('btn-annual');
    
    btnMonthly?.addEventListener('click', () => {
      if (isAnnualRef.current) {
        isAnnualRef.current = false;
        updateDOM();
      }
    });

    btnAnnual?.addEventListener('click', () => {
      if (!isAnnualRef.current) {
        isAnnualRef.current = true;
        updateDOM();
      }
    });

    document.querySelectorAll<HTMLElement>('.currency-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const c = btn.getAttribute('data-currency') as CurrencyCode;
        if (c && currencyRef.current !== c) {
          currencyRef.current = c;
          updateDOM();
        }
      });
    });
  }, []);

  // Initial SSR calculation
  const initPrices = {
    starter: calculatePrice('starter', 'USD', true),
    pro: calculatePrice('pro', 'USD', true),
    enterprise: calculatePrice('enterprise', 'USD', true),
  };
  const initSymbol = CURRENCY_TARIFFS['USD'].symbol;

  return (
    <section className="py-32 bg-background relative overflow-hidden" aria-labelledby="pricing-heading">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-forsythia/10 to-transparent blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="pricing-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Predictable compute pricing
          </h2>
          <p className="text-lg text-oceanic/70 dark:text-arctic/70">
            Scale your agentic workflows with transparent token pricing and dedicated cluster options. No hidden egress fees.
          </p>
        </div>

        <PricingControls />

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          <PricingCard
            tierId="starter"
            title="Developer"
            description="Perfect for prototyping and evaluating agentic architectures."
            price={initPrices.starter}
            currencySymbol={initSymbol}
            features={[
              '10M Tokens per month',
              'Shared Inference GPUs',
              'Standard Context (32k)',
              'Community Discord Access',
              'Basic Rate Limits (50 RPS)'
            ]}
          />
          <PricingCard
            tierId="pro"
            title="Scale"
            description="Ideal for production workloads requiring low latency."
            price={initPrices.pro}
            currencySymbol={initSymbol}
            isHighlighted={true}
            features={[
              '100M Tokens per month',
              'Prioritized H100 Access',
              'Extended Context (128k)',
              'Model Fine-Tuning API',
              'Advanced Rate Limits (500 RPS)'
            ]}
          />
          <PricingCard
            tierId="enterprise"
            title="Enterprise"
            description="Dedicated hardware and bespoke compliance for large orgs."
            price={initPrices.enterprise}
            currencySymbol={initSymbol}
            features={[
              'Unlimited Token Volume',
              'Dedicated A100/H100 Clusters',
              'Infinite Context Window (RAG)',
              'On-Premise Deployment Options',
              'Dedicated ML Solutions Engineer'
            ]}
          />
        </div>
      </div>
    </section>
  );
}
