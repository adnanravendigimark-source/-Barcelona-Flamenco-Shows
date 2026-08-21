import { sql } from "./db";

export interface AboutPageContent {
  heroEyebrow: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  noIndex: boolean;
  noFollow: boolean;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

const DEFAULT_ABOUT: AboutPageContent = {
  heroEyebrow: "About Us",
  heroHeading: "Your Independent Guide to Barcelona Flamenco Shows & Tickets",
  heroSubheading:
    "We help travelers discover authentic Barcelona flamenco shows, historic tablaos, and dinner packages — curated from Spain's finest venues and explained in plain language.",
  heroImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2000&auto=format&fit=crop",
  heroImageAlt: "Authentic live flamenco performance in Barcelona with passionate dancer and Spanish guitar",
  content: `<h2>Our Mission</h2>
<p>We built this guide with a clear conviction: attending a live flamenco performance is one of the most intense, unforgettable cultural moments in Spain — but only if you choose an authentic venue. With dozens of tourist flyers and promotional booths scattered along Las Ramblas, choosing the right tablao shouldn't be confusing.</p>
<p>We are an independent Barcelona flamenco guide. We compare world-renowned institutions like Tablao Cordobes, historic theater performances at Teatro City Hall, intimate Gothic Quarter tablaos like Los Tarantos, and full tapas &amp; dinner experiences like Tablao de Carmen, pointing you directly to genuine master artists.</p>
<h2>How We Select Our Featured Flamenco Shows</h2>
<p>Every tablao and show listed on this guide is vetted against four strict criteria:</p>
<ul>
<li><strong>Artistic Authenticity &amp; Mastery</strong> — We feature established venues that showcase award-winning <em>cantaores</em>, virtuosic Spanish guitarists, and revered <em>bailaores</em> performing true unchoreographed improvisational flamenco.</li>
<li><strong>Acoustic &amp; Sightline Quality</strong> — Whether it's an intimate cave-style tablao without microphones or a 19th-century theater hall, we ensure every venue offers clear, captivating stage views and acoustic richness.</li>
<li><strong>Verified Guest Reviews</strong> — We only feature performances with thousands of verified positive reviews and consistently high traveler satisfaction ratings.</li>
<li><strong>Transparent Pricing &amp; Guarantees</strong> — The ticket price you see is the full price, with clear options for included drinks, tapas tastings, or full multi-course Spanish dinners, plus free cancellation up to 24 hours in advance.</li>
</ul>
<h2>Independent Flamenco Guide</h2>
<p>This is an independent cultural guide and booking comparison resource, not an individual theater or ticketing company. Bookings made through our verified links are fulfilled securely by GetYourGuide, our trusted ticketing partner, backed by instant mobile voucher delivery and flexible cancellation policies.</p>
<h2>Affiliate Disclosure</h2>
<p>When you book a Barcelona flamenco show through links on this website, we may earn an affiliate commission from the booking partner at no extra cost to you. This enables us to maintain our guide, review venues independently, and keep our content freely accessible to travelers worldwide.</p>
<p>Have questions before you reserve? Visit our <a href="/contact">contact page</a>.</p>`,
  metaTitle: "About Us | Barcelona Flamenco Show Guide & Tickets",
  metaDescription:
    "Who curates our Barcelona flamenco show recommendations, how we select authentic tablaos, and why booking ahead guarantees prime seating.",
  canonicalUrl: "",
  noIndex: false,
  noFollow: false,
  ogTitle: "",
  ogDescription: "",
  ogImage: "",
};

function rowToAbout(row: any): AboutPageContent {
  return {
    heroEyebrow: row.hero_eyebrow ?? DEFAULT_ABOUT.heroEyebrow,
    heroHeading: row.hero_heading ?? DEFAULT_ABOUT.heroHeading,
    heroSubheading: row.hero_subheading ?? DEFAULT_ABOUT.heroSubheading,
    heroImage: row.hero_image ?? DEFAULT_ABOUT.heroImage,
    heroImageAlt: row.hero_image_alt ?? DEFAULT_ABOUT.heroImageAlt,
    content: row.content ?? DEFAULT_ABOUT.content,
    metaTitle: row.meta_title || DEFAULT_ABOUT.metaTitle,
    metaDescription: row.meta_description || DEFAULT_ABOUT.metaDescription,
    canonicalUrl: row.canonical_url || "",
    noIndex: !!row.no_index,
    noFollow: !!row.no_follow,
    ogTitle: row.og_title || "",
    ogDescription: row.og_description || "",
    ogImage: row.og_image || "",
  };
}

export async function getAboutPage(): Promise<AboutPageContent> {
  try {
    const rows = await sql`SELECT * FROM about_page WHERE id = 1 LIMIT 1`;
    return rows.length ? rowToAbout(rows[0]) : DEFAULT_ABOUT;
  } catch {
    return DEFAULT_ABOUT;
  }
}

export async function setAboutIndexing(noIndex: boolean, noFollow: boolean): Promise<void> {
  await sql`
    INSERT INTO about_page (id, no_index, no_follow)
    VALUES (1, ${!!noIndex}, ${!!noFollow})
    ON CONFLICT (id) DO UPDATE SET
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow
  `;
}

export async function saveAboutPage(data: AboutPageContent): Promise<void> {
  await sql`
    INSERT INTO about_page (
      id, hero_eyebrow, hero_heading, hero_subheading, hero_image, hero_image_alt,
      content,
      meta_title, meta_description, canonical_url,
      no_index, no_follow, og_title, og_description, og_image
    ) VALUES (
      1, ${data.heroEyebrow}, ${data.heroHeading}, ${data.heroSubheading}, ${data.heroImage}, ${data.heroImageAlt},
      ${data.content},
      ${data.metaTitle || ""}, ${data.metaDescription || ""}, ${data.canonicalUrl || ""},
      ${!!data.noIndex}, ${!!data.noFollow}, ${data.ogTitle || ""}, ${data.ogDescription || ""}, ${data.ogImage || ""}
    )
    ON CONFLICT (id) DO UPDATE SET
      hero_eyebrow = EXCLUDED.hero_eyebrow,
      hero_heading = EXCLUDED.hero_heading,
      hero_subheading = EXCLUDED.hero_subheading,
      hero_image = EXCLUDED.hero_image,
      hero_image_alt = EXCLUDED.hero_image_alt,
      content = EXCLUDED.content,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      canonical_url = EXCLUDED.canonical_url,
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;
}
