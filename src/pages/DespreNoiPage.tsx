import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReviewsBlock from "../components/ReviewsBlock";
import CTABlock from "../components/CTABlock";
import FormBlock from "../components/FormBlock";
import MapSection from "../components/MapSection";
import ContactModal from "../components/ContactModal";
import { useLanguage } from "../contexts/LanguageContext";
import "./DespreNoiPage.css";

// Импорт изображения для блока "Misiunea și valorile noastre"
import missionImage from "../assets/desprenoi/desprenoi.jpg";

interface Advantage {
  title: string;
  description: string;
}

const DespreNoiPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const advantages: Advantage[] = [
    {
      title: t.about.advantages.consultation.title,
      description: t.about.advantages.consultation.description,
    },
    {
      title: t.about.advantages.measurements.title,
      description: t.about.advantages.measurements.description,
    },
    {
      title: t.about.advantages.manufacturing.title,
      description: t.about.advantages.manufacturing.description,
    },
    {
      title: t.about.advantages.delivery.title,
      description: t.about.advantages.delivery.description,
    },
    {
      title: t.about.advantages.warranty.title,
      description: t.about.advantages.warranty.description,
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <Header onOpenModal={handleOpenModal} />
      <main className="despre-noi-page">
        {/* First Block - Who We Are */}
        <section className="despre-noi-intro">
          <div className="despre-noi-intro-container">
            <h1 className="despre-noi-intro-title">{t.about.whoWeAre.title}</h1>
            <p className="despre-noi-intro-text">{t.about.whoWeAre.description}</p>
          </div>
        </section>

        {/* Second Block - Mission and Values + Advantages */}
        <section className="despre-noi-main">
          <div className="despre-noi-main-container">
            {/* Mission and Values Section */}
            <div className="despre-noi-mission-section">
              <div className="despre-noi-mission-image-wrapper">
                <img
                  src={missionImage} loading="lazy" decoding="async"
                  alt="Mission"
                  className="despre-noi-mission-image"
                />
              </div>
              <div className="despre-noi-mission-content">
                <h2 className="despre-noi-mission-title">
                  {t.about.mission.title}
                </h2>
                <div className="despre-noi-mission-text">
                  {t.about.mission.description.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Advantages Section */}
            <div className="despre-noi-advantages-section">
              <h2 className="despre-noi-advantages-title">
                {t.about.advantages.title}
              </h2>
              <div className="despre-noi-advantages-list">
                {advantages.map((advantage, index) => (
                  <div key={index} className="despre-noi-advantage-item">
                    <h3 className="despre-noi-advantage-title">
                      {advantage.title}
                    </h3>
                    <p className="despre-noi-advantage-description">
                      {advantage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Block */}
        <ReviewsBlock />

        {/* CTA Block */}
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

export default DespreNoiPage;

