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
          ? "border-2 border-red-600 shadow-lg shadow-red-500/10 hover:shadow-2xl hover:shadow-red-500/20 ring-1 ring-red-500/20"
          : "border border-stone-200/80 shadow-sm hover:border-red-500/40 hover:shadow-xl hover:shadow-red-950/5"
      }`}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <SafeImage
          src={tour.image}
          alt={tour.imageAlt}
          fill
          quality={70}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

        {(recommended || tour.ribbon) && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
            <span>★</span>
            {recommended ? recommended.badgeLabel : tour.ribbon}
          </span>
        )}

        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg bg-white/95 px-2.5 py-1 text-xs font-bold text-zinc-900 shadow-md backdrop-blur-md">
          <StarRating rating={tour.rating} showValue reviewCount={tour.reviews} size="xs" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="min-h-[3.25rem] font-display text-lg font-bold leading-snug text-zinc-900 line-clamp-2 group-hover:text-red-600 transition-colors">
          {tour.title}
        </h3>
        <div
          className="rich-content mt-1 line-clamp-2 min-h-[2.5rem] text-sm text-stone-600 [&>p]:m-0 [&>p]:line-clamp-2"
          dangerouslySetInnerHTML={{ __html: tour.description }}
        />

        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {tour.includes.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1 rounded-md bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-950 border border-red-100"
            >
              <span className="text-red-600 font-bold">✓</span>
              {item}
            </span>
          ))}
        </div>

        <p className="mt-3 text-xs font-medium text-stone-500">⏱ {tour.duration}</p>

        {recommended && recommended.reasons.length > 0 && (
          <div className="mt-3.5 rounded-xl bg-red-50/70 border border-red-200/60 p-3">
            {recommended.reasons.slice(0, 2).map((reason) => (
              <p key={reason} className="flex items-start gap-1.5 text-[11px] leading-snug text-zinc-800 font-semibold">
                <span className="mt-0.5 text-red-600">✓</span>
                {reason}
              </p>
            ))}
          </div>
        )}

        {/* Footer */}
        {recommended ? (
          <div className="mt-auto border-t border-red-100 pt-4">
            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400">from</p>
                <span className="font-display text-2xl font-bold text-zinc-900">€{tour.price}</span>
              </div>
              <a
                href={tour.href}
                target="_blank"
                rel="noopener nofollow sponsored"
                className="flex shrink-0 items-center gap-1.5 rounded-xl border border-amber-300/30 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-red-900/30 transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-red-600/40 hover:brightness-105 active:scale-[0.98]"
              >
                {bookNowText}
              </a>
            </div>
            {recommended.urgencyText && (
              <p className="mt-2.5 flex items-center justify-center gap-1.5 text-center text-xs font-bold text-amber-600">
                <LockIcon className="h-3.5 w-3.5" />
                <span>{recommended.urgencyText}</span>
              </p>
            )}
          </div>
        ) : (
          <div className="mt-auto border-t border-stone-100 pt-4">
            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400">from</p>
                <span className="font-display text-2xl font-bold text-zinc-900">€{tour.price}</span>
              </div>
              <a
                href={tour.href}
                target="_blank"
                rel="noopener nofollow sponsored"
                className="flex shrink-0 items-center gap-1.5 rounded-xl border border-zinc-700/50 bg-zinc-900 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-gradient-to-r hover:from-red-600 hover:to-rose-600 hover:border-amber-400/30 hover:shadow-md hover:shadow-red-900/30 hover:scale-[1.02] active:scale-[0.98]"
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
