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

const articleData = {
  slug: "when-is-the-best-time-to-see-a-flamenco-show-in-barcelona",
  title: "Best Time to See a Flamenco Show in Barcelona: Showtimes, Seasons & Planning",
  metaTitle: "Best Time to See a Flamenco Show in Barcelona: Showtimes & Seasons",
  metaDescription: "Discover the best time to see a flamenco show in Barcelona. Expert guide on early vs late evening sets, seasonal highlights, and ticket booking tips.",
  category: "Visitor Guide",
  excerpt: "Discover the best time to see a flamenco show in Barcelona, covering early evening vs late-night sets, seasonal trends, and tips for booking prime tablao seats.",
  quickAnswer: "The best time to see a flamenco show in Barcelona is during the prime evening set (8:30 PM to 10:00 PM), aligning with authentic Spanish nightlife and passionate local crowds. The best months are April to June and September to November, when premier guest artists headline intimate tablaos.",
  readTime: "4 min read",
  date: "2026-10-21",
  updatedAt: "2026-10-21T06:55:00.000Z",
  image: "https://jviqolrnn06agn0v.public.blob.vercel-storage.com/uploads/barcelona-flamenco-show-1792565586357-B3xHwPnTqPEf0xbJiK8jNonfKh0k4f.jpg",
  imageAlt: "Authentic live flamenco performance on wooden stage in historic Barcelona tablao with dancer and Spanish guitarist",
  author: "Elena Marquez / Barcelona Culture & Arts Specialist",
  recommendedTourId: "los-tarantos-flamenco-show-barcelona",
  recommendedTourAfterBlock: 1,
  focusKeyword: "best time to see a flamenco show in Barcelona",
  ctaHeading: "Ready to experience live Barcelona flamenco?",
  ctaBody: "Reserve intimate tablao seating with complimentary drinks or gourmet tapas dinner with free cancellation.",
  ctaButtonText: "Book Barcelona Flamenco Shows →",
  ctaButtonHref: "/#tours",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "https://www.barcelonaflamencoshows.com/blog/when-is-the-best-time-to-see-a-flamenco-show-in-barcelona",
  ogTitle: "Best Time to See a Flamenco Show in Barcelona: Showtimes & Seasons",
  ogDescription: "Plan your flamenco night in Barcelona with our insider guide on showtimes, tapas pairings, seasonal festival schedules, and booking tips.",
  ogImage: "https://jviqolrnn06agn0v.public.blob.vercel-storage.com/uploads/barcelona-flamenco-show-1792565586357-B3xHwPnTqPEf0xbJiK8jNonfKh0k4f.jpg",
  sortOrder: 0,
  content: `<p class="lead-paragraph">Experiencing live flamenco in Barcelona is one of the most electrifying cultural evenings in Spain. The percussive thunder of wooden heelwork (<em>zapateado</em>), the raw emotion of the vocal melody (<em>cante jondo</em>), and the intricate flourishes of Spanish acoustic guitar come together in atmospheric historic venues across Las Ramblas, El Born, and the Gothic Quarter. However, knowing the <strong>best time to see a flamenco show in Barcelona</strong> is crucial for aligning with local nightlife rhythms and securing prime stage seating.</p>

<p>Here is your essential guide to performance schedules, seasonal highlights, and insider booking tips for planning an authentic flamenco evening.</p>

<h2>Best Time of Day: Early Evening vs. Late Night Shows</h2>
<p>Barcelona tablaos generally host two to three evening performances daily. Choosing the right showtime depends on your dining plans and energy level:</p>

<h3>1. Early Evening Shows (6:00 PM – 7:30 PM)</h3>
<p>Early performances are ideal for travelers adjusting to European time zones, families with younger children, or visitors who prefer dining leisurely after the performance. These sessions are relaxed and allow you to head out for a traditional Spanish dinner at a nearby tapas bar by 8:30 PM when local restaurants open for evening service.</p>

<h3>2. Prime Night Sets (8:30 PM – 10:30 PM)</h3>
<p>The late evening show offers the most authentic, vibrant atmosphere. Spanish audiences rarely dine before 9:00 PM, meaning prime sets draw passionate crowds, local aficionados, and heightened artistic intensity. If you book a dinner-and-show package with tapas, Rioja wine, or paella, this is the quintessential Catalan evening schedule.</p>

<figure>
  <img src="https://jviqolrnn06agn0v.public.blob.vercel-storage.com/uploads/barcelona-flamenco-evening-tapas-1792565586357-rPTpcx8GPNpxE5Ypkw3B2Z9baqzSvB.jpg" alt="Traditional candlelit Spanish tablao setting with wine, tapas, and a passionate flamenco performance" />
  <figcaption>Pairing evening tapas and Spanish wine with live performance is the classic Barcelona tablao experience.</figcaption>
</figure>

<h2>Seasonal Considerations for Barcelona Flamenco</h2>
<p>Flamenco tablaos operate year-round indoors, but each season brings a distinct travel atmosphere:</p>

<h3>Spring & Autumn: April to June & September to November (Best Overall)</h3>
<p>Mild Mediterranean weather and vibrant cultural energy make spring and autumn the <strong>best time to see a flamenco show in Barcelona</strong>. Historic venues like Tablao Cordobes and Palau Dalmases feature top guest artists traveling between national festivals.</p>

<h3>Summer: July to August (Peak Demand)</h3>
<p>Summer brings bustling crowds along Las Ramblas. Table seating is in high demand, and historic venues sell out days in advance. An evening flamenco show provides welcome relief in air-conditioned auditoriums after hot sightseeing afternoons.</p>

<h3>Winter: December to February (Intimate Atmosphere)</h3>
<p>Winter offers the coziest and most intimate tablao experience. With fewer tourists in the Gothic Quarter, venues feel authentic, and front-row seats are much easier to secure.</p>

<div class="pro-tip-box">
  <span class="pro-tip-icon">💡</span>
  <div>
    <strong>Pro Tip:</strong> Thursday through Saturday evenings feature the most electric crowds and premier headlining dancers. If you prefer a quieter, less crowded setting, reserve a Tuesday or Wednesday show.
  </div>
</div>

<h2>Practical Tips for Booking Your Flamenco Experience</h2>
<ul class="custom-checklist">
  <li><span class="check-circle">✓</span><strong>Reserve 1–2 weeks ahead:</strong> Intimate tablaos seat only 50 to 120 guests, and prime 8:30 PM slots sell out quickly.</li>
  <li><span class="check-circle">✓</span><strong>Arrive 20 minutes prior to curtain:</strong> General seating is often assigned upon arrival; early arrival secures closer stage views.</li>
  <li><span class="check-circle">✓</span><strong>Choose acoustic venues:</strong> Historic tablaos like Cordobes forgo electronic microphones for raw acoustic power.</li>
  <li><span class="check-circle">✓</span><strong>Smart casual dress code:</strong> Formal attire is not required, but neat casual evening wear suits the venue elegance.</li>
</ul>`
};

