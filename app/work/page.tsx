import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SectionHeading from "../components/ui/SectionHeading";
import WorkGrid from "./WorkGrid";

export const metadata = {
  title: "Our Work",
  description: "Browse DevNextra's projects across healthcare, real estate, education, and more.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-40 lg:px-8 lg:pt-48">
        <SectionHeading
          eyebrow="Our work"
          titleBefore="Projects we've"
          highlight="delivered"
          subtitle="A mix of real client work and illustrative examples across our core industries."
        />
        <WorkGrid />
      </section>
      <Footer />
    </main>
  );
}