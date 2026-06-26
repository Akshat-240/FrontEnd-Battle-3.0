"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "bg-arctic/70 backdrop-blur-xl border-b border-oceanic/5 shadow-[0_1px_0_rgba(255,255,255,0.8),0_8px_32px_rgba(23,43,54,0.08)] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-mono font-bold text-xl tracking-tight text-oceanic">
            Synapse<span className="text-forsythia">.</span>AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium relative group">
            <span className="text-oceanic transition-colors duration-300 group-hover:text-nocturnal">Features</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-forsythia transition-all duration-300 group-hover:w-full rounded-full"></span>
          </Link>
          <Link href="#pricing" className="text-sm font-medium relative group">
            <span className="text-oceanic transition-colors duration-300 group-hover:text-nocturnal">Pricing</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-forsythia transition-all duration-300 group-hover:w-full rounded-full"></span>
          </Link>
          <Link href="#faq" className="text-sm font-medium relative group">
            <span className="text-oceanic transition-colors duration-300 group-hover:text-nocturnal">FAQ</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-forsythia transition-all duration-300 group-hover:w-full rounded-full"></span>
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium relative group">
            <span className="text-oceanic transition-colors duration-300 group-hover:text-nocturnal">Log in</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-forsythia transition-all duration-300 group-hover:w-full rounded-full"></span>
          </Link>
          <Link
            href="/signup"
            className="btn-primary text-sm font-bold px-5 py-2.5 rounded-full relative overflow-hidden group"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:animate-sweep"></div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-3 -mr-1 text-oceanic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-arctic shadow-subtle border-t border-oceanic/5">
          <div className="flex flex-col px-6 py-4 gap-4">
            <Link href="#features" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2">
              Features
            </Link>
            <Link href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2">
              Pricing
            </Link>
            <Link href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium py-2">
              FAQ
            </Link>
            <div className="h-px bg-oceanic/10 w-full my-2"></div>
            <Link href="/login" className="text-base font-medium py-2">
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-forsythia text-oceanic text-base font-bold px-5 py-3 rounded-full text-center hover:bg-saffron transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
