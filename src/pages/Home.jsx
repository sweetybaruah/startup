import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AppsSection } from "../components/AppsSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { TopFeaturesSection } from "../components/TopFeaturesSection";
import { PricingSection } from "../components/PricingSection";
import { BoostSection } from "../components/BoostSection";
import { TestimonialSection } from "../components/TestimonialSection";
import { FaqSection } from "../components/FaqSection";
import { BlogSection } from "../components/BlogSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <h1>Hello World</h1>
      </main>
      <Footer />
    </div>
  );
};
