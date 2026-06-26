'use client';

import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }

    // Check if the user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Select all elements with the data-animate attribute
    const elements = document.querySelectorAll('[data-animate]');
    
    if (prefersReducedMotion) {
      // Reveal immediately without animation if reduced motion is preferred
      elements.forEach(el => el.setAttribute('data-in-view', 'true'));
      return;
    }

    // Set up a single global observer
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Reveal the element
            entry.target.setAttribute('data-in-view', 'true');
            // Unobserve after first reveal for performance
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Slightly offset so it triggers just before coming fully into view
      }
    );

    elements.forEach(el => {
      // Mark the element as ready for the JS-driven scroll system.
      // This is crucial: CSS will only hide the element if this attribute is present.
      // This ensures that if JS fails or before JS loads, the element remains fully visible.
      el.setAttribute('data-scroll-ready', 'true');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}
