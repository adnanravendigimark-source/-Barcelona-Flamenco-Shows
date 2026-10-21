"use client";

import { useState } from "react";
import Link from "next/link";
import SafeImage from "./SafeImage";
import TableOfContents from "./TableOfContents";
import { CalendarIcon, SearchIcon, TicketIcon } from "./icons";
import type { Post } from "@/lib/posts";
import type { TocItem } from "@/lib/tableOfContents";

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function BlogSidebar({
  popularPosts,
  toc,
  tocLabel = "In This Guide",
  ctaHeading = "Compare Alhambra Tours & Tickets",
  ctaBody = "Find the best official guided tours, ticket prices, and time slots in one place.",
  ctaButtonText = "View Tour Options →",
}: {
  slug: string;
  popularPosts: Post[];
  toc: TocItem[];
  tocLabel?: string;
  ctaHeading?: string;
  ctaBody?: string;
  ctaButtonText?: string;
}) {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      window.location.href = `/blog?q=${encodeURIComponent(search.trim())}`;
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  const popular = popularPosts.slice(0, 4);

  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex rounded-xl border border-[#E5D6BE] bg-white overflow-hidden shadow-xs focus-within:border-[#263D2A]">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search articles..."
          className="w-full bg-transparent px-3.5 py-2.5 text-xs text-[#29302A] placeholder-[#29302A]/50 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Search"
          className="flex items-center justify-center bg-[#263D2A] px-3.5 text-white transition hover:bg-[#1e3021]"
        >
          <SearchIcon className="h-4 w-4" />
        </button>
      </form>

      {/* Table of Contents */}
      <TableOfContents items={toc} label={tocLabel} />

      {/* Popular Articles */}
      {popular.length > 0 && (
        <div className="rounded-2xl border border-[#E5D6BE] bg-white p-5 shadow-xs">
          <p className="font-serif text-xs font-bold uppercase tracking-wider text-[#263D2A]">
            POPULAR ARTICLES
          </p>
          <div className="mt-4 space-y-3.5">
            {popular.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex items-center gap-3"
              >
                <div className="relative h-13 w-16 shrink-0 aspect-[4/3] overflow-hidden rounded-xl bg-[#F8F3E9]">
                  <SafeImage
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    fill
                    quality={65}
                    sizes="80px"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="line-clamp-2 text-xs font-bold leading-snug text-[#263D2A] transition-colors group-hover:text-[#C8643F]">
                    {post.title}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-[11px] text-[#29302A]/60 font-medium">
                    <CalendarIcon className="h-3 w-3 text-[#C8643F]" />
                    {formatDate(post.date)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Compare Alhambra Tours Promo Card */}
      <div className="relative overflow-hidden rounded-2xl border border-[#C79A52]/30 bg-gradient-to-br from-[#F8F3E9] via-white to-[#F8F3E9] p-6 text-center shadow-xs">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#263D2A] text-[#C79A52]">
          <TicketIcon className="h-5 w-5" />
        </div>
        <p className="mt-3.5 font-serif text-base font-bold text-[#263D2A]">{ctaHeading}</p>
        <p className="mt-1.5 text-xs leading-relaxed text-[#29302A]/80">{ctaBody}</p>
        <a
          href="/#tours"
          className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-[#263D2A] hover:bg-[#C8643F] px-5 py-2.5 text-xs font-bold text-white shadow-xs transition-all duration-200 hover:scale-[1.02]"
        >
          {ctaButtonText}
        </a>
      </div>

      {/* Newsletter Card */}
      <div className="rounded-2xl border border-[#E5D6BE] bg-white p-5 shadow-xs">
        <p className="font-serif text-xs font-bold uppercase tracking-wider text-[#263D2A]">
          NEWSLETTER
        </p>
        <p className="mt-2 text-xs text-[#29302A]/80 leading-relaxed">
          Get Granada travel tips, Alhambra entry guides and insider advice straight to your inbox.
        </p>
        {subscribed ? (
          <p className="mt-3 text-xs font-semibold text-[#263D2A]">✓ Thank you for subscribing!</p>
        ) : (
          <form onSubmit={handleSubscribe} className="mt-3 space-y-2">
            <div className="flex rounded-lg border border-[#E5D6BE] bg-white overflow-hidden focus-within:border-[#263D2A]">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                className="w-full bg-transparent px-3 py-2 text-xs text-[#29302A] placeholder-[#29302A]/50 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex items-center justify-center bg-[#263D2A] px-3 text-white transition hover:bg-[#1e3021]"
              >
                →
              </button>
            </div>
            <label className="flex items-start gap-1.5 text-[11px] text-[#29302A]/80 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 rounded border-[#E5D6BE] text-[#263D2A] focus:ring-[#263D2A]"
              />
              <span>I agree to receive travel updates.</span>
            </label>
          </form>
        )}
      </div>
    </aside>
  );
}
