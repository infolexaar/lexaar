import React, { useState } from "react";
import ContactModal from "./ContactModal";
import "./ColorSelectorPage.css";

// Импорт изображений кухонь для каждого цвета
import color1Image from "../assets/colorBlock/all-colors/color-4A2223.svg";
import color2Image from "../assets/colorBlock/all-colors/color-132436.svg";
import color3Image from "../assets/colorBlock/all-colors/color-FFFFFF.svg";
import color4Image from "../assets/colorBlock/all-colors/color-BE9D94.svg";
import color5Image from "../assets/colorBlock/all-colors/color-5E5E5C.svg";
import color6Image from "../assets/colorBlock/all-colors/color-BE9D94-2.svg";
import color7Image from "../assets/colorBlock/all-colors/color-424443.svg";
import color8Image from "../assets/colorBlock/all-colors/color-A29A83.svg";
import color9Image from "../assets/colorBlock/all-colors/color-6D6D6D.svg";
import color10Image from "../assets/colorBlock/all-colors/color-134046.svg";
import color11Image from "../assets/colorBlock/all-colors/color-6D6D6D.svg";
import color12Image from "../assets/colorBlock/all-colors/color-47544D.svg";

interface ColorOption {
  id: string;
  name: string;
  color: string;
  image: string;
  code?: string;
}

const ColorSelectorPage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("1");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Цветовые опции с изображениями
  const colorOptions: ColorOption[] = [
    {
      id: "1",
      name: "Color 1",
      color: "#4A2223",
      image: color1Image,
      code: "AGT 3026",
    },
    {
      id: "2",
      name: "Color 2",
      color: "#132436",
      image: color2Image,
      code: "AGT 3011",
    },
    {
      id: "3",
      name: "Color 3",
      color: "#FFFFFF",
      image: color3Image,
      code: "AGT 3028",
    },
    {
      id: "4",
      name: "Color 4",
      color: "#BE9D94",
      image: color4Image,
      code: "AGT 3016",
    },
    {
      id: "5",
      name: "Color 5",
      color: "#8B9690",
      image: color5Image,
      code: "AGT 3015",
    },
    {
      id: "6",
      name: "Color 6",
      color: "#C7C0AE",
      image: color6Image,
      code: "AGT 3019",
    },
    {
      id: "7",
      name: "Color 7",
      color: "#424443",
      image: color7Image,
      code: "AGT 3014",
    },
    {
      id: "8",
      name: "Color 8",
      color: "#A29A83",
      image: color8Image,
      code: "AGT 3020",
    },
    {
      id: "9",
      name: "Color 9",
      color: "#6D6D6D",
      image: color9Image,
      code: "AGT 3022",
    },
    {
      id: "10",
      name: "Color 10",
      color: "#134046",
      image: color10Image,
      code: "AGT 3029",
    },
    {
      id: "11",
      name: "Color 11",
      color: "#6D6D6D",
      image: color11Image,
      code: "AGT 3024",
    },
    {
      id: "12",
      name: "Color 12",
      color: "#47544D",
      image: color12Image,
      code: "AGT 3027",
    },
  ];

  const selectedColorData = colorOptions.find((c) => c.id === selectedColor) || colorOptions[0];
  const currentImage = selectedColorData.image;

  return (
    <>
      <div className="color-selector-page">
        <div className="color-selector-container">
          {/* Заголовок */}
          <div className="color-selector-header">
            <h1 className="color-selector-title">
              Culori personalizate pentru bucătăria ta
            </h1>
          </div>

          {/* Основной контент */}
          <div className="color-selector-main">
            {/* Левая часть - изображение кухни */}
            <div className="color-selector-image-section">
              <div className="color-selector-image-wrapper">
                <img
                  key={selectedColor}
                  src={currentImage}
                  alt={`Bucătărie în culoarea ${selectedColorData.name}`}
                  className="color-selector-image"
                />
              </div>
            </div>

            {/* Правая часть - селектор цветов */}
            <div className="color-selector-controls">
              {/* Метка материала */}
              <div className="color-selector-material-label">
                <span className="color-selector-material-name">
                  <span>AGT Supramat</span>
                </span>
                {selectedColorData.code && (
                  <span className="color-selector-color-code">{selectedColorData.code}</span>
                )}
              </div>

              {/* Разделительная линия */}
              <div className="color-selector-divider"></div>

              {/* Сетка цветов */}
              <div className="color-selector-grid">
                {colorOptions.map((color) => (
                  <button
                    key={color.id}
                    className={`color-selector-swatch ${
                      selectedColor === color.id ? "active" : ""
                    }`}
                    onClick={() => setSelectedColor(color.id)}
                    style={{ backgroundColor: color.color }}
                    aria-label={`Select color ${color.name}`}
                  />
                ))}
              </div>

              {/* Текст и кнопка */}
              <div className="color-selector-cta">
                <p className="color-selector-cta-text">
                  Pentru recomandări personalizate, contactează-ne.
                </p>
                <button
                  className="color-selector-button"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Solicită oferta →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default ColorSelectorPage;

