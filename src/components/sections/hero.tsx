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
      {/* Background decoration fallback */}
      <div className="absolute inset-0 bg-gradient-radial from-oceanic/5 to-transparent blur-3xl -z-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center relative z-10" data-animate="hero">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-oceanic/5 border border-oceanic/10 text-oceanic text-sm font-medium mb-8 backdrop-blur-sm">
          <div className="w-4 h-4 bg-forsythia mask-cube mask-repeat-no-mask animate-pulse opacity-80" style={{ WebkitMaskImage: 'url(/svgs/cube-16-solid.svg)', WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', backgroundColor: 'var(--color-forsythia)' }}></div>
          Synapse-Omega Model Available Now
        </div>
        
        <h1 id="hero-heading" className="text-balance font-mono text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 max-w-5xl leading-[1.05] text-black drop-shadow-sm">
          Orchestrate complex tasks with <span className="text-black">autonomous agents</span>.
        </h1>
        
        <p className="text-balance text-lg sm:text-xl md:text-2xl text-black max-w-3xl mb-12 leading-[1.6] font-medium">
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
        <div className="premium-card w-full max-w-5xl mx-auto aspect-[16/9] sm:aspect-[16/10] md:aspect-[16/9] rounded-[2rem] overflow-hidden bg-oceanic/95 flex flex-col group p-4 sm:p-6 relative transition-transform duration-500 hover:scale-[1.02]">
          
          {/* Sweeping Light Reflection */}
          <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden rounded-[2rem]">
            <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] group-hover:animate-sweep"></div>
          </div>          
          {/* Faux browser bar */}
          <div className="h-12 border-b border-white/[0.05] shadow-[0_1px_0_rgba(255,255,255,0.02)] flex items-center px-5 gap-2.5 bg-gradient-to-b from-nocturnal/60 to-nocturnal/40 backdrop-blur-xl absolute top-0 left-0 w-full z-20">
            <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.4)] border border-[#e0443e]"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.4)] border border-[#dea123]"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.4)] border border-[#1aab29]"></div>
            <div className="mx-auto text-xs font-mono text-arctic/40 hidden sm:block bg-black/20 px-3 py-1 rounded-md border border-white/5 shadow-inner">app.synapse.ai / dashboard</div>
          </div>
          
          <div className="flex-1 w-full h-full relative pt-12 flex flex-col gap-4">
            
            <div className="grid grid-cols-12 gap-4 h-full">
              
              {/* Left Panel: Neural Nodes */}
              <div className="col-span-4 bg-nocturnal/20 border border-white/[0.05] rounded-2xl p-5 flex flex-col relative overflow-hidden shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
                <h3 className="text-mint/70 text-[10px] uppercase tracking-widest font-bold mb-4 z-10 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-mint rounded-full animate-pulse shadow-[0_0_8px_rgba(217,232,226,0.8)]"></div>
                  Neural Map
                </h3>
                <div className="flex-1 relative z-10">
                  {/* Premium Nodes & Lines */}
                  <div className="absolute top-[20%] left-[20%] w-3 h-3 rounded-full bg-mint border border-white/20 shadow-[0_0_15px_var(--color-mint)] animate-pulse"></div>
                  <div className="absolute top-[50%] left-[10%] w-2.5 h-2.5 rounded-full bg-forsythia border border-white/20 shadow-[0_0_10px_var(--color-forsythia)] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-[30%] left-[60%] w-4 h-4 rounded-full bg-mint border border-white/20 shadow-[0_0_15px_var(--color-mint)] animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-[70%] left-[70%] w-2 h-2 rounded-full bg-saffron border border-white/20 shadow-[0_0_10px_var(--color-saffron)] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  <div className="absolute top-[80%] left-[30%] w-3.5 h-3.5 rounded-full bg-mint border border-white/20 shadow-[0_0_15px_var(--color-mint)] animate-pulse" style={{ animationDelay: '2s' }}></div>
                  
                  {/* Crisp SVG-less CSS Lines */}
                  <div className="absolute top-[24%] left-[24%] w-[40%] h-[1px] bg-gradient-to-r from-mint to-mint/0 origin-left rotate-[15deg] shadow-[0_0_5px_var(--color-mint)]"></div>
                  <div className="absolute top-[54%] left-[14%] w-[35%] h-[1px] bg-gradient-to-r from-forsythia to-mint/0 origin-left -rotate-[30deg] shadow-[0_0_5px_var(--color-forsythia)]"></div>
                  <div className="absolute top-[36%] left-[62%] w-[25%] h-[1px] bg-gradient-to-r from-mint to-saffron/0 origin-left rotate-[75deg] shadow-[0_0_5px_var(--color-mint)]"></div>
                  <div className="absolute top-[83%] left-[33%] w-[45%] h-[1px] bg-gradient-to-r from-mint to-saffron/0 origin-left -rotate-[15deg] shadow-[0_0_5px_var(--color-mint)]"></div>
                </div>
                
                {/* Subtle Bloom effect behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-mint/5 to-transparent blur-2xl pointer-events-none"></div>
              </div>

              {/* Center Panel: Metric Stream */}
              <div className="col-span-8 flex flex-col gap-4">
                
                {/* Top Metrics Row */}
                <div className="grid grid-cols-3 gap-4 h-24">
                  {[ 
                    { label: "Throughput", val: "1.2B/s", color: "text-mint", spark: "from-mint" },
                    { label: "Active Nodes", val: "4,092", color: "text-forsythia", spark: "from-forsythia" },
                    { label: "Latency", val: "8ms", color: "text-arctic", spark: "from-arctic" }
                  ].map((m, i) => (
                    <div key={i} className="bg-nocturnal/20 border border-white/[0.05] rounded-2xl p-4 flex flex-col justify-center relative overflow-hidden hover:bg-white/[0.02] transition-colors group cursor-default">
                      <p className="text-mint/60 text-[9px] uppercase font-bold tracking-widest mb-1">{m.label}</p>
                      <p className={`text-2xl font-mono font-bold ${m.color} drop-shadow-md`}>{m.val}</p>
                      <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r ${m.spark} to-transparent opacity-30 group-hover:opacity-100 transition-opacity`}></div>
                    </div>
                  ))}
                </div>

                {/* Main Graph Area */}
                <div className="flex-1 bg-nocturnal/20 border border-white/[0.05] rounded-2xl p-5 flex flex-col relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-forsythia/5 to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex justify-between items-center mb-6 z-10">
                    <h3 className="text-mint/70 text-[10px] uppercase tracking-widest font-bold">System Load</h3>
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_10px_#10b981] animate-pulse"></div>
                  </div>
                  
                  <div className="flex-1 relative flex items-end gap-1.5 z-10">
                    {/* Premium Bar Chart */}
                    {[40, 60, 45, 80, 50, 70, 95, 65, 85, 40, 55, 75, 60, 80, 50, 90].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-gradient-to-t from-forsythia/40 via-saffron/80 to-saffron rounded-t-sm shadow-[0_-2px_10px_rgba(255,153,50,0.2)]" 
                        style={{ height: `${h}%`, animation: `slideUpFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.05}s backwards` }}
                      ></div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
