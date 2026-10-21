import Link from "next/link";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import HeaderNav from "./HeaderNav";
import { getSiteChrome } from "@/lib/homepage";

export default async function Header() {
  const { header } = await getSiteChrome();
  return (
    <header className="sticky top-0 z-50 h-20 border-b border-[#E5D6BE]/80 bg-[#F8F3E9]/95 backdrop-blur-md transition-all shadow-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo
          src={header.logoImage}
          alt={header.logoAlt || "Alhambra Tour"}
          line1={header.logoLine1 || "ALHAMBRA"}
          line2={header.logoLine2 || "TOUR"}
          theme="light"
        />
        
        <HeaderNav links={header.navLinks} />

        <div className="flex items-center gap-3">
          <Link
            href={header.ctaHref || "/#tours"}
            className="hidden items-center gap-2.5 rounded-xl bg-[#263D2A] hover:bg-[#1e3021] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] md:inline-flex"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[#C79A52]">
              <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
              <path d="M13 5v2" />
              <path d="M13 11v2" />
              <path d="M13 17v2" />
            </svg>
            <span>{header.bookNowText || "BOOK TICKETS"}</span>
          </Link>
          <MobileNav navLinks={header.navLinks} ctaText={header.ctaText} ctaHref={header.ctaHref} />
        </div>
      </div>
    </header>
  );
}
