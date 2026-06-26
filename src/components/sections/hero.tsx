'use client';

import React, { useRef } from "react";
import Link from "next/link";
export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    containerRef.current.style.setProperty('--mouse-x', `${x}%`);
    containerRef.current.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-arctic" 
      aria-labelledby="hero-heading"
      style={{ '--mouse-x': '50%', '--mouse-y': '50%' } as React.CSSProperties}
    >
      {/* Pure CSS Premium Ambient Background (Linear/Vercel Style) */}
      <div className="absolute inset-0 overflow-hidden -z-10 bg-arctic">
        {/* Animated Grid Texture */}
        <div className="absolute inset-0 opacity-[0.03] animate-grid-flow" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23114C5A\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '60px 60px' }}></div>
        
        {/* Subtle Radial Glows (Max Opacity 18%) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-mint/10 blur-[80px] rounded-full mix-blend-multiply opacity-15"></div>
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-nocturnal/10 blur-[100px] rounded-full mix-blend-multiply opacity-15"></div>
        <div className="absolute top-[40%] left-[30%] w-[20%] h-[20%] bg-forsythia/10 blur-[60px] rounded-full mix-blend-multiply opacity-10"></div>
        
        {/* Gradient Mask to fade grid at edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-arctic pointer-events-none"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center relative z-10" data-animate="hero">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-oceanic/5 border border-oceanic/10 text-oceanic text-sm font-medium mb-8 backdrop-blur-sm">
          <div className="w-4 h-4 bg-forsythia mask-cube mask-repeat-no-mask animate-pulse opacity-80" style={{ WebkitMaskImage: 'url(/svgs/cube-16-solid.svg)', WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', backgroundColor: 'var(--color-forsythia)' }}></div>
          Synapse-Omega Model Available Now
        </div>
        
        <h1 id="hero-heading" className="text-balance font-mono text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-oceanic tracking-tighter mb-8 max-w-5xl leading-[1.05]">
          Orchestrate complex tasks with <span className="text-transparent bg-clip-text bg-gradient-to-r from-oceanic to-nocturnal">autonomous agents</span>.
        </h1>
        
        <p className="text-balance text-lg sm:text-xl md:text-2xl text-oceanic/80 max-w-3xl mb-12 leading-[1.6]">
          The premier AI infrastructure platform for engineering teams. Deploy intelligent workflows with sub-10ms latency and enterprise-grade deterministic outputs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full px-4 sm:px-0 mb-20">
          <Link
            href="/signup"
            className="btn-primary w-full sm:w-auto text-center px-10 py-5 rounded-full font-bold text-lg relative overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oceanic focus-visible:ring-offset-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            <span className="relative z-10">Start Deploying Free</span>
          </Link>
          <Link
            href="#demo"
            className="btn-glass w-full sm:w-auto text-center px-10 py-5 rounded-full font-bold text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oceanic focus-visible:ring-offset-2"
          >
            Read the Documentation
          </Link>
        </div>
        
        {/* Pure CSS AI Control Center Illustration */}
        <div className="premium-card w-full max-w-5xl mx-auto aspect-[16/9] sm:aspect-[16/10] md:aspect-[16/9] rounded-2xl sm:rounded-[32px] overflow-hidden bg-oceanic/90 flex flex-col group p-4 sm:p-6 shadow-2xl relative">
          
          {/* Faux browser bar */}
          <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-nocturnal/50 backdrop-blur-md absolute top-0 left-0 w-full z-20">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            <div className="mx-auto text-xs font-mono text-arctic/60 hidden sm:block">app.synapse.ai / dashboard</div>
          </div>
          
          <div className="flex-1 w-full h-full relative pt-12 flex flex-col gap-4">
            
            <div className="grid grid-cols-12 gap-4 h-full">
              
              {/* Left Panel: Neural Nodes */}
              <div className="col-span-4 bg-nocturnal/40 border border-white/5 rounded-xl p-4 flex flex-col relative overflow-hidden backdrop-blur-sm shadow-inner">
                <h3 className="text-arctic/80 text-xs uppercase tracking-widest font-bold mb-4 z-10">Neural Map</h3>
                <div className="flex-1 relative z-10">
                  {/* Nodes & Lines */}
                  <div className="absolute top-[20%] left-[20%] w-3 h-3 rounded-full bg-mint shadow-[0_0_15px_var(--color-mint)] animate-pulse"></div>
                  <div className="absolute top-[50%] left-[10%] w-2 h-2 rounded-full bg-forsythia shadow-[0_0_10px_var(--color-forsythia)] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-[30%] left-[60%] w-4 h-4 rounded-full bg-mint shadow-[0_0_15px_var(--color-mint)] animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-[70%] left-[70%] w-2 h-2 rounded-full bg-saffron shadow-[0_0_10px_var(--color-saffron)] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  <div className="absolute top-[80%] left-[30%] w-3 h-3 rounded-full bg-mint shadow-[0_0_15px_var(--color-mint)] animate-pulse" style={{ animationDelay: '2s' }}></div>
                  
                  {/* SVG-less CSS Lines (Simulated using thin rotated divs) */}
                  <div className="absolute top-[24%] left-[24%] w-[40%] h-[1px] bg-gradient-to-r from-mint/50 to-mint/10 origin-left rotate-[15deg]"></div>
                  <div className="absolute top-[54%] left-[14%] w-[35%] h-[1px] bg-gradient-to-r from-forsythia/50 to-mint/10 origin-left -rotate-[30deg]"></div>
                  <div className="absolute top-[36%] left-[62%] w-[25%] h-[1px] bg-gradient-to-r from-mint/50 to-saffron/10 origin-left rotate-[75deg]"></div>
                  <div className="absolute top-[83%] left-[33%] w-[45%] h-[1px] bg-gradient-to-r from-mint/50 to-saffron/10 origin-left -rotate-[15deg]"></div>
                </div>
                
                {/* Bloom effect behind */}
                <div className="absolute inset-0 bg-gradient-radial from-mint/10 to-transparent blur-xl"></div>
              </div>

              {/* Center Panel: Metric Stream */}
              <div className="col-span-8 flex flex-col gap-4">
                
                {/* Top Metrics Row */}
                <div className="grid grid-cols-3 gap-4 h-24">
                  {[ 
                    { label: "Token Throughput", val: "1.2B/s", color: "text-mint" },
                    { label: "Active Agents", val: "4,092", color: "text-forsythia" },
                    { label: "Latency (p99)", val: "8ms", color: "text-arctic" }
                  ].map((m, i) => (
                    <div key={i} className="bg-nocturnal/40 border border-white/5 rounded-xl p-3 flex flex-col justify-center backdrop-blur-sm hover:bg-nocturnal/60 transition-colors">
                      <p className="text-arctic/60 text-[10px] uppercase font-bold tracking-wider mb-1">{m.label}</p>
                      <p className={`text-2xl font-mono font-bold ${m.color}`}>{m.val}</p>
                    </div>
                  ))}
                </div>

                {/* Main Graph Area */}
                <div className="flex-1 bg-nocturnal/40 border border-white/5 rounded-xl p-4 flex flex-col relative overflow-hidden backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-4 z-10">
                    <h3 className="text-arctic/80 text-xs uppercase tracking-widest font-bold">System Load</h3>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_#10b981] animate-pulse"></div>
                  </div>
                  
                  <div className="flex-1 relative flex items-end gap-1 z-10 opacity-80">
                    {/* Simulated Bar Chart */}
                    {[40, 60, 45, 80, 50, 70, 95, 65, 85, 40, 55, 75, 60, 80, 50, 90].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-gradient-to-t from-forsythia/80 to-saffron/80 rounded-t-sm" 
                        style={{ height: `${h}%`, animation: `slideUpFade 0.5s ease-out ${i * 0.05}s backwards` }}
                      ></div>
                    ))}
                  </div>

                  {/* Gradient Underlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-forsythia/10 to-transparent pointer-events-none"></div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
