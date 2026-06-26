import React, { useState, useCallback } from 'react';
import { FEATURES_DATA } from './featuresData';
import { AccordionItem } from './AccordionItem';

interface AccordionProps {
  activeFeatureRef: React.MutableRefObject<number>;
}

export const Accordion = React.memo(({ activeFeatureRef }: AccordionProps) => {
  // Initialize with the active feature from the ref (Context Lock: Desktop -> Mobile)
  const [openIndex, setOpenIndex] = useState<number>(activeFeatureRef.current);

  const handleToggle = useCallback((index: number) => {
    // Only one panel open at a time
    const newIndex = openIndex === index ? -1 : index;
    setOpenIndex(newIndex);
    
    // Sync back to ref for Context Lock: Mobile -> Desktop
    if (newIndex !== -1) {
      activeFeatureRef.current = newIndex;
    }
  }, [openIndex, activeFeatureRef]);

  return (
    <div className="max-w-3xl mx-auto px-4 w-full">
      {FEATURES_DATA.map((feature, idx) => (
        <AccordionItem
          key={idx}
          index={idx}
          feature={feature}
          isOpen={openIndex === idx}
          onClick={handleToggle}
        />
      ))}
    </div>
  );
});

Accordion.displayName = 'Accordion';
