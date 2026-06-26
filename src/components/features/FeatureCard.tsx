import React from 'react';
import { Feature } from './featuresData';

interface FeatureCardProps {
  feature: Feature;
  index: number;
  isProgrammaticallyActive: boolean;
  onMouseEnter: (index: number) => void;
}

export const FeatureCard = React.memo(({ feature, index, isProgrammaticallyActive, onMouseEnter }: FeatureCardProps) => {
  return (
    <article
      className={`bento-card group relative overflow-hidden rounded-3xl bg-white/80 dark:bg-nocturnal/40 backdrop-blur-md border border-oceanic/10 dark:border-white/10 p-8 flex flex-col justify-between transition-all duration-150 ease-out ${feature.className || ''} ${isProgrammaticallyActive ? 'bento-active' : ''}`}
      onMouseEnter={() => onMouseEnter(index)}
    >
      {/* Glow effect that appears on active or hover */}
      <div className="glow-bg absolute inset-0 bg-gradient-to-br from-forsythia/0 to-forsythia/0 opacity-0 transition-opacity duration-150 ease-out z-0"></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="w-12 h-12 rounded-xl bg-mint/30 dark:bg-nocturnal flex items-center justify-center text-2xl mb-6 shadow-sm border border-oceanic/10 dark:border-white/5 icon-container transition-transform duration-150 ease-out">
          {feature.icon}
        </div>
        
        <div className="mt-auto">
          <h3 className="text-xl font-bold text-oceanic dark:text-white mb-3 heading-text transition-colors duration-150 ease-out">
            {feature.title}
          </h3>
          <p className="text-oceanic/70 dark:text-arctic/70 text-sm leading-relaxed desc-text transition-colors duration-150 ease-out">
            {feature.description}
          </p>
        </div>
      </div>
    </article>
  );
});

FeatureCard.displayName = 'FeatureCard';
