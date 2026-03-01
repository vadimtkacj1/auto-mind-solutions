import { SERVICES } from "@/lib/constants";
import Image from "next/image";

export default function Services() {
  return (
    <section
      id="services"
      className="py-10 md:py-24 rounded-[40px]"
      style={{
        background: "linear-gradient(to bottom, #F4F9FF, #E3F0FF, #CFE6FF)",
      }}
    >
      {/* Mobile layout - original */}
      <div className="flex flex-col items-center px-5 md:hidden">
        <h2 className="text-3xl font-bold text-center mb-5 w-full" dir="rtl">
          השירותים שלנו
        </h2>

        <div className="flex flex-col gap-5 w-full items-center">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              dir="rtl"
              style={{
                width: "320px",
                borderRadius: "40px",
                padding: "0",
                boxShadow: "0px 4px 12px 0px #1E5EFF1A",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: "22px",
                overflow: "hidden",
              }}
            >
              {/* Top content area with padding */}
              <div style={{ padding: "24px 24px 0 24px", display: "flex", flexDirection: "column", gap: "22px" }}>

                {/* Icon - centered, large */}
                <div style={{ width: "120px", height: "120px", position: "relative", marginLeft: "0", marginRight: "auto"}}>
                  <Image
                    src={`/images/icon${service.id}.svg`}
                    alt={`icon ${service.id}`}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    textAlign: "center",
                    margin: 0,
                    color: "#111",
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <div style={{ textAlign: "center", direction: "rtl" }}>
                  {service.description.map((line, index) => (
                    <p
                      key={index}
                      style={{
                        fontSize: "14px",
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
                  height: "200px",
                  marginTop: "auto",
                }}
              >
                <Image
                  src={`/images/service${service.id}.svg`}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout - new */}
      <div className="hidden md:block container mx-auto px-4 max-w-7xl">
        <h2
          className="font-bold text-center mb-16"
          dir="rtl"
          style={{
            fontSize: '48px',
            lineHeight: '120%',
            letterSpacing: '-0.5px'
          }}
        >
          השירותים שלנו
        </h2>

        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              dir="rtl"
              style={{
                borderRadius: "40px",
                padding: "0",
                boxShadow: "0px 4px 12px 0px #1E5EFF1A",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                overflow: "hidden",
              }}
            >
              {/* Top content area with padding */}
              <div style={{ padding: "32px 32px 0 32px", display: "flex", flexDirection: "column", gap: "24px" }}>

                {/* Icon - centered, large */}
                <div style={{ width: "140px", height: "140px", position: "relative", marginLeft: "0", marginRight: "auto"}}>
                  <Image
                    src={`/images/icon${service.id}.svg`}
                    alt={`icon ${service.id}`}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    textAlign: "center",
                    margin: 0,
                    color: "#111",
                    lineHeight: '120%'
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <div style={{ textAlign: "center", direction: "rtl" }}>
                  {service.description.map((line, index) => (
                    <p
                      key={index}
                      style={{
                        fontSize: "16px",
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
                  height: "240px",
                  marginTop: "auto",
                }}
              >
                <Image
                  src={`/images/service${service.id}.svg`}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}