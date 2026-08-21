import SafeImage from "./SafeImage";
import StarRating from "./StarRating";
import type { Tour } from "@/lib/data";

export default function TourPromoCard({
  tour,
  recommendedLabel = "Recommended Option",
  bookNowText = "Book Tickets",
}: {
  tour: Tour;
  recommendedLabel?: string;
  bookNowText?: string;
}) {
  return (
    <div className="my-10 flex flex-col gap-6 overflow-hidden rounded-2xl border border-red-200/80 bg-gradient-to-br from-red-50/70 via-white to-amber-50/40 p-6 shadow-md sm:flex-row sm:items-center">
      <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-44 shadow-sm">
        <SafeImage src={tour.image} alt={tour.imageAlt} fill sizes="200px" className="object-cover" />
      </div>
      <div className="flex-1">
        <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-red-600">
          {recommendedLabel}
        </span>
        <p className="mt-1 font-display text-lg font-bold text-zinc-900">{tour.title}</p>
        <div className="mt-1.5 flex items-center gap-2 text-xs font-medium text-stone-600">
          <StarRating rating={tour.rating} showValue reviewCount={tour.reviews} size="xs" />
          <span>·</span>
          <span>from €{tour.price}/person</span>
        </div>
      </div>
      <a
        href={tour.href}
        target="_blank"
        rel="noopener nofollow sponsored"
        className="shrink-0 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 px-6 py-3 text-center text-sm font-bold text-white shadow-md shadow-red-600/20 transition hover:scale-[1.02] hover:shadow-red-600/35"
      >
        {bookNowText}
      </a>
    </div>
  );
}
