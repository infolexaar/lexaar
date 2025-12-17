import React, { useState } from "react";
import ContactModal from "./ContactModal";
import arrowIcon from "../assets/icons/arrow.svg";
import "./CTABlock.css";

const CTABlock: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="cta-block-section">
        <div className="cta-block-container">
          <div className="cta-block-panel">
            <p className="cta-block-text">
              Mobilierul perfect începe cu un pas simplu: contactează-ne! Nu
              trebuie să știi toate detaliile de la început – noi îți aducem
              idei, soluții și te ghidăm la fiecare etapă. De la proiectare până
              la montaj și garanție, ne ocupăm de tot, ca tu să ai o experiență
              ușoară și plăcută.
            </p>
          </div>
          <button
            className="cta-block-button"
            onClick={() => setIsModalOpen(true)}
          >
            <span>Solicită ofertă</span>
            <img src={arrowIcon} alt="arrow" className="cta-block-arrow" />
          </button>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CTABlock;

