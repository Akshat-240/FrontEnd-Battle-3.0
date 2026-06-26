import React from 'react';
import { Feature } from './featuresData';

interface AccordionItemProps {
  feature: Feature;
  index: number;
  isOpen: boolean;
  onClick: (index: number) => void;
}

export const AccordionItem = React.memo(({ feature, index, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div className="border border-oceanic/10 dark:border-white/10 rounded-2xl mb-4 bg-white/50 dark:bg-nocturnal backdrop-blur-sm overflow-hidden">
      <button
        id={`accordion-btn-${index}`}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-forsythia focus-visible:ring-inset"
        onClick={() => onClick(index)}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${index}`}
      >
        <div className="flex items-center">
          <span className="w-10 h-10 rounded-lg bg-mint/30 dark:bg-nocturnal flex items-center justify-center text-xl mr-4 border border-oceanic/10 dark:border-white/5">
            {feature.icon}
          </span>
          <span className={`font-semibold text-lg transition-colors ${isOpen ? 'text-forsythia' : 'text-oceanic dark:text-white'}`}>
            {feature.title}
          </span>
        </div>
        
        {/* Chevron icon */}
        <svg 
          className={`w-5 h-5 text-oceanic/50 dark:text-arctic/50 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180 text-forsythia' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div 
        id={`accordion-panel-${index}`}
        role="region"
        aria-labelledby={`accordion-btn-${index}`}
        className={`accordion-content ${isOpen ? 'open' : ''}`}
      >
        <div className="accordion-inner px-6 pb-6 pt-1 text-oceanic/70 dark:text-arctic/70 leading-relaxed text-sm min-h-0">
          {feature.description}
        </div>
      </div>
    </div>
  );
});

AccordionItem.displayName = 'AccordionItem';
