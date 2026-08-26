import Link from "next/link";
import Logo from "./Logo";
import { getSiteChrome } from "@/lib/homepage";

export default async function Footer() {
  const { header, footer } = await getSiteChrome();
  return (
    <footer className="border-t border-[#1e3021] bg-[#263D2A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo
              variant="stacked"
              theme="dark"
              line1={header.logoLine1 || "ALHAMBRA"}
              line2={header.logoLine2 || "TOUR"}
            />
            <div
              className="mt-6 max-w-sm text-sm leading-relaxed text-[#E5D6BE] rich-content rich-content-invert"
              dangerouslySetInnerHTML={{ __html: footer.tagline }}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            {footer.columns.map((column) => (
              <div key={column.title}>
                <p className="text-xs font-bold uppercase tracking-widest text-[#C79A52]">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-[#E5D6BE]">
                  {column.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link href={link.href} className="hover:text-white hover:underline transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#C79A52]">
                {footer.addressHeading}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#E5D6BE]">
                {footer.addressLine1}
                <br />
                {footer.addressLine2}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-8 text-xs text-[#E5D6BE]/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {footer.copyrightText}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
