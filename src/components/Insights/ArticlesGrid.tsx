"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { articles } from "./articlesData";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/components/ui/Breadcrumb/Breadcrumb";

interface ArticlesGridProps {
  showHeader?: boolean;
}

type Category = (typeof articles)[number]["category"];
type CategoryKey = "all" | Category;

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("he-IL", { year: "numeric", month: "2-digit", day: "2-digit" });
}

export function ArticlesGrid({ showHeader = false }: ArticlesGridProps) {
  const [active] = useState<CategoryKey>("all");

  const filtered = useMemo(() => {
    if (active === "all") return articles;
    return articles.filter((a) => a.category === active);
  }, [active]);

  return (
    <section className="px-6 py-16 md:py-24" dir="rtl">
      <div className="mx-auto max-w-6xl">
        {showHeader ? (
          <>
            <div className="text-center">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight text-slate-900 leading-[0.95]">
                הבלוג שלנו
              </h1>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 font-medium">
                תובנות, מדריכים ותוכן פרקטי על עיצוב, פיתוח וצמיחה.
              </p>
            </div>

            <Breadcrumb className="mt-8 flex justify-center">
              <BreadcrumbList dir="rtl">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">דף הבית</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>בלוג</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </>
        ) : null}

        <div className={`${showHeader ? "mt-16" : ""} grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12`}>
          {filtered.map((article) => (
            <Link key={article.slug} href={`/insights/${article.slug}`} className="group">
              <div className="relative w-full aspect-[16/9] rounded-[28px] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                  unoptimized={article.image.startsWith("data:")}
                  priority={false}
                />
              </div>

              <div className="mt-6" dir="rtl">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-[1.1] group-hover:text-[var(--color-primary)] transition-colors">
                  {article.title}
                </h2>

                <div className="mt-4 text-sm font-semibold text-slate-500" dir="ltr">
                  {formatDate(article.publishDate)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
