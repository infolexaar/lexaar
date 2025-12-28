import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import ProductDetailBlock from "../components/ProductDetailBlock";
import CTABlock from "../components/CTABlock";
import FormBlock from "../components/FormBlock";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";

const ProductPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="overflow-x-hidden">
      <Header onOpenModal={handleOpenModal} />
      <main style={{ marginTop: "82px" }}>
        <ProductDetailBlock />
        <CTABlock />
        <FormBlock />
        <MapSection />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ProductPage;



