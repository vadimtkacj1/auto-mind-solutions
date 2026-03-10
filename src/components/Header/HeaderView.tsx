"use client";

import Image from "next/image";
import Link from "next/link";
import { MAIN_NAV_ITEMS, type NavItem } from "@/lib/navigation";
import { cn } from "../ui/utils";

function isNavItemActive(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(href));
}

type HeaderNavLinkProps = {
  item: NavItem;
  pathname: string;
  className?: string;
  activeClassName: string;
  inactiveClassName: string;
};

function HeaderNavLink({ item, pathname, className, activeClassName, inactiveClassName }: HeaderNavLinkProps) {
  const isActive = isNavItemActive(pathname, item.href);

  return (
    <Link href={item.href} className={cn(className, isActive ? activeClassName : inactiveClassName)}>
      {item.label}
    </Link>
  );
}

type HeaderViewProps = {
  pathname: string;
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onCloseMobileMenu: () => void;
};

export function HeaderView({
  pathname,
  isScrolled,
  mobileMenuOpen,
  onToggleMobileMenu,
  onCloseMobileMenu,
}: HeaderViewProps) {
  return (
    <>
      <header
        dir="rtl"
        style={{
          backgroundColor: isScrolled || mobileMenuOpen ? "rgba(5, 10, 21, 0.95)" : "transparent",
        }}
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-500 ease-in-out h-20 flex items-center",
          isScrolled || mobileMenuOpen
            ? "backdrop-blur-md border-b border-white/10 shadow-2xl"
            : "border-b border-transparent shadow-none",
        )}
      >
        {/* Use LTR for layout so left/right are visually stable even inside RTL page */}
        <div
          className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full flex items-center justify-between"
          dir="ltr"
        >
          {/* LEFT: Logo */}
          <Link href="/" className="relative z-[10001] flex items-center">
            <Image
              src="/images/Aiterra.svg"
              alt="Aiterra Logo"
              width={140}
              height={36}
              priority
              className="h-8 sm:h-9 w-[100px] sm:w-[120px] md:w-[140px] object-contain"
            />
          </Link>

          {/* CENTER: Nav */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center" dir="rtl">
            {MAIN_NAV_ITEMS.map((item) => (
              <HeaderNavLink
                key={item.href}
                item={item}
                pathname={pathname}
                className="text-lg font-bold transition-colors"
                activeClassName="text-white border-b-2 border-[#3b82f6]"
                inactiveClassName="text-white/80 hover:text-white"
              />
            ))}
          </nav>

          {/* RIGHT: CTA + Mobile burger */}
          <div className="flex items-center gap-4" dir="rtl">
            <Link
              href="/#contact"
              className="hidden lg:inline-flex px-8 py-3 rounded-xl text-lg font-extrabold text-white bg-[#3b82f6] hover:bg-[#2563eb] transition-all shadow-lg shadow-blue-500/20"
            >
              קביעת שיחת אסטרטגיה
            </Link>

            <button onClick={onToggleMobileMenu} className="lg:hidden relative z-[10001] p-2" aria-label="Toggle Menu">
              <div className="w-9 space-y-2">
                <span
                  className={cn(
                    "block h-1.5 w-9 bg-white transition-all duration-300",
                    mobileMenuOpen && "rotate-45 translate-y-3.5",
                  )}
                />
                <span
                  className={cn("block h-1.5 w-9 bg-white transition-all duration-300", mobileMenuOpen && "opacity-0")}
                />
                <span
                  className={cn(
                    "block h-1.5 w-9 bg-white transition-all duration-300",
                    mobileMenuOpen && "-rotate-45 -translate-y-3.5",
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={cn(
          "fixed inset-0 bg-black/80 backdrop-blur-md lg:hidden z-[9997] transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onCloseMobileMenu}
      />

      {/* MOBILE SIDEBAR */}
      <aside
        dir="rtl"
        className={cn(
          "fixed top-0 right-0 h-full w-[320px] bg-[#050a15] z-[9998] transform transition-transform duration-300 ease-in-out lg:hidden border-l border-white/10",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="p-10 flex flex-col h-full">
          <div className="mb-16 flex items-center" dir="ltr">
            <Image
              src="/images/AiterraWH.svg"
              alt="Aiterra Logo"
              width={180}
              height={48}
              priority
              className="h-12 w-auto object-contain"
            />
          </div>

          <nav className="flex flex-col gap-10">
            {MAIN_NAV_ITEMS.map((item) => (
              <HeaderNavLink
                key={item.href}
                item={item}
                pathname={pathname}
                className="text-3xl font-bold transition-colors"
                activeClassName="text-[#3b82f6]"
                inactiveClassName="text-white/90 active:text-[#3b82f6]"
              />
            ))}

            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center justify-center px-6 py-4 rounded-2xl text-xl font-extrabold text-white bg-[#3b82f6] hover:bg-[#2563eb] transition-all shadow-lg shadow-blue-500/20"
            >
              קביעת שיחת אסטרטגיה
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
}
