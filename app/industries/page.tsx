import type { Metadata } from "next";
import Header from "@/src/components/Header/Header";
import { ContactCTA } from "@/src/components/CTA/ContactCTA";
import { Footer } from "@/src/components/Footer/Footer";
import { PageHero } from "@/src/components/PageHero/PageHero";

export const metadata: Metadata = {
  title: "Industries & Expertise | Frontend, Backend, SEO Development",
  description:
    "Comprehensive software development services: Frontend development with React, Vue, Angular; Backend engineering with Node.js, Python, PHP; Technical SEO optimization and digital marketing solutions.",
  keywords:
    "frontend development, backend development, SEO optimization, React development, Vue.js, Angular, Node.js, Python, PHP, web development, technical SEO, digital marketing",
  alternates: { canonical: "https://aiterra.agency/industries" },
  openGraph: {
    title: "Industries & Expertise | Frontend, Backend, SEO Development",
    description:
      "Expert software development across frontend, backend, and SEO. Building scalable web applications with modern technologies.",
    type: "website",
  },
};

const industries = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "⚛️",
    description: "Modern, responsive, and performant user interfaces built with cutting-edge technologies",
    longDescription:
      "We specialize in creating exceptional user experiences through modern frontend development. Our team builds fast, responsive, and accessible web applications that delight users and drive business results.",
    technologies: [
      { name: "React.js", desc: "Component-based architecture for scalable applications" },
      { name: "Next.js", desc: "Server-side rendering and static site generation" },
      { name: "Vue.js", desc: "Progressive framework for building user interfaces" },
      { name: "Angular", desc: "Enterprise-grade applications with TypeScript" },
      { name: "TypeScript", desc: "Type-safe JavaScript for maintainable code" },
      { name: "Tailwind CSS", desc: "Utility-first CSS framework for rapid development" },
    ],
    services: [
      "Single Page Applications (SPA)",
      "Progressive Web Apps (PWA)",
      "Responsive Web Design",
      "UI/UX Implementation",
      "Performance Optimization",
      "Cross-browser Compatibility",
      "Accessibility (WCAG) Compliance",
      "Component Library Development",
    ],
    benefits: [
      "Fast loading times and smooth interactions",
      "Mobile-first responsive design",
      "SEO-friendly architecture",
      "Maintainable and scalable codebase",
      "Modern development workflows",
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "⚙️",
    description: "Robust, scalable, and secure server-side solutions powering your applications",
    longDescription:
      "Our backend development services focus on building reliable, secure, and performant server-side systems. We architect solutions that scale with your business and handle millions of requests efficiently.",
    technologies: [
      { name: "Node.js", desc: "High-performance JavaScript runtime for scalable applications" },
      { name: "Express.js", desc: "Fast and minimalist web framework" },
      { name: "Python", desc: "Django, Flask, FastAPI for robust backend systems" },
      { name: "PHP", desc: "Laravel, Symfony for enterprise web applications" },
      { name: "PostgreSQL", desc: "Advanced relational database management" },
      { name: "MongoDB", desc: "Flexible NoSQL database for modern apps" },
      { name: "Redis", desc: "In-memory caching for high performance" },
      { name: "Docker", desc: "Containerization for consistent deployments" },
    ],
    services: [
      "RESTful API Development",
      "GraphQL API Implementation",
      "Microservices Architecture",
      "Database Design & Optimization",
      "Authentication & Authorization",
      "Third-party API Integrations",
      "Real-time WebSocket Services",
      "Cloud Infrastructure Setup",
      "DevOps & CI/CD Pipelines",
      "API Documentation",
    ],
    benefits: [
      "Scalable architecture for growth",
      "High availability and reliability",
      "Secure data handling and encryption",
      "Optimized database queries",
      "Automated testing and deployment",
    ],
  },
  {
    id: "seo",
    title: "SEO & Digital Marketing",
    icon: "📈",
    description: "Technical SEO, content strategy, and digital marketing to grow your online presence",
    longDescription:
      "We combine technical SEO expertise with strategic digital marketing to increase your visibility, drive qualified traffic, and convert visitors into customers. Our data-driven approach ensures measurable results.",
    technologies: [
      { name: "Google Search Console", desc: "Monitor and optimize search performance" },
      { name: "Google Analytics", desc: "Comprehensive website analytics and insights" },
      { name: "Schema Markup", desc: "Structured data for rich search results" },
      { name: "PageSpeed Insights", desc: "Performance optimization for better rankings" },
      { name: "Ahrefs / Semrush", desc: "Keyword research and competitor analysis" },
      { name: "Screaming Frog", desc: "Technical SEO audits and crawling" },
    ],
    services: [
      "Technical SEO Audits",
      "On-Page SEO Optimization",
      "Keyword Research & Strategy",
      "Content Strategy & Creation",
      "Link Building Campaigns",
      "Local SEO Optimization",
      "Core Web Vitals Optimization",
      "Mobile SEO",
      "International SEO (Hreflang)",
      "SEO Migration Support",
      "Conversion Rate Optimization (CRO)",
      "Google Ads Management",
      "Social Media Marketing",
    ],
    benefits: [
      "Increased organic search visibility",
      "Higher quality traffic and leads",
      "Improved conversion rates",
      "Better user experience",
      "Measurable ROI and growth",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen text-[var(--color-dark)] leading-relaxed">
      <Header />
      <main>
        <PageHero
          badge="INDUSTRIES • Expertise"
          title={
            <>
              Full-Stack Excellence. <span className="text-[var(--color-primary)]">SEO-First Approach.</span>
            </>
          }
          subtitle={
            <>
              From frontend to backend and everything in between. We build performant, scalable applications optimized
              for search engines and user experience.
            </>
          }
          primaryCta={{ label: "Schedule Strategy Call", href: "/contact" }}
          secondaryCta={{ label: "View Portfolio", href: "/portfolio" }}
        />

        {/* Industries Overview */}
        <section className="px-6 py-14 md:py-20 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Our Expertise</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                Comprehensive development services across the entire technology stack
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <a
                  key={industry.id}
                  href={`#${industry.id}`}
                  className="group rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-5xl mb-4">{industry.icon}</div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-3">{industry.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{industry.description}</p>
                  <div className="mt-4 text-[var(--color-primary)] font-bold text-sm group-hover:translate-x-2 transition-transform inline-block">
                    Learn More →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Industry Sections */}
        {industries.map((industry, index) => (
          <section
            key={industry.id}
            id={industry.id}
            className={`px-6 py-20 md:py-28 ${index % 2 === 0 ? "bg-[#f8fafc]" : "bg-white"}`}
          >
            <div className="mx-auto max-w-6xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl">{industry.icon}</span>
                <div>
                  <div className="text-xs font-black tracking-[3px] uppercase text-slate-400">Expertise</div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">{industry.title}</h2>
                </div>
              </div>

              <p className="text-xl text-slate-700 leading-relaxed mb-12 max-w-4xl">{industry.longDescription}</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Technologies */}
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
                    Technologies & Tools
                  </h3>
                  <div className="space-y-4">
                    {industry.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-[var(--color-primary)] transition-colors"
                      >
                        <h4 className="font-bold text-slate-900 mb-1">{tech.name}</h4>
                        <p className="text-sm text-slate-600">{tech.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services & Benefits */}
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
                    Services We Provide
                  </h3>
                  <ul className="space-y-3 mb-10">
                    {industry.services.map((service) => (
                      <li key={service} className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-slate-700 font-medium">{service}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {industry.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-slate-700 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Why Choose Us */}
        <section className="px-6 py-20 md:py-28 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Why Work With Aiterra?</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto">
              We combine technical excellence with business strategy to deliver solutions that drive real results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                { title: "Full-Stack Team", desc: "End-to-end development capabilities" },
                { title: "SEO-First", desc: "Built for search engines and users" },
                { title: "Modern Tech", desc: "Latest frameworks and best practices" },
                { title: "Proven Results", desc: "Track record of successful projects" },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm">
                  <h3 className="text-xl font-black mb-2">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
