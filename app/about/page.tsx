import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AboutHero from "../components/sections/AboutHero";
import TeamGrid from "../components/sections/TeamGrid";
import MissionValues from "../components/sections/MissionValues";
import Milestones from "../components/sections/Milestones";
import FounderQuote from "../components/sections/FounderQuote";
import CTASection from "../components/sections/CTASection";

export const metadata = {
  title: "About Us",
  description: "Meet the team behind DevNextra and learn about our mission, values, and journey.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <TeamGrid />
      <MissionValues />
      <Milestones />
      <FounderQuote />
      <CTASection />
      <Footer />
    </main>
  );
}