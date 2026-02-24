import React, { useState } from "react";
import ContactModal from "./ContactModal";
import arrowIcon from "../assets/icons/arrow.svg";
import { useLanguage } from "../contexts/LanguageContext";
import "./CTABlock.css";

const CTABlock: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <section className="cta-block-section" id="cta">
        <div className="cta-block-container">
          <div className="cta-block-panel">
            <p className="cta-block-text">{t.cta.text}</p>
          </div>
          <button
            className="cta-block-button"
            onClick={() => setIsModalOpen(true)}
          >
            <span>{t.cta.button}</span>
            <img src={arrowIcon} alt="arrow" className="cta-block-arrow" />
          </button>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CTABlock;

