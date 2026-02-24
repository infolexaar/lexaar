import React, { useEffect } from "react";
import icon1 from "../assets/icons/blockCalitate/Icons.svg";
import icon2 from "../assets/icons/blockCalitate/Icons-1.svg";
import icon3 from "../assets/icons/blockCalitate/Vector.svg";
import icon4 from "../assets/icons/blockCalitate/Vector-1.svg";
import { useLanguage } from "../contexts/LanguageContext";
import "./QualityBlock.css";

const QualityBlock: React.FC = () => {
  const { t } = useLanguage();
  useEffect(() => {
    const checkMediaQuery = () => {
      window.matchMedia("(max-width: 777px) and (min-width: 768px)");
    };
    checkMediaQuery();
    window.addEventListener("resize", checkMediaQuery);
    return () => window.removeEventListener("resize", checkMediaQuery);
  }, []);
  const features = [
    { icon: icon1, text: t.home.qualityBlock.item1 },
    { icon: icon2, text: t.home.qualityBlock.item2 },
    { icon: icon3, text: t.home.qualityBlock.item3 },
    { icon: icon4, text: t.home.qualityBlock.item4 },
  ];

  return (
    <section className="quality-block-section" id="calitate">
      <div className="quality-block-container">
        <div className="quality-block-content">
          <h2 className="quality-block-title">
            {t.home.qualityBlock.title}
          </h2>

          <p className="quality-block-subtitle">
            {t.home.qualityBlock.subtitle}
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









