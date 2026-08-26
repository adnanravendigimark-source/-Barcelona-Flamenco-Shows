import Link from "next/link";
import SafeImage from "./SafeImage";
import { getPosts } from "@/lib/posts";
import { getHomepageContent } from "@/lib/homepage";

export default async function BlogSection() {
  const [allPosts, { sections }] = await Promise.all([getPosts(), getHomepageContent()]);
  const posts = allPosts.filter((p) => !p.noIndex).slice(0, 3);
  const s = sections.blogTeaser;

  if (posts.length === 0) return null;

  return (
    <section className="bg-[#F8F3E9] py-16 sm:py-24 border-t border-[#E5D6BE]" id="blog-guides">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C8643F]">
              {s.eyebrow}
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#263D2A] sm:text-4xl">
              {s.heading}
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[#29302A]/80">{s.subheading}</p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 self-start md:self-auto rounded-xl border border-[#263D2A]/30 bg-white px-6 py-2.5 text-sm font-bold text-[#263D2A] transition-all duration-200 hover:bg-[#263D2A] hover:text-white shadow-xs hover:scale-[1.02]"
          >
            <span>{s.viewAllText}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#E5D6BE] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#C8643F]/50 hover:shadow-lg"
            >
              <Link href={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden bg-[#F8F3E9]">
                <SafeImage
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  fill
                  quality={80}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="inline-flex rounded-full bg-[#C8643F]/10 px-3 py-0.5 font-bold uppercase tracking-wide text-[#C8643F] border border-[#C8643F]/20">
                    {post.category}
                  </span>
                  {post.readTime && <span className="text-[#29302A]/60 font-medium">{post.readTime}</span>}
                </div>
                <h3 className="mt-3 font-serif text-xl font-bold leading-snug text-[#263D2A] group-hover:text-[#C8643F] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                {post.excerpt && (
                  <p className="mt-2 line-clamp-3 text-sm text-[#29302A]/80 leading-relaxed">{post.excerpt}</p>
                )}
                <div className="mt-auto pt-6">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#C8643F] transition group-hover:gap-2"
                  >
                    <span>{s.readArticleText}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#263D2A] px-6 py-3.5 text-sm font-bold text-white shadow-xs"
          >
            <span>{s.viewAllText}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
