import { getHomepageContent } from "@/lib/homepage";

export default async function WhatYouSee() {
  const { sections } = await getHomepageContent();
  const s = sections.why;

  return (
    <section className="bg-gradient-to-b from-[#F8F3E9] via-white to-[#F8F3E9] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C8643F]">
            {s.eyebrow}
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-[#263D2A] sm:text-4xl">{s.heading}</h2>
          <div
            className="rich-content mt-3 text-base text-[#29302A]/85"
            dangerouslySetInnerHTML={{ __html: s.intro }}
          />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="rounded-2xl border border-[#E5D6BE] bg-white p-7 shadow-xs">
            <h3 className="font-serif text-xl font-bold text-[#263D2A]">{s.timelineHeading}</h3>
            <ol className="mt-6 space-y-6 border-l-2 border-[#C8643F]/40 pl-6">
              {s.timeline.map((row, i) => (
                <li key={row.time + i} className="relative">
                  <span className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full bg-[#C8643F] ring-4 ring-[#C8643F]/15" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C8643F]">{row.time}</span>
                  <p className="mt-1 text-sm font-semibold text-[#29302A]">{row.step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-[#E5D6BE] bg-white p-7 shadow-xs">
              <h3 className="font-serif text-xl font-bold text-[#263D2A]">{s.learnHeading}</h3>
              <ul className="mt-5 space-y-3">
                {s.learn.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-xl bg-[#F8F3E9]/80 border border-[#E5D6BE]/70 p-3.5 text-sm text-[#29302A]">
                    <span className="text-[#C8643F] font-bold">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-[#29302A]/60">{s.note}</p>
            </div>
          </div>
        </div>

        {s.extraItems.length > 0 && (
          <div className="mt-12">
            <h3 className="font-serif text-xl font-bold text-[#263D2A]">{s.extraHeading}</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {s.extraItems.map((point, i) => (
                <div key={point.name + i} className="rounded-2xl border border-[#E5D6BE] bg-white p-5 shadow-xs transition hover:border-[#C8643F]/50">
                  <p className="text-sm font-bold text-[#C8643F]">{point.name}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#29302A]/80">{point.note}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-[#C79A52]/30 bg-[#263D2A] p-8 text-white shadow-lg sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-bold">{s.ctaText}</p>
            <p className="text-xs text-[#E5D6BE] mt-0.5 font-medium">{s.ctaSubtext}</p>
          </div>
          <a
            href={s.ctaHref}
            className="shrink-0 rounded-xl bg-[#C8643F] hover:bg-[#b5532f] px-7 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            {s.ctaButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}
