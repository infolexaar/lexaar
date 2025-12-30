import React from "react";
import icon1 from "../assets/icons/blockCalitate/Icons.svg";
import icon2 from "../assets/icons/blockCalitate/Icons-1.svg";
import icon3 from "../assets/icons/blockCalitate/Vector.svg";
import icon4 from "../assets/icons/blockCalitate/Vector-1.svg";
import "./QualityBlock.css";

const QualityBlock: React.FC = () => {
  const features = [
    {
      icon: icon1,
      text: "Consultație individuală gratuită pentru fiecare client",
    },
    {
      icon: icon2,
      text: "Instalare și montaj mobilă fără cost suplimentar",
    },
    {
      icon: icon3,
      text: "Soluții personalizate pentru orice comandă",
    },
    {
      icon: icon4,
      text: "Garanție 5 ani pentru liniștea și comfortul tău",
    },
  ];

  return (
    <section className="quality-block-section">
      <div className="quality-block-container">
        <div className="quality-block-content">
          {/* Заголовок */}
          <h2 className="quality-block-title">
            Calitatea muncii noastre contează pentru fiecare client
          </h2>

          {/* Подзаголовок */}
          <p className="quality-block-subtitle">
            Ne asigurăm că fiecare proiect de mobilier este perfect, de la
            consultanță până la garanție.
          </p>

          {/* Карточки с иконками */}
          <div className="quality-block-cards">
            {features.map((feature, index) => (
              <div key={index} className="quality-block-card">
                <div className="quality-block-icon-wrapper">
                  <img
                    src={feature.icon}
                    alt={feature.text}
                    className="quality-block-icon"
                  />
                </div>
                <p className="quality-block-card-text">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityBlock;








