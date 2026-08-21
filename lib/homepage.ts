import { sql } from "./db";

export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

export interface TimelineRow {
  time: string;
  step: string;
}

export interface HoursRow {
  range: string;
  time: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface TourSection {
  eyebrow: string;
  heading: string;
  subheading: string;
}

export interface HighlightCard {
  icon: string;
  title: string;
  body: string;
}

export interface HighlightsSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  cards: HighlightCard[];
}

export interface WhySection {
  heading: string;
  intro: string;
  timelineHeading: string;
  timeline: TimelineRow[];
  learnHeading: string;
  learn: string[];
  note: string;
  extraHeading: string;
  extraItems: { name: string; note: string }[];
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
}

export interface TowerSection {
  eyebrow: string;
  heading: string;
  body: string;
  bullets: string[];
  ctaButtonText: string;
  ctaHref: string;
  images: GalleryImage[];
}

export interface PracticalSection {
  hoursHeading: string;
  hours: HoursRow[];
  hoursNote: string;
  addressHeading: string;
  address: string;
  metro: string;
  bestTimeHeading: string;
  bestTimeBody: string;
}

export interface PriceSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  note: string;
  itemLabel: string;
  priceLabel: string;
  column1Label: string;
  column2Label: string;
  bestForLabel: string;
  bookLabel: string;
}

export interface FaqSection {
  eyebrow: string;
  heading: string;
}

export interface NotFoundSection {
  heading: string;
  body: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
}

export interface BlogTeaserSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  viewAllText: string;
  readArticleText: string;
}

export interface BlogPageSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  emptyStateText: string;
  featuredLinkText: string;
  ctaHeading: string;
  ctaButtonText: string;
  backToGuidesText: string;
  quickAnswerLabel: string;
  tocLabel: string;
  relatedGuidesHeading: string;
  sidebarRelatedHeading: string;
  sidebarRecommendedBadge: string;
  sidebarCompareLinkText: string;
  promoRecommendedText: string;
}

export interface HomepageSections {
  tours: TourSection;
  highlights: HighlightsSection;
  why: WhySection;
  tower: TowerSection;
  practical: PracticalSection;
  price: PriceSection;
  faq: FaqSection;
  notFound: NotFoundSection;
  blogTeaser: BlogTeaserSection;
  blogPage: BlogPageSection;
}

export interface HeaderContent {
  logoImage: string;
  logoAlt: string;
  logoLine1: string;
  logoLine2: string;
  bookNowText: string;
  navLinks: NavLink[];
  ctaText: string;
  ctaHref: string;
}

export interface FooterContent {
  tagline: string;
  columns: FooterColumn[];
  addressHeading: string;
  addressLine1: string;
  addressLine2: string;
  copyrightText: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  dark: string;
  accent: string;
}

