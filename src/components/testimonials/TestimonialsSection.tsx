import React from 'react';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Synapse-Omega allowed us to offload 80% of our manual QA processes to autonomous agents. The deterministic outputs and sub-10ms latency transformed our pipeline overnight.",
      author: "Sarah Chen",
      role: "CTO, DataScale Inc.",
      companyLogo: "DS"
    },
    {
      quote: "We evaluated every LLM infrastructure provider. Nobody else offers this level of global VRAM pooling and enterprise-grade security. The dashboard alone is worth the Enterprise tier.",
      author: "Marcus Vance",
      role: "VP Engineering, NeuroFlow",
      companyLogo: "NF"
    },
    {
      quote: "The ability to instantly deploy custom fine-tuned models to the edge with zero egress fees has reduced our cloud compute spend by 40% while doubling our throughput.",
      author: "Elena Rodriguez",
      role: "Lead Architect, Quantum ML",
      companyLogo: "QML"
    }
  ];

  return (
    <section className="py-32 bg-mint relative overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-oceanic/40 to-transparent blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16" data-animate="reveal">
          <h2 id="testimonials-heading" className="text-balance text-3xl md:text-4xl font-extrabold text-foreground tracking-tighter mb-4 leading-[1.1]">
            Trusted by engineering teams globally
          </h2>
          <p className="text-balance text-base sm:text-lg text-oceanic/70 dark:text-arctic/70 px-4 leading-[1.7]">
            See how industry leaders are scaling their autonomous workflows with Synapse.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <article 
              key={idx} 
              className="premium-card bg-white/80 backdrop-blur border border-oceanic/[0.08] shadow-sm rounded-3xl p-8 flex flex-col justify-between group"
              data-animate="cascade"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="mb-8 relative">
                <span className="text-6xl text-forsythia/20 absolute -top-4 -left-2 font-serif leading-none">&quot;</span>
                <p className="text-oceanic relative z-10 font-medium leading-[1.7]">
                  {testimonial.quote}
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-oceanic text-white flex items-center justify-center font-bold border border-white/10 shadow-sm">
                  {testimonial.companyLogo}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-oceanic/70">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
