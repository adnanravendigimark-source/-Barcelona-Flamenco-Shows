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

const sql = neon(process.env.DATABASE_URL);

async function main() {
  const heroGallery = [
    { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=900&auto=format&fit=crop", alt: "Passionate flamenco dancer performing with red dress in Barcelona", label: "Passionate Baile" },
    { src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=900&auto=format&fit=crop", alt: "Spanish flamenco guitarist and dancer performing live on stage", label: "Spanish Guitar" },
    { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=900&auto=format&fit=crop", alt: "Spanish tapas and wine dinner at authentic Barcelona tablao", label: "Tapas & Sangria" },
    { src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=900&auto=format&fit=crop", alt: "Candlelight atmosphere inside historic Baroque palace venue in Barcelona", label: "Historic Tablao" }
  ];

  await sql`INSERT INTO site_settings (key, value) VALUES ('hero_gallery', ${JSON.stringify(heroGallery)}) ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW()`;
  console.log("✓ Updated hero_gallery in database");
}

main().catch(console.error);
