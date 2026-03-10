import LeadForm from "./LeadForm";

export default function LeadFormSection() {
  return (
    <section id="contact" aria-label="Contact Form" className="py-6 bg-white">
      <div className="container mx-auto px-4 max-w-md">
        <LeadForm />
      </div>
    </section>
  );
}
