import { getTours } from "@/lib/data";
import { getHomepageContent } from "@/lib/homepage";

export default async function PriceComparison() {
  const [tours, { sections }] = await Promise.all([getTours(), getHomepageContent()]);
  const s = sections.price;
  return (
    <section id="prices" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C8643F]">
          {s.eyebrow}
        </span>
        <h2 className="mt-2 font-serif text-3xl font-bold text-[#263D2A] sm:text-4xl">{s.heading}</h2>
        <div
          className="rich-content mt-3 text-base text-[#29302A]/80"
          dangerouslySetInnerHTML={{ __html: s.subheading }}
        />
      </div>

      <div className="mt-10 overflow-x-auto rounded-2xl border border-[#E5D6BE] bg-white shadow-sm">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-[#263D2A] text-white">
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">{s.itemLabel}</th>
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">{s.priceLabel}</th>
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">{s.column1Label}</th>
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">{s.column2Label}</th>
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider">{s.bestForLabel}</th>
              <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E5D6BE]/60">
            {tours.map((tour, i) => (
              <tr
                key={tour.id}
                className={`transition hover:bg-[#F8F3E9] ${
                  tour.featured ? "bg-[#F8F3E9]/70 font-medium" : i % 2 ? "bg-stone-50/60" : ""
                }`}
              >
                <td className="px-6 py-4 font-serif font-bold text-[#263D2A]">{tour.title}</td>
                <td className="px-6 py-4 font-bold text-[#C8643F]">
                  €{tour.price} <span className="font-normal text-xs text-[#29302A]/60">/ person</span>
                </td>
                <td className="px-6 py-4 text-[#29302A]/80">{tour.priceTableColumn1 || tour.duration}</td>
                <td className="px-6 py-4 text-[#29302A]/80">{tour.priceTableFeature || "Included"}</td>
                <td className="px-6 py-4 text-[#29302A]/80">{tour.bestFor}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href={tour.href}
                    target="_blank"
                    rel="noopener nofollow sponsored"
                    className="inline-flex rounded-xl bg-[#263D2A] hover:bg-[#C8643F] px-4 py-2 text-xs font-bold text-white shadow-xs transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                  >
                    {s.bookLabel}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3.5 text-xs text-[#29302A]/60">{s.note}</p>
    </section>
  );
}
