import SafeImage from "./SafeImage";
import StarRating from "./StarRating";
import type { Tour } from "@/lib/data";
import { LockIcon } from "./icons";

export default function TourCard({
  tour,
  recommended,
  bookNowText = "Book Tickets",
}: {
  tour: Tour;
  recommended?: {
    badgeLabel: string;
    reasons: string[];
    urgencyText: string;
  };
  bookNowText?: string;
}) {
  return (
    <div
      className={`group flex h-full flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 ${
        recommended
          ? "border-2 border-[#263D2A] shadow-lg shadow-[#263D2A]/10 hover:shadow-xl ring-1 ring-[#263D2A]/20"
          : "border border-[#E5D6BE] shadow-xs hover:border-[#C8643F]/50 hover:shadow-lg"
      }`}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F8F3E9]">
        <SafeImage
          src={tour.image}
          alt={tour.imageAlt}
          fill
          quality={80}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

        {(recommended || tour.ribbon) && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-[#263D2A] to-[#C8643F] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
            <span>★</span>
            {recommended ? recommended.badgeLabel : tour.ribbon}
          </span>
        )}

        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg bg-white/95 px-2.5 py-1 text-xs font-bold text-[#29302A] shadow-md backdrop-blur-md">
          <StarRating rating={tour.rating} showValue reviewCount={tour.reviews} size="xs" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="min-h-[3.25rem] font-serif text-lg font-bold leading-snug text-[#263D2A] line-clamp-2 group-hover:text-[#C8643F] transition-colors">
          {tour.title}
        </h3>
        <div
          className="rich-content mt-1 line-clamp-2 min-h-[2.5rem] text-sm text-[#29302A]/80 [&>p]:m-0 [&>p]:line-clamp-2"
          dangerouslySetInnerHTML={{ __html: tour.description }}
        />

        {/* First 3 Includes */}
        <div className="mt-4 space-y-1.5">
          {tour.includes.slice(0, 3).map((item) => (
            <div
              key={item}
              className="flex items-start gap-2 rounded-md bg-[#F8F3E9]/80 px-2.5 py-1.5 text-[11.5px] text-[#29302A] border border-[#E5D6BE]/70"
            >
              <span className="mt-0.5 text-[#C8643F] font-bold shrink-0">✓</span>
              <span className="leading-tight font-medium line-clamp-1">{item}</span>
            </div>
          ))}
        </div>

        {tour.duration && <p className="mt-3 text-xs font-semibold text-[#C79A52]">⏱ {tour.duration}</p>}

        {/* Footer */}
        {recommended ? (
          <div className="mt-auto border-t border-[#E5D6BE] pt-4">
            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#29302A]/60">from</p>
                <span className="font-serif text-2xl font-bold text-[#C8643F]">€{tour.price}</span>
              </div>
              <a
                href={tour.href}
                target="_blank"
                rel="noopener nofollow sponsored"
                className="flex shrink-0 items-center gap-1.5 rounded-xl bg-[#263D2A] hover:bg-[#C8643F] px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                {bookNowText}
              </a>
            </div>
            {recommended.urgencyText && (
              <p className="mt-2.5 flex items-center justify-center gap-1.5 text-center text-xs font-bold text-[#C8643F]">
                <LockIcon className="h-3.5 w-3.5" />
                <span>{recommended.urgencyText}</span>
              </p>
            )}
          </div>
        ) : (
          <div className="mt-auto border-t border-[#E5D6BE]/70 pt-4">
            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#29302A]/60">from</p>
                <span className="font-serif text-2xl font-bold text-[#263D2A]">€{tour.price}</span>
              </div>
              <a
                href={tour.href}
                target="_blank"
                rel="noopener nofollow sponsored"
                className="flex shrink-0 items-center gap-1.5 rounded-xl bg-[#263D2A] hover:bg-[#C8643F] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                {bookNowText}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
