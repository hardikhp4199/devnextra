import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SectionHeading from "../components/ui/SectionHeading";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using DevNextra's website and services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="mx-auto max-w-3xl px-6 pb-20 pt-40 lg:px-8 lg:pt-48">
        <SectionHeading eyebrow="Legal" titleBefore="Terms &" highlight="conditions" />

        <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-gray-700">
          <p className="text-xs text-gray-400">Last updated: [insert date]</p>

          <div>
            <h2 className="text-lg font-bold text-brand-dark">1. Introduction</h2>
            <p className="mt-2">
              These terms govern your use of the DevNextra website
              (devnextra.com) and any enquiries or services arranged through
              it. By using this website, you agree to these terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-dark">2. Website use</h2>
            <p className="mt-2">
              This website is provided for informational purposes to
              showcase DevNextra's services and portfolio. You may not use
              this website in any way that causes damage to it or impairs
              its availability.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-dark">3. Intellectual property</h2>
            <p className="mt-2">
              All content on this website — including text, graphics, logos,
              and code examples — is the property of DevNextra unless
              otherwise stated, and may not be reproduced without
              permission.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-dark">4. Project engagements</h2>
            <p className="mt-2">
              These website terms do not constitute a service agreement.
              Any actual development project is governed by a separate,
              signed proposal or contract agreed between DevNextra and the
              client, which will set out scope, pricing, timelines, and
              deliverables specific to that engagement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-dark">5. Limitation of liability</h2>
            <p className="mt-2">
              DevNextra is not liable for any indirect or consequential loss
              arising from use of this website. Information on this site is
              provided in good faith but without warranty of completeness or
              accuracy.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-dark">6. Third-party links</h2>
            <p className="mt-2">
              This website may link to third-party sites (e.g. social media
              profiles). DevNextra is not responsible for the content or
              practices of any linked external site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-dark">7. Governing law</h2>
            <p className="mt-2">
              These terms are governed by the laws of England and Wales.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-dark">8. Contact</h2>
            <p className="mt-2">
              Questions about these terms can be sent to{" "}
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