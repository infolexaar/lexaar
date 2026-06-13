import React, { useState } from "react";
import Header from "../components/Header";
import ProjectsGalleryBlock from "../components/ProjectsGalleryBlock";
import CTABlock from "../components/CTABlock";
import FormBlock from "../components/FormBlock";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";
import { useLanguage } from "../contexts/LanguageContext";

const ProjectsPage: React.FC = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main style={{ marginTop: "82px" }}>
        <ProjectsGalleryBlock pageTitle={t.projectsPage.title} />
        <CTABlock />
        <FormBlock />
        <MapSection />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ProjectsPage;
