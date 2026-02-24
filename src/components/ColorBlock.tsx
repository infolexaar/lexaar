import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import kitchenImage from "../assets/colorBlock/kitchen.svg";
import blueKitchen from "../assets/colorBlock/blue.svg";
import creamKitchen from "../assets/colorBlock/cream.svg";
import greenKitchen from "../assets/colorBlock/green.svg";
import greyKitchen from "../assets/colorBlock/grey.svg";
import redKitchen from "../assets/colorBlock/red.svg";
import whiteKitchen from "../assets/colorBlock/white.svg";
import arrowIcon from "../assets/icons/arrow.svg";
import { useLanguage } from "../contexts/LanguageContext";
import "./ColorBlock.css";

const ColorBlock: React.FC = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const autoPlayIntervalRef = useRef<number | null>(null);
  const features = [
    t.home.colorBlock.feature1,
    t.home.colorBlock.feature2,
    t.home.colorBlock.feature3,
    t.home.colorBlock.feature4,
    t.home.colorBlock.feature5,
  ];

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

  return (
    <section className="color-block-section" id="culori">
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
              {t.home.colorBlock.mainTitle}
            </h2>

            <h3 className="color-block-subtitle">
              {t.home.colorBlock.subtitle}
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
          <Link
            to="/colors"
            className="color-block-button"
            onClick={() => {
              window.scrollTo(0, 0);
              document.documentElement.scrollTop = 0;
              document.body.scrollTop = 0;
            }}
          >
            <span className="color-block-button-text">{t.home.colorBlock.buttonText}</span>
            <img
              src={arrowIcon}
              alt="arrow"
              className="color-block-button-arrow"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ColorBlock;
