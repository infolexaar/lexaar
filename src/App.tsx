import Hero from "./components/Hero";
import Block2 from "./components/Block2";
import ColorBlock from "./components/ColorBlock";
import ContactSection from "./components/ContactSection";
import QualityBlock from "./components/QualityBlock";
import ReviewsBlock from "./components/ReviewsBlock";
import MapSection from "./components/MapSection";
import CookieConsent from "./components/CookieConsent";
import "./App.css";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Block2 />
      <ColorBlock />
      <ContactSection />
      <QualityBlock />
      <ReviewsBlock />
      <MapSection />
      <CookieConsent />
    </div>
  );
}

export default App;
