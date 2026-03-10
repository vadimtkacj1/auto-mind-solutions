import { SERVICES } from "@/lib/constants";
import Image from "next/image";
import type { Service } from "@/types";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-10 md:py-24 rounded-[40px] overflow-x-hidden"
      style={{
        background: "linear-gradient(to bottom, #F4F9FF, #E3F0FF, #CFE6FF)",
      }}
    >
      {/* Mobile layout - original */}
      <div className="flex flex-col items-center md:hidden">
        <h2 id="services-heading" className="text-3xl font-bold text-center mb-5 w-full" dir="rtl">
          השירותים שלנו
        </h2>

        <div className="flex flex-col gap-5 w-full items-center max-w-full">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} isMobile />
          ))}
        </div>
      </div>

      {/* Desktop layout - new */}
      <div className="hidden md:block container mx-auto px-4 max-w-7xl">
        <h2
          id="services-heading"
          className="font-bold text-center mb-16"
          dir="rtl"
          style={{
            fontSize: "48px",
            lineHeight: "120%",
            letterSpacing: "-0.5px",
          }}
        >
          השירותים שלנו
        </h2>

        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, isMobile = false }: { service: Service; isMobile?: boolean }) {
  const serviceImageMap: Record<number, string> = {
    1: "/images/service1.jpg",
    2: "/images/service2.jpg",
    3: "/images/service3.jpg",
    4: "/images/service4.jpg",
  };

  return (
    <div
      dir="rtl"
      style={{
        width: isMobile ? "100%" : "auto",
        maxWidth: isMobile ? "100%" : "none",
        borderRadius: "40px",
        padding: "0",
        boxShadow: "0px 4px 12px 0px #1E5EFF1A",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: isMobile ? "16px" : "24px",
        overflow: "hidden",
      }}
    >
      {/* Top content area with padding */}
      <div
        style={{
          padding: isMobile ? "24px 24px 0 24px" : "32px 32px 0 32px",
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "16px" : "24px",
        }}
      >
        {/* Icon - left aligned */}
        <div
          style={{
            position: "relative",
            marginLeft: "0",
            marginRight: "auto",
            marginBottom: "10px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/icon${service.id}.svg`}
            alt={`icon ${service.id}`}
            width={68}
            height={68}
            style={{ objectFit: "contain" }}
            loading="lazy"
            fetchPriority="low"
            decoding="async"
          />
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "22px",
            fontWeight: "700",
            textAlign: "center",
            margin: 0,
            color: "#111",
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <div style={{ textAlign: "center", direction: "rtl" }}>
          {service.description.map((line: string, idx: number) => (
            <p
              key={idx}
              style={{
                fontSize: isMobile ? "14px" : "16px",
                color: "#6B7280",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Service screenshot image — full width, no padding, flush to bottom */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: isMobile ? "150px" : "180px",
          marginTop: "auto",
        }}
      >
        <Image
          src={serviceImageMap[service.id]}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 90vw, 600px"
          style={{ objectFit: "cover", objectPosition: "top" }}
          loading="lazy"
          fetchPriority="low"
          quality={70}
          unoptimized
        />
      </div>
    </div>
  );
}
