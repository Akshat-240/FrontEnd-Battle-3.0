'use client';

import React from 'react';

export function DashboardSection() {
  return (
    <section className="py-32 bg-oceanic relative overflow-hidden" aria-labelledby="dashboard-heading">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-15 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-nocturnal via-oceanic to-transparent blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-animate="dashboard">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-nocturnal text-arctic text-sm font-semibold mb-8 border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.12)] stagger-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>
            System Live
          </div>
          <h2 id="dashboard-heading" className="text-balance text-4xl md:text-5xl lg:text-6xl font-extrabold text-arctic tracking-tighter flex items-center justify-center gap-4 stagger-2 leading-[1.1]">
            <img src="/svgs/chart-pie.svg" alt="Analytics" className="w-10 h-10 md:w-12 md:h-12 text-forsythia" />
            AI Operating System
          </h2>
          <p className="text-balance text-lg sm:text-xl text-mint/70 mt-6 max-w-2xl mx-auto stagger-3 leading-[1.7]">
            Real-time telemetry, agent orchestration, and global compute allocation monitored in one centralized command interface.
          </p>
        </div>

        {/* Global Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:h-[800px]">
          
          {/* Left Column: Activity & Agents */}
          <div className="lg:col-span-3 flex flex-col gap-8 h-full stagger-4">
            
            {/* Live Agent Status */}
            <div className="bg-nocturnal rounded-3xl p-6 flex flex-col h-1/3 relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] border border-white/[0.08] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] group">
              {/* Glass reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>
              
              <h3 className="text-mint/70 font-bold text-sm tracking-widest uppercase mb-4 flex items-center gap-2 relative z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>
                Live Agents
              </h3>
              
              <div className="flex-1 relative overflow-hidden rounded-lg bg-black/40 border border-white/5 p-2 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
                {/* Tiny scanning line over the grid */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-mint/30 shadow-[0_0_10px_rgba(217,232,226,0.5)] z-20 pointer-events-none opacity-50 animate-scan-line"></div>
                
                <div className="grid grid-cols-6 gap-1.5 h-full content-start">
                  {Array.from({ length: 36 }).map((_, i) => {
                    const dur1 = ['1.2s', '2.5s', '1.8s', '3.1s', '1.5s', '2.2s', '1.9s', '2.8s'][(i * 3) % 8];
                    const dur2 = ['0.8s', '1.1s', '0.5s', '1.4s', '0.9s', '1.2s', '0.7s', '1.3s'][(i * 5 + 2) % 8];
                    const del1 = ['0s', '0.4s', '0.8s', '1.2s', '0.2s', '0.6s', '1.0s', '1.4s'][(i * 2 + 1) % 8];
                    const isPrimary = [true, true, false, true, true, false, true, false, true, false, true, true][i % 12];
                    const isSecondary = [false, false, true, false, false, false, true, false, true, false, false, false][i % 12];

                    return (
                      <div key={i} className="aspect-square rounded-sm bg-[#0a192f] border border-white/[0.08] relative overflow-hidden group/item shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]">
                        {/* Soft internal glow */}
                        <div className="absolute inset-0 bg-mint/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-white/[0.05]"></div>
                        <div className="absolute top-[40%] left-0 w-full h-[1px] bg-white/[0.05]"></div>
                        <div className="absolute top-[60%] left-0 w-full h-[1px] bg-white/[0.05]"></div>
                        <div className="absolute top-[80%] left-0 w-full h-[1px] bg-white/[0.05]"></div>
                        
                        <div 
                          className={`absolute bottom-1 right-1 w-1 h-1 rounded-full ${isPrimary ? 'bg-emerald-400 shadow-[0_0_4px_#34d399]' : 'bg-white/20'} animate-pulse`} 
                          style={{ animationDuration: dur1, animationDelay: del1 }}
                        ></div>
                        <div 
                          className={`absolute bottom-1 left-1 w-1 h-1 rounded-full ${isSecondary ? 'bg-amber-400 shadow-[0_0_4px_#fbbf24]' : 'bg-transparent'} animate-pulse`} 
                          style={{ animationDuration: dur2 }}
                        ></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Activity Stream */}
            <div className="bg-nocturnal rounded-3xl p-6 flex flex-col h-2/3 relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] border border-white/[0.08] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>
              
              <div className="flex justify-between items-center mb-6 relative z-10">
                <h3 className="text-mint/70 font-bold text-sm tracking-widest uppercase flex items-center gap-2">
                  Activity Stream
                </h3>
                <div className="flex items-center gap-1.5 bg-white/10 text-arctic text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Live
                </div>
              </div>
              
              <div className="flex-1 relative">
                {/* Fade masks */}
                <div className="absolute top-0 w-full h-6 bg-gradient-to-b from-nocturnal to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-nocturnal to-transparent z-10 pointer-events-none"></div>
                
                <div className="space-y-1.5 pt-2">
                  {[
                    { time: '10:42:01', msg: 'Node auto-scaled in us-east-1', type: 'info' },
                    { time: '10:41:55', msg: 'Workflow #892 completed', type: 'success' },
                    { time: '10:41:40', msg: 'High latency detected on DB', type: 'warn' },
                    { time: '10:41:12', msg: 'Agent pool expanded (+50)', type: 'info' },
                    { time: '10:40:05', msg: 'Model fine-tuning finished', type: 'success' },
                    { time: '10:39:22', msg: 'Deploying update to edge', type: 'info' }
                  ].map((event, idx) => (
                    <div 
                      key={idx} 
                      className="flex gap-4 text-sm items-start p-2 rounded-lg hover:bg-white/[0.03] transition-colors duration-200 opacity-0 animate-[slideUpFade_0.5s_forwards]" 
                      style={{ animationDelay: `${idx * 0.15}s` }}
                    >
                      <span className="text-arctic/40 font-mono text-xs mt-0.5 w-16 shrink-0">{event.time}</span>
                      <p className={`flex-1 ${event.type === 'warn' ? 'text-forsythia' : event.type === 'success' ? 'text-mint' : 'text-arctic/80'}`}>
                        {event.msg}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column: Core Pipeline & Ring */}
          <div className="lg:col-span-6 flex flex-col gap-8 h-full stagger-5">
            {/* Inference Pipeline / Workflow Graph */}
            <div className="bg-nocturnal rounded-3xl p-6 flex flex-col flex-1 relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.15)] border border-white/[0.1] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none"></div>
              
              <h3 className="text-mint/70 font-bold text-sm tracking-widest uppercase mb-6 relative z-10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-mint shadow-[0_0_8px_rgba(217,232,226,0.8)] animate-pulse"></span>
                Inference Pipeline
              </h3>
              
              <div className="flex-1 relative flex items-center justify-center mt-4">
                {/* Advanced SVG Orchestration Graph */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.05))' }}>
                  <defs>
                    <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--color-mint)" stopOpacity="0" />
                      <stop offset="50%" stopColor="var(--color-mint)" stopOpacity="1" />
                      <stop offset="100%" stopColor="var(--color-mint)" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="flow-gradient-alt" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-forsythia)" stopOpacity="0" />
                      <stop offset="50%" stopColor="var(--color-forsythia)" stopOpacity="1" />
                      <stop offset="100%" stopColor="var(--color-forsythia)" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="flow-gradient-saffron" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--color-saffron)" stopOpacity="0" />
                      <stop offset="50%" stopColor="var(--color-saffron)" stopOpacity="1" />
                      <stop offset="100%" stopColor="var(--color-saffron)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Base Track Paths */}
                  <path d="M 15% 25% C 25% 25%, 35% 50%, 50% 50%" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M 15% 75% C 25% 75%, 35% 50%, 50% 50%" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M 50% 50% C 60% 50%, 65% 50%, 72% 50%" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M 72% 50% C 78% 50%, 82% 25%, 88% 25%" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M 72% 50% C 78% 50%, 82% 50%, 88% 50%" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M 72% 50% C 78% 50%, 82% 75%, 88% 75%" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" strokeDasharray="4 4" />

                  {/* Animated Packets */}
                  <path d="M 15% 25% C 25% 25%, 35% 50%, 50% 50%" fill="none" stroke="url(#flow-gradient)" strokeWidth="2" strokeDasharray="40 200" className="animate-dash-flow" />
                  <path d="M 15% 75% C 25% 75%, 35% 50%, 50% 50%" fill="none" stroke="url(#flow-gradient-alt)" strokeWidth="2" strokeDasharray="40 200" className="animate-dash-flow" style={{ animationDelay: '-0.4s' }} />
                  <path d="M 50% 50% C 60% 50%, 65% 50%, 72% 50%" fill="none" stroke="url(#flow-gradient)" strokeWidth="2.5" strokeDasharray="40 100" className="animate-dash-flow" style={{ animationDelay: '-0.2s' }} />
                  <path d="M 72% 50% C 78% 50%, 82% 25%, 88% 25%" fill="none" stroke="url(#flow-gradient-alt)" strokeWidth="1.5" strokeDasharray="30 150" className="animate-dash-flow" style={{ animationDelay: '-0.6s' }} />
                  <path d="M 72% 50% C 78% 50%, 82% 50%, 88% 50%" fill="none" stroke="url(#flow-gradient-saffron)" strokeWidth="1.5" strokeDasharray="30 150" className="animate-dash-flow" style={{ animationDelay: '-0.9s' }} />
                  <path d="M 72% 50% C 78% 50%, 82% 75%, 88% 75%" fill="none" stroke="url(#flow-gradient)" strokeWidth="1.5" strokeDasharray="30 150" className="animate-dash-flow" style={{ animationDelay: '-0.1s' }} />
                </svg>

                {/* Node: INGEST */}
                <div className="absolute left-[15%] top-[25%] -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-[14px] bg-nocturnal/90 border border-white/10 flex flex-col items-center justify-center z-10 shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md transition-transform duration-300 hover:scale-[1.05]">
                  <div className="w-5 h-5 rounded-full bg-mint/10 flex items-center justify-center mb-1 border border-mint/20 relative">
                    <div className="w-1.5 h-1.5 bg-mint rounded-full shadow-[0_0_5px_var(--color-mint)] animate-[pulse_2s_ease-in-out_infinite]"></div>
                    <div className="absolute inset-0 rounded-full border border-mint/30 animate-[pulse-ring_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
                  </div>
                  <span className="text-arctic text-[8px] uppercase tracking-wider font-bold">Ingest</span>
                </div>

                {/* Node: CONTEXT */}
                <div className="absolute left-[15%] top-[75%] -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-[14px] bg-nocturnal/90 border border-white/10 flex flex-col items-center justify-center z-10 shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md transition-transform duration-300 hover:scale-[1.05]">
                  <div className="w-5 h-5 rounded-full bg-forsythia/10 flex items-center justify-center mb-1 border border-forsythia/20 relative">
                    <div className="w-1.5 h-1.5 bg-forsythia rounded-full shadow-[0_0_5px_var(--color-forsythia)] animate-[pulse_2s_ease-in-out_infinite_0.5s]"></div>
                    <div className="absolute inset-0 rounded-full border border-forsythia/30 animate-[pulse-ring_2s_cubic-bezier(0.4,0,0.6,1)_infinite_0.5s]"></div>
                  </div>
                  <span className="text-arctic text-[8px] uppercase tracking-wider font-bold">Context</span>
                </div>

                {/* Node: OMEGA CORE (Largest) */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-32 h-32 rounded-[2rem] bg-gradient-to-br from-[#173a4a] to-[#0a192f] border border-white/20 flex flex-col items-center justify-center z-20 shadow-[0_10px_40px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.3)] hover:scale-[1.02] transition-transform duration-300">
                  <div className="absolute inset-[-6px] rounded-[2.2rem] border border-mint/30 pulse-ring"></div>
                  <div className="absolute inset-0 bg-gradient-radial from-mint/10 to-transparent rounded-[2rem] opacity-50 animate-pulse"></div>
                  <div className="w-12 h-12 bg-mint/10 rounded-full flex items-center justify-center border border-mint/20 mb-2 relative z-10 shadow-[0_0_20px_rgba(217,232,226,0.15)]">
                    <span className="text-2xl drop-shadow-lg">🧠</span>
                  </div>
                  <span className="text-arctic text-[11px] uppercase tracking-widest font-extrabold relative z-10">Omega Core</span>
                  <div className="absolute bottom-3 flex gap-1 z-10">
                    <span className="w-1 h-1 rounded-full bg-mint animate-pulse" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1 h-1 rounded-full bg-mint animate-pulse" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1 h-1 rounded-full bg-mint animate-pulse" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>

                {/* Node: REASONING */}
                <div className="absolute left-[72%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-[14px] bg-nocturnal/90 border border-white/10 flex flex-col items-center justify-center z-10 shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md transition-transform duration-300 hover:scale-[1.05]">
                  <div className="w-5 h-5 rounded-full bg-saffron/10 flex items-center justify-center mb-1 border border-saffron/20 relative">
                    <div className="w-1.5 h-1.5 bg-saffron rounded-full shadow-[0_0_5px_var(--color-saffron)] animate-[pulse_2s_ease-in-out_infinite_0.2s]"></div>
                  </div>
                  <span className="text-arctic text-[7px] uppercase tracking-wider font-bold">Reasoning</span>
                </div>

                {/* Output Branches */}
                <div className="absolute left-[88%] top-[25%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-nocturnal/90 border border-white/10 flex flex-col items-center justify-center z-10 shadow-[0_4px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md transition-colors hover:bg-white/5">
                  <span className="text-arctic/80 text-[7px] uppercase tracking-wider font-bold">Webhooks</span>
                </div>
                <div className="absolute left-[88%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-nocturnal/90 border border-white/10 flex flex-col items-center justify-center z-10 shadow-[0_4px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md transition-colors hover:bg-white/5">
                  <span className="text-arctic/80 text-[7px] uppercase tracking-wider font-bold">API Resp</span>
                </div>
                <div className="absolute left-[88%] top-[75%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-nocturnal/90 border border-white/10 flex flex-col items-center justify-center z-10 shadow-[0_4px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md transition-colors hover:bg-white/5">
                  <span className="text-arctic/80 text-[7px] uppercase tracking-wider font-bold">Storage</span>
                </div>
              </div>
            </div>

            {/* Bottom Metrics (Throughput / Latency) */}
            <div className="grid grid-cols-2 gap-8 h-48">
              {/* Token Throughput */}
              <div className="bg-nocturnal rounded-3xl p-6 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] border border-white/[0.08] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>
                <h3 className="text-mint/70 text-xs font-bold tracking-widest uppercase relative z-10">Token Throughput</h3>
                <div className="flex items-end justify-between relative z-10">
                  <div>
                    <p className="text-4xl font-bold text-arctic tracking-tight">1.2B<span className="text-lg text-arctic/60 font-medium">/s</span></p>
                    <p className="text-forsythia text-sm mt-1 font-medium tracking-wide">↑ 14% vs last hour</p>
                  </div>
                  {/* CSS Sparkline with growUp animation */}
                  <div className="flex items-end gap-1.5 h-14">
                    {[3, 5, 4, 7, 6, 8, 10, 8, 12, 11, 14, 15].map((h, i) => (
                      <div 
                        key={i} 
                        className="w-1.5 bg-gradient-to-t from-forsythia/20 to-forsythia rounded-t-sm origin-bottom animate-[growUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards] group-hover:animate-[pulse_1s_ease-in-out_infinite]" 
                        style={{ height: `${h * 3.5}px`, animationDelay: `${i * 0.05}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* P99 Latency */}
              <div className="bg-nocturnal rounded-3xl p-6 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] border border-white/[0.08] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>
                <h3 className="text-mint/70 text-xs font-bold tracking-widest uppercase relative z-10">P99 Latency</h3>
                <div className="flex items-end justify-between relative z-10">
                  <div>
                    <p className="text-4xl font-bold text-arctic tracking-tight">8<span className="text-lg text-arctic/60 font-medium">ms</span></p>
                    <p className="text-emerald-400 text-sm mt-1 font-medium tracking-wide flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Stable
                    </p>
                  </div>
                  {/* Animated Continuous Line Graph */}
                  <div className="w-28 h-14 relative overflow-hidden">
                    <div className="absolute bottom-0 w-[200%] h-full animate-[sweepLeft_10s_linear_infinite]">
                      <svg preserveAspectRatio="none" viewBox="0 0 200 100" className="w-full h-full opacity-60">
                        <path d="M0,80 Q10,60 20,70 T40,50 T60,60 T80,45 T100,60 T120,40 T140,55 T160,35 T180,50 T200,60" fill="none" stroke="var(--color-forsythia)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M0,80 Q10,60 20,70 T40,50 T60,60 T80,45 T100,60 T120,40 T140,55 T160,35 T180,50 T200,60 L200,100 L0,100 Z" fill="url(#areaGradient)" stroke="none" />
                        <defs>
                          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--color-forsythia)" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="var(--color-forsythia)" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: AI Confidence & Deployments */}
          <div className="lg:col-span-3 flex flex-col gap-8 h-full stagger-5" style={{ animationDelay: '0.6s' }}>
            {/* AI Confidence Ring */}
            <div className="bg-nocturnal rounded-3xl p-6 flex flex-col items-center justify-center h-1/2 relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] border border-white/[0.08] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>
              
              <div className="absolute top-6 left-6 flex flex-col gap-1 z-10">
                <h3 className="text-mint/70 font-bold text-sm tracking-widest uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-forsythia shadow-[0_0_8px_rgba(255,200,1,0.8)] animate-pulse"></span>
                  Confidence
                </h3>
                <span className="text-[10px] text-arctic/50 font-mono tracking-wider">AI Reliability</span>
              </div>
              
              <div className="relative w-44 h-44 mt-8 flex items-center justify-center">
                {/* Rotating subtle glow background */}
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(255,200,1,0.1),transparent)] animate-[spin_4s_linear_infinite]"></div>
                
                {/* Highlight Sweep pseudo-element using a div */}
                <div className="absolute inset-0 rounded-full overflow-hidden mask-radial-gradient">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[sweep_3s_ease-in-out_infinite_1s]"></div>
                </div>

                {/* SVG Ring */}
                <svg className="w-full h-full transform -rotate-90 relative z-10 drop-shadow-xl" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="8" />
                  {/* Subtle pulsing track inner */}
                  <circle cx="50" cy="50" r="34" fill="none" stroke="rgba(255,200,1,0.05)" strokeWidth="1" className="animate-pulse" />
                  <circle 
                    cx="50" cy="50" r="42" 
                    fill="none" 
                    stroke="var(--color-forsythia)" 
                    strokeWidth="8" 
                    strokeDasharray="263.89" 
                    strokeDashoffset="13.19" /* 95% */
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_12px_rgba(255,200,1,0.6)] animate-[pulse_3s_ease-in-out_infinite]"
                    style={{ transition: 'stroke-dashoffset 2s ease-out' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                  <span className="text-5xl font-extrabold text-arctic tracking-tighter drop-shadow-md">95<span className="text-2xl text-arctic/50 font-medium">%</span></span>
                </div>
              </div>
            </div>

            {/* Anomaly Shield */}
            <div className="bg-nocturnal rounded-3xl p-6 flex flex-col h-1/2 relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] border border-white/[0.08] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>
              
              <div className="flex items-center gap-2 mb-6 relative z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-forsythia shadow-[0_0_8px_rgba(255,200,1,0.8)] animate-pulse"></span>
                <h3 className="text-mint/70 font-bold text-sm tracking-widest uppercase">Anomaly Shield</h3>
              </div>
              
              <div className="flex-1 flex flex-col gap-3 justify-center relative z-10">
                <div className="flex justify-between items-center bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-3.5 rounded-xl border border-white/[0.05] shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-mint/10 border border-mint/20 flex items-center justify-center text-mint text-xs font-bold shadow-[0_0_10px_rgba(217,232,226,0.1)]">01</div>
                    <span className="text-sm text-arctic font-medium">DDoS Mitigation</span>
                  </div>
                  <span className="text-xs text-emerald-400 font-mono bg-emerald-400/10 px-2.5 py-1 rounded-md border border-emerald-400/20">Active</span>
                </div>
                <div className="flex justify-between items-center bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-3.5 rounded-xl border border-white/[0.05] shadow-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-forsythia/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-forsythia/10 border border-forsythia/20 flex items-center justify-center text-forsythia text-xs font-bold shadow-[0_0_10px_rgba(255,200,1,0.1)]">02</div>
                    <span className="text-sm text-arctic font-medium">Prompt Injection</span>
                  </div>
                  <span className="text-xs text-forsythia font-mono bg-forsythia/10 px-2.5 py-1 rounded-md border border-forsythia/20 relative z-10">Blocked (12)</span>
                </div>
                <div className="flex justify-between items-center bg-white/[0.02] hover:bg-white/[0.04] transition-colors p-3.5 rounded-xl border border-white/[0.05] shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white text-xs font-bold">03</div>
                    <span className="text-sm text-arctic font-medium text-opacity-80">Context Overflow</span>
                  </div>
                  <span className="text-xs text-arctic/40 font-mono bg-white/5 px-2.5 py-1 rounded-md border border-white/5">Idle</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
