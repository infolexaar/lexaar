import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import GalleryBlock from "../components/GalleryBlock";
import CTABlock from "../components/CTABlock";
import FormBlock from "../components/FormBlock";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";
import { useLanguage } from "../contexts/LanguageContext";

const CategoryPage: React.FC = () => {
  const { t } = useLanguage();
  const { category } = useParams<{ category: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categoryNames: { [key: string]: string } = {
    bucatarii: t.home.block2.bucatarii,
    paturi: t.home.block2.paturi,
    "dulapuri-si-comode": t.home.block2.dulapuriSiComode,
  };

  const categoryName = categoryNames[category || ""] || t.categoryPage.defaultCategoryName;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="overflow-x-hidden">
      <Header onOpenModal={handleOpenModal} />
      <main style={{ marginTop: "82px" }}>
        <GalleryBlock categoryName={categoryName} categorySlug={category || ""} />
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










