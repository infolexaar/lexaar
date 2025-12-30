import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import GalleryBlock from "../components/GalleryBlock";
import CTABlock from "../components/CTABlock";
import FormBlock from "../components/FormBlock";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import { useState } from "react";
import ContactModal from "../components/ContactModal";

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Маппинг категорий
  const categoryNames: { [key: string]: string } = {
    bucatarii: "Bucătării",
    paturi: "Paturi",
    "dulapuri-si-comode": "Dulapuri și Comode",
  };

  const categoryName = categoryNames[category || ""] || "Categorie";

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="overflow-x-hidden">
      <Header onOpenModal={handleOpenModal} />
      <main style={{ marginTop: "82px" }}>
        <GalleryBlock categoryName={categoryName} />
        <CTABlock />
        <FormBlock />
        <MapSection />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default CategoryPage;









