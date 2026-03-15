import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import { ContactCTA } from "@/src/components/CTA/ContactCTA";
import { portfolioItems } from "@/src/components/Portfolio/portfolioData";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/components/ui/Breadcrumb/Breadcrumb";
import { StructuredData, getCreativeWorkSchema, getBreadcrumbSchema } from "@/src/components/StructuredData";
import { buildCanonical, getAbsoluteOgImage, BRAND_NAME } from "@/src/lib/seo";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return portfolioItems.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = portfolioItems.find((p) => p.slug === params.slug);
  if (!item) return { title: "Case Study" };

  const canonicalUrl = buildCanonical(`/portfolio/${item.slug}`);
  const imageUrl = item.image.startsWith("http") ? item.image : getAbsoluteOgImage(item.image);

  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: item.title,
      description: item.description,
      url: canonicalUrl,
      type: "website",
      siteName: BRAND_NAME,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: item.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.description,
      images: [imageUrl],
    },
  };
}

export default function PortfolioCaseStudyPage({ params }: Props) {
  const item = portfolioItems.find((p) => p.slug === params.slug);
  if (!item) notFound();

  const tags = item.tags ?? [];
  const canonicalUrl = buildCanonical(`/portfolio/${item.slug}`);

  const creativeWorkSchema = getCreativeWorkSchema({
    name: item.title,
    description: item.description,
    image: item.image,
    url: canonicalUrl,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "תיק עבודות", item: "/portfolio" },
    { name: item.title, item: `/portfolio/${item.slug}` },
  ]);

  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <StructuredData data={[creativeWorkSchema, breadcrumbSchema]} />
      <Header />
      <main className="pt-24 bg-[#080a0c] min-h-screen">
        <section className="px-6 py-8 md:py-10" dir="rtl">
          <div className="mx-auto max-w-6xl bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
            <Breadcrumb>
              <BreadcrumbList className="text-slate-500 font-medium">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/portfolio" className="hover:text-slate-900">תיק עבודות</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-slate-400" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-slate-900 font-bold">{item.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-5 py-1.5 text-[var(--color-primary)] text-xs sm:text-sm font-bold shadow-sm uppercase tracking-widest mt-6">
              CASE STUDY • Aiterra
            </div>

            <h1 className="mt-6 text-4xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
              {item.title}
            </h1>
            <p className="mt-6 text-lg md:text-2xl text-slate-600 leading-relaxed font-medium max-w-4xl">
              {item.description}
            </p>

            {tags.length ? (
              <div className="mt-10 flex flex-wrap gap-2" dir="ltr">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-100 border border-slate-200 px-4 py-2 text-[11px] font-black tracking-widest uppercase text-slate-700 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        <section className="px-4 sm:px-6 py-10 md:py-14" dir="rtl">
          <div className="mx-auto max-w-[90rem] bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto rounded-[2rem] border border-slate-100"
              loading="eager"
            />
          </div>
        </section>

        <section className="px-6 py-16 md:py-24" dir="rtl">
          <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-[2.8rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-10 md:p-12">
              <div className="text-[11px] font-black tracking-[3px] uppercase text-white/50">Summary</div>
              <h2 className="mt-3 text-3xl md:text-5xl font-black text-white tracking-tight">מה עשינו בפועל</h2>
              <p className="mt-6 text-white/70 text-lg md:text-xl font-medium leading-relaxed">
                כאן ייכנסו הפרטים המלאים של הקייס (Strategy → UX → Engineering → Growth). כרגע זה תבנית — ואתה תוכל
                להחליף את הטקסטים לפי כל פרויקט.
              </p>
              <ul className="mt-10 space-y-3 text-slate-700 font-semibold">
                {[
                  "Discovery: מטרות + KPI + פאנל",
                  "UX: היררכיה, נקודות אמון, מסע משתמש",
                  "Engineering: ביצועים, אינטגרציות, סקייל",
                  "Growth: SEO/CRO/Tracking",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-primary)] shrink-0" aria-hidden="true" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-[2.8rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-10 md:p-12">
              <div className="text-[11px] font-black tracking-[3px] uppercase text-white/50">Results</div>
              <h3 className="mt-3 text-2xl md:text-3xl font-black text-white tracking-tight">תוצאות</h3>

              {item.results?.length ? (
                <div className="mt-8 grid grid-cols-2 gap-3" dir="ltr">
                  {item.results.slice(0, 4).map((r) => (
                    <div key={r.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <div className="text-[11px] font-black tracking-[3px] uppercase text-white/50">{r.label}</div>
                      <div className="mt-1 text-lg font-black text-white">{r.value}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-6 text-white/60 font-medium leading-relaxed">
                  נוסיף כאן KPI/ROI ברגע שהנתונים יהיו מוכנים.
                </p>
              )}
            </aside>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
