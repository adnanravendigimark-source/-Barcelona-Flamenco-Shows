import fs from "fs";
import path from "path";
import { neon } from "@neondatabase/serverless";

function loadDotEnv() {
  const envPath = path.join(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadDotEnv();

async function main() {
  if (!process.env.DATABASE_URL) {
    console.log("DATABASE_URL is not set — skipping DB update.");
    return;
  }

  const sql = neon(process.env.DATABASE_URL);
  console.log("Connecting to database...");

  // Update homepage
  const homepage = JSON.parse(fs.readFileSync(path.join(process.cwd(), "data/homepage.json"), "utf-8"));
  const header = {
    logoImage: "",
    logoAlt: "Barcelona Flamenco Shows",
    logoLine1: "BARCELONA",
    logoLine2: "FLAMENCO SHOWS",
    bookNowText: "BOOK TICKETS",
    navLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    ctaText: "BOOK TICKETS",
    ctaHref: "/#tours",
  };

  const theme = {
    primary: "#c9182b",
    secondary: "#d97706",
    dark: "#121216",
    accent: "#e11d48",
  };

  await sql`
    UPDATE homepage SET
      hero_badge = ${homepage.heroBadge},
      hero_heading = ${homepage.heroHeading},
      hero_subheading = ${homepage.heroSubheading},
      hero_image = ${homepage.heroImage},
      hero_image_alt = ${homepage.heroImageAlt},
      hero_cta_primary_text = 'Explore Shows',
      hero_cta_primary_href = '#tours',
      hero_cta_secondary_text = 'See Prices',
      hero_cta_secondary_href = '#prices',
      rating_value = ${homepage.ratingValue},
      rating_count = ${homepage.ratingCount},
      header_json = ${JSON.stringify(header)}::jsonb,
      theme_json = ${JSON.stringify(theme)}::jsonb
    WHERE id = 1
  `;
  console.log("Updated homepage table.");

  // Update tours
  const tours = JSON.parse(fs.readFileSync(path.join(process.cwd(), "data/tours.json"), "utf-8"));
  for (const t of tours) {
    await sql`
      UPDATE tours SET
        image = ${t.image},
        image_alt = ${t.imageAlt}
      WHERE id = ${t.id}
    `;
  }
  console.log(`Updated ${tours.length} tours.`);

  // Upsert posts
  const posts = JSON.parse(fs.readFileSync(path.join(process.cwd(), "data/posts.json"), "utf-8"));
  for (let i = 0; i < posts.length; i++) {
    const p = posts[i];
    await sql`
      INSERT INTO posts (
        slug, title, meta_title, meta_description, category, excerpt,
        quick_answer, read_time, date, author, image, image_alt,
        recommended_tour_id, recommended_tour_after_block, content,
        cta_heading, cta_body, cta_button_text, cta_button_href,
        focus_keyword, sort_order
      ) VALUES (
        ${p.slug}, ${p.title}, ${p.metaTitle || p.title}, ${p.metaDescription || p.excerpt},
        ${p.category}, ${p.excerpt}, ${p.quickAnswer || ""}, ${p.readTime || "5 min read"},
        ${p.date}, ${p.author || ""}, ${p.image}, ${p.imageAlt || p.title},
        ${p.recommendedTourId || ""}, ${p.recommendedTourAfterBlock || 3},
        ${JSON.stringify(p.content)}::jsonb,
        ${p.ctaHeading || "Ready to book?"}, ${p.ctaBody || ""},
        ${p.ctaButtonText || "See Prices"}, ${p.ctaButtonHref || "/#prices"},
        ${p.focusKeyword || ""}, ${i}
      )
      ON CONFLICT (slug) DO UPDATE SET
        title = EXCLUDED.title,
        meta_title = EXCLUDED.meta_title,
        meta_description = EXCLUDED.meta_description,
        category = EXCLUDED.category,
        excerpt = EXCLUDED.excerpt,
        quick_answer = EXCLUDED.quick_answer,
        read_time = EXCLUDED.read_time,
        date = EXCLUDED.date,
        author = EXCLUDED.author,
        image = EXCLUDED.image,
        image_alt = EXCLUDED.image_alt,
        recommended_tour_id = EXCLUDED.recommended_tour_id,
        recommended_tour_after_block = EXCLUDED.recommended_tour_after_block,
        content = EXCLUDED.content,
        cta_heading = EXCLUDED.cta_heading,
        cta_body = EXCLUDED.cta_body,
        cta_button_text = EXCLUDED.cta_button_text,
        cta_button_href = EXCLUDED.cta_button_href,
        focus_keyword = EXCLUDED.focus_keyword,
        sort_order = EXCLUDED.sort_order
    `;
  }
  console.log(`Upserted ${posts.length} posts.`);

  // Update about page
  await sql`
    UPDATE about_page SET
      hero_image = '/images/hero-flamenco.jpg',
      intro_image = '/images/spanish-guitar.jpg'
    WHERE id = 1
  `;
  console.log("Updated about_page table.");
}

main()
  .then(() => {
    console.log("Database update complete.");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Database update error:", err.message);
    process.exit(0); // non-fatal
  });
