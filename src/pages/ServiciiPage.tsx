import React, { useState, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTABlock from "../components/CTABlock";
import FormBlock from "../components/FormBlock";
import MapSection from "../components/MapSection";
import ContactModal from "../components/ContactModal";
import { useLanguage } from "../contexts/LanguageContext";
import "./ServiciiPage.css";

// Импорт изображений для услуг
import service1Image from "../assets/service/service1.svg";
import service2Image from "../assets/service/service2.svg";
import service3Image from "../assets/service/service3.svg";
import service4Image from "../assets/service/service4.svg";
import service5Image from "../assets/service/service5.svg";

interface ServiceBlock {
  id: number;
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
  imageWidth: number;
  imageHeight: number;
  blockHeight: number;
}

const ServiciiPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const services: ServiceBlock[] = useMemo(
    () => [
      {
        id: 1,
        title: t.services.blocks.design3d.title,
        description: t.services.blocks.design3d.description,
        image: service1Image,
        imagePosition: "left" as const,
        imageWidth: 571.5,
        imageHeight: 320,
        blockHeight: 328,
      },
      {
        id: 2,
        title: t.services.blocks.planning.title,
        description: t.services.blocks.planning.description,
        image: service2Image,
        imagePosition: "right" as const,
        imageWidth: 571.5,
        imageHeight: 296,
        blockHeight: 304,
      },
      {
        id: 3,
        title: t.services.blocks.production.title,
        description: t.services.blocks.production.description,
        image: service3Image,
        imagePosition: "left" as const,
        imageWidth: 571.5,
        imageHeight: 272,
        blockHeight: 280,
      },
      {
        id: 4,
        title: t.services.blocks.delivery.title,
        description: t.services.blocks.delivery.description,
        image: service4Image,
        imagePosition: "right" as const,
        imageWidth: 571.5,
        imageHeight: 272,
        blockHeight: 280,
      },
      {
        id: 5,
        title: t.services.blocks.international.title,
        description: t.services.blocks.international.description,
        image: service5Image,
        imagePosition: "left" as const,
        imageWidth: 571.5,
        imageHeight: 344,
        blockHeight: 352,
      },
    ],
    [t]
  );

  return (
    <div className="overflow-x-hidden">
      <Header onOpenModal={handleOpenModal} />
      <main className="servicii-page">
        {/* Hero Section */}
        <section className="servicii-hero">
          <div className="servicii-hero-container">
            <h1 className="servicii-main-title">{t.services.title}</h1>
            <p className="servicii-intro-text">{t.services.intro}</p>
          </div>
        </section>

        {/* Services Blocks */}
        <section className="servicii-services-wrapper">
          {services.map((service) => (
            <div
              key={service.id}
              className={`servicii-service-block ${
                service.imagePosition === "right" ? "servicii-service-block-reverse" : ""
              }`}
            >
              <div className="servicii-service-image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="servicii-service-image"
                />
              </div>
              <div className="servicii-service-content">
                <h2 className="servicii-service-title">{service.title}</h2>
                <p className="servicii-service-description">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* CTA Banner */}
        <CTABlock />
        
        {/* Form Block */}
        <FormBlock />
        
        {/* Map Section */}
        <MapSection />
      </main>
      <Footer />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ServiciiPage;

