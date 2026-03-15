import type { Metadata } from "next";
import { NotFoundContent } from "@/src/components/NotFoundContent/NotFoundContent";

export const metadata: Metadata = {
  title: "404 - דף לא נמצא",
  description: "הדף שחיפשת לא קיים. חזרה לעמוד הראשי או צור קשר.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundContent />;
}
