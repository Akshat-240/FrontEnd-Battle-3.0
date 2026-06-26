'use client';

import React from 'react';

export function DashboardSection() {
  return (
    <section className="py-32 bg-oceanic relative overflow-hidden" aria-labelledby="dashboard-heading">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-oceanic to-transparent blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-animate="dashboard">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-nocturnal text-arctic text-sm font-semibold mb-8 border border-white/[0.08] shadow-lg stagger-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
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
            <div className="bg-nocturnal rounded-3xl p-6 flex flex-col h-1/3 shadow-[0_4px_20px_rgba(23,43,54,0.1)] border border-white/[0.05] transition-transform duration-150 hover:scale-[1.015]">
              <h3 className="text-mint/70 font-bold text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>
                Live Agents
              </h3>
              <div className="flex-1 grid grid-cols-6 gap-2 content-start">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="aspect-square rounded-sm bg-white/[0.02] border border-white/[0.08] relative overflow-hidden group">
                    {/* Random active states */}
                    {(i % 7 === 0 || i % 11 === 0 || i === 2) && (
                      <div className="absolute inset-0 bg-emerald-400/20">
                        <div className="absolute inset-0 bg-emerald-400 animate-pulse opacity-50" style={{ animationDelay: `${i * 0.1}s` }}></div>
                      </div>
                    )}
                    {(i % 17 === 0) && (
                      <div className="absolute inset-0 bg-forsythia/20">
                        <div className="absolute inset-0 bg-forsythia animate-pulse opacity-50" style={{ animationDelay: `${i * 0.15}s` }}></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Stream */}
            <div className="bg-nocturnal rounded-3xl p-6 flex flex-col h-2/3 overflow-hidden shadow-[0_4px_20px_rgba(23,43,54,0.1)] border border-white/[0.05] transition-transform duration-150 hover:scale-[1.015]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-mint/70 font-bold text-sm tracking-widest uppercase">Activity Stream</h3>
                <span className="text-xs bg-white/10 text-arctic px-2 py-1 rounded">Live</span>
              </div>
              <div className="flex-1 relative">
                {/* Fade masks */}
                <div className="absolute top-0 w-full h-8 bg-gradient-to-b from-nocturnal to-transparent z-10"></div>
                <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-nocturnal to-transparent z-10"></div>
                
                {/* Scrolling content simulation via absolute positions and slide up animations */}
                <div className="space-y-4 pt-4">
                  {[
                    { time: '10:42:01', msg: 'Node auto-scaled in us-east-1', type: 'info' },
                    { time: '10:41:55', msg: 'Workflow #892 completed', type: 'success' },
                    { time: '10:41:40', msg: 'High latency detected on DB', type: 'warn' },
                    { time: '10:41:12', msg: 'Agent pool expanded (+50)', type: 'info' },
                    { time: '10:40:05', msg: 'Model fine-tuning finished', type: 'success' },
                    { time: '10:39:22', msg: 'Deploying update to edge', type: 'info' }
                  ].map((event, idx) => (
                    <div key={idx} className="flex gap-3 text-sm items-start opacity-0 animate-[slideUpFade_0.5s_forwards]" style={{ animationDelay: `${idx * 0.8}s` }}>
                      <span className="text-arctic/40 font-mono text-xs mt-0.5">{event.time}</span>
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
            <div className="bg-nocturnal rounded-3xl p-6 flex flex-col flex-1 relative overflow-hidden shadow-[0_4px_20px_rgba(23,43,54,0.1)] border border-white/[0.05] transition-transform duration-150 hover:scale-[1.015] group">
              {/* Animated scan line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-mint/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan-line z-20 pointer-events-none shadow-[0_0_10px_rgba(217,232,226,0.5)]"></div>
              
              <h3 className="text-mint/70 font-bold text-sm tracking-widest uppercase mb-6 relative z-10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-mint shadow-[0_0_8px_rgba(217,232,226,0.8)] animate-pulse"></span>
                Inference Pipeline
              </h3>
              
              <div className="flex-1 relative flex items-center justify-center">
                {/* SVG Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                  <path d="M 150 150 C 250 150, 250 250, 350 250" fill="none" stroke="rgba(217,232,226,0.2)" strokeWidth="2" />
                  <path d="M 150 150 C 250 150, 250 250, 350 250" fill="none" stroke="var(--color-mint)" strokeWidth="2" strokeDasharray="4 8" className="animate-dash-flow" />
                  
                  <path d="M 150 350 C 250 350, 250 250, 350 250" fill="none" stroke="rgba(255,200,1,0.2)" strokeWidth="2" />
                  <path d="M 150 350 C 250 350, 250 250, 350 250" fill="none" stroke="var(--color-forsythia)" strokeWidth="2" strokeDasharray="4 8" className="animate-dash-flow" style={{ animationDuration: '1.5s' }} />
                  
                  <path d="M 350 250 L 550 250" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                  <path d="M 350 250 L 550 250" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="4 8" className="animate-dash-flow" style={{ animationDuration: '0.8s' }} />
                </svg>

                {/* Nodes */}
                <div className="absolute left-[10%] top-[30%] w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center z-10 shadow-sm transition-transform duration-150 hover:scale-[1.015]">
                  <div className="w-8 h-8 rounded-full bg-mint/20 flex items-center justify-center mb-2">
                    <div className="w-2 h-2 bg-mint rounded-full animate-pulse shadow-[0_0_8px_rgba(217,232,226,0.8)]"></div>
                  </div>
                  <span className="text-arctic text-xs font-mono">Ingest</span>
                </div>

                <div className="absolute left-[10%] bottom-[30%] w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center z-10 shadow-sm transition-transform duration-150 hover:scale-[1.015]">
                  <div className="w-8 h-8 rounded-full bg-forsythia/20 flex items-center justify-center mb-2">
                    <div className="w-2 h-2 bg-forsythia rounded-full animate-pulse shadow-[0_0_8px_rgba(255,200,1,0.8)]"></div>
                  </div>
                  <span className="text-arctic text-xs font-mono">Context</span>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-32 h-32 rounded-[2rem] bg-gradient-to-br from-oceanic to-nocturnal border border-white/10 flex flex-col items-center justify-center z-20 shadow-md transition-transform duration-150 hover:scale-[1.015]">
                  <div className="absolute inset-0 rounded-[2rem] border-2 border-mint/30 pulse-ring"></div>
                  <span className="text-3xl">🧠</span>
                  <span className="text-arctic font-bold mt-2">Omega</span>
                </div>

                <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center z-10 shadow-sm transition-transform duration-150 hover:scale-[1.015]">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mb-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                  </div>
                  <span className="text-arctic text-xs font-mono">Output</span>
                </div>
              </div>
            </div>

            {/* Bottom Metrics (Throughput / Latency) */}
            <div className="grid grid-cols-2 gap-8 h-48">
              <div className="bg-nocturnal rounded-3xl p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(23,43,54,0.1)] border border-white/[0.05] transition-transform duration-150 hover:scale-[1.015]">
                <h3 className="text-mint/70 text-xs font-bold tracking-widest uppercase">Token Throughput</h3>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-4xl font-bold text-arctic">1.2B<span className="text-lg text-arctic/60">/s</span></p>
                    <p className="text-forsythia text-sm mt-1">↑ 14% vs last hour</p>
                  </div>
                  {/* CSS Sparkline */}
                  <div className="flex items-end gap-1.5 h-12">
                    {[3, 5, 4, 7, 6, 8, 10, 8, 12, 11, 14, 15].map((h, i) => (
                      <div key={i} className="w-1.5 bg-gradient-to-t from-forsythia/20 to-forsythia rounded-t-sm" style={{ height: `${h * 3}px` }}></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-nocturnal rounded-3xl p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(23,43,54,0.1)] border border-white/[0.05] transition-transform duration-150 hover:scale-[1.015]">
                <h3 className="text-mint/70 text-xs font-bold tracking-widest uppercase">P99 Latency</h3>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-4xl font-bold text-arctic">8<span className="text-lg text-arctic/60">ms</span></p>
                    <p className="text-forsythia text-sm mt-1">Stable</p>
                  </div>
                  {/* CSS Area chart simulation */}
                  <div className="w-24 h-12 relative overflow-hidden">
                    <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-forsythia/40 to-transparent clip-path-area"></div>
                    <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                      <path d="M0,80 Q20,60 40,70 T80,50 T100,60" fill="none" stroke="var(--color-forsythia)" strokeWidth="4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: AI Confidence & Deployments */}
          <div className="lg:col-span-3 flex flex-col gap-8 h-full stagger-5" style={{ animationDelay: '0.6s' }}>
            {/* AI Confidence Ring */}
            <div className="bg-nocturnal rounded-3xl p-6 flex flex-col items-center justify-center h-1/2 relative overflow-hidden shadow-[0_4px_20px_rgba(23,43,54,0.1)] border border-white/[0.05] transition-transform duration-150 hover:scale-[1.015]">
              <h3 className="absolute top-6 left-6 text-mint/70 font-bold text-sm tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forsythia shadow-[0_0_8px_rgba(255,200,1,0.8)] animate-pulse"></span>
                Confidence
              </h3>
              
              <div className="relative w-40 h-40 mt-6">
                {/* SVG Ring */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                  <circle 
                    cx="50" cy="50" r="40" 
                    fill="none" 
                    stroke="var(--color-forsythia)" 
                    strokeWidth="8" 
                    strokeDasharray="251.2" 
                    strokeDashoffset="12.56" /* 95% */
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_10px_rgba(255,200,1,0.5)]"
                    style={{ transition: 'stroke-dashoffset 2s ease-out' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-arctic tracking-tighter">95<span className="text-xl text-arctic/50">%</span></span>
                </div>
              </div>
            </div>

            {/* Anomaly Detection */}
            <div className="bg-nocturnal rounded-3xl p-6 flex flex-col h-1/2 shadow-[0_4px_20px_rgba(23,43,54,0.1)] border border-white/[0.05] transition-transform duration-150 hover:scale-[1.015]">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-forsythia shadow-[0_0_8px_rgba(255,200,1,0.8)] animate-pulse"></span>
                <h3 className="text-mint/70 font-bold text-sm tracking-widest uppercase">Anomaly Shield</h3>
              </div>
              
              <div className="flex-1 flex flex-col gap-4 justify-center">
                <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-mint/20 flex items-center justify-center text-mint text-xs font-bold">01</div>
                    <span className="text-sm text-arctic">DDoS Mitigation</span>
                  </div>
                  <span className="text-xs text-emerald-400 font-mono">Active</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-forsythia/20 flex items-center justify-center text-forsythia text-xs font-bold">02</div>
                    <span className="text-sm text-arctic">Prompt Injection</span>
                  </div>
                  <span className="text-xs text-emerald-400 font-mono">Blocked (12)</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-xs font-bold">03</div>
                    <span className="text-sm text-arctic">Context Overflow</span>
                  </div>
                  <span className="text-xs text-oceanic/50 bg-white/10 px-2 py-0.5 rounded font-mono">Idle</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
