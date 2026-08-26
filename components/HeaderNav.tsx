"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/lib/homepage";

export default function HeaderNav({ links }: { links?: NavLink[] }) {
  const pathname = usePathname();

  const defaultLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Tours", href: "/#tours" },
    { label: "Tickets", href: "/#prices" },
    { label: "Plan Your Visit", href: "/#practical" },
    { label: "What to Expect", href: "/#highlights" },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const navLinks = links && links.length ? links : defaultLinks;

  return (
    <nav className="hidden items-center gap-6 lg:gap-8 text-[0.92rem] font-medium text-[#29302A] md:flex">
      {navLinks.map((link) => {
        const isAnchor = link.href.includes("#");
        const isActive = isAnchor ? false : link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href + link.label}
            href={link.href}
            className={`relative py-1.5 transition-colors hover:text-[#C8643F] ${
              isActive
                ? "text-[#C8643F] font-bold after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-full after:bg-[#C8643F] after:rounded-full"
                : "text-[#29302A] hover:text-[#C8643F]"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
