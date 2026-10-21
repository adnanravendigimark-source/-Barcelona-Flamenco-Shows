"use client";

import Link from "next/link";
import SafeImage from "./SafeImage";
import { TicketIcon, CalendarIcon, SearchIcon } from "./icons";
import type { Post } from "@/lib/posts";

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function BlogIndexSidebar({
  posts,
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  ctaHeading = "Book Your Alhambra Tour",
  ctaBody = "Guaranteed Nasrid Palaces entrance and expert local guides.",
  ctaButtonText = "View Alhambra Tours →",
}: {
  posts: Post[];
  categories: { name: string; count: number }[];
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
  searchQuery?: string;
  onSearchChange?: (q: string) => void;
  ctaHeading?: string;
  ctaBody?: string;
  ctaButtonText?: string;
}) {
  const popular = posts.slice(0, 5);

  return (
    <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
      {/* Search Widget */}
      <div className="flex rounded-xl border border-[#E5D6BE] bg-white overflow-hidden shadow-xs focus-within:border-[#263D2A]">
        <input
          type="text"
          value={searchQuery || ""}
          onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          placeholder="Search articles..."
          className="w-full bg-transparent px-3.5 py-2.5 text-xs text-[#29302A] placeholder-[#29302A]/50 focus:outline-none"
        />
        <button
          type="button"
          aria-label="Search"
          className="flex items-center justify-center bg-[#263D2A] px-3.5 text-white transition hover:bg-[#1e3021]"
        >
          <SearchIcon className="h-4 w-4" />
        </button>
      </div>

      {/* Categories Widget */}
      {categories.length > 0 && (
        <div className="rounded-2xl border border-[#E5D6BE] bg-white p-5 shadow-xs">
          <p className="font-serif text-base font-bold text-[#263D2A]">Categories</p>
          <div className="mt-3.5 space-y-1">
            {categories.map((cat) => {
              const isSelected = selectedCategory?.toLowerCase() === cat.name.toLowerCase();
              return (
                <button
                  key={cat.name}
                  type="button"
                  onClick={() => onSelectCategory && onSelectCategory(isSelected ? "All" : cat.name)}
                  className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-xs font-semibold transition ${
                    isSelected
                      ? "bg-[#C8643F]/10 text-[#C8643F] font-bold border border-[#C8643F]/30"
                      : "text-[#29302A] hover:bg-[#F8F3E9] hover:text-[#C8643F]"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#F8F3E9] px-1.5 text-[10px] font-bold text-[#263D2A]">
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Popular Articles Widget */}
      {popular.length > 0 && (
        <div className="rounded-2xl border border-[#E5D6BE] bg-white p-5 shadow-xs">
          <p className="font-serif text-base font-bold text-[#263D2A]">Popular Articles</p>
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
                    quality={70}
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

      {/* Book Your Alhambra Tour Promo Card */}
      <div className="relative overflow-hidden rounded-2xl border border-[#C79A52]/30 bg-gradient-to-br from-[#F8F3E9] via-white to-[#F8F3E9] p-6 text-center shadow-xs">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#263D2A] text-[#C79A52]">
          <TicketIcon className="h-5 w-5" />
        </div>
        <p className="mt-3.5 font-serif text-base font-bold text-[#263D2A]">{ctaHeading}</p>
        <p className="mt-1.5 text-xs leading-relaxed text-[#29302A]/80">{ctaBody}</p>
        <a
          href="/#tours"
          className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-[#263D2A] hover:bg-[#C8643F] px-5 py-2.5 text-xs font-bold text-white shadow-xs transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
        >
          {ctaButtonText}
        </a>
      </div>
    </aside>
  );
}
