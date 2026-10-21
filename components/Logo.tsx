import Link from "next/link";
import Image from "next/image";

export default function Logo({
  className = "",
  variant = "compact",
  theme = "dark",
  src = "",
  alt = "Barcelona Flamenco Shows",
  line1 = "BARCELONA",
  line2 = "FLAMENCO SHOWS",
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

  // Vector Flamenco Dancer Silhouette in rich Spanish red
  const flamencoSilhouette = (sizeClass: string) => (
    <div className={`relative flex items-center justify-center shrink-0 ${sizeClass}`}>
      <svg
        viewBox="0 0 40 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full drop-shadow-[0_2px_8px_rgba(201,24,43,0.4)]"
      >
        <path
          d="M21 4C21 5.65685 19.6569 7 18 7C16.3431 7 15 5.65685 15 4C15 2.34315 16.3431 1 18 1C19.6569 1 21 2.34315 21 4Z"
          fill="#c92828"
        />
        {/* Flower / Comb in hair */}
        <circle cx="21.5" cy="3.5" r="1.5" fill="#f87171" />
        {/* Upraised Arm */}
        <path
          d="M17 6C15 4 13 2 12 4C11 6 13 8.5 15 9.5L16 12"
          stroke="#c92828"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M19 6C22 5 24 3 25 4C26 5.5 24 8 22 10L20 12"
          stroke="#c92828"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Torso */}
        <path
          d="M16 12C15.5 15 15 18 16 20C17 22 19 23 20 25C19 28 17 31 12 34C10 35.2 7 38 6 42C9 42.5 13 41 16 39C19 37 21 35 22 33C24 36 28 39 32 41C34 42 37 43 38 41.5C36 38 33 34 30 30C27 26 24 23 23 20C22 17 21 14 20 12H16Z"
          fill="#c92828"
        />
        {/* Ruffles details */}
        <path
          d="M12 34C15 32 20 33 22 30C24 27 26 31 29 32C32 33 35 34 37 38C34 39.5 30 39 27 37C24 35 22 36 19 38C16 40 13 41 10 41L12 34Z"
          fill="#ad1d1d"
        />
        <path
          d="M8 43C14 44 22 45 28 43C32 42 35 43 38 44C33 46 25 46.5 17 45.5C13 45 9 44.5 8 43Z"
          fill="#8e1515"
        />
      </svg>
    </div>
  );

  if (variant === "stacked") {
    return (
      <Link href="/" className={`inline-flex flex-col items-center gap-3 ${className}`}>
        {customSrc ? (
          <span className="relative block h-20 w-[240px] sm:h-24 sm:w-[280px]">
            <Image src={customSrc} alt={alt} fill sizes="280px" className="object-contain" priority />
          </span>
        ) : (
          flamencoSilhouette("h-14 w-12 sm:h-16 sm:w-14")
        )}
        <div className="text-center leading-tight">
          <span className="block font-display text-2xl font-black tracking-[0.08em] uppercase text-white">
            {line1 || "BARCELONA"}
          </span>
          <span className="block font-display text-[11px] font-bold uppercase tracking-[0.25em] text-red-500 mt-0.5">
            — {line2 || "FLAMENCO SHOWS"} —
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${className}`}>
      {customSrc ? (
        <span className="relative block h-9 w-[120px] shrink-0 overflow-hidden sm:h-10 sm:w-[130px]">
          <Image src={customSrc} alt={alt} fill priority sizes="130px" className="object-contain" />
        </span>
      ) : (
        flamencoSilhouette("h-10 w-8 sm:h-11 sm:w-9")
      )}
      <div className="flex flex-col leading-[1.08]">
        <span className="font-display text-[1.15rem] sm:text-[1.25rem] font-bold tracking-[0.06em] uppercase text-white transition-colors group-hover:text-red-400">
          {line1 || "BARCELONA"}
        </span>
        <span className="font-display text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.22em] text-red-500 mt-0.5">
          — {line2 || "FLAMENCO SHOWS"} —
        </span>
      </div>
    </Link>
  );
}