function countWords(str) {
  const plain = str.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ");
  const words = plain.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

async function seed() {
  console.log("Seeding article:", articleData.title);
  const wordCount = countWords(articleData.content);
  console.log(`Word count: ${wordCount} words (Target: 500-600 words)`);
  if (wordCount < 500 || wordCount > 600) {
    throw new Error(`Word count ${wordCount} outside allowable 500-600 range!`);
  }

  // 1. Upsert into database
  await sql`
    INSERT INTO posts (
      slug, title, meta_title, meta_description, category, excerpt,
      quick_answer, read_time, date, updated_at, image, image_alt,
      recommended_tour_id, recommended_tour_after_block, content, sort_order,
      cta_heading, cta_body, cta_button_text, cta_button_href, focus_keyword,
      no_index, no_follow, canonical_url, og_title, og_description, og_image, author
    ) VALUES (
      ${articleData.slug}, ${articleData.title}, ${articleData.metaTitle}, ${articleData.metaDescription}, ${articleData.category},
      ${articleData.excerpt}, ${articleData.quickAnswer}, ${articleData.readTime}, ${articleData.date}, ${articleData.updatedAt},
      ${articleData.image}, ${articleData.imageAlt},
      ${articleData.recommendedTourId}, ${articleData.recommendedTourAfterBlock},
      ${JSON.stringify(articleData.content)}::jsonb, ${articleData.sortOrder},
      ${articleData.ctaHeading}, ${articleData.ctaBody}, ${articleData.ctaButtonText}, ${articleData.ctaButtonHref}, ${articleData.focusKeyword},
      ${articleData.noIndex}, ${articleData.noFollow}, ${articleData.canonicalUrl}, ${articleData.ogTitle}, ${articleData.ogDescription}, ${articleData.ogImage},
      ${articleData.author}
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
      og_image = EXCLUDED.og_image,
      author = EXCLUDED.author
  `;
  console.log("✓ Successfully upserted into Neon posts table!");

  // 2. Fetch all current DB posts and synchronize data/posts.json
  const allDbPosts = await sql`SELECT * FROM posts ORDER BY date DESC, sort_order ASC`;
  console.log(`Synchronizing ${allDbPosts.length} posts to data/posts.json...`);

  const jsonPosts = allDbPosts.map((p) => {
    let contentVal = p.content;
    if (typeof contentVal !== "string") {
      try {
        contentVal = typeof contentVal === "object" ? JSON.stringify(contentVal) : String(contentVal);
      } catch {
        contentVal = "";
      }
    }
    const dStr = p.date instanceof Date ? p.date.toISOString().slice(0, 10) : String(p.date || "").slice(0, 10);
    const uStr = p.updated_at instanceof Date ? p.updated_at.toISOString() : (p.updated_at ? String(p.updated_at) : dStr);

    return {
      slug: p.slug,
      title: p.title,
      metaTitle: p.meta_title || p.title,
      metaDescription: p.meta_description || p.excerpt,
      category: p.category || "Visitor Guide",
      excerpt: p.excerpt,
      quickAnswer: p.quick_answer || "",
      readTime: p.read_time || "4 min read",
      date: dStr,
      updatedAt: uStr,
      image: p.image || "",
      imageAlt: p.image_alt || "",
      coverImage: p.image || "",
      coverImageAlt: p.image_alt || "",
      publishedAt: dStr ? `${dStr}T09:00:00Z` : "2026-10-21T09:00:00Z",
      author: p.author || "Elena Marquez / Barcelona Culture & Arts Specialist",
      recommendedTourId: p.recommended_tour_id || "los-tarantos-flamenco-show-barcelona",
      recommendedTourAfterBlock: p.recommended_tour_after_block,
      focusKeyword: p.focus_keyword || "",
      ctaHeading: p.cta_heading || "",
      ctaBody: p.cta_body || "",
      ctaButtonText: p.cta_button_text || "",
      ctaButtonHref: p.cta_button_href || "",
      noIndex: !!p.no_index,
      noFollow: !!p.no_follow,
      canonicalUrl: p.canonical_url || "",
      ogTitle: p.og_title || "",
      ogDescription: p.og_description || "",
      ogImage: p.og_image || "",
      content: p.content
    };
  });

  const postsJsonPath = path.join(process.cwd(), "data", "posts.json");
  fs.writeFileSync(postsJsonPath, JSON.stringify(jsonPosts, null, 2), "utf-8");
  console.log("✓ Synchronized data/posts.json with Neon database posts!");
}

seed().catch((err) => {
  console.error("Seed error:", err);
  process.exit(1);
});