export interface HomepageContent {
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  heroVideo: string;
  heroGallery: GalleryImage[];
  heroCtaPrimaryText: string;
  heroCtaPrimaryHref: string;
  heroCtaSecondaryText: string;
  heroCtaSecondaryHref: string;
  ratingValue: string;
  ratingCount: string;
  showFeaturedTour: boolean;
  featuredTourId: string;
  featuredBadgeLabel: string;
  featuredUrgencyText: string;
  featuredReasons: string[];
  sections: HomepageSections;
  header: HeaderContent;
  footer: FooterContent;
  theme: ThemeColors;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  noIndex: boolean;
  noFollow: boolean;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

export const DEFAULT_HEADER: HeaderContent = {
  logoImage: "",
  logoAlt: "Barcelona Flamenco Show",
  logoLine1: "Barcelona",
  logoLine2: "Flamenco Shows",
  bookNowText: "Book Tickets",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  ctaText: "Book a Show",
  ctaHref: "/#tours",
};

export const DEFAULT_FOOTER: FooterContent = {
  tagline:
    "<strong>Independent booking guide.</strong> Not affiliated with any single theater or tablao — we curate authentic live flamenco performances and dinner shows from premier Barcelona venues and earn a commission on bookings made through our links, at no extra cost to you.",
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Flamenco Shows", href: "/#tours" },
        { label: "Dinner & Show", href: "/#night-cruise" },
        { label: "Ticket Prices", href: "/#prices" },
        { label: "FAQ", href: "/#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ],
  addressHeading: "Main Tablao Quarter",
  addressLine1: "La Rambla & Gothic Quarter",
  addressLine2: "08002 Barcelona, Spain",
  copyrightText:
    "Barcelona Flamenco Show. All prices shown in EUR and subject to change by the venue.",
};

export const DEFAULT_THEME: ThemeColors = {
  primary: "#dc2626",   // Spanish Flamenco Crimson
  secondary: "#f59e0b", // Andalusian Sunset Gold
  dark: "#18181b",      // Midnight Velvet Charcoal
  accent: "#e11d48",    // Passion Rose / Ruby
};

export const DEFAULT_GALLERY: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=900&auto=format&fit=crop",
    alt: "Passionate flamenco dancer performing with red dress in Barcelona",
    label: "Passionate Baile",
  },
  {
    src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=900&auto=format&fit=crop",
    alt: "Spanish flamenco guitarist and dancer performing live on stage",
    label: "Spanish Guitar",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=900&auto=format&fit=crop",
    alt: "Spanish tapas and wine dinner at authentic Barcelona tablao",
    label: "Tapas & Sangria",
  },
  {
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=900&auto=format&fit=crop",
    alt: "Candlelight atmosphere inside historic Baroque palace venue in Barcelona",
    label: "Historic Tablao",
  },
];

