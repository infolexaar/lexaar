import React from "react";
import Hero from "../components/Hero";
import Block2 from "../components/Block2";
import ColorBlock from "../components/ColorBlock";
import ContactSection from "../components/ContactSection";
import QualityBlock from "../components/QualityBlock";
import ReviewsBlock from "../components/ReviewsBlock";
import ProjectsBlock from "../components/ProjectsBlock";
import ProcessBlock from "../components/ProcessBlock";
import CTABlock from "../components/CTABlock";
import FormBlock from "../components/FormBlock";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import CookieConsent from "../components/CookieConsent";

const HomePage: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Block2 />
      <ColorBlock />
      <ContactSection />
      <QualityBlock />
      <ReviewsBlock />
      <ProjectsBlock />
      <ProcessBlock />
      <CTABlock />
      <FormBlock />
      <MapSection />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default HomePage;









