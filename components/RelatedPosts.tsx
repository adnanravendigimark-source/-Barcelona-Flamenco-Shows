import Link from "next/link";
import SafeImage from "./SafeImage";
import { getRelatedPosts } from "@/lib/posts";
import { getHomepageContent } from "@/lib/homepage";

export default async function RelatedPosts({ slug }: { slug: string }) {
  const [related, { sections }] = await Promise.all([getRelatedPosts(slug), getHomepageContent()]);
  if (related.length === 0) return null;

  return (
    <section className="border-t border-[#E5D6BE] pt-12">
      <p className="font-serif text-2xl font-bold text-[#263D2A]">{sections.blogPage.relatedGuidesHeading}</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex gap-4 rounded-2xl border border-[#E5D6BE] bg-white p-4 transition-all hover:border-[#C8643F]/50 hover:shadow-md"
          >
            <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-[#F8F3E9]">
              <SafeImage src={post.image} alt={post.imageAlt} fill quality={75} sizes="100px" className="object-cover transition group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C8643F]">
                {post.category}
              </span>
              <p className="mt-1 text-sm font-bold font-serif text-[#263D2A] group-hover:text-[#C8643F] transition-colors">
                {post.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
