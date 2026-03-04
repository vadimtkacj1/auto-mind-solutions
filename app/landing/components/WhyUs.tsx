import Image from "next/image";
import { WHY_US_PILLARS } from "@/lib/constants";

export default function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="rounded-[40px] pt-12 md:pt-16 pb-0 container mx-auto overflow-hidden"
      style={{
        maxWidth: "600px",
        background: 'linear-gradient(180deg, #F4F9FF 0%, #E3F0FF 50%, #CFE6FF 100%)'
      }}
    >
      <div className="px-4 max-w-6xl">
        <h2
          id="why-us-heading"
          className="font-bold text-center mb-12"
          dir="rtl"
          style={{
            fontSize: '36px',
            lineHeight: '120%',
            letterSpacing: '-0.5px'
          }}
        >
          למה לבחור בנו?
        </h2>

        <div className="flex justify-center">
          <div className="relative flex flex-col items-center w-full max-w-4xl">
            {/* Icons and text */}
            <div className="flex flex-col gap-4 w-full pb-6 px-4 md:px-6">
              {WHY_US_PILLARS.map((pillar, index) => (
                <WhyUsItem key={pillar.id} pillar={pillar} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* People image at the bottom - full width */}
      <PeopleImage />
    </section>
  );
}

function WhyUsItem({ pillar, index }: { pillar: any; index: number }) {
  return (
    <div
      className="flex items-center justify-start gap-4 pr-2 md:pr-6"
      dir="rtl"
    >
      {/* Icon on the right (for RTL) */}
      <div className="flex-shrink-0">
        <Image
          src={pillar.icon}
          alt={pillar.title}
          width={120}
          height={120}
          sizes="(max-width: 768px) 64px, 80px"
          className="w-16 h-16 md:w-20 md:h-20"
          loading="lazy"
          fetchPriority="low"
        />
      </div>
      {/* Text on the left (for RTL) */}
      <div className="text-right flex-1">
        <h3
          className="font-bold mb-1.5"
          style={{
            fontSize: '28px',
            lineHeight: '120%',
            letterSpacing: '-0.3px',
            color: '#1A1A1A'
          }}
        >
          {pillar.title}
        </h3>
        <p
          style={{
            fontSize: '14px',
            lineHeight: '150%',
            color: '#666666'
          }}
        >
          {pillar.description}
        </p>
      </div>
    </div>
  );
}

function PeopleImage() {

  return (
    <div
      className="w-full mt-8 relative"
      style={{ aspectRatio: '16/9' }}
    >
      <Image
        src="/images/Vector.svg"
        alt="vector"
        fill
        sizes="(max-width: 640px) 100vw, 600px"
        className="z-0"
        loading="lazy"
        fetchPriority="low"
      />
      <Image
        src="/images/people.png"
        alt="Team working together"
        fill
        sizes="(max-width: 640px) 100vw, 600px"
        style={{
          objectFit: 'cover',
          objectPosition: 'center center'
        }}
        className="z-10"
        loading="lazy"
        fetchPriority="low"
        quality={80}
      />
    </div>
  );
}