export const DEFAULT_SECTIONS: HomepageSections = {
  tours: {
    eyebrow: "Handpicked Venues",
    heading: "Barcelona Flamenco Shows & Tickets",
    subheading:
      "Curated flamenco experiences — historic Las Ramblas tablaos, intimate 19th-century theater halls, and multi-course Spanish dinner packages. Every show features award-winning master artists.",
  },
  highlights: {
    eyebrow: "The Flamenco Experience",
    heading: "What Makes Barcelona Flamenco Special",
    subheading:
      "Flamenco isn't a passive recital — it's an electric, improvised dialogue between singer, guitarist, and dancer. Here is why experiencing a live show in Barcelona is unmissable.",
    cards: [
      {
        title: "Raw Acoustic Intimacy",
        body: "Experience pure acoustic power in intimate tablaos designed for close-up viewing without microphones or digital barriers.",
        icon: "💃",
      },
      {
        title: "Master Cantaores & Guitarists",
        body: "Witness lightning-fast Spanish guitar rasgueado, impassioned vocal cante jondo, and thunderous zapateado footwork.",
        icon: "🎸",
      },
      {
        title: "Historic Atmospheric Venues",
        body: "From 17th-century Gothic palaces to 19th-century theater halls and traditional Andalusian courtyards.",
        icon: "🏛️",
      },
      {
        title: "Tapas, Sangria & Gastronomy",
        body: "Pair virtuosic flamenco with authentic Spanish tapas, cured Ibérico ham, seafood paella, and regional wines.",
        icon: "🍷",
      },
    ],
  },
  why: {
    heading: "What You Actually Experience at a Barcelona Flamenco Show",
    intro:
      "One evening, raw emotion, and more Spanish musical heritage than any museum could convey. Here is how a traditional flamenco performance unfolds on stage.",
    timelineHeading: "Structure of a live performance",
    timeline: [
      { time: "0:00", step: "Introduction: Solitary Spanish guitar solo (Toque) setting the rhythmic compás and mood" },
      { time: "0:10", step: "The Entrance: Cantaor begins soulful cante jondo singing accompanied by percussive palmas" },
      { time: "0:25", step: "First Baile: Main bailaora enters with slow, expressive arm movements (braceo) building into fiery zapateado footwork" },
      { time: "0:40", step: "Instrumental Interlude: Duet featuring virtuosic Spanish guitar and resonant cajón rhythm" },
      { time: "0:50", step: "Climax & Duet: High-tempo bulerías and soleás showcasing athletic turns and emotional intensity" },
      { time: "1:00", step: "Fin de Fiesta: Joyful ensemble finale with spontaneous solos from all musicians and dancers" },
    ],
    learnHeading: "What you'll notice",
    learn: [
      "How dancers communicate tempo changes to guitarists in real time through footwork rhythms",
      "The significance of 'Duende' — the mysterious state of heightened emotion connecting artist and audience",
      "Why traditional tablao venues perform without electronic microphones for pure acoustic resonance",
      "The distinctive difference between solemn soleá rhythms and celebratory, fast-paced bulerías",
    ],
    note: "Shows run between 45 to 75 minutes with drinks included on most tickets. Dinner packages feature multi-course service beginning 45–60 minutes prior to showtime.",
    extraHeading: "Where the top tablaos are located",
    extraItems: [
      { name: "Las Ramblas (Tablao Cordobes)", note: "Prime central promenade location with authentic cave-inspired acoustic hall" },
      { name: "Gothic Quarter & Plaça Reial", note: "Historic cobblestone plazas home to Los Tarantos and palace venues" },
      { name: "Montjuïc Hill (Poble Espanyol)", note: "Andalusian village setting with full dinner and complimentary museum access" },
    ],
    ctaText: "Ready to feel the passion? Tickets start at €20/person with instant booking and free cancellation.",
    ctaButtonText: "Book Flamenco Tickets →",
    ctaHref: "#tours",
  },
  tower: {
    eyebrow: "Dinner & Show Experience",
    heading: "Authentic Spanish Tapas & Live Flamenco",
    body:
      "Transform your evening into a full cultural celebration. Pair the visceral emotion of live flamenco with <strong>traditional Spanish tapas, Ibérico charcuterie, freshly made paella, and fine Rioja wine</strong> in Barcelona's most historic venues.",
    bullets: [
      "Multi-course Spanish gastronomic dinner or curated tapas tasting paired with sangria and Cava",
      "Priority front-row and elevated tier seating for optimal stage sightlines",
      "Performances inside historic Catalan theaters, palace courtyards, and traditional Andalusian tablaos",
      "Free admission to Poble Espanyol included on select Montjuïc dinner tickets",
    ],
    ctaButtonText: "See Dinner & Show Packages",
    ctaHref: "#tours",
    images: [
      {
        src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=900&auto=format&fit=crop",
        alt: "Passionate flamenco dancer performing with red dress in Barcelona",
        label: "Passionate Baile",
      },
      {
        src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=900&auto=format&fit=crop",
        alt: "Spanish flamenco guitarist performing live on stage",
        label: "Spanish Guitar",
      },
      {
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=900&auto=format&fit=crop",
        alt: "Spanish tapas and wine dinner at authentic Barcelona tablao",
        label: "Tapas & Sangria",
      },
      {
        src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=900&auto=format&fit=crop",
        alt: "Candlelight atmosphere inside historic Baroque palace venue in Barcelona",
        label: "Historic Tablao",
      },
    ],
  },
  practical: {
    hoursHeading: "Show Schedules & Times (2026)",
    hours: [
      { range: "Daily Evening Shows", time: "6:00 PM, 7:30 PM, 9:00 PM & 10:30 PM" },
      { range: "Dinner & Tapas Service", time: "Starts 45–60 minutes before showtime" },
    ],
    hoursNote: "Multiple daily departures across Barcelona's top central tablaos.",
    addressHeading: "Top Tablao Locations",
    address:
      "Tablao Cordobes — La Rambla 35 (Metro Liceu, L3).\nTeatro City Hall — Rambla de Catalunya 2 (Metro Catalunya, L1/L3).\nLos Tarantos — Plaça Reial 17 (Metro Liceu, L3).\nTablao de Carmen — Poble Espanyol, Av. Francesc Ferrer i Guàrdia 13.",
    metro: "Arrive 15–20 minutes before showtime — show your digital mobile voucher at the venue door.",
    bestTimeHeading: "Best Time to Book",
    bestTimeBody:
      "Prime 8:00 PM and 9:30 PM dinner shows sell out quickly on weekends and peak tourist seasons. We recommend reserving online 2 to 5 days in advance.",
  },
  price: {
    eyebrow: "Transparent Comparison",
    heading: "Compare & Choose Your Barcelona Flamenco Show",
    subheading:
      "Compare top tablaos side by side — choose between show-only with drink, VIP theater seats, or full Spanish dinner packages.",
    note: "Children and youth receive discounted tickets on most shows; infants enter free on parent's lap — check each ticket's booking page for full details.",
    itemLabel: "Flamenco Venue & Show",
    priceLabel: "Price",
    column1Label: "Duration",
    column2Label: "Drinks / Dinner",
    bestForLabel: "Best For",
    bookLabel: "Book",
  },
  faq: {
    eyebrow: "Got Questions?",
    heading: "Barcelona Flamenco Show FAQs",
  },
  notFound: {
    heading: "Looks like this page missed the show.",
    body: "The page you're looking for doesn't exist or may have moved. Explore our top flamenco shows or guides below.",
    primaryButtonText: "Compare Barcelona Flamenco Shows →",
    primaryButtonHref: "/#tours",
    secondaryButtonText: "Read Flamenco Guides",
    secondaryButtonHref: "/blog",
  },
  blogTeaser: {
    eyebrow: "From the Blog",
    heading: "Barcelona Flamenco Guides & Tips",
    subheading:
      "Expert advice, tablao comparisons, dinner reviews, and insider tips to help you pick the best flamenco show in Barcelona.",
    viewAllText: "View All Articles",
    readArticleText: "Read Article",
  },
  blogPage: {
    eyebrow: "Flamenco Guide & Tips",
    heading: "Barcelona Flamenco Guides & Cultural Tips",
    subheading: "Practical advice to help you choose the best tablao, understand flamenco traditions, and book the perfect evening.",
    emptyStateText: "No articles published yet — check back soon.",
    featuredLinkText: "Read the guide",
    ctaHeading: "Ready to experience live flamenco in Barcelona?",
    ctaButtonText: "Compare Barcelona Flamenco Shows & Tickets →",
    backToGuidesText: "← All travel guides",
    quickAnswerLabel: "Quick Answer",
    tocLabel: "In This Guide",
    relatedGuidesHeading: "Related Travel Guides",
    sidebarRelatedHeading: "Related Travel Guides",
    sidebarRecommendedBadge: "Recommended",
    sidebarCompareLinkText: "Compare all flamenco shows & tickets →",
    promoRecommendedText: "Recommended Show",
  },
};

