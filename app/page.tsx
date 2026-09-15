import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import StatsBar from "./components/sections/StatsBar";
import ServicesGrid from "./components/sections/ServicesGrid";
import TechStack from "./components/sections/TechStack";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import IndustriesWeServe from "./components/sections/IndustriesWeServe";
import ProcessSteps from "./components/sections/ProcessSteps";
import HireDevelopers from "./components/sections/HireDevelopers";
import CTASection from "./components/sections/CTASection";
import SectionDivider from "./components/sections/SectionDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <StatsBar />
      <SectionDivider from="#F3F7F3" to="#FFFFFF" />
      <ServicesGrid />
      <TechStack />
      <WhyChooseUs />
      <FeaturedProjects />
      <IndustriesWeServe />
      <ProcessSteps />
      <HireDevelopers />
      <SectionDivider from="#F3F7F3" to="#101814" />
      <CTASection />
      <Footer />
    </main>
  );
}