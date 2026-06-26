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
  metadataBase: new URL('https://your-deployed-url.vercel.app'),
  title: "Synapse AI | Autonomous Agent Infrastructure",
  description: "Deploy intelligent workflows with sub-10ms latency and enterprise-grade deterministic outputs.",
  keywords: ["AI automation", "autonomous agents", "ML infrastructure", "AI platform", "enterprise AI", "workflow orchestration"],
  authors: [{ name: "Synapse AI Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Synapse AI | Autonomous Agent Infrastructure",
    description: "Deploy intelligent workflows with sub-10ms latency and enterprise-grade deterministic outputs.",
    url: "https://your-deployed-url.vercel.app",
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
    description: "Deploy intelligent workflows with sub-10ms latency and enterprise-grade deterministic outputs.",
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
  themeColor: "#172B36", // Oceanic Noir
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
