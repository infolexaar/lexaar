import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContactModal from "./ContactModal";
import "./ProductDetailBlock.css";

// Импорт изображений для категории Bucătării
import image1 from "../assets/categories/bucatarii/1.svg";
import image2 from "../assets/categories/bucatarii/2.svg";
import image3 from "../assets/categories/bucatarii/3.svg";
import image4 from "../assets/categories/bucatarii/4.svg";
import image5 from "../assets/categories/bucatarii/5.svg";
import image6 from "../assets/categories/bucatarii/6.svg";
import image7 from "../assets/categories/bucatarii/7.svg";
import image8 from "../assets/categories/bucatarii/8.svg";
import image9 from "../assets/categories/bucatarii/9.svg";
import image10 from "../assets/categories/bucatarii/10.svg";
import image11 from "../assets/categories/bucatarii/11.svg";
import image12 from "../assets/categories/bucatarii/12.svg";

// Импорт изображений карусели для товара "Bucătărie Industrial Grey"
import carousel1 from "../assets/categories/bucatarii/itemimg/carousel1.svg";
import carousel2 from "../assets/categories/bucatarii/itemimg/carousel2.svg";
import carousel3 from "../assets/categories/bucatarii/itemimg/carousel3.svg";

interface ProductItem {
  id: number;
  title: string;
  image: string;
  carouselImages?: string[];
  description?: string;
}

const ProductDetailBlock: React.FC = () => {
  const { category, itemId } = useParams<{
    category: string;
    itemId: string;
  }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Данные для галереи в зависимости от категории
  const getCategoryItems = (): ProductItem[] => {
    if (category === "bucatarii") {
      return [
        {
          id: 1,
          title: "Bucătărie Urban Wood",
          image: image1,
          description:
            "Design elegant, cu linii curate şi finisaje mate, această bucătărie îmbină funcționalitatea cu rafinamentul contemporan. Fronturile gri antracit oferă un aspect sofisticat și ușor de întreţinut, iar accentele din lemn adaugă căldură și echilibru vizual. Blatul și peretele din spate sunt realizate din material cu textură de marmură gri, conferind un plus de eleganță și rezistență în timp. Iluminarea minimalistă pe șină pune în valoare fiecare detaliu al mobilierului. Ideală pentru spații moderne, această bucătărie oferă o combinație perfectă între estetică și funcționalitate.",
        },
        { id: 2, title: "Bucătărie Arctic Line", image: image2 },
        { id: 3, title: "Bucătărie Nordic Home", image: image3 },
        { id: 4, title: "Bucătărie Loft Beige", image: image4 },
        { id: 5, title: "Bucătărie Amber Touch", image: image5 },
        { id: 6, title: "Bucătărie Walnut Flow", image: image6 },
        {
          id: 7,
          title: "Bucătărie Industrial Grey",
          image: image7,
          carouselImages: [carousel1, carousel2, carousel3],
          description:
            "Bucătărie modernă cu design minimalist, combinație elegantă de lemn natural și antracit, perfect echilibrată între stil și funcționalitate.",
        },
        { id: 8, title: "Bucătărie Soft Contrast", image: image8 },
        { id: 9, title: "Bucătărie Marble Line", image: image9 },
        { id: 10, title: "Bucătărie Concrete Mood", image: image10 },
        { id: 11, title: "Bucătărie Sand Gloss", image: image11 },
        { id: 12, title: "Bucătărie Forest Light", image: image12 },
      ];
    }
    return [];
  };

  const allItems = getCategoryItems();
  const item = allItems.find((i) => i.id === Number(itemId));

  // Сбрасываем индекс при изменении товара
  useEffect(() => {
    if (item) {
      setCurrentImageIndex(0);
    }
  }, [item]);

  if (!item) {
    return (
      <div className="product-detail-container">
        <p>Товар не найден</p>
      </div>
    );
  }

  // Используем изображения карусели товара, если они есть, иначе используем основное изображение
  const galleryImages =
    item.carouselImages && item.carouselImages.length > 0
      ? item.carouselImages
      : [item.image];

  const currentImageSrc = galleryImages[currentImageIndex] || galleryImages[0];

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleBackClick = () => {
    navigate(`/category/${category}`);
  };

  return (
    <>
      <div className="product-detail-wrapper">
        <div className="product-detail-container">
          {/* Навигация */}
          <div className="product-detail-nav">
            <div className="product-detail-nav-content">
              <button
                className="product-detail-back-button"
                onClick={handleBackClick}
              >
                <svg
                  width="11.05"
                  height="19.09"
                  viewBox="0 0 11.05 19.09"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 1.5L1.5 9.5L9.5 17.5"
                    stroke="#858480"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </button>
              <h1 className="product-detail-title">{item.title}</h1>
            </div>
          </div>
        </div>

        {/* Основной контент */}
        <div className="product-detail-main-wrapper">
          <div className="product-detail-main">
            {/* Левая часть - фотки */}
            <div className="product-detail-images-section">
              {/* Основная фотка */}
              <div className="product-detail-main-image-wrapper">
                <img
                  src={currentImageSrc}
                  alt={item.title}
                  className="product-detail-main-image"
                />
              </div>

              {/* Галерея миниатюр */}
              <div className="product-detail-thumbnails">
                {galleryImages.map((imgSrc, index) => (
                  <div
                    key={index}
                    className={`product-detail-thumbnail ${
                      index === currentImageIndex ? "active" : ""
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <img
                      src={imgSrc}
                      alt={`${item.title} ${index + 1}`}
                      className="product-detail-thumbnail-image"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Правая часть - информация */}
            <div className="product-detail-info-section">
              <div className="product-detail-info-content">
                <div className="product-detail-info-text-wrapper">
                  <p className="product-detail-info-text-16">
                    Design elegant, cu linii curate şi finisaje mate, această
                    bucătărie îmbină funcționalitatea cu rafinamentul
                    contemporan. Fronturile gri antracit oferă un aspect
                    sofisticat și ușor de întreţinut, iar accentele din lemn
                    adaugă căldură și echilibru vizual.
                  </p>
                  <p className="product-detail-info-text-16">
                    Blatul și peretele din spate sunt realizate din material cu
                    textură de marmură gri, conferind un plus de eleganță și
                    rezistență în timp. Iluminarea minimalistă pe șină pune în
                    valoare fiecare detaliu al mobilierului.
                  </p>
                  <p className="product-detail-info-text-17">
                    Ideală pentru spații moderne, această bucătărie oferă o
                    combinație perfectă între estetică și funcționalitate.
                  </p>
                </div>
                <button
                  className="product-detail-info-button"
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

export default ProductDetailBlock;
