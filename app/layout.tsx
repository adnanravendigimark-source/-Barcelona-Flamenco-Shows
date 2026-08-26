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

const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero-alhambra.jpg`;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Alhambra Tour",
  url: SITE_URL,
  description:
    "Independent guide comparing official Alhambra guided tours, Nasrid Palaces fast-track entry tickets, and Generalife garden experiences in Granada.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Alhambra Tour",
  url: SITE_URL,
};

export function generateMetadata(): Metadata {
  const robots = resolveRobots(false);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Alhambra Tour — Official Guided Tours & Fast-Track Tickets (2026)",
      template: "%s | Alhambra Tour",
    },
    description:
      "Book official Alhambra tours with skip-the-line entry to Nasrid Palaces, Generalife Gardens & Alcazaba in Granada. Instant confirmation & expert local guides.",
    keywords: [
      "Alhambra Tour",
      "Alhambra tickets",
      "Alhambra Palace",
      "Alhambra Granada",
      "Alhambra guided tours",
      "Alhambra Palace tours",
      "Nasrid Palaces",
      "Generalife Gardens",
      "Alcazaba",
      "Granada sightseeing",
      "Alhambra visiting tips",
      "Alhambra ticket information",
    ],
    alternates: {
      canonical: "/",
    },
    robots,
    openGraph: {
      title: "Alhambra Tour — Official Guided Tours & Tickets in Granada",
      description:
        "Discover the breathtaking Alhambra Palace, Nasrid Palaces, and Generalife Gardens with expert local guides in Granada, Spain.",
      type: "website",
      url: SITE_URL,
      siteName: "Alhambra Tour",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Panoramic view of the Alhambra Palace in Granada Spain" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Alhambra Tour — Official Guided Tours & Tickets in Granada",
      description:
        "Discover the breathtaking Alhambra Palace, Nasrid Palaces, and Generalife Gardens with expert local guides in Granada, Spain.",
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-79QHG880Z2" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-79QHG880Z2');
          `}
        </Script>
      </head>
      <body className="font-body bg-[#F8F3E9] text-[#29302A] antialiased selection:bg-[#263D2A] selection:text-white">
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
