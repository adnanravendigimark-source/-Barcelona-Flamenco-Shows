import { getHomepageContent } from "@/lib/homepage";

// Content editable from /admin/homepage → Content tab (see
// lib/homepage.ts's HighlightsSection / DEFAULT_SECTIONS.highlights).
export default async function CanalHighlights() {
  const { sections } = await getHomepageContent();
  const s = sections.highlights;

  return (
    <section id="highlights" className="bg-zinc-950 py-20 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-mosaic opacity-60 mix-blend-soft-light" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-300">
          <span>✨</span> {s.eyebrow}
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{s.heading}</h2>
        <p className="mt-3 max-w-2xl text-stone-300 text-base">{s.subheading}</p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {s.cards.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:border-amber-400/50 hover:bg-white/[0.08] hover:shadow-xl hover:shadow-red-950/30 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-red-500/20 text-2xl border border-amber-400/20 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-white group-hover:text-amber-300 transition-colors">{item.title}</h3>
              <p className="mt-2 text-sm text-stone-300 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
