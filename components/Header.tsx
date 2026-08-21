import Link from "next/link";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { getSiteChrome } from "@/lib/homepage";

export default async function Header() {
  const { header } = await getSiteChrome();
  return (
    <header className="sticky top-0 z-50 h-20 border-b border-white/[0.08] bg-black/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo src={header.logoImage} alt={header.logoAlt} line1={header.logoLine1} line2={header.logoLine2} />
        
        <nav className="hidden items-center gap-7 lg:gap-9 text-sm font-medium text-stone-300 md:flex">
          {header.navLinks.map((link, idx) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className={`relative py-1.5 transition-colors hover:text-white ${
                idx === 0
                  ? "text-red-500 font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-red-500"
                  : "text-stone-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={header.ctaHref || "/#tours"}
            className="hidden items-center gap-2 rounded-xl bg-[#c23636] hover:bg-[#ad2828] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-950/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] md:inline-flex"
          >
            <span className="text-sm">🎟</span>
            <span>{header.bookNowText || "BOOK TICKETS"}</span>
          </Link>
          <MobileNav navLinks={header.navLinks} ctaText={header.ctaText} ctaHref={header.ctaHref} />
        </div>
      </div>
    </header>
  );
}
