import { CTA } from "./CTA";

/**
 * Contact CTA — shown on every page except home and landing.
 * Light blue background, "Contact us" message, "ליצור קשר" button → /contact
 */
export function ContactCTA() {
  return (
    <CTA
      variant="minimal"
      title="מוכנים להשאיר את המתחרים מאחור? בואו נדבר תכל'ס."
      description="השאירו פרטים והצוות שלנו יבנה לכם אסטרטגיה דיגיטלית מושחזת שמייצרת תוצאות"
      primaryCta={{ label: "צרו קשר", href: "/contact" }}
    />
  );
}
