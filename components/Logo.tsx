import Link from "next/link";
import Image from "next/image";

export default function Logo({
  className = "",
  variant = "compact",
  theme = "light",
  src = "",
  alt = "Alhambra Tour",
  line1 = "ALHAMBRA",
  line2 = "TOUR",
}: {
  className?: string;
  variant?: "compact" | "stacked";
  theme?: "light" | "dark";
  src?: string;
  alt?: string;
  line1?: string;
  line2?: string;
}) {
  const customSrc = src?.trim();

  // Vector Andalusian Alhambra Tower & Arch Graphic
  const alhambraGraphic = (sizeClass: string) => (
    <div className={`relative flex items-center justify-center shrink-0 ${sizeClass}`}>
      <svg
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full drop-shadow-sm"
      >
        {/* Tower Battlements */}
        <path
          d="M8 20V12H13V14H18V12H23V14H28V12H33V14H38V12H43V14H48V20"
          stroke="#C8643F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Tower Base Wall */}
        <rect x="10" y="20" width="36" height="28" rx="1" fill="#F8F3E9" stroke="#C8643F" strokeWidth="2" />
        {/* Outer Horseshoe Arch */}
        <path
          d="M17 48V32C17 25 21 21 28 21C35 21 39 25 39 32V48"
          stroke="#263D2A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Inner Horseshoe Arch */}
        <path
          d="M21 48V35C21 30 23.5 26.5 28 26.5C32.5 26.5 35 30 35 35V48"
          fill="#C8643F"
          opacity="0.15"
          stroke="#C79A52"
          strokeWidth="1.5"
        />
        {/* Central Keyhole Doorway */}
        <path
          d="M24 48V37C24 34 25.5 32 28 32C30.5 32 32 34 32 37V48H24Z"
          fill="#263D2A"
        />
        {/* Decorative Andalusian Star on Top */}
        <path
          d="M28 4L30 8L34 10L30 12L28 16L26 12L22 10L26 8L28 4Z"
          fill="#C79A52"
        />
      </svg>
    </div>
  );

  const isLight = theme === "light";

  if (variant === "stacked") {
    return (
      <Link href="/" className={`inline-flex flex-col items-center gap-2 ${className}`}>
        {customSrc ? (
          <span className="relative block h-16 w-[200px]">
            <Image src={customSrc} alt={alt} fill sizes="200px" className="object-contain" priority />
          </span>
        ) : (
          alhambraGraphic("h-14 w-14")
        )}
        <div className="text-center leading-tight">
          <span className={`block font-serif text-2xl font-bold tracking-[0.1em] uppercase ${isLight ? "text-[#263D2A]" : "text-white"}`}>
            {line1 || "ALHAMBRA"}
          </span>
          <span className="block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C8643F] mt-0.5">
            — {line2 || "TOUR"} —
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className={`group inline-flex items-center gap-3.5 ${className}`}>
      {customSrc ? (
        <span className="relative block h-10 w-[130px] shrink-0 overflow-hidden">
          <Image src={customSrc} alt={alt} fill priority sizes="130px" className="object-contain" />
        </span>
      ) : (
        alhambraGraphic("h-11 w-11")
      )}
      <div className="flex flex-col leading-[1.1]">
        <span className={`font-serif text-[1.25rem] sm:text-[1.35rem] font-bold tracking-[0.08em] uppercase transition-colors ${isLight ? "text-[#263D2A] group-hover:text-[#C8643F]" : "text-white group-hover:text-[#E5D6BE]"}`}>
          {line1 || "ALHAMBRA"}
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="h-[1px] w-3 bg-[#C8643F]/60" />
          <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.28em] text-[#C8643F]">
            {line2 || "TOUR"}
          </span>
          <span className="h-[1px] w-3 bg-[#C8643F]/60" />
        </div>
      </div>
    </Link>
  );
}
