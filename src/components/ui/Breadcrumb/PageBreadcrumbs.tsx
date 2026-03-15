import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./Breadcrumb";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  variant?: "light" | "dark";
}

export function PageBreadcrumbs({ items, className = "", variant = "light" }: PageBreadcrumbsProps) {
  const textColor = variant === "dark" ? "text-white/70 hover:text-white" : "text-slate-600 hover:text-slate-900";
  const activeColor = variant === "dark" ? "text-white" : "text-slate-900";

  // Build breadcrumb list for schema
  const breadcrumbList = [
    { name: "דף הבית", url: "https://aiterra.agency/" },
    ...items.map((item) => ({
      name: item.label,
      url: item.href ? `https://aiterra.agency${item.href}` : undefined,
    })),
  ];

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbList.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      ...(crumb.url ? { item: crumb.url } : {}),
    })),
  };

  return (
    <div className={`w-full ${className}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-6xl px-6">
        <Breadcrumb>
          <BreadcrumbList dir="rtl" className={textColor}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild className={variant === "dark" ? "hover:text-white" : ""}>
                <Link href="/">דף הבית</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {items.map((item, index) => (
              <span key={index} className="contents">
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {item.href ? (
                    <BreadcrumbLink asChild className={variant === "dark" ? "hover:text-white" : ""}>
                      <Link href={item.href}>{item.label}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className={activeColor}>{item.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </span>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