const DEFAULT_HOMEPAGE_CONTENT: HomepageContent = {
  heroBadge: "💃 Authentic Tablaos · Tapas & Sangria · Instant Confirmation",
  heroHeading: "Barcelona Flamenco Show — Passionate Live Performances & Tablao Tickets",
  heroSubheading:
    "Experience the raw emotion, virtuosic Spanish guitar, and fiery footwork of an authentic Barcelona flamenco show. Compare top historic tablaos, intimate venues, and dinner packages with instant confirmation.",
  heroImage:
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2400&auto=format&fit=crop",
  heroImageAlt: "Passionate Spanish flamenco dancer performing live on stage in Barcelona with red dress and dramatic lighting",
  heroVideo: "",
  heroGallery: DEFAULT_GALLERY,
  heroCtaPrimaryText: "Compare Flamenco Shows",
  heroCtaPrimaryHref: "#tours",
  heroCtaSecondaryText: "See Ticket Prices",
  heroCtaSecondaryHref: "#prices",
  ratingValue: "4.85 / 5",
  ratingCount: "55,000+ verified reviews",
  showFeaturedTour: true,
  featuredTourId: "tablao-cordobes-barcelona-flamenco-show",
  featuredBadgeLabel: "Most Iconic Tablao",
  featuredUrgencyText: "High Demand · Advance Booking Recommended",
  featuredReasons: [
    "55,000+ verified reviews — rated 4.85 / 5 across Barcelona tablaos",
    "Prime central venues on Las Ramblas, Plaça Reial, Gothic Quarter & Montjuïc",
    "Free cancellation up to 24 hours before showtime",
  ],
  sections: DEFAULT_SECTIONS,
  header: DEFAULT_HEADER,
  footer: DEFAULT_FOOTER,
  theme: DEFAULT_THEME,
  metaTitle: "Barcelona Flamenco Show Tickets & Best Tablaos (2026)",
  metaDescription:
    "Book authentic Barcelona flamenco show tickets. Compare top tablaos, dinner & tapas packages, and live performances with instant confirmation & free cancellation.",
  focusKeyword: "Barcelona Flamenco Show",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "",
  ogTitle: "",
  ogDescription: "",
  ogImage: "",
};

