'use client';

import React, { useRef, useEffect } from 'react';
import { PricingControls } from './PricingControls';
import { PricingCard } from './PricingCard';

const TIERS = {
  developer: 29,
  scale: 79,
  enterprise: 199,
};

const CURRENCIES = {
  USD: { symbol: '$', rate: 1 },
  INR: { symbol: '₹', rate: 83.5 },
  EUR: { symbol: '€', rate: 0.92 },
};

const ANNUAL_MULTIPLIER = 0.8;

export function PricingSection() {
  const currencyRef = useRef<'USD' | 'INR' | 'EUR'>('USD');
  const billingRef = useRef<'monthly' | 'annual'>('monthly');

  useEffect(() => {
    function updatePrices() {
      const isAnn = billingRef.current === 'annual';
      const curr = currencyRef.current;
      const rate = CURRENCIES[curr].rate;
      const sym = CURRENCIES[curr].symbol;

      // 1. Compute and Update prices
      document.querySelectorAll<HTMLElement>('[data-price]').forEach(el => {
        const base = Number(el.getAttribute('data-base'));
        if (base) {
          const price = Math.round(base * rate * (isAnn ? ANNUAL_MULTIPLIER : 1));
          if (el.textContent !== price.toString()) {
            el.textContent = price.toString();
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
    }

    updatePrices(); // Initial execution

    // Attach Event Listeners
    const btnMonthly = document.getElementById('btn-monthly');
    const btnAnnual = document.getElementById('btn-annual');
    
    btnMonthly?.addEventListener('click', () => {
      if (billingRef.current !== 'monthly') {
        billingRef.current = 'monthly';
        updatePrices();
      }
    });

    btnAnnual?.addEventListener('click', () => {
      if (billingRef.current !== 'annual') {
        billingRef.current = 'annual';
        updatePrices();
      }
    });

    document.querySelectorAll<HTMLElement>('.currency-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const c = btn.getAttribute('data-currency') as 'USD' | 'INR' | 'EUR';
        if (c && currencyRef.current !== c) {
          currencyRef.current = c;
          updatePrices();
        }
      });
    });
  }, []);

  const getInitialPrice = (tier: keyof typeof TIERS) => TIERS[tier]; // Initial load is monthly USD

  return (
    <section className="py-32 bg-arctic relative overflow-hidden" aria-labelledby="pricing-heading">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-forsythia/10 to-transparent blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16" data-animate="reveal">
          <h2 id="pricing-heading" className="text-balance text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tighter mb-6 flex items-center justify-center gap-4 leading-[1.1]">
            <img src="/svgs/arrow-trending-up.svg" alt="Growth and scaling" className="w-8 h-8 sm:w-10 sm:h-10 text-oceanic" />
            Predictable compute pricing
          </h2>
          <p className="text-balance text-lg sm:text-xl text-oceanic/70 dark:text-arctic/70 leading-[1.7]">
            Scale your agentic workflows with transparent token pricing and dedicated cluster options. No hidden egress fees.
          </p>
        </div>

        <PricingControls />

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          <PricingCard
            index={0}
            tierId="developer"
            title="Developer"
            description="Perfect for prototyping and evaluating agentic architectures."
            basePrice={TIERS.developer}
            initialPrice={getInitialPrice('developer')}
            currencySymbol={CURRENCIES.USD.symbol}
            features={[
              '10M Tokens per month',
              'Shared Inference GPUs',
              'Standard Context (32k)',
              'Community Discord Access',
              'Basic Rate Limits (50 RPS)'
            ]}
          />
          <PricingCard
            index={1}
            tierId="scale"
            title="Scale"
            description="Ideal for production workloads requiring low latency."
            basePrice={TIERS.scale}
            initialPrice={getInitialPrice('scale')}
            currencySymbol={CURRENCIES.USD.symbol}
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
            index={2}
            tierId="enterprise"
            title="Enterprise"
            description="Dedicated hardware and bespoke compliance for large orgs."
            basePrice={TIERS.enterprise}
            initialPrice={getInitialPrice('enterprise')}
            currencySymbol={CURRENCIES.USD.symbol}
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
