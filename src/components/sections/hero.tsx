import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Premium Ambient Background */}
      <div className="absolute inset-0 bg-background overflow-hidden -z-10">
        {/* Animated Mesh Gradient / Radial Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-mint/40 blur-[120px] rounded-full animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[70%] bg-forsythia/10 blur-[120px] rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-30%] left-[10%] w-[70%] h-[60%] bg-nocturnal/5 blur-[150px] rounded-full animate-blob animation-delay-4000"></div>
        
        {/* Subtle Floating Particles / Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,43,54,0.06)_1px,transparent_1px)] bg-[size:40px_40px] opacity-100 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)] animate-pan-bg"></div>

        {/* Global Glass Reflection Overlays */}
        <div className="absolute inset-0 glass-reflection mix-blend-overlay opacity-30 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 pointer-events-none"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center" data-animate>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-oceanic/5 border border-oceanic/10 text-oceanic text-sm font-medium mb-8">
          <span className="flex h-2 w-2 rounded-full bg-forsythia animate-pulse"></span>
          Synapse-Omega Model Available Now
        </div>
        
        <h1 className="font-mono text-4xl sm:text-5xl md:text-7xl font-bold text-oceanic tracking-tight mb-6 max-w-4xl leading-[1.1]">
          Orchestrate complex tasks with <span className="text-transparent bg-clip-text bg-gradient-to-r from-oceanic to-nocturnal">autonomous agents</span>.
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-oceanic/80 max-w-2xl mb-10 leading-relaxed px-2">
          The premier AI infrastructure platform for engineering teams. Deploy intelligent workflows with sub-10ms latency and enterprise-grade deterministic outputs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full px-4 sm:px-0">
          <Link
            href="/signup"
            className="w-full sm:w-auto text-center bg-oceanic text-arctic px-8 py-4 rounded-full font-bold hover:bg-nocturnal hover:scale-105 hover:shadow-[0_0_40px_rgba(23,43,54,0.4)] transition-all duration-300 shadow-[0_10px_30px_rgba(23,43,54,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia focus-visible:ring-offset-2 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            <span className="relative z-10">Start Deploying Free</span>
          </Link>
          <Link
            href="#demo"
            className="w-full sm:w-auto text-center bg-white/40 backdrop-blur-md text-oceanic border border-oceanic/10 px-8 py-4 rounded-full font-bold hover:bg-white/70 hover:shadow-[0_10px_30px_rgba(23,43,54,0.1)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oceanic focus-visible:ring-offset-2"
          >
            Read the Documentation
          </Link>
        </div>
        
        {/* Dashboard Preview */}
        <div className="mt-16 sm:mt-20 relative w-full max-w-5xl mx-auto aspect-[16/9] sm:aspect-[16/10] md:aspect-[16/9] rounded-2xl sm:rounded-[32px] overflow-hidden border border-white/40 shadow-[0_40px_80px_rgba(0,0,0,0.1)] bg-white/50 backdrop-blur-xl flex flex-col group hover:-translate-y-2 transition-transform duration-500">
          {/* Faux browser bar */}
          <div className="h-10 sm:h-12 border-b border-oceanic/10 flex items-center px-4 sm:px-6 gap-2 bg-white/80 backdrop-blur-md absolute top-0 left-0 w-full z-10" aria-hidden="true">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400"></div>
            <div className="mx-auto text-[10px] sm:text-xs font-mono text-oceanic/60 dark:text-arctic/60 hidden sm:block">app.synapse.ai / dashboard</div>
          </div>
          <div className="flex-1 w-full h-full relative bg-oceanic pt-12">
            <Image 
              src="/hero_preview.png" 
              alt="Synapse AI Dashboard Interface showing live telemetry and GPU utilization" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1024px, 1200px"
              className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
