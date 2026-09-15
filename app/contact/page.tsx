import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SectionHeading from "../components/ui/SectionHeading";
import ContactForm from "../components/sections/ContactForm";
import ContactInfo from "../components/sections/ContactInfo";
import CallBookingCard from "../components/sections/CallBookingCard";
import FaqAccordion from "../components/sections/FaqAccordion";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with DevNextra to discuss your next web, mobile, or software project.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-40 lg:px-8 lg:pt-48">
        <SectionHeading
          eyebrow="Contact us"
          titleBefore="Let's talk about your"
          highlight="project"
        />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <ContactInfo />
            <CallBookingCard />
          </div>
          <ContactForm />
        </div>
      </section>

      <FaqAccordion />
      <Footer />
    </main>
  );
}