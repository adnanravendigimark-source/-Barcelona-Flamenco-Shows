import SafeImage from "./SafeImage";
import StarRating from "./StarRating";
import { getTours } from "@/lib/data";
import { getHomepageContent } from "@/lib/homepage";

export default async function FeaturedTour() {
  const content = await getHomepageContent();
  const bookNowText = content.header.bookNowText;
  if (!content.showFeaturedTour) return null;

  const tours = await getTours();
  const tour = tours.find((t) => t.id === content.featuredTourId);
  if (!tour) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E5D6BE] bg-[#F8F3E9]/95 px-4 py-3 shadow-[0_-8px_25px_rgba(0,0,0,0.12)] backdrop-blur-md sm:hidden">
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl">
          <SafeImage src={tour.image} alt={tour.imageAlt} fill quality={75} sizes="48px" className="object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-bold leading-tight text-[#263D2A]">{tour.title}</p>
          <div className="mt-0.5 flex items-center gap-2 text-[11px] text-[#29302A]/80">
            <StarRating rating={tour.rating} showValue size="xs" />
            <span>·</span>
            <span>
              from <span className="font-bold text-[#C8643F]">€{tour.price}</span>
            </span>
          </div>
        </div>
        <a
          href={tour.href}
          target="_blank"
          rel="noopener nofollow sponsored"
          className="shrink-0 rounded-xl bg-[#263D2A] hover:bg-[#1e3021] px-4 py-2 text-xs font-bold text-white shadow-xs"
        >
          {bookNowText}
        </a>
      </div>
    </div>
  );
}
