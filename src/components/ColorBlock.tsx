import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import kitchenImage from "../assets/colorBlock/kitchen.svg";
import blueKitchen from "../assets/colorBlock/blue.svg";
import creamKitchen from "../assets/colorBlock/cream.svg";
import greenKitchen from "../assets/colorBlock/green.svg";
import greyKitchen from "../assets/colorBlock/grey.svg";
import redKitchen from "../assets/colorBlock/red.svg";
import whiteKitchen from "../assets/colorBlock/white.svg";
import arrowIcon from "../assets/icons/arrow.svg";
import "./ColorBlock.css";

const ColorBlock: React.FC = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const autoPlayIntervalRef = useRef<number | null>(null);

  // Массив изображений кухонь
  const kitchenImages = [
    redKitchen,
    blueKitchen,
    whiteKitchen,
    creamKitchen,
    greenKitchen,
    greyKitchen,
    kitchenImage,
  ];

  // Автоматическая смена изображений
  useEffect(() => {
    autoPlayIntervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % kitchenImages.length);
    }, 1500); // Интервал 1.5 секунды между сменами

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [kitchenImages.length]);

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
            key={currentImageIndex}
            src={kitchenImages[currentImageIndex]}
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
          <button
            className="color-block-button"
            onClick={() => navigate("/colors")}
          >
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
