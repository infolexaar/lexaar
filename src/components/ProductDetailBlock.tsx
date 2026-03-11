import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import "./ProductDetailBlock.css";

// Bucătărie Urban Wood (item 1)
import image1 from "../assets/categories/bucatarii/BucătărieUrbanWood/Image.png";
import urbanWoodCarousel1 from "../assets/categories/bucatarii/BucătărieUrbanWood/Image 1.png";
import urbanWoodCarousel2 from "../assets/categories/bucatarii/BucătărieUrbanWood/Image 2.png";

// Arctic Line (2) — Nordic Home (3) — Loft Beige (4) — Amber Touch (5) — Walnut Flow (6)
import image2 from "../assets/categories/bucatarii/arcticline/Image.png";
import arcticline1 from "../assets/categories/bucatarii/arcticline/Image-1.png";
import arcticline2 from "../assets/categories/bucatarii/arcticline/Image-2.png";

import image3 from "../assets/categories/bucatarii/nordichome/Image.png";
import nordichome1 from "../assets/categories/bucatarii/nordichome/20250729_153104 1.png";
import nordichome2 from "../assets/categories/bucatarii/nordichome/20250729_103300 1.png";

import image4 from "../assets/categories/bucatarii/loftbeige/Image.png";
import loftbeige1 from "../assets/categories/bucatarii/loftbeige/IMG_4381 1.png";
import loftbeige2 from "../assets/categories/bucatarii/loftbeige/IMG_4382 1.png";

import image5 from "../assets/categories/bucatarii/ambertouch/Image.png";
import ambertouch1 from "../assets/categories/bucatarii/ambertouch/IMG-20230614-WA0006 1.png";
import ambertouch2 from "../assets/categories/bucatarii/ambertouch/IMG-20230615-WA0002 1.png";

import image6 from "../assets/categories/bucatarii/walnutflow/Image.png";
import walnutflow1 from "../assets/categories/bucatarii/walnutflow/20211014_155205 1.png";
import walnutflow2 from "../assets/categories/bucatarii/walnutflow/20211014_155628 1.png";

// Industrial Grey (7) — Soft Contrast (8) — Marble Line (9) — Concrete Mood (10) — Sand Gloss (11) — Forest Light (12)
import image7 from "../assets/categories/bucatarii/industrialgrey/Image.png";
import industrialgrey1 from "../assets/categories/bucatarii/industrialgrey/Image-1.png";
import industrialgrey2 from "../assets/categories/bucatarii/industrialgrey/Image-2.png";

import image8 from "../assets/categories/bucatarii/softcontrast/Image.png";
import softcontrast1 from "../assets/categories/bucatarii/softcontrast/Image-1.png";
import softcontrast2 from "../assets/categories/bucatarii/softcontrast/Image-2.png";

import image9 from "../assets/categories/bucatarii/marbieline/Image.png";
import marbieline1 from "../assets/categories/bucatarii/marbieline/Image-1.png";
import marbieline2 from "../assets/categories/bucatarii/marbieline/Image-2.png";

import image10 from "../assets/categories/bucatarii/concretemood/Image.png";
import concretemood1 from "../assets/categories/bucatarii/concretemood/Image-1.png";

import image11 from "../assets/categories/bucatarii/sandgaloss/Image.png";
import sandgaloss1 from "../assets/categories/bucatarii/sandgaloss/Image-1.png";

import image12 from "../assets/categories/bucatarii/forestlight/Image.png";
import forestlight1 from "../assets/categories/bucatarii/forestlight/Image-1.png";
import forestlight2 from "../assets/categories/bucatarii/forestlight/Image-2.png";

import paturiImage from "../assets/categories/main/paturi.svg";
import dulapImage from "../assets/categories/main/dulap.svg";

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
/* Карусель: Image (0) + Image-1 (1) + Image-2 (2) где есть */
const BUCATARII_CAROUSEL: Record<number, string[]> = {
  1: [image1, urbanWoodCarousel1, urbanWoodCarousel2],
  2: [image2, arcticline1, arcticline2],
  3: [image3, nordichome1, nordichome2],
  4: [image4, loftbeige1, loftbeige2],
  5: [image5, ambertouch1, ambertouch2],
  6: [image6, walnutflow1, walnutflow2],
  7: [image7, industrialgrey1, industrialgrey2],
  8: [image8, softcontrast1, softcontrast2],
  9: [image9, marbieline1, marbieline2],
  10: [image10, concretemood1],
  11: [image11, sandgaloss1],
  12: [image12, forestlight1, forestlight2],
};

const PATURI_IMAGES = [paturiImage, paturiImage, paturiImage];
const DULAPURI_IMAGES = [dulapImage, dulapImage, dulapImage];

interface ProductDetailBlockProps {
  onOpenModal?: () => void;
}

const ProductDetailBlock: React.FC<ProductDetailBlockProps> = ({ onOpenModal }) => {
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
                  type="button"
                  className="product-detail-info-button"
                  onClick={() => {
                    onOpenModal?.();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
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
