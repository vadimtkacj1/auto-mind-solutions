import { CTA } from "./CTA";

/**
 * Contact CTA — shown on every page except home and landing.
 * Light blue background, "Contact us" message, "ליצור קשר" button → /contact
 */
export function ContactCTA() {
  return (
    <CTA
      variant="minimal"
      title="צרו איתנו קשר — נשמח לעזור ולענות על כל שאלה"
      primaryCta={{ label: "ליצור קשר", href: "/contact" }}
    />
  );
}
