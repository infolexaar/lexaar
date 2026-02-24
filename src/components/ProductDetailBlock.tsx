import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import "./ProductDetailBlock.css";

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

import carousel2 from "../assets/categories/bucatarii/itemimg/carousel2.svg";
import carousel3 from "../assets/categories/bucatarii/itemimg/carousel3.svg";

interface ProductItem {
  id: number;
  title: string;
  image: string;
  carouselImages?: string[];
  description?: string;
}

const BUCATARII_IMAGES = [
  image1, image2, image3, image4, image5, image6,
  image7, image8, image9, image10, image11, image12,
];
// carousel2 и carousel3 содержат JPEG 3024x4032 — отличное качество
// carousel1 — только 560x420, поэтому используем image7 + carousel2/3 для item 7
const BUCATARII_CAROUSEL: Record<number, string[]> = {
  1: [image1, carousel2, carousel3],
  7: [image7, carousel2, carousel3],
};

const PATURI_IMAGES = [image1, image2, image3];
const DULAPURI_IMAGES = [image1, image2, image3];

const ProductDetailBlock: React.FC = () => {
  const { t } = useLanguage();
  const { category, itemId } = useParams<{ category: string; itemId: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getCategoryItems = (): ProductItem[] => {
    if (category === "bucatarii") {
      return t.categories.bucatarii.map((item, i) => ({
        id: i + 1,
        title: item.title,
        description: item.description,
        image: BUCATARII_IMAGES[i],
        carouselImages: BUCATARII_CAROUSEL[i + 1],
      }));
    }
    if (category === "paturi") {
      return t.categories.paturi.map((item, i) => ({
        id: i + 1,
        title: item.title,
        image: PATURI_IMAGES[i],
      }));
    }
    if (category === "dulapuri-si-comode") {
      return t.categories.dulapuri.map((item, i) => ({
        id: i + 1,
        title: item.title,
        image: DULAPURI_IMAGES[i],
      }));
    }
    return [];
  };

  const allItems = getCategoryItems();
  const item = allItems.find((i) => i.id === Number(itemId));

  useEffect(() => {
    if (item) setCurrentImageIndex(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item?.id]);

  if (!item) {
    return (
      <div className="product-detail-container">
        <p>{t.categories.productNotFound}</p>
      </div>
    );
  }

  const galleryImages =
    item.carouselImages && item.carouselImages.length > 0
      ? item.carouselImages
      : [item.image];

  const currentImageSrc = galleryImages[currentImageIndex] || galleryImages[0];

  const handleThumbnailClick = (index: number) => setCurrentImageIndex(index);

  const handleBackClick = () => navigate(`/category/${category}`);

  return (
    <>
      <div className="product-detail-wrapper">
        <div className="product-detail-container">
          <div className="product-detail-nav">
            <div className="product-detail-nav-content">
              <button className="product-detail-back-button" onClick={handleBackClick}>
                <svg viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 2L2 10L10 18"
                    stroke="#1a1911"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <h1 className="product-detail-title">{item.title}</h1>
            </div>
          </div>
        </div>

        <div className="product-detail-main-wrapper">
          <div className="product-detail-main">
            <div className="product-detail-images-section">
              <div className="product-detail-main-image-wrapper">
                <img
                  src={currentImageSrc}
                  alt={item.title}
                  className="product-detail-main-image"
                />
              </div>

              <div className="product-detail-thumbnails">
                {galleryImages.map((imgSrc, index) => (
                  <div
                    key={index}
                    className={`product-detail-thumbnail ${
                      index === currentImageIndex ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleThumbnailClick(index);
                    }}
                    onMouseDown={(e) => e.preventDefault()}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleThumbnailClick(index);
                      }
                    }}
                    aria-label={`Imagine ${index + 1}`}
                  >
                    <img
                      src={imgSrc}
                      alt={`${item.title} ${index + 1}`}
                      className="product-detail-thumbnail-image"
                      draggable={false}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="product-detail-info-section">
              <div className="product-detail-info-content">
                <div className="product-detail-info-text-wrapper">
                  <p className="product-detail-info-text-17">
                    {item.description || t.categories.placeholderDescription}
                  </p>
                </div>
                <button
                  className="product-detail-info-button"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  {t.cta.button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailBlock;
