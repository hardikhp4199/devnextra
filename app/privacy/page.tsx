import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SectionHeading from "../components/ui/SectionHeading";

export const metadata = {
  title: "Privacy Policy",
  description: "How DevNextra collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="mx-auto max-w-3xl px-6 pb-20 pt-40 lg:px-8 lg:pt-48">
        <SectionHeading eyebrow="Legal" titleBefore="Privacy" highlight="policy" />

        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-gray-700">
          <p className="text-xs text-gray-400">Last updated: 13/09/2026</p>

          <div>
            <h2 className="text-lg font-bold text-brand-dark">1. Who we are</h2>
            <p className="mt-2">
              DevNextra ("we", "us", "our") is a software development company based in
              London, United Kingdom. This policy explains how we collect, use, and
              protect any personal information you share with us through this website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-dark">2. What we collect</h2>
            <p className="mt-2">When you use our contact form, we collect:</p>
            <ul className="mt-2 list-disc pl-5">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Any message or project details you choose to share</li>
            </ul>
            <p className="mt-2">
              We do not currently use cookies, analytics tracking, or collect any other
              personal data through this website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-dark">3. How we use your information</h2>
            <p className="mt-2">We use the information you submit solely to:</p>
            <ul className="mt-2 list-disc pl-5">
              <li>Respond to your enquiry</li>
              <li>Discuss and scope potential projects</li>
              <li>Maintain records of business communication</li>
            </ul>
            <p className="mt-2">
              We do not sell, rent, or share your information with third parties for
              marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-dark">4. Legal basis for processing</h2>
            <p className="mt-2">
              We process your information based on <strong>legitimate interest</strong> —
              responding to enquiries you have voluntarily submitted to us — in
              accordance with the UK General Data Protection Regulation (UK GDPR).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-dark">5. How long we keep your data</h2>
            <p className="mt-2">
              We retain enquiry information for as long as necessary to respond to you
              and, where a project proceeds, for the duration of our business
              relationship plus any period required for legal or accounting purposes.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-dark">6. Your rights</h2>
            <p className="mt-2">Under UK GDPR, you have the right to:</p>
            <ul className="mt-2 list-disc pl-5">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to how your data is processed</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:hello@devnextra.com" className="font-medium text-brand-lime-dark">
                hello@devnextra.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-dark">7. Third-party services</h2>
            <p className="mt-2">
              Messages submitted through our contact form are processed and delivered
              via Resend, our transactional email provider. Resend processes this data
              solely to deliver the email and does not use it for any other purpose.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-dark">8. Changes to this policy</h2>
            <p className="mt-2">
              We may update this policy as our website and services evolve. Any changes
              will be posted on this page with an updated revision date.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-dark">9. Contact us</h2>
            <p className="mt-2">
              If you have any questions about this privacy policy or how we handle your
              data, contact us at{" "}
              <a href="mailto:hello@devnextra.com" className="font-medium text-brand-lime-dark">
                hello@devnextra.com
              </a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}