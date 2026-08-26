import Image from "next/image";
import { getHomepageContent } from "@/lib/homepage";

export default async function EveningCruise() {
  const { sections } = await getHomepageContent();
  const s = sections.tower;

  return (
    <section id="generalife" className="bg-[#F8F3E9] py-20 border-t border-[#E5D6BE]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-[#C8643F]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#C8643F]">
            <span>✨</span> {s.eyebrow}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#263D2A] sm:text-4xl">{s.heading}</h2>
          <div
            className="rich-content mt-4 text-base text-[#29302A]/85"
            dangerouslySetInnerHTML={{ __html: s.body }}
          />
          <ul className="mt-6 space-y-3.5 text-sm font-medium text-[#29302A]">
            {s.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#263D2A] text-white text-xs font-bold mt-0.5">
                  ✓
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <a
            href={s.ctaHref}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#263D2A] hover:bg-[#C8643F] px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            {s.ctaButtonText}
            <span>→</span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {s.images.map((img, i) => (
            <div
              key={img.label + i}
              className="group relative h-36 overflow-hidden rounded-2xl border border-[#E5D6BE] shadow-sm sm:h-44 transition-all duration-300 hover:scale-[1.03] hover:shadow-md"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                quality={80}
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-bold text-white drop-shadow flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C79A52]" />
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
