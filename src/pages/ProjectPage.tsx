import React, { useState } from "react";
import Header from "../components/Header";
import ProjectDetailBlock from "../components/ProjectDetailBlock";
import CTABlock from "../components/CTABlock";
import FormBlock from "../components/FormBlock";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";
import "./ProductPage.css";

const ProjectPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="product-page-main">
        <ProjectDetailBlock onOpenModal={() => setIsModalOpen(true)} />
        <CTABlock />
        <FormBlock />
        <MapSection />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ProjectPage;
