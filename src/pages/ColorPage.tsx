import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import ColorSelectorPage from "../components/ColorSelectorPage";
import CTABlock from "../components/CTABlock";
import FormBlock from "../components/FormBlock";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";

const ColorPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="overflow-x-hidden">
      <Header onOpenModal={handleOpenModal} />
      <main>
        <ColorSelectorPage />
      </main>
      <CTABlock />
      <FormBlock />
      <MapSection />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ColorPage;



