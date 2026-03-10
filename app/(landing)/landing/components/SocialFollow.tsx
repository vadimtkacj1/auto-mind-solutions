const socialLinks = [
  { name: "Instagram", icon: "/images/instagram.svg", url: "https://instagram.com" },
  { name: "Facebook", icon: "/images/facebook.svg", url: "https://facebook.com" },
  { name: "LinkedIn", icon: "/images/linkedin.svg", url: "https://linkedin.com" },
  { name: "TikTok", icon: "/images/tiktok.svg", url: "https://tiktok.com" },
];

export default function SocialFollow() {
  return (
    <section id="follow" aria-labelledby="follow-heading" className="py-20 bg-gradient-to-b">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          {/* Social Girl Image */}
          <div className="relative w-full h-80 mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/social-girl.svg"
              alt="Follow us on social media"
              className="absolute inset-0 w-full h-full"
              style={{ objectFit: "contain" }}
              loading="lazy"
              fetchPriority="low"
              decoding="async"
            />
          </div>

          {/* Text with gradient */}
          <div className="mb-8">
            <h2 id="follow-heading" className="text-2xl font-bold mb-2" dir="rtl">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                עקבו אחרינו ברשתות
              </span>{" "}
              <span>וראו איך בונים מותגים</span>
            </h2>
            <p className="text-xl font-bold text-blue-600" dir="rtl">
              שמובילים שוק
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-15 h-20 flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-110"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={social.icon}
                  alt={social.name}
                  width={68}
                  height={68}
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
