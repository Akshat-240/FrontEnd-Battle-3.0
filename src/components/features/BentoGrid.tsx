import React, { useState, useCallback } from 'react';
import { FEATURES_DATA } from './featuresData';
import { FeatureCard } from './FeatureCard';

interface BentoGridProps {
  activeFeatureRef: React.MutableRefObject<number>;
}

export const BentoGrid = React.memo(({ activeFeatureRef }: BentoGridProps) => {
  // We use local state ONLY to restore the highlighted card when returning from Mobile.
  // It initializes to whatever the Context Lock ref holds.
  const [programmaticActive, setProgrammaticActive] = useState<number | null>(activeFeatureRef.current);

  const handleMouseEnter = useCallback((index: number) => {
    // 1. Update Context Lock so Mobile view knows which one is hovered.
    // This doesn't trigger a re-render.
    activeFeatureRef.current = index;
    
    // 2. If we currently have a programmatic highlight forced from a layout switch,
    // clear it. This triggers exactly ONE React render when the user first interacts
    // with the grid. Subsequent hovers will not trigger any React renders because 
    // programmaticActive is already null.
    // The visual hover effect is handled purely by CSS `:hover`.
    if (programmaticActive !== null) {
      setProgrammaticActive(null);
    }
  }, [activeFeatureRef, programmaticActive]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 max-w-6xl mx-auto h-auto md:h-[600px]">
      {FEATURES_DATA.map((feature, idx) => (
        <FeatureCard
          key={idx}
          index={idx}
          feature={feature}
          isProgrammaticallyActive={programmaticActive === idx}
          onMouseEnter={handleMouseEnter}
        />
      ))}
    </div>
  );
});

BentoGrid.displayName = 'BentoGrid';
