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

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not set.");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

const articleSlug = "barcelona-flamenco-show-tickets-prices-venues-guide";
const focusKeyword = "Barcelona flamenco show tickets";

const coverImageUrl =
  "https://jviqolrnn06agn0v.public.blob.vercel-storage.com/blog/barcelona-flamenco-show-tickets-cover-8BmUixfukAM2lwxHzIv8YXE96Iff1R.jpg";
const inlineImageUrl =
  "https://jviqolrnn06agn0v.public.blob.vercel-storage.com/blog/barcelona-flamenco-dinner-show-PLPI97aETBSSVWuPjEa3h8r62ZPWYm.jpg";

const contentHtml = `<p class="lead-paragraph">Few cultural traditions in Spain match the electrifying passion, rhythmic footwork, and soul-stirring melodies of live flamenco. Declared an Intangible Cultural Heritage by UNESCO, this legendary Andalusian art form has flourished in Catalonia for well over a century, powered by generations of southern performers who made the Mediterranean metropolis their home. Today, purchasing <strong>Barcelona flamenco show tickets</strong> is a quintessential evening highlight for travelers seeking unforgettable Spanish music, dance, and gastronomy.</p>
<p>However, with dozens of tablaos, historic theaters, and palace venues scattered from Las Ramblas to the Gothic Quarter, choosing the right experience requires understanding your options. This comprehensive guide breaks down ticket categories, renowned venues, ticket prices, seating arrangements, and essential booking tips to help you select the ideal <strong>flamenco show Barcelona</strong> has to offer.</p>
<h2>Ticket Options and What They Include</h2>
<p>When comparing <strong>Barcelona flamenco tickets</strong>, packages generally fall into three distinct tiers depending on your dining and seating preferences:</p>
<h3>1. Show-Only or Show with a Drink (Standard Admission)</h3>
<p>The most popular and accessible tier. These tickets include admission to the live performance alongside one complimentary drink—typically Spanish sangria, regional wine, Cava, or a soft drink. It is ideal for visitors who prefer dining independently at local tapas bars before or after the performance. Prices typically range from €20 to €48 depending on the venue and artist lineup.</p>
<h3>2. Tapas and Flamenco Experience</h3>
<p>A middle-tier option that combines cultural entertainment with Spanish cuisine. Guests typically arrive 30 to 45 minutes before curtain time to enjoy a selection of classic tapas, such as jamón ibérico, tortilla española, patatas bravas, and artisan cheeses. These packages generally range between €55 and €75 per person.</p>
<h3>3. Full Gastronomic Dinner and Show Packages</h3>
<p>For a complete celebratory evening, a <strong>Barcelona flamenco dinner show</strong> offers multi-course dining preceding the performance. Premier venues, such as Tablao Cordobés, feature extensive buffet banquets or seated chef-crafted menus highlighting regional Spanish specialties, paella, and unlimited drinks during dinner. Prices generally span from €80 to €95+.</p>
<h2>Top Barcelona Flamenco Venues Compared</h2>
<p>Each performance venue in Barcelona offers its own distinctive acoustic character, historical ambiance, and performance style:</p>
<ul>
<li><strong>Tablao Flamenco Cordobés (Las Ramblas):</strong> Founded in 1970 on the famous tree-lined boulevard of Las Ramblas, Tablao Cordobés is widely regarded as Barcelona’s most prestigious flamenco institution. Designed by Bourbon artisans with vaulted Moorish cave aesthetics, the intimate room relies on natural acoustics rather than intrusive stage microphones. It routinely showcases elite, award-winning performers and international masters.</li>
<li><strong>Teatro City Hall (Rambla de Catalunya):</strong> Located in a restored 19th-century theater near Plaça de Catalunya, City Hall offers phenomenal acoustics, raked theater seating with excellent sightlines, and dramatic stage lighting. Featuring intense 60-minute performances of bulerías and soleás, it represents outstanding value for first-time visitors.</li>
<li><strong>Los Tarantos (Plaça Reial):</strong> Operating in the Gothic Quarter’s historic Plaça Reial since 1963, Los Tarantos is the city’s oldest active tablao. It specializes in fast-paced, high-intensity 40-to-45-minute sets featuring rising flamenco talent. It is particularly popular with budget-conscious travelers and those planning an action-packed night out.</li>
<li><strong>Palau Dalmases (El Born):</strong> Set inside an authentic 17th-century baroque palace in the trendy El Born neighborhood, Palau Dalmases hosts intimate performances in a stone-walled courtyard. The historic atmosphere and limited seating create a romantic, boutique setting.</li>
</ul>
<figure><img src="${inlineImageUrl}" alt="Traditional Spanish tapas dinner setting with wine and sangria overlooking a live flamenco performance on a wooden tablao stage in Barcelona" /><figcaption>Many premier Barcelona tablaos offer dinner-and-show packages featuring classic Spanish tapas and regional wine.</figcaption></figure>
<h2>Show Duration and Seating Choices</h2>
<p>Standard flamenco performances run between 50 and 70 minutes without intermission. Shows designed for historic theaters often span 60 to 75 minutes, while dinner-and-show combinations generally last 2 to 2.5 hours in total.</p>
<p>Seating arrangements vary by venue:</p>
<ul>
<li><strong>Front Row / VIP Seating:</strong> Puts you within feet of the performers. You can hear every heel-strike on the wooden boards and see the emotional intensity of the dancers up close.</li>
<li><strong>Traditional Tablao Tables:</strong> Small shared wooden tables arranged around the stage, fostering a convivial Andalusian tavern feel.</li>
<li><strong>Tiered Theater Seating:</strong> Venues like Teatro City Hall feature tiered theater seats that guarantee unobstructed sightlines over other patrons.</li>
</ul>
<h2>How to Choose the Right Experience</h2>
<p>Selecting the best venue depends on your travel style:</p>
<ul>
<li><strong>For Purists and Art Connoisseurs:</strong> Choose Tablao Cordobés for its unamplified acoustics and legendary pedigree.</li>
<li><strong>For Value and Theater Comfort:</strong> Choose Teatro City Hall for spacious seats and dramatic lighting.</li>
<li><strong>For Budget Travelers:</strong> Choose Los Tarantos for a quick, electrifying introduction at an accessible price point.</li>
<li><strong>For Romance:</strong> Choose Palau Dalmases for its candlelit 17th-century baroque courtyard ambiance.</li>
</ul>
<h2>Essential Booking Tips for Travelers</h2>
<ul>
<li><strong>Reserve in Advance for Weekend Shows:</strong> Intimate venues have limited capacities (often between 60 and 140 seats) and popular evening slots sell out days ahead during peak travel seasons.</li>
<li><strong>Check Arrival Times:</strong> Dinner guests must arrive 60 to 90 minutes before showtime. For show-and-drink tickets, arrive 15 to 20 minutes early to check in smoothly and claim prime seats in unassigned zones.</li>
<li><strong>Photography Protocol:</strong> Flash photography and video recording are strictly prohibited during performances to avoid distracting the dancers. Most venues allow photos without flash during the final five-minute encore.</li>
<li><strong>Dress Code:</strong> Smart-casual attire is universally accepted. Avoid beachwear or flip-flops for evening dinner shows.</li>
</ul>
<h2>Frequently Asked Questions About Barcelona Flamenco Tickets</h2>
<h3>How far in advance should I book Barcelona flamenco show tickets?</h3>
<p>During spring, summer, and holiday weekends, we advise booking at least one to two weeks in advance, especially if you require prime dinner seating or VIP front-row tickets.</p>
<h3>Is a dinner show worth it compared to show-only?</h3>
<p>If you enjoy convenient, immersive evening planning with authentic Spanish cuisine, a dinner package is fantastic value. However, if you prefer exploring Barcelona’s independent tapas taverns, choose a show-only ticket with a glass of sangria.</p>
<h3>Which show is best for families?</h3>
<p>Venues with earlier 6:00 PM or 7:00 PM showtimes and shorter 50-to-60-minute formats, such as City Hall or Los Tarantos, are ideal for families with older children.</p>`;

