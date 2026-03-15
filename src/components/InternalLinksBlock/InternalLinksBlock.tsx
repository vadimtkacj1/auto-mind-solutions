import Link from "next/link";

export interface InternalLinkItem {
  label: string;
  href: string;
}

interface InternalLinksBlockProps {
  title: string;
  links: InternalLinkItem[];
  /** 'light' for dark bg pages (packages), 'dark' for light bg (services) */
  variant?: "light" | "dark";
  className?: string;
}

/**
 * SEO: Internal backlinks block to improve crawlability and link equity.
 */
export function InternalLinksBlock({ title, links, variant = "dark", className = "" }: InternalLinksBlockProps) {
  const isDark = variant === "light";
  return (
    <nav
      className={`py-10 md:py-14 ${className}`}
      aria-label={title}
      dir="rtl"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className={`text-xl font-bold mb-5 ${isDark ? "text-white/90" : "text-slate-900"}`}>
          {title}
        </h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`font-medium underline underline-offset-4 transition-colors ${
                  isDark ? "text-sky-300 hover:text-white" : "text-blue-600 hover:text-blue-800"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
