import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollRevealProvider } from "@/components/providers/ScrollRevealProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synapse AI | Autonomous Agent Infrastructure",
  description: "The premium SaaS platform designed for high-performance teams. Deploy intelligent autonomous workflows with sub-10ms latency and deterministic outputs.",
  keywords: ["AI", "Autonomous Agents", "LLM Infrastructure", "Edge Inference", "VRAM Pooling"],
  authors: [{ name: "Synapse AI Team" }],
  openGraph: {
    title: "Synapse AI | Autonomous Agent Infrastructure",
    description: "The premium SaaS platform designed for high-performance teams. Deploy intelligent autonomous workflows with sub-10ms latency.",
    url: "https://synapse.ai",
    siteName: "Synapse AI",
    images: [
      {
        url: "/hero_preview.png",
        width: 1200,
        height: 630,
        alt: "Synapse AI Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synapse AI | Autonomous Agent Infrastructure",
    description: "The premium SaaS platform designed for high-performance teams.",
    images: ["/hero_preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "#152731",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-background text-foreground font-sans min-h-screen flex flex-col" suppressHydrationWarning>
        <ScrollRevealProvider />
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
