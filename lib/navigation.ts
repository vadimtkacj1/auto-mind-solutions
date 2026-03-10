export type NavItem = {
  label: string;
  href: string;
};

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: "ראשי", href: "/" },
  { label: "שירותים", href: "/services" },
  { label: "תחומי התמחות", href: "/industries" },
  { label: "תיק עבודות", href: "/portfolio" },
  { label: "תהליך העבודה", href: "/process" },
  { label: "מאמרים", href: "/insights" },
  { label: "יכולות", href: "/capabilities" },
];

export const FOOTER_LINK_GROUPS: Array<{ title: string; links: NavItem[] }> = [
  {
    title: "חברה",
    links: [
      { label: "שירותים", href: "/services" },
      { label: "פורטפוליו", href: "/portfolio" },
      { label: "תהליך", href: "/process" },
      { label: "תובנות", href: "/insights" },
    ],
  },
  {
    title: "משפטי",
    links: [
      { label: "תנאי שימוש", href: "/terms" },
      { label: "פרטיות", href: "/privacy" },
      { label: "Capabilities Deck", href: "/capabilities" },
    ],
  },
];

export const FOOTER_LEGAL_DOCS: Array<{ label: string; href: string }> = [
  { label: "הצהרת נגישות", href: "/documents/accessibility-statement.pdf" },
  { label: "מדיניות פרטיות", href: "/documents/privacy-policy.pdf" },
  { label: "תנאי שימוש", href: "/documents/terms-of-use.pdf" },
];
