import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SafeImage from "@/components/SafeImage";
import BlogIndexContainer from "@/components/BlogIndexContainer";
import { StarIcon } from "@/components/icons";
import { getPosts } from "@/lib/posts";
import { getBlogSeoSettings } from "@/lib/settings";
import { getHomepageContent } from "@/lib/homepage";
import { resolveRobots, resolveCanonical, resolveOg } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getBlogSeoSettings();
  const og = resolveOg(settings, { title: settings.metaTitle, description: settings.metaDescription });
  return {
    title: settings.metaTitle,
    description: settings.metaDescription,
    alternates: { canonical: resolveCanonical("/blog", settings.canonicalUrl) },
    robots: resolveRobots(settings.noIndex, settings.noFollow),
    openGraph: { title: og.title, description: og.description, url: "/blog", type: "website", images: og.image ? [{ url: og.image }] : undefined },
    twitter: { card: "summary_large_image", title: og.title, description: og.description, images: og.image ? [og.image] : undefined },
  };
}

export default async function BlogIndexPage() {
  const [posts, { sections, heroImage, heroImageAlt }] = await Promise.all([getPosts(), getHomepageContent()]);
  const s = sections.blogPage;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8F3E9]">
        {/* Blog Hero Banner */}
        <section className="relative overflow-hidden bg-[#263D2A] text-white">
          <div className="absolute inset-0">
            <SafeImage
              src={heroImage || "/images/hero-alhambra.jpg"}
              alt={heroImageAlt || "Alhambra Palace Granada at sunset"}
              fill
              priority
              quality={80}
              sizes="100vw"
              className="object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#263D2A] via-[#263D2A]/80 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 text-center sm:text-left">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="text-xs font-medium text-[#E5D6BE]/80">
              <ol className="flex items-center justify-center sm:justify-start gap-1.5">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-[#E5D6BE]/40">&gt;</li>
                <li className="font-semibold text-white" aria-current="page">
                  Blog
                </li>
              </ol>
            </nav>

            <span className="mt-4 inline-block rounded-md bg-white/10 border border-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#C79A52]">
              {s.eyebrow}
            </span>

            <h1 className="mt-4 font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {s.heading}
            </h1>

            {/* Decorative Divider */}
            <div className="mt-5 flex items-center justify-center sm:justify-start gap-3 max-w-xs mx-auto sm:mx-0">
              <span className="h-px flex-1 bg-white/30" />
              <StarIcon className="h-4 w-4 text-[#C79A52]" />
              <span className="h-px flex-1 bg-white/30" />
            </div>

            <p className="mt-4 max-w-lg text-xs leading-relaxed text-[#E5D6BE]/90 sm:text-sm">
              {s.subheading}
            </p>
          </div>
        </section>

        {/* Main Content Area */}
        <BlogIndexContainer
          posts={posts}
          emptyStateText={s.emptyStateText}
          articlesHeading={s.articlesHeading}
          articlesSubheading={s.articlesSubheading}
          ctaHeading={s.ctaHeading}
          ctaBody={s.ctaBody}
          ctaButtonText={s.ctaButtonText}
        />
      </main>
      <Footer />
    </>
  );
}
