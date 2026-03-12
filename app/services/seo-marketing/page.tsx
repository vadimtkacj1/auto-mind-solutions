import type { Metadata } from "next";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";
import { PageHero } from "@/src/components/PageHero/PageHero";
import { CTA } from "@/src/components/CTA/CTA";
import { FAQ } from "@/src/components/FAQ/FAQ";

export const metadata: Metadata = {
  title: "SEO Services: Reach the Top Spot with Organic SEO | Aiterra",
  description:
    "Professional SEO services that deliver results. Combine technical SEO expertise with development knowledge for organic rankings that drive real business growth.",
  alternates: { canonical: "https://aiterra.agency/services/seo-marketing" },
};

export default function SeoMarketingPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfd] text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main className="bg-[#fcfcfd]">
        <PageHero
          badge="SEO SERVICES • Aiterra"
          title={
            <>
              Reach the Top Spot with{" "}
              <span className="text-[var(--color-primary)]">Organic SEO</span>
            </>
          }
          subtitle={
            <>
              In an era where everyone searches for everything online, having a beautiful website is simply not enough.
              If your customers can't find you when they type in your service, you're leaving money on the table.
              At Aiterra's SEO department, we don't settle for pretty rankings – we focus on your bottom line.
              A proper organic SEO process turns your website from a passive asset into a 24/7 lead machine.
            </>
          }
          primaryCta={{ label: "Get Started", href: "/contact" }}
          secondaryCta={{ label: "All Services", href: "/#services" }}
        />

        {/* Why Code Matters Section */}
        <section className="px-6 py-14 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8">
              Why Do You Need an SEO Company That Also Understands Code?
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-4">
              <p>
                Many companies offer SEO services, but few know how to connect the content with the technological
                infrastructure your site sits on. Today's Google is smarter than ever: it checks load times, user
                experience, and the cleanliness of your code. After all, website building and SEO are two sides of
                the same coin.
              </p>
              <p className="text-xl font-semibold text-slate-900">
                As an SEO company that is also a development agency, we give you an unfair advantage over your competitors.
              </p>
              <p>
                When we perform Google SEO, we combine deep Technical SEO at the server level with the creation of
                authoritative, high-quality content. The result? Google business promotion that is stable, secure, and
                simply rewarded by Google with top rankings for everything related to internet SEO.
              </p>
            </div>
          </div>
        </section>

        {/* SEO Package Section */}
        <section className="px-6 py-14 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 text-center">
              What Does Our SEO Package Include?
            </h2>
            <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              Organic Google SEO is a marathon, and we build the perfect training plan for your search engine optimization:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: "Keyword Research and Strategy",
                  desc: "We don't guess. We analyze exactly what your customers are searching for and their Search Intent, building an SEO strategy that targets the most profitable phrases for your industry.",
                  gradient: "from-blue-600 to-cyan-500",
                },
                {
                  title: "Technical Optimization (On-Page SEO)",
                  desc: "Improving site speed, organizing meta tags, making content accessible to Google's crawlers, and structuring the site hierarchy (Sitemap) – so Google can crawl and index you quickly.",
                  gradient: "from-purple-600 to-pink-500",
                },
                {
                  title: "Building Authority (Off-Page SEO)",
                  desc: "Building a strong, high-quality link profile from leading websites that signals to Google you are the authority in your field.",
                  gradient: "from-green-600 to-emerald-500",
                },
                {
                  title: "Local SEO",
                  desc: "Do you have a business that provides services in a specific area? We will make sure you dominate local results and Google Maps to attract customers geographically close to you.",
                  gradient: "from-orange-600 to-amber-500",
                },
              ].map((item) => (
                <div key={item.title} className="p-8 border border-slate-200 rounded-2xl hover:border-slate-300 transition-colors">
                  <h3 className={`text-2xl font-black mb-4 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="px-6 py-14 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="border-2 border-slate-200 rounded-[2.5rem] p-10 md:p-16 text-center">
              <h3 className="text-3xl md:text-5xl font-black mb-6 text-slate-900">A No-Nonsense SEO Company</h3>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-slate-700">
                The SEO field is full of empty promises and complicated technical jargon. Our approach at Aiterra is
                different: <strong className="text-slate-900">full transparency</strong>. As an SEO company that respects its clients, we don't hide data.
              </p>
              <p className="text-lg text-slate-600">
                You will receive clear reports from us showing not just which keywords moved up in the rankings, but how much
                quality traffic and how many new leads the organic SEO process generated for you each month.
              </p>
            </div>
          </div>
        </section>

        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
