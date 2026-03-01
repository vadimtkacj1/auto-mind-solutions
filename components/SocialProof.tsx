import { SOCIAL_LINKS } from "@/lib/constants";

export default function SocialProof() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">
          עקבו אחרינו ברשתות
        </h2>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              className="text-gray-700 hover:text-gray-900 transition text-lg"
              aria-label={social.label}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