// Calculate exact text word count
const plainText = contentHtml
  .replace(/<[^>]+>/g, " ")
  .replace(/&amp;/g, "&")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">")
  .replace(/\s+/g, " ")
  .trim();

const words = plainText.split(" ").filter(Boolean);
console.log(`Calculated plain-text word count: ${words.length} words`);

const articleRecord = {
  slug: articleSlug,
  title: "Barcelona Flamenco Show Tickets: Prices, Venues & Booking Tips",
  metaTitle: "Barcelona Flamenco Show Tickets: Prices, Venues & Guide",
  metaDescription:
    "Compare Barcelona flamenco show tickets, top tablao venues, ticket prices, and dinner packages. Learn what’s included, show durations, and booking tips.",
  category: "Ticket Guide",
  excerpt:
    "Complete guide to Barcelona flamenco show tickets: comparing top venues like Tablao Cordobés and City Hall, prices, seating, dinner packages, and booking advice.",
  quickAnswer:
    "Barcelona flamenco show tickets typically range from €20 to €48 for standard admission with a drink, and from €75 to €95+ for full gastronomic dinner and show packages. For the most authentic master performances, choose Tablao Flamenco Cordobés on Las Ramblas. For exceptional value and theater acoustics, choose Teatro City Hall.",
  readTime: "6 min read",
  date: "2026-10-23",
  updatedAt: "2026-10-23T05:30:00.000Z",
  image: coverImageUrl,
  imageAlt: "Passionate bailaora in red ruffled dress performing live on wooden stage with guitarist and singer at an intimate Barcelona flamenco tablao",
  author: "Maria Carmen Alva / Spanish Cultural Historian",
  recommendedTourId: "tablao-cordobes-barcelona-flamenco-show",
  recommendedTourAfterBlock: 2,
  content: contentHtml,
  ctaHeading: "Ready to experience live flamenco in Barcelona?",
  ctaBody: "Compare official Barcelona flamenco tickets, dinner packages, and top tablao venues with instant mobile confirmation.",
  ctaButtonText: "Compare Flamenco Shows & Tickets →",
  ctaButtonHref: "/#prices",
  focusKeyword: focusKeyword,
  noIndex: false,
  noFollow: false,
  canonicalUrl: "https://www.barcelonaflamencoshows.com/blog/barcelona-flamenco-show-tickets-prices-venues-guide",
  ogTitle: "Barcelona Flamenco Show Tickets: Prices, Venues & Guide",
  ogDescription:
    "Compare Barcelona flamenco show tickets, top tablao venues, ticket prices, and dinner packages. Learn what’s included, show durations, and booking tips.",
  ogImage: coverImageUrl,
};

