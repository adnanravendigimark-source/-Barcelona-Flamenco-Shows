import Link from "next/link";
import Image from "next/image";

export default function Logo({
  className = "",
  variant = "compact",
  theme = "light",
  src = "",
  alt = "Barcelona Flamenco Show",
  line1 = "Barcelona",
  line2 = "Flamenco Shows",
}: {
  className?: string;
  variant?: "compact" | "stacked";
  theme?: "light" | "dark";
  src?: string;
  alt?: string;
  line1?: string;
  line2?: string;
}) {
  const isDark = theme === "dark";
  const customSrc = src?.trim();

  // Vector Flamenco Dancer Icon with fan & ruffled dress
  const flamencoIcon = (sizeClass: string) => (
    <div className={`relative flex items-center justify-center ${sizeClass}`}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full drop-shadow-md"
      >
        <defs>
          <linearGradient id="flamencoRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>
          <linearGradient id="flamencoGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>

        {/* Fan Arc Background Glow */}
        <path
          d="M10 24C10 16.268 16.268 10 24 10C31.732 10 38 16.268 38 24"
          stroke="url(#flamencoGold)"
          strokeWidth="1.5"
          strokeDasharray="2 3"
          opacity="0.8"
        />

        {/* Spanish Fan Rays */}
        <path d="M24 24L14 15M24 24L19 12M24 24L24 10M24 24L29 12M24 24L34 15" stroke="url(#flamencoGold)" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />

        {/* Dancer Head & Arms Upraised */}
        <circle cx="24" cy="14" r="3.2" fill="url(#flamencoGold)" />
        <path
          d="M16 11C18 7.5 21.5 6 24 6C26.5 6 30 7.5 32 11"
          stroke="url(#flamencoRed)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Torso & Bodice */}
        <path
          d="M22 17.5C22 17.5 21 21 21.5 25C22 29 20 32 14 38C20 37 25 36 28 39C32 43 37 42 41 40C36 36 34 33 31 29C28.5 25.5 27 21 26 17.5H22Z"
          fill="url(#flamencoRed)"
        />

        {/* Flared Cascading Ruffles (Bata de Cola) */}
        <path
          d="M14 38C17 35.5 22 36 25 34C28 32 32 34 35 32.5C38 31 40 33 41 40C36 43 28 44 21 42C17 41 14 38 14 38Z"
          fill="url(#flamencoRed)"
          opacity="0.9"
        />
        <path
          d="M18 41C24 43 31 44 38 42C33 45 25 45.5 17 43.5L18 41Z"
          fill="url(#flamencoGold)"
          opacity="0.85"
        />

        {/* Accent Star / Castanet Spark */}
        <circle cx="34" cy="10" r="1.5" fill="#fde047" />
      </svg>
    </div>
  );

  if (variant === "stacked") {
    return (
      <Link href="/" className={`inline-flex flex-col items-center gap-3.5 ${className}`}>
        {customSrc ? (
          <span className="relative block h-20 w-[240px] sm:h-24 sm:w-[280px] transition-transform duration-300 hover:scale-105">
            <Image
              src={customSrc}
              alt={alt}
              fill
              sizes="280px"
              className="object-contain"
              priority
            />
          </span>
        ) : (
          flamencoIcon("h-16 w-16 sm:h-20 sm:w-20")
        )}
        <div className="text-center leading-tight">
          <span
            className={`block font-display text-2xl font-black tracking-[-0.02em] uppercase ${
              isDark ? "text-white" : "text-zinc-900"
            }`}
          >
            {line1}
          </span>
          <span className="block font-display text-xs font-extrabold uppercase tracking-[0.32em] bg-gradient-to-r from-red-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
            {line2}
          </span>
        </div>
      </Link>
    );
  }

  const image = customSrc ? (
    <span className="relative block h-9 w-[120px] shrink-0 overflow-hidden sm:h-10 sm:w-[130px] transition-transform duration-300 group-hover:scale-105">
      <Image
        src={customSrc}
        alt={alt}
        fill
        priority
        sizes="130px"
        className="object-contain"
      />
    </span>
  ) : (
    flamencoIcon("h-9 w-9 sm:h-10 sm:w-10 shrink-0 transition-transform duration-300 group-hover:scale-105")
  );

  const wordmark = (
    <span className="flex min-w-0 items-center gap-3">
      <span
        className={`h-7 w-[2px] shrink-0 rounded-full ${
          isDark
            ? "bg-gradient-to-b from-red-500/80 to-amber-500/40"
            : "bg-gradient-to-b from-red-600/70 to-amber-500/30"
        }`}
        aria-hidden="true"
      />
      <div className="flex min-w-0 flex-col leading-[1.1]">
        <span
          className={`block truncate font-display text-[1.15rem] font-black tracking-[-0.02em] uppercase ${
            isDark ? "text-white" : "text-zinc-900"
          }`}
        >
          {line1}
        </span>
        <span className="block truncate font-display text-[10px] font-extrabold uppercase tracking-[0.26em] bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 bg-clip-text text-transparent">
          {line2}
        </span>
      </div>
    </span>
  );

  return (
    <Link href="/" className={`group inline-flex min-w-0 items-center gap-2.5 ${className}`}>
      {image}
      {wordmark}
    </Link>
  );
}
