import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-oceanic text-arctic/80 pt-32 pb-12 relative overflow-hidden border-t border-white/5" data-animate="fade">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-nocturnal/40 to-transparent blur-3xl rounded-full pointer-events-none -translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <img src="/svgs/cube-16-solid.svg" alt="" aria-hidden="true" className="w-6 h-6 text-forsythia group-hover:rotate-90 transition-transform duration-500" />
              <span className="font-mono font-bold text-xl tracking-tight text-arctic group-hover:text-white transition-colors duration-200">
                Synapse<span className="text-forsythia">.</span>AI
              </span>
            </Link>
            <p className="text-sm max-w-xs leading-[1.7] opacity-70">
              Premium AI-powered solutions to supercharge your workflow and scale your operations effortlessly.
            </p>
          </div>
          
          <div>
            <h3 className="font-mono font-bold text-arctic mb-6 uppercase tracking-widest text-xs opacity-80">Product</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#features" className="hover:text-forsythia transition-colors duration-200">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-forsythia transition-colors duration-200">Pricing</Link></li>
              <li><Link href="#changelog" className="hover:text-forsythia transition-colors duration-200">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono font-bold text-arctic mb-6 uppercase tracking-widest text-xs opacity-80">Company</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/about" className="hover:text-forsythia transition-colors duration-200">About</Link></li>
              <li><Link href="/blog" className="hover:text-forsythia transition-colors duration-200">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-forsythia transition-colors duration-200">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono font-bold text-arctic mb-6 uppercase tracking-widest text-xs opacity-80">Legal</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/privacy" className="hover:text-forsythia transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-forsythia transition-colors duration-200">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} Synapse AI Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-arctic transition-colors duration-200">Twitter</a>
            <a href="#" className="hover:text-arctic transition-colors duration-200">GitHub</a>
            <a href="#" className="hover:text-arctic transition-colors duration-200">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
