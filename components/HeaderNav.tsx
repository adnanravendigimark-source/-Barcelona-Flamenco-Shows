"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/lib/homepage";

export default function HeaderNav({ links }: { links?: NavLink[] }) {
  const pathname = usePathname();

  const defaultLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const navLinks = links && links.length ? links : defaultLinks;

  return (
    <nav className="hidden items-center gap-7 lg:gap-9 text-sm font-medium text-stone-300 md:flex">
      {navLinks.map((link) => {
        const isAnchor = link.href.includes("#");
        const isActive = isAnchor ? false : link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href + link.label}
            href={link.href}
            className={`relative py-1.5 transition-colors hover:text-white ${
              isActive
                ? "text-red-500 font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-red-500"
                : "text-stone-300 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
