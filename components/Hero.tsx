import SafeImage from "./SafeImage";
import { getHomepageContent } from "@/lib/homepage";

export default async function Hero() {
  const content = await getHomepageContent();

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100dvh-5rem)] items-center overflow-hidden bg-black text-white"
    >
      {/* Background Image & Cinematic Gradient */}
      <div className="absolute inset-0">
        {content.heroVideo ? (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video
            src={content.heroVideo}
            poster={content.heroImage || "/images/hero-flamenco.jpg"}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-right md:object-center"
          />
        ) : (
          <SafeImage
            src={content.heroImage || "/images/hero-flamenco.jpg"}
            alt={content.heroImageAlt || "Live Flamenco in Barcelona"}
            fill
            priority
            quality={68}
            sizes="100vw"
            className="object-cover object-right md:object-center"
          />
        )}

        {/* Dark moody left-vignette gradient ensuring high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 via-35% to-transparent sm:via-black/80 sm:via-45%" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#c93b3b] mb-4">
            {content.heroBadge || "BARCELONA FLAMENCO SHOWS"}
          </p>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.85rem] font-bold leading-[1.08] tracking-tight text-white">
            Feel the Passion.
            <br />
            <span className="text-[#c93b3b]">
              Live Flamenco
              <br />
              in Barcelona.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-stone-300 max-w-lg">
            Experience the soul of Spain with authentic Flamenco shows in the heart of Barcelona.
            Intimate venues, world-class artists, unforgettable memories.
          </p>

          {/* Buttons Row */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={content.heroCtaPrimaryHref || "#tours"}
              className="inline-flex items-center gap-2 rounded-xl bg-[#c23636] hover:bg-[#ad2828] px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-red-950/60 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{content.heroCtaPrimaryText || "Explore Shows"}</span>
              <span>→</span>
            </a>

            <a
              href={content.heroCtaSecondaryHref || "#prices"}
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-black/40 hover:bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/50 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{content.heroCtaSecondaryText || "See Prices"}</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
