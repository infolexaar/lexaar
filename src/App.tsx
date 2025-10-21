import Hero from "./components/Hero";
import MapSection from "./components/MapSection";
import CookieConsent from "./components/CookieConsent";
import "./App.css";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <MapSection />
      <CookieConsent />
    </div>
  );
}

export default App;
