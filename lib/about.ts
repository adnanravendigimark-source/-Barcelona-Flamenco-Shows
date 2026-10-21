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
  heroEyebrow: "About Alhambra Tour",
  heroHeading: "Your Independent Guide to Alhambra Guided Tours & Tickets",
  heroSubheading:
    "We help travelers discover authentic Alhambra guided tours, Nasrid Palaces entrance tickets, and Granada cultural experiences — curated from licensed providers and explained in plain language.",
  heroImage: "/images/hero-alhambra.jpg",
  heroImageAlt: "Panoramic sunset view of the Alhambra Palace in Granada Spain",
  content: `<h2>Our Mission</h2>
<p>We built this guide with a clear conviction: visiting the Alhambra Palace in Granada is one of the most breathtaking cultural moments in Spain — but securing tickets and navigating entry rules can be daunting. With daily visitor limits and complex Nasrid Palaces time slots, choosing the right tour option shouldn't be confusing.</p>
<p>We are an independent Alhambra Tour guide. We compare official guided tours, fast-track entry tickets, private VIP experiences, and city walking combos, helping you select the perfect option for your trip.</p>
<h2>How We Select Our Featured Alhambra Tours</h2>
<p>Every tour and ticket option listed on this guide is vetted against four strict criteria:</p>
<ul>
<li><strong>Official Licensed Guides</strong> — We prioritize tours led by passionate, licensed local art historians with deep knowledge of Nasrid dynasty architecture and Andalusian history.</li>
<li><strong>Guaranteed Nasrid Palaces Access</strong> — We feature experiences with clear, confirmed admission to the Nasrid Palaces (Court of the Lions, Hall of Ambassadors) alongside the Generalife Gardens and Alcazaba.</li>
<li><strong>Verified Traveler Satisfaction</strong> — We only highlight tours with thousands of positive verified guest reviews and reliable operation track records.</li>
<li><strong>Transparent Pricing &amp; Flexible Terms</strong> — Clear upfront pricing with no hidden charges, accompanied by flexible cancellation policies up to 24 hours prior to departure.</li>
</ul>
<h2>Independent Alhambra Booking Guide</h2>
<p>This is an independent cultural guide and booking comparison resource, not an official government ticketing office. Bookings made through our verified links are processed securely by GetYourGuide, backed by instant mobile voucher delivery and 24/7 customer support.</p>
<h2>Affiliate Disclosure</h2>
<p>When you book an Alhambra tour through links on this website, we may earn an affiliate commission from the booking partner at no extra cost to you. This enables us to maintain our guide, review tour options independently, and keep our content freely accessible to travelers worldwide.</p>
<p>Have questions before you reserve? Visit our <a href="/contact">contact page</a>.</p>`,
  metaTitle: "About Us | Alhambra Tour Guide & Tickets",
  metaDescription:
    "Who curates our Alhambra tour recommendations, how we select official guided tours, and why booking ahead guarantees Nasrid Palaces access.",
  canonicalUrl: "",
  noIndex: false,
  noFollow: false,
  ogTitle: "About Us | Alhambra Tour",
  ogDescription: "Independent guide to Alhambra tours, Nasrid Palaces tickets, and Granada travel tips.",
  ogImage: "/images/hero-alhambra.jpg",
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