function parseReasons(value: unknown): string[] {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
}

function parseJsonWithDefault<T extends object>(value: unknown, fallback: T): T {
  let parsed: unknown = value;
  if (typeof value === "string") {
    try {
      parsed = JSON.parse(value);
    } catch {
      parsed = null;
    }
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return fallback;
  return { ...fallback, ...(parsed as Partial<T>) };
}

function rowToHomepage(row: any): HomepageContent {
  const sectionsRaw = parseJsonWithDefault<HomepageSections>(row.sections_json, DEFAULT_SECTIONS);
  return {
    heroBadge: row.hero_badge || DEFAULT_HOMEPAGE_CONTENT.heroBadge,
    heroHeading: row.hero_heading || DEFAULT_HOMEPAGE_CONTENT.heroHeading,
    heroSubheading: row.hero_subheading || DEFAULT_HOMEPAGE_CONTENT.heroSubheading,
    heroImage: row.hero_image || DEFAULT_HOMEPAGE_CONTENT.heroImage,
    heroImageAlt: row.hero_image_alt || DEFAULT_HOMEPAGE_CONTENT.heroImageAlt,
    heroVideo: row.hero_video || "",
    heroGallery: (() => {
      const g = parseReasons(row.hero_gallery);
      return g.length ? (g as unknown as GalleryImage[]) : DEFAULT_GALLERY;
    })(),
    heroCtaPrimaryText: row.hero_cta_primary_text || DEFAULT_HOMEPAGE_CONTENT.heroCtaPrimaryText,
    heroCtaPrimaryHref: row.hero_cta_primary_href || DEFAULT_HOMEPAGE_CONTENT.heroCtaPrimaryHref,
    heroCtaSecondaryText: row.hero_cta_secondary_text || DEFAULT_HOMEPAGE_CONTENT.heroCtaSecondaryText,
    heroCtaSecondaryHref: row.hero_cta_secondary_href || DEFAULT_HOMEPAGE_CONTENT.heroCtaSecondaryHref,
    ratingValue: row.rating_value || DEFAULT_HOMEPAGE_CONTENT.ratingValue,
    ratingCount: row.rating_count || DEFAULT_HOMEPAGE_CONTENT.ratingCount,
    showFeaturedTour: row.show_featured_tour !== undefined ? !!row.show_featured_tour : true,
    featuredTourId: row.featured_tour_id || DEFAULT_HOMEPAGE_CONTENT.featuredTourId,
    featuredBadgeLabel: row.featured_badge_label || DEFAULT_HOMEPAGE_CONTENT.featuredBadgeLabel,
    featuredUrgencyText: row.featured_urgency_text || DEFAULT_HOMEPAGE_CONTENT.featuredUrgencyText,
    featuredReasons: (() => {
      const r = parseReasons(row.featured_reasons);
      return r.length ? r : DEFAULT_HOMEPAGE_CONTENT.featuredReasons;
    })(),
    sections: {
      tours: { ...DEFAULT_SECTIONS.tours, ...sectionsRaw.tours },
      highlights: { ...DEFAULT_SECTIONS.highlights, ...sectionsRaw.highlights },
      why: { ...DEFAULT_SECTIONS.why, ...sectionsRaw.why },
      tower: { ...DEFAULT_SECTIONS.tower, ...sectionsRaw.tower },
      practical: { ...DEFAULT_SECTIONS.practical, ...sectionsRaw.practical },
      price: { ...DEFAULT_SECTIONS.price, ...sectionsRaw.price },
      faq: { ...DEFAULT_SECTIONS.faq, ...sectionsRaw.faq },
      notFound: { ...DEFAULT_SECTIONS.notFound, ...sectionsRaw.notFound },
      blogTeaser: { ...DEFAULT_SECTIONS.blogTeaser, ...sectionsRaw.blogTeaser },
      blogPage: { ...DEFAULT_SECTIONS.blogPage, ...sectionsRaw.blogPage },
    },
    header: parseJsonWithDefault<HeaderContent>(row.header_json, DEFAULT_HEADER),
    footer: parseJsonWithDefault<FooterContent>(row.footer_json, DEFAULT_FOOTER),
    theme: parseJsonWithDefault<ThemeColors>(row.theme_json, DEFAULT_THEME),
    metaTitle: row.meta_title || DEFAULT_HOMEPAGE_CONTENT.metaTitle,
    metaDescription: row.meta_description || DEFAULT_HOMEPAGE_CONTENT.metaDescription,
    focusKeyword: row.focus_keyword || DEFAULT_HOMEPAGE_CONTENT.focusKeyword,
    noIndex: !!row.no_index,
    noFollow: !!row.no_follow,
    canonicalUrl: row.canonical_url || "",
    ogTitle: row.og_title || "",
    ogDescription: row.og_description || "",
    ogImage: row.og_image || "",
  };
}

export async function getHomepageContent(): Promise<HomepageContent> {
  try {
    const rows = await sql`SELECT * FROM homepage WHERE id = 1 LIMIT 1`;
    return rows.length ? rowToHomepage(rows[0]) : DEFAULT_HOMEPAGE_CONTENT;
  } catch {
    return DEFAULT_HOMEPAGE_CONTENT;
  }
}

export async function getSiteChrome(): Promise<{ header: HeaderContent; footer: FooterContent; theme: ThemeColors }> {
  try {
    const rows = await sql`SELECT header_json, footer_json, theme_json FROM homepage WHERE id = 1 LIMIT 1`;
    if (!rows.length) return { header: DEFAULT_HEADER, footer: DEFAULT_FOOTER, theme: DEFAULT_THEME };
    const row = rows[0] as any;
    return {
      header: parseJsonWithDefault<HeaderContent>(row.header_json, DEFAULT_HEADER),
      footer: parseJsonWithDefault<FooterContent>(row.footer_json, DEFAULT_FOOTER),
      theme: parseJsonWithDefault<ThemeColors>(row.theme_json, DEFAULT_THEME),
    };
  } catch {
    return { header: DEFAULT_HEADER, footer: DEFAULT_FOOTER, theme: DEFAULT_THEME };
  }
}

export async function saveHomepageCopy(data: {
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  heroVideo: string;
  heroGallery: GalleryImage[];
  heroCtaPrimaryText: string;
  heroCtaPrimaryHref: string;
  heroCtaSecondaryText: string;
  heroCtaSecondaryHref: string;
  ratingValue: string;
  ratingCount: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}): Promise<void> {
  await sql`
    INSERT INTO homepage (
      id, hero_badge, hero_heading, hero_subheading, hero_image, hero_image_alt,
      hero_video, hero_gallery, hero_cta_primary_text, hero_cta_primary_href,
      hero_cta_secondary_text, hero_cta_secondary_href,
      rating_value, rating_count, meta_title, meta_description, focus_keyword,
      canonical_url, og_title, og_description, og_image
    ) VALUES (
      1, ${data.heroBadge}, ${data.heroHeading}, ${data.heroSubheading}, ${data.heroImage},
      ${data.heroImageAlt}, ${data.heroVideo || ""}, ${JSON.stringify(data.heroGallery || [])}::jsonb,
      ${data.heroCtaPrimaryText || ""}, ${data.heroCtaPrimaryHref || ""},
      ${data.heroCtaSecondaryText || ""}, ${data.heroCtaSecondaryHref || ""},
      ${data.ratingValue}, ${data.ratingCount},
      ${data.metaTitle || ""}, ${data.metaDescription || ""}, ${data.focusKeyword || ""},
      ${data.canonicalUrl || ""}, ${data.ogTitle || ""}, ${data.ogDescription || ""}, ${data.ogImage || ""}
    )
    ON CONFLICT (id) DO UPDATE SET
      hero_badge = EXCLUDED.hero_badge,
      hero_heading = EXCLUDED.hero_heading,
      hero_subheading = EXCLUDED.hero_subheading,
      hero_image = EXCLUDED.hero_image,
      hero_image_alt = EXCLUDED.hero_image_alt,
      hero_video = EXCLUDED.hero_video,
      hero_gallery = EXCLUDED.hero_gallery,
      hero_cta_primary_text = EXCLUDED.hero_cta_primary_text,
      hero_cta_primary_href = EXCLUDED.hero_cta_primary_href,
      hero_cta_secondary_text = EXCLUDED.hero_cta_secondary_text,
      hero_cta_secondary_href = EXCLUDED.hero_cta_secondary_href,
      rating_value = EXCLUDED.rating_value,
      rating_count = EXCLUDED.rating_count,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      focus_keyword = EXCLUDED.focus_keyword,
      canonical_url = EXCLUDED.canonical_url,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;
}

export async function setHomepageIndexing(noIndex: boolean, noFollow: boolean): Promise<void> {
  await sql`
    INSERT INTO homepage (id, no_index, no_follow)
    VALUES (1, ${!!noIndex}, ${!!noFollow})
    ON CONFLICT (id) DO UPDATE SET
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow
  `;
}

export async function saveRecommendedTour(data: {
  showFeaturedTour: boolean;
  featuredTourId: string;
  featuredBadgeLabel: string;
  featuredUrgencyText: string;
  featuredReasons: string[];
}): Promise<void> {
  await sql`
    INSERT INTO homepage (
      id, show_featured_tour, featured_tour_id, featured_badge_label,
      featured_urgency_text, featured_reasons
    ) VALUES (
      1, ${!!data.showFeaturedTour}, ${data.featuredTourId}, ${data.featuredBadgeLabel},
      ${data.featuredUrgencyText}, ${JSON.stringify(data.featuredReasons || [])}::jsonb
    )
    ON CONFLICT (id) DO UPDATE SET
      show_featured_tour = EXCLUDED.show_featured_tour,
      featured_tour_id = EXCLUDED.featured_tour_id,
      featured_badge_label = EXCLUDED.featured_badge_label,
      featured_urgency_text = EXCLUDED.featured_urgency_text,
      featured_reasons = EXCLUDED.featured_reasons
  `;
}

export async function saveHomepageSections(sections: HomepageSections): Promise<void> {
  await sql`
    INSERT INTO homepage (id, sections_json)
    VALUES (1, ${JSON.stringify(sections)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET sections_json = EXCLUDED.sections_json
  `;
}

export async function saveSiteHeader(header: HeaderContent): Promise<void> {
  await sql`
    INSERT INTO homepage (id, header_json)
    VALUES (1, ${JSON.stringify(header)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET header_json = EXCLUDED.header_json
  `;
}

export async function saveSiteFooter(footer: FooterContent): Promise<void> {
  await sql`
    INSERT INTO homepage (id, footer_json)
    VALUES (1, ${JSON.stringify(footer)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET footer_json = EXCLUDED.footer_json
  `;
}

export async function saveSiteTheme(theme: ThemeColors): Promise<void> {
  await sql`
    INSERT INTO homepage (id, theme_json)
    VALUES (1, ${JSON.stringify(theme)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET theme_json = EXCLUDED.theme_json
  `;
}
