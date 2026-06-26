import React from 'react';

export function DashboardSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden" aria-label="AI Performance Dashboard">
      {/* Ambient glowing background blobs */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-mint/30 dark:bg-mint/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-forsythia/10 blur-[100px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-animate>
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400">Live Telemetry Active</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">System Dashboard</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-oceanic text-white px-4 py-2 rounded-full text-sm font-medium border border-white/10 shadow-lg flex items-center gap-2">
              <span className="text-forsythia">v4.2.0-rc</span>
              <span className="opacity-50">|</span>
              <span className="hidden sm:inline">Model: Synapse-Omega</span>
            </div>
          </div>
        </div>

        {/* Top KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'AI Confidence Score', value: '97.8%', trend: '+0.4%', positive: true },
            { label: 'Active Autonomous Agents', value: '1,492', trend: '+124', positive: true },
            { label: 'Global Requests / Sec', value: '84.2K', trend: '+12%', positive: true },
            { label: 'Average Inference Latency', value: '42ms', trend: '-8ms', positive: true },
          ].map((kpi, idx) => (
            <div key={idx} className="bg-oceanic text-white rounded-3xl p-6 border border-white/10 shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 group-hover:bg-forsythia/10 transition-colors" />
              <p className="text-sm text-mint/70 font-medium mb-2">{kpi.label}</p>
              <div className="flex items-baseline gap-3">
                <p className="text-3xl font-bold tracking-tight">{kpi.value}</p>
                <span className={`text-sm font-medium px-2 py-0.5 rounded-md ${kpi.positive ? 'text-emerald-400 bg-emerald-400/10' : 'text-red-400 bg-red-400/10'}`}>
                  {kpi.trend}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Column */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Revenue Growth Chart (CSS Area Chart) */}
            <div className="bg-oceanic text-white rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col h-[300px] md:h-[400px]">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">Projected Revenue Growth</h3>
                  <p className="text-sm text-mint/70">Based on active agent execution limits</p>
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-forsythia">$4.2M <span className="text-sm text-mint/70 font-medium">ARR</span></h4>
              </div>
              
              <div className="sr-only">
                A line chart showing revenue growth trending smoothly upwards from January to December, ending at 4.2 million dollars.
              </div>

              {/* Pure CSS Area Chart */}
              <div className="relative flex-1 w-full border-b border-l border-white/10" aria-hidden="true">
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-forsythia/30 to-forsythia/5 origin-bottom"
                  style={{
                    clipPath: 'polygon(0% 100%, 0% 85%, 10% 80%, 20% 75%, 30% 65%, 40% 60%, 50% 45%, 60% 50%, 70% 30%, 80% 25%, 90% 15%, 100% 5%, 100% 100%)'
                  }}
                />
                <div 
                  className="absolute inset-0 bg-forsythia opacity-80 shadow-[0_0_20px_rgba(255,200,1,0.5)]"
                  style={{
                    clipPath: 'polygon(0% 84%, 10% 79%, 20% 74%, 30% 64%, 40% 59%, 50% 44%, 60% 49%, 70% 29%, 80% 24%, 90% 14%, 100% 4%, 100% 6%, 90% 16%, 80% 26%, 70% 31%, 60% 51%, 50% 46%, 40% 61%, 30% 66%, 20% 76%, 10% 81%, 0% 86%)'
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-between opacity-20 pointer-events-none">
                  <div className="border-t border-white border-dashed w-full h-0" />
                  <div className="border-t border-white border-dashed w-full h-0" />
                  <div className="border-t border-white border-dashed w-full h-0" />
                  <div className="border-t border-white border-dashed w-full h-0" />
                </div>
                <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-mint/50 font-medium">
                  <span>Q1</span>
                  <span>Q2</span>
                  <span>Q3</span>
                  <span>Q4</span>
                </div>
              </div>
            </div>

            {/* Sub-grid for Weekly Activity and Workflow Stages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Weekly Activity (CSS Bar Chart) */}
              <div className="bg-oceanic text-white rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col min-h-[320px]">
                <h3 className="text-lg font-bold mb-6">Weekly Execution Volume</h3>
                
                <div className="sr-only">Bar chart showing execution volumes fluctuating over 7 days, peaking on day 6.</div>
                
                <div className="flex-1 flex items-end justify-between gap-2 sm:gap-3 relative" aria-hidden="true">
                  <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none border-y border-white">
                    <div className="w-full h-0" />
                    <div className="border-t border-white w-full h-0" />
                    <div className="border-t border-white w-full h-0" />
                  </div>
                  
                  {[45, 65, 55, 80, 70, 95, 85].map((height, i) => (
                    <div key={i} className="w-full relative group h-full flex items-end">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-oceanic text-[10px] sm:text-xs font-bold py-1 px-1 sm:px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg">
                        {height}k
                      </div>
                      <div 
                        className={`w-full rounded-t-md transition-all duration-300 group-hover:brightness-125 ${i === 5 ? 'bg-forsythia shadow-[0_0_15px_rgba(255,200,1,0.4)]' : 'bg-white/20'}`}
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] sm:text-xs text-mint/50 font-medium mt-4">
                  <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                </div>
              </div>

              {/* Workflow Stages */}
              <div className="bg-oceanic text-white rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col min-h-[320px]">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold">Pipeline Efficiency</h3>
                  <span className="text-xs bg-white/10 px-2 py-1 rounded text-arctic/80">Last 1h</span>
                </div>
                
                <div className="space-y-6 flex-1 flex flex-col justify-center">
                  {[
                    { label: 'Data Ingestion', value: 99.9, color: 'bg-emerald-400' },
                    { label: 'Neural Processing', value: 92.4, color: 'bg-forsythia' },
                    { label: 'Decision Output', value: 97.8, color: 'bg-white' },
                  ].map((step, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium text-arctic/80">{step.label}</span>
                        <span className="text-white font-bold">{step.value}%</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden shadow-inner">
                        <div className={`h-full ${step.color} rounded-full transition-all duration-1000 ease-out group-hover:opacity-80`} style={{ width: `${step.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 flex flex-col gap-8 relative">
            
            {/* GPU Utilization Radial */}
            <div className="bg-oceanic text-white rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-radial from-mint/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-lg font-bold w-full text-left mb-8 z-10">Global GPU Utilization</h3>
              
              <div className="sr-only">GPU Utilization is currently at 86 percent capacity.</div>
              
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-white/5 flex items-center justify-center mb-4" aria-hidden="true">
                <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(#3EE0B5 0% 86%, transparent 86% 100%)' }}></div>
                <div className="absolute inset-2 bg-oceanic rounded-full"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">86<span className="text-2xl text-mint">%</span></span>
                  <span className="text-xs text-mint/70 mt-1 uppercase tracking-wider font-mono">Capacity</span>
                </div>
              </div>
            </div>

            {/* Live Insight Notification */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.2)] animate-bounce-slow relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-forsythia"></div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-forsythia/20 flex items-center justify-center shrink-0">
                  <span className="text-forsythia text-sm">💡</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">AI Insight Generated</p>
                  <p className="text-arctic/80 text-xs leading-relaxed">
                    Routing 40% of standard inference traffic to edge node eu-west-3 reduced latency by 12ms.
                  </p>
                </div>
              </div>
            </div>

            {/* Decisions Timeline */}
            <div className="bg-oceanic rounded-3xl p-6 sm:p-8 border border-white/10 shadow-glass flex-1 flex flex-col">
              <h3 className="text-white font-bold text-lg mb-6">Recent Events</h3>
              <div className="space-y-6 sm:space-y-8 border-l border-white/10 ml-2 pb-4">
                {[
                  { title: 'Auto-scaled H100 cluster', time: '2 mins ago', desc: 'Added 4x H100 nodes to pool', color: 'bg-emerald-400' },
                  { title: 'Threat Mitigated', time: '14 mins ago', desc: 'Blocked DDOS vector on API gateway', color: 'bg-amber-400' },
                  { title: 'Model Checkpoint', time: '1 hr ago', desc: 'Synapse-Omega v2.1 saved', color: 'bg-blue-400' },
                  { title: 'Cost Optimization', time: '3 hrs ago', desc: 'Downscaled idle instances', color: 'bg-purple-400' },
                ].map((event, i) => (
                  <div key={i} className="relative pl-6">
                    <div className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full ${event.color} shadow-[0_0_10px_currentColor]`} />
                    <p className="text-sm font-bold text-white">{event.title}</p>
                    <p className="text-xs text-mint/70 mt-1 mb-1">{event.desc}</p>
                    <p className="text-[10px] text-mint/50 font-medium uppercase tracking-wider">{event.time}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
