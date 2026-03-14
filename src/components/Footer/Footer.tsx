"use client";

import type { SVGProps } from "react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { FOOTER_LEGAL_DOCS, FOOTER_LINK_GROUPS, type NavItem } from "@/lib/navigation";
import OptimizedScene from "./OptimizedScene";

function FooterLinksGroup({ title, links, isDark }: { title: string; links: NavItem[]; isDark: boolean }) {
  return (
    <div>
      <h4 className={`text-xs font-bold tracking-[3px] uppercase mb-8 ${isDark ? "text-white/40" : "text-gray-500"}`}>
        {title}
      </h4>
      <ul className="space-y-5">
        {links.map((link) => (
          <li key={`${title}-${link.href}`}>
            <Link
              href={link.href}
              className={`text-base transition-colors duration-300 ${
                isDark ? "text-white/60 hover:text-cyan-400" : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DownloadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

function LegalDocDownload({ href, label, isDark }: { href: string; label: string; isDark: boolean }) {
  return (
    <a
      href={href}
      download
      className={`group flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
        isDark
          ? "bg-white/[0.04] border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.08] text-white/70 hover:text-cyan-400"
          : "bg-gray-50 border-gray-200 hover:border-blue-400 hover:bg-gray-100 text-gray-700 hover:text-blue-600"
      }`}
    >
      <DownloadIcon className="w-4 h-4" aria-hidden="true" />
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const isDark = true; // Footer always dark on all pages

  return (
    <footer
      className="relative w-full overflow-hidden border-t border-white/5 bg-[#080a0c]/80 backdrop-blur-md z-10"
      dir="rtl"
    >
      {isDark && (
        <div className="absolute inset-0 z-0 opacity-90 pointer-events-none">
          <OptimizedScene showSphere={false} pointsAmount="low" />
        </div>
      )}

      <div className="relative z-10 w-full">
        {isDark && (
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#080a0c] to-transparent opacity-60" />
        )}

        <div className="mx-auto max-w-6xl px-6 py-20 flex flex-col items-center relative">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span
                className={`text-4xl font-extrabold tracking-tight uppercase ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                AITERRA
              </span>
            </div>
            <p
              className={`text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto font-light ${
                isDark ? "text-white/70" : "text-gray-600"
              }`}
            >
              סוכנות מובילה לאוטומציה ובינה מלאכותית.
              <br />
              מגשרים על הפער בין טכנולוגיה מורכבת לצמיחה עסקית.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-20 sm:gap-40 mb-20 text-center">
            {FOOTER_LINK_GROUPS.map((group) => (
              <FooterLinksGroup key={group.title} title={group.title} links={group.links} isDark={isDark} />
            ))}
          </div>

          <div className="w-full mb-16 px-4">
            <div className="max-w-3xl mx-auto">
              <h4
                className={`text-xs font-bold tracking-[3px] uppercase mb-6 text-center ${
                  isDark ? "text-white/40" : "text-gray-500"
                }`}
              >
                מסמכים משפטיים
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {FOOTER_LEGAL_DOCS.map((doc) => (
                  <LegalDocDownload key={doc.href} href={doc.href} label={doc.label} isDark={isDark} />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Panel */}
          <div
            className={`w-full pt-10 border-t flex flex-col items-center gap-8 ${
              isDark ? "border-white/10" : "border-gray-200"
            }`}
          >
            {/* Copyright text slightly larger */}
            <div
              className={`text-[12px] uppercase tracking-[3px] font-semibold ${
                isDark ? "text-white/30" : "text-gray-400"
              }`}
              dir="ltr"
            >
              © {currentYear} AITERRA
            </div>

            {/* Origin Badge */}
            <div
              className={`flex items-center gap-3 px-6 py-2.5 rounded-full border text-[12px] uppercase tracking-widest ${
                isDark
                  ? "bg-white/[0.04] border-white/10 text-white/50"
                  : "bg-gray-50 border-gray-200 text-gray-600"
              }`}
            >
              <span>נבנה עם</span>
              <FaHeart className="w-3 h-3 text-red-500/70 mx-0.5" />
              <span>בישראל</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
