import React from "react";
import kitchenImage from "../assets/colorBlock/kitchen.svg";
import arrowIcon from "../assets/icons/arrow.svg";
import "./ColorBlock.css";

const ColorBlock: React.FC = () => {
  const features = [
    "Alege culoarea care îți spune povestea",
    "Descoperă ce se potrivește cel mai bine stilului tău",
    "Inspiră-te și apropie-te de stilul tău ideal",
    "Finisaje premium, ușor de întreținut",
    "Design modern, gata de integrat în orice locuință",
  ];

  return (
    <section className="color-block-section">
      <div className="color-block-container">
        {/* Изображение кухни */}
        <div className="color-block-image-wrapper">
          <img
            src={kitchenImage}
            alt="Bucătărie modernă cu culori personalizate"
            className="color-block-image"
          />
        </div>

        {/* Текстовый контент */}
        <div className="color-block-content">
          {/* Группа заголовков */}
          <div className="color-block-headers">
            <h2 className="color-block-main-title">
              CULORI PERSONALIZATE PENTRU BUCĂTĂRIA TA
            </h2>
            
            <h3 className="color-block-subtitle">
              FUNCTIONAL. ELEGANT. PERSONAL.
            </h3>
          </div>

          {/* Список с кругами */}
          <ul className="color-block-list">
            {features.map((feature, index) => (
              <li key={index} className="color-block-list-item">
                <div className="color-block-bullet"></div>
                <span className="color-block-text">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Кнопка */}
          <button className="color-block-button">
            <span className="color-block-button-text">Vezi culorile</span>
            <img
              src={arrowIcon}
              alt="arrow"
              className="color-block-button-arrow"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ColorBlock;