async function seed() {
  console.log("Seeding article into Neon database...");

  await sql`
    INSERT INTO posts (
      slug, title, meta_title, meta_description, category, excerpt,
      quick_answer, read_time, date, updated_at, image, image_alt, author,
      recommended_tour_id, recommended_tour_after_block, content, sort_order,
      cta_heading, cta_body, cta_button_text, cta_button_href, focus_keyword,
      no_index, no_follow, canonical_url, og_title, og_description, og_image
    ) VALUES (
      ${articleRecord.slug}, ${articleRecord.title}, ${articleRecord.metaTitle}, ${articleRecord.metaDescription},
      ${articleRecord.category}, ${articleRecord.excerpt}, ${articleRecord.quickAnswer}, ${articleRecord.readTime},
      ${articleRecord.date}, ${articleRecord.updatedAt}, ${articleRecord.image}, ${articleRecord.imageAlt}, ${articleRecord.author},
      ${articleRecord.recommendedTourId}, ${articleRecord.recommendedTourAfterBlock},
      ${JSON.stringify(articleRecord.content)}::jsonb, 0,
      ${articleRecord.ctaHeading}, ${articleRecord.ctaBody}, ${articleRecord.ctaButtonText}, ${articleRecord.ctaButtonHref},
      ${articleRecord.focusKeyword}, ${articleRecord.noIndex}, ${articleRecord.noFollow}, ${articleRecord.canonicalUrl},
      ${articleRecord.ogTitle}, ${articleRecord.ogDescription}, ${articleRecord.ogImage}
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
      updated_at = EXCLUDED.updated_at,
      image = EXCLUDED.image,
      image_alt = EXCLUDED.image_alt,
      author = EXCLUDED.author,
      recommended_tour_id = EXCLUDED.recommended_tour_id,
      recommended_tour_after_block = EXCLUDED.recommended_tour_after_block,
      content = EXCLUDED.content,
      sort_order = EXCLUDED.sort_order,
      cta_heading = EXCLUDED.cta_heading,
      cta_body = EXCLUDED.cta_body,
      cta_button_text = EXCLUDED.cta_button_text,
      cta_button_href = EXCLUDED.cta_button_href,
      focus_keyword = EXCLUDED.focus_keyword,
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow,
      canonical_url = EXCLUDED.canonical_url,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;

  console.log("Database upsert successful!");

  // Verify DB state
  const allPosts = await sql`SELECT slug, title, category, date FROM posts ORDER BY date DESC`;
  console.log(`Current DB posts count: ${allPosts.length}`);
  console.log(allPosts);

  // Sync with data/posts.json
  const postsJsonPath = path.join(process.cwd(), "data", "posts.json");
  let existingJsonPosts = [];
  if (fs.existsSync(postsJsonPath)) {
    try {
      existingJsonPosts = JSON.parse(fs.readFileSync(postsJsonPath, "utf-8"));
    } catch (e) {
      existingJsonPosts = [];
    }
  }

  // Remove any older duplicate with the same slug if present, and prepend the new article
  const filteredJson = existingJsonPosts.filter((p) => p.slug !== articleSlug);
  const updatedJson = [articleRecord, ...filteredJson];
  fs.writeFileSync(postsJsonPath, JSON.stringify(updatedJson, null, 2), "utf-8");
  console.log(`Updated data/posts.json with ${updatedJson.length} posts.`);
}

seed().catch(console.error);
