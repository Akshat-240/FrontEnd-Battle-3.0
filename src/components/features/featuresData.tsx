import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string; // For bento grid positioning
}

export const FEATURES_DATA: Feature[] = [
  {
    title: 'Deterministic Edge Inference',
    description: 'Process millions of tokens instantly with our proprietary edge-optimized neural network. Achieve sub-10ms latency globally with guaranteed deterministic outputs.',
    icon: <img src="/svgs/cube-16-solid.svg" alt="edge inference" width="24" height="24" />,
    className: 'md:col-span-2 md:row-span-1',
  },
  {
    title: 'Zero-Trust Architecture',
    description: 'Enterprise-grade encryption with SOC2 Type II compliance built directly into the core inference engine. Your training data remains entirely sandboxed.',
    icon: <img src="/svgs/link-solid.svg" alt="zero trust" width="24" height="24" />,
    className: 'md:col-span-1 md:row-span-2',
  },
  {
    title: 'Global VRAM Pooling',
    description: 'Dynamically allocate A100/H100 clusters across 35 regions worldwide for seamless scaling.',
    icon: <img src="/svgs/cog-8-tooth.svg" alt="vram pooling" width="24" height="24" />,
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Auto-Context Window Automation',
    description: 'The system automatically compresses and expands context windows based on agent memory requirements.',
    icon: <img src="/svgs/arrow-path.svg" alt="context window" width="24" height="24" />,
    className: 'md:col-span-1 md:row-span-1',
  },
];
