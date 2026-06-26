'use client';

import React, { useRef } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import { BentoGrid } from './BentoGrid';
import { Accordion } from './Accordion';

export function FeaturesSection() {
  const isMobile = useIsMobile(768);
  
  // Context Lock: Store active card index in a ref. 
  // This prevents hover events from triggering expensive React re-renders on Desktop.
  // It also allows us to sync the state perfectly between the Desktop and Mobile views.
  const activeFeatureRef = useRef<number>(0);

  return (
    <section className="py-32 bg-arctic relative overflow-hidden" aria-labelledby="features-heading">
      {/* Premium background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-mint/50 to-transparent blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16" data-animate="reveal">
          <h2 id="features-heading" className="text-balance text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tighter mb-6 leading-[1.1]">
            Built for extreme performance
          </h2>
          <p className="text-balance text-lg sm:text-xl text-oceanic/70 dark:text-arctic/70 px-4 leading-[1.7]">
            A premium architecture designed to scale seamlessly. No compromises on speed, security, or global reach.
          </p>
        </div>

        {/* 
          Conditionally render to avoid duplicate DOM elements.
          The useIsMobile hook only re-renders when crossing the breakpoint.
        */}
        {isMobile ? (
          <Accordion activeFeatureRef={activeFeatureRef} />
        ) : (
          <BentoGrid activeFeatureRef={activeFeatureRef} />
        )}
      </div>
    </section>
  );
}
