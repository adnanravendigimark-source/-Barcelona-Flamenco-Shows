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
  eyebrow: string;
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
  ctaSubtext: string;
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
  articlesHeading: string;
  articlesSubheading: string;
  emptyStateText: string;
  featuredLinkText: string;
  ctaHeading: string;
  ctaBody: string;
  ctaButtonText: string;
  backToGuidesText: string;
  quickAnswerLabel: string;
  tocLabel: string;
  relatedGuidesHeading: string;
  sidebarRelatedHeading: string;
  sidebarRecommendedBadge: string;
  sidebarCompareLinkText: string;
  promoRecommendedText: string;
  postCtaHeading: string;
  postCtaBody: string;
  postCtaButtonText: string;
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
  logoAlt: "Alhambra Tour",
  logoLine1: "ALHAMBRA",
  logoLine2: "TOUR",
  bookNowText: "BOOK TICKETS",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Tours", href: "/#tours" },
    { label: "Tickets", href: "/#prices" },
    { label: "Plan Your Visit", href: "/#practical" },
    { label: "What to Expect", href: "/#highlights" },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  ctaText: "BOOK TICKETS",
  ctaHref: "/#tours",
};

export const DEFAULT_FOOTER: FooterContent = {
  tagline:
    "<strong>Independent booking guide.</strong> Not affiliated with any official ticket office — we curate authentic Alhambra guided tours, skip-the-line tickets, and cultural experiences in Granada from authorized partners and earn a commission on bookings made through our links, at no extra cost to you.",
  columns: [
    {
      title: "Explore Alhambra",
      links: [
        { label: "Alhambra Guided Tours", href: "/#tours" },
        { label: "Nasrid Palaces Tickets", href: "/#tours" },
        { label: "Ticket Prices & Deals", href: "/#prices" },
        { label: "Visiting FAQs", href: "/#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Travel Blog", href: "/blog" },
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ],
  addressHeading: "Alhambra & Granada District",
  addressLine1: "Calle Real de la Alhambra, s/n",
  addressLine2: "18009 Granada, Spain",
  copyrightText:
    "Alhambra Tour. All prices shown in EUR and subject to change by tour providers.",
};

export const DEFAULT_THEME: ThemeColors = {
  primary: "#263D2A",   // Deep Olive Green
  secondary: "#C8643F", // Terracotta Accent
  dark: "#29302A",      // Charcoal Text & Night
  accent: "#C79A52",    // Muted Gold Detail
};

export const DEFAULT_GALLERY: GalleryImage[] = [
  {
    src: "/images/nasrid-palaces-alhambra.jpg",
    alt: "Intricate Moorish archway inside Nasrid Palaces at the Alhambra",
    label: "Nasrid Palaces",
  },
  {
    src: "/images/court-of-lions-alhambra.jpg",
    alt: "Court of the Lions central fountain at the Alhambra in Granada",
    label: "Court of Lions",
  },
  {
    src: "/images/generalife-gardens-alhambra.jpg",
    alt: "Generalife Gardens water pool and lush fountains at the Alhambra",
    label: "Generalife Gardens",
  },
  {
    src: "/images/alcazaba-alhambra.jpg",
    alt: "Alcazaba military fortress watchtower overlooking Granada",
    label: "Alcazaba Fortress",
  },
];

export const DEFAULT_SECTIONS: HomepageSections = {
  tours: {
    eyebrow: "Handpicked Experiences",
    heading: "Alhambra Tour Packages & Fast-Track Tickets",
    subheading:
      "Explore the majestic Moorish complex with official expert guides — access Nasrid Palaces, Generalife Gardens, and Alcazaba Fortress without waiting in long queues.",
  },
  highlights: {
    eyebrow: "Unforgettable Heritage",
    heading: "What Makes an Alhambra Tour Special",
    subheading:
      "The Alhambra is Europe's finest surviving example of Islamic architecture. Discover why millions of travelers visit this UNESCO World Heritage Site in Granada every year.",
    cards: [
      {
        title: "Nasrid Palaces Access",
        body: "Marvel at intricate muqarnas vaulting, carved Arabic calligraphy, and delicate horseshoe arches inside the royal Moorish halls.",
        icon: "🕌",
      },
      {
        title: "Generalife Water Gardens",
        body: "Walk through idyllic royal summer gardens filled with cypress trees, blooming roses, and cascading water fountains.",
        icon: "🌿",
      },
      {
        title: "Alcazaba Fortress Ramparts",
        body: "Climb the ancient 9th-century watchtowers for breathtaking panoramic views of Granada and the snow-capped Sierra Nevada.",
        icon: "🏰",
      },
      {
        title: "Official Local Guides",
        body: "Unlock centuries of Nasrid dynasty history, legends, and architectural secrets with passionate licensed art historians.",
        icon: "🎓",
      },
    ],
  },
  why: {
    eyebrow: "Andalusian Legacy",
    heading: "What You Will Discover on Your Alhambra Tour",
    intro:
      "Spanning over 800 years of Moorish and Christian history, the Alhambra complex is an extraordinary living masterpiece. Here is how your guided journey unfolds.",
    timelineHeading: "Structure of a full Alhambra guided tour",
    timeline: [
      { time: "0:00", step: "Entry & Meeting Point: Meet your official guide at the Gate of Justice or Main Entrance" },
      { time: "0:20", step: "Alcazaba Fortress: Tour the oldest military zone, Torre de la Vela, and defensive ramparts" },
      { time: "1:00", step: "Nasrid Palaces (Timed Entry): Explore the Mexuar, Comares Palace, and Hall of Ambassadors" },
      { time: "1:40", step: "Court of the Lions: Marvel at the famous marble lion fountain and intricate colonnade" },
      { time: "2:15", step: "Palace of Charles V: Discover the impressive 16th-century Renaissance circular courtyard" },
      { time: "2:45", step: "Generalife Gardens: Stroll through the Patio de la Acequia and royal summer garden pavilions" },
    ],
    learnHeading: "Key highlights you'll see",
    learn: [
      "How Islamic water engineering channeled mountain streams from the Darro River throughout the palace",
      "The meaning of carved Arabic mottos: 'Wa la ghaliba illa Allah' (There is no conqueror but God)",
      "Why Nasrid Palaces require strict timed-entry tickets due to daily conservation limits",
      "The contrast between Islamic Moorish craftsmanship and Renaissance Christian architecture",
    ],
    note: "Tours last between 2.5 to 3 hours. Original photo ID or Passport is strictly mandatory at entry checkpoints.",
    extraHeading: "Key zones inside the Alhambra complex",
    extraItems: [
      { name: "Nasrid Palaces", note: "The royal core containing the Hall of Ambassadors, Court of Lions, and Lindaraja Garden" },
      { name: "Generalife", note: "The summer palace and agricultural estate of the Nasrid kings featuring water gardens" },
      { name: "Alcazaba", note: "The citadel fortress offering 360-degree views of Granada and Albaicín" },
    ],
    ctaText: "Ready to step into the soul of Andalusia? Book your official Alhambra tour early before tickets sell out.",
    ctaSubtext: "Daily departure options with skip-the-line entrance & free cancellation.",
    ctaButtonText: "Explore Alhambra Tours →",
    ctaHref: "#tours",
  },
  tower: {
    eyebrow: "Generalife & Royal Estate",
    heading: "Stroll Through Paradise in the Generalife Gardens",
    body:
      "The Generalife was the summer retreat of the Nasrid Sultans of Granada. Experience tranquility among <strong>gushing water channels, fragrant jasmine hedges, ancient cypress avenues, and panoramic vistas</strong> overlooking Sabika Hill.",
    bullets: [
      "Explore the iconic Patio de la Acequia (Water-Lily Courtyard) with jet fountains",
      "Stroll the Water Staircase (Escalera del Agua) where mountain stream water trickles down stone handrails",
      "Enjoy spectacular views across the valley to the whitewashed Albaicín district",
      "Includes complete access to the Lower Gardens, Promenade of the Cypresses, and Upper Pavilion",
    ],
    ctaButtonText: "View Alhambra Ticket Options",
    ctaHref: "#tours",
    images: [
      {
        src: "/images/generalife-gardens-alhambra.jpg",
        alt: "Generalife Gardens water pool and fountains at the Alhambra",
        label: "Generalife Gardens",
      },
      {
        src: "/images/court-of-lions-alhambra.jpg",
        alt: "Court of the Lions central fountain at the Alhambra",
        label: "Court of Lions",
      },
      {
        src: "/images/granada-view-from-alhambra.jpg",
        alt: "View of Granada Albaicín quarter from the Alhambra ramparts",
        label: "Granada Vistas",
      },
      {
        src: "/images/alcazaba-alhambra.jpg",
        alt: "Alcazaba military fortress watchtower at Alhambra",
        label: "Alcazaba Fortress",
      },
    ],
  },
  practical: {
    hoursHeading: "Opening Hours & Timed Access (2026)",
    hours: [
      { range: "Summer (Apr 1 – Oct 14)", time: "Daily 8:30 AM – 8:00 PM (Night tours 10:00 PM – 11:30 PM)" },
      { range: "Winter (Oct 15 – Mar 31)", time: "Daily 8:30 AM – 6:00 PM (Night tours 8:00 PM – 9:30 PM)" },
    ],
    hoursNote: "Nasrid Palaces entry strictly requires arriving at your specified time slot printed on your ticket.",
    addressHeading: "Alhambra Location & Entry Points",
    address:
      "Alhambra Complex — Calle Real de la Alhambra, s/n, 18009 Granada, Spain.\nMain Access: Cuesta de Gomérez from Plaza Nueva or C30 / C32 Alhambra Bus.",
    metro: "Mandatory: Bring your valid passport or national ID card — security scans passports at every gate.",
    bestTimeHeading: "Best Time to Book",
    bestTimeBody:
      "Alhambra tickets (especially Nasrid Palaces access) sell out weeks or months in advance due to strict daily visitor caps. We strongly advise booking online 3 to 6 weeks early.",
  },
  price: {
    eyebrow: "Transparent Comparison",
    heading: "Compare Alhambra Tour & Ticket Options",
    subheading:
      "Select the ideal option for your trip — choose between small-group guided tours, fast-track entry tickets, or private VIP experiences.",
    note: "All tickets include mandatory official entry fees. Children under 12 receive reduced rates on most guided tours.",
    itemLabel: "Alhambra Experience",
    priceLabel: "Price",
    column1Label: "Duration",
    column2Label: "Nasrid Palaces Access",
    bestForLabel: "Best For",
    bookLabel: "Book",
  },
  faq: {
    eyebrow: "Got Questions?",
    heading: "Alhambra Tour & Visiting FAQs",
  },
  notFound: {
    heading: "Page Not Found",
    body: "The page you're looking for doesn't exist or has moved. Explore our Alhambra tour options or visiting guides below.",
    primaryButtonText: "Explore Alhambra Tours →",
    primaryButtonHref: "/#tours",
    secondaryButtonText: "Read Visiting Guides",
    secondaryButtonHref: "/blog",
  },
  blogTeaser: {
    eyebrow: "Travel Guides & Insider Tips",
    heading: "Alhambra Tour Guides & Visiting Advice",
    subheading:
      "Expert tips, ticket buying secrets, Nasrid Palace guidelines, and itinerary ideas for visiting Granada.",
    viewAllText: "View All Articles",
    readArticleText: "Read Guide",
  },
  blogPage: {
    eyebrow: "Granada & Alhambra Guides",
    heading: "Alhambra Tour Travel Guides & Visitor Tips",
    subheading: "Practical advice to help you secure tickets, navigate entry requirements, and get the most out of your visit to Granada.",
    articlesHeading: "Latest Travel Guides",
    articlesSubheading: "Comprehensive articles written by local experts on Alhambra tickets, tours, and history.",
    emptyStateText: "No articles published yet — check back soon.",
    featuredLinkText: "Read the full guide",
    ctaHeading: "Book Your Alhambra Tour Today",
    ctaBody: "Guaranteed Nasrid Palaces entrance, skip-the-line access, and expert local guides.",
    ctaButtonText: "Compare Alhambra Tours & Tickets →",
    backToGuidesText: "← All travel guides",
    quickAnswerLabel: "Quick Answer",
    tocLabel: "In This Guide",
    postCtaHeading: "Compare Alhambra Tours & Tickets",
    postCtaBody: "Find the best guided tours, ticket prices, and time slots in one place.",
    postCtaButtonText: "View Tour Options →",
    relatedGuidesHeading: "Related Alhambra Guides",
    sidebarRelatedHeading: "Related Alhambra Guides",
    sidebarRecommendedBadge: "Recommended",
    sidebarCompareLinkText: "Compare all Alhambra tours →",
    promoRecommendedText: "Recommended Tour",
  },
};

const DEFAULT_HOMEPAGE_CONTENT: HomepageContent = {
  heroBadge: "ALHAMBRA TOUR",
  heroHeading: "Alhambra Tour",
  heroSubheading: "Step Into the Soul of Andalusia",
  heroImage: "/images/hero-alhambra.jpg",
  heroImageAlt: "Panoramic sunset view of the Alhambra Palace in Granada Spain",
  heroVideo: "",
  heroGallery: DEFAULT_GALLERY,
  heroCtaPrimaryText: "EXPLORE TOURS",
  heroCtaPrimaryHref: "#tours",
  heroCtaSecondaryText: "VIEW TICKETS",
  heroCtaSecondaryHref: "#prices",
  showFeaturedTour: true,
  featuredTourId: "alhambra-nasrid-palaces-guided-tour",
  featuredBadgeLabel: "Most Popular Tour",
  featuredUrgencyText: "High Demand · Advance Booking Recommended for Nasrid Palaces",
  featuredReasons: [
    "Official licensed local guides with priority skip-the-line entrance",
    "Guaranteed access to Nasrid Palaces, Generalife Gardens & Alcazaba fortress",
    "Free cancellation up to 24 hours before your tour time",
  ],
  sections: DEFAULT_SECTIONS,
  header: DEFAULT_HEADER,
  footer: DEFAULT_FOOTER,
  theme: DEFAULT_THEME,
  metaTitle: "Alhambra Tour — Official Guided Tours & Fast-Track Tickets (2026)",
  metaDescription: "Book official Alhambra tours with skip-the-line entry to Nasrid Palaces, Generalife Gardens & Alcazaba in Granada. Instant confirmation & expert local guides.",
  focusKeyword: "Alhambra Tour",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "",
  ogTitle: "Alhambra Tour — Guided Tours & Tickets in Granada",
  ogDescription: "Discover the breathtaking Alhambra Palace, Nasrid Palaces, and Generalife Gardens with expert local guides in Granada, Spain.",
  ogImage: "/images/hero-alhambra.jpg",
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
      meta_title, meta_description, focus_keyword,
      canonical_url, og_title, og_description, og_image
    ) VALUES (
      1, ${data.heroBadge}, ${data.heroHeading}, ${data.heroSubheading}, ${data.heroImage},
      ${data.heroImageAlt}, ${data.heroVideo || ""}, ${JSON.stringify(data.heroGallery || [])}::jsonb,
      ${data.heroCtaPrimaryText || ""}, ${data.heroCtaPrimaryHref || ""},
      ${data.heroCtaSecondaryText || ""}, ${data.heroCtaSecondaryHref || ""},
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
