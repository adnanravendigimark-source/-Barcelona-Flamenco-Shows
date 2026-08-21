import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import { resolveRobots } from "@/lib/seo";
import { getSiteChrome } from "@/lib/homepage";
import { hexToRgbTriplet } from "@/lib/color";
import "./globals.css";

export const dynamic = "force-dynamic";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-serif",
});

const displayFont = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-display",
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2400&auto=format&fit=crop";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Barcelona Flamenco Show",
  url: SITE_URL,
  description:
    "Independent guide comparing authentic Barcelona flamenco shows, historic tablaos, and tapas dinner packages from licensed venues.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Barcelona Flamenco Show",
  url: SITE_URL,
};

export function generateMetadata(): Metadata {
  const robots = resolveRobots(false);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Barcelona Flamenco Show Tickets & Best Tablaos (2026)",
      template: "%s | Barcelona Flamenco Show",
    },
    description:
      "Compare authentic Barcelona flamenco shows, historic tablaos on Las Ramblas, and dinner & tapas packages. Instant online booking, free cancellation on most tickets.",
    keywords: [
      "Barcelona Flamenco Show",
      "Flamenco shows Barcelona",
      "best flamenco show Barcelona",
      "Barcelona flamenco tickets",
      "Tablao Cordobes Barcelona",
      "Teatro City Hall Flamenco",
      "Los Tarantos Flamenco",
      "Tablao de Carmen Barcelona",
      "Flamenco show with dinner Barcelona",
      "Gothic Quarter Flamenco",
    ],
    alternates: {
      canonical: "/",
    },
    robots,
    openGraph: {
      title: "Barcelona Flamenco Show Tickets & Best Tablaos | Live Shows + Dinner",
      description:
        "Passionate live flamenco performances, historic tablaos, and tapas dinner packages in Barcelona. Compare prices and book online.",
      type: "website",
      url: SITE_URL,
      siteName: "Barcelona Flamenco Show",
      images: [{ url: DEFAULT_OG_IMAGE, width: 2400, height: 1350, alt: "Passionate flamenco dancer performing live in Barcelona" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Barcelona Flamenco Show Tickets & Best Tablaos | Live Shows + Dinner",
      description:
        "Passionate live flamenco performances, historic tablaos, and tapas dinner packages in Barcelona. Compare prices and book online.",
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

function buildThemeStyle(theme: { primary: string; secondary: string; dark: string; accent: string }) {
  const vars: [string, string | null][] = [
    ["--color-canal-primary", hexToRgbTriplet(theme.primary)],
    ["--color-canal-blue", hexToRgbTriplet(theme.secondary)],
    ["--color-canal-ink", hexToRgbTriplet(theme.dark)],
    ["--color-gold-400", hexToRgbTriplet(theme.accent)],
  ];
  const declarations = vars
    .filter(([, value]) => value !== null)
    .map(([name, value]) => `${name}:${value};`)
    .join("");
  return declarations ? `:root{${declarations}}` : "";
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = await getSiteChrome();
  const themeStyle = buildThemeStyle(theme);

  return (
    <html lang="en" className={`${serifFont.variable} ${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        {/* Warms up the connection to Google's analytics domains ahead of
            the afterInteractive gtag.js load below, shaving the DNS/TLS
            handshake off its actual request instead of paying for it when
            the script fires. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SYMDM65LVH" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-SYMDM65LVH');
          `}
        </Script>
      </head>
      <body className="font-body bg-stone-50 text-zinc-900 antialiased selection:bg-red-500 selection:text-white">
        {themeStyle && <style dangerouslySetInnerHTML={{ __html: themeStyle }} />}
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
