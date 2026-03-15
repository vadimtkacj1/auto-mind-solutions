import { memo } from "react";
import Link from "next/link";

type ServiceCTAProps = {
  title: string;
  buttonText?: string;
};

export const ServiceCTA = memo(function ServiceCTA({
  title,
  buttonText = "השאירו פרטים",
}: ServiceCTAProps) {
  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #e8f4fc 0%, #d1e8f5 100%)" }}
      dir="rtl"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight mb-10">
          {title}
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold px-10 py-4 rounded-lg transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
});
