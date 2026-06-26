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
      className={`premium-card bento-card group p-8 flex flex-col justify-between ${feature.className || ''} ${isProgrammaticallyActive ? 'is-active' : ''} bg-white border border-oceanic/10 hover:bg-nocturnal hover:border-forsythia hover:-translate-y-2 [&.is-active]:bg-nocturnal [&.is-active]:border-forsythia [&.is-active]:-translate-y-2 backdrop-blur-2xl rounded-3xl transition-all duration-300 ease-out`}
      onMouseEnter={() => onMouseEnter(index)}
      data-animate="stagger"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Glow effect that appears on active or hover */}
      <div className="glow-bg absolute inset-0 bg-gradient-to-br from-forsythia/0 to-forsythia/0 opacity-0 transition-opacity duration-150 ease-out z-0"></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="w-12 h-12 rounded-xl bg-mint/30 flex items-center justify-center text-2xl mb-6 shadow-sm border border-oceanic/10 icon-container transition-all duration-300 ease-out group-hover:bg-forsythia group-hover:border-forsythia group-[.is-active]:bg-forsythia group-[.is-active]:border-forsythia text-oceanic">
          {feature.icon}
        </div>
        
        <div className="mt-auto">
          <h3 className="text-xl font-extrabold text-oceanic group-hover:text-white group-[.is-active]:text-white mb-3 transition-colors duration-300 ease-out tracking-tight">
            {feature.title}
          </h3>
          <p className="text-oceanic/70 group-hover:text-arctic/90 group-[.is-active]:text-arctic/90 text-sm leading-[1.7] transition-colors duration-300 ease-out">
            {feature.description}
          </p>
        </div>
      </div>
    </article>
  );
});

FeatureCard.displayName = 'FeatureCard';
