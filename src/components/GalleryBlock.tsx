import React, { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import "./GalleryBlock.css";

// Bucătărie Urban Wood (item 1)
import bucatarii1 from "../assets/categories/bucatarii/BucătărieUrbanWood/Image.png";
import urbanWoodCarousel1 from "../assets/categories/bucatarii/BucătărieUrbanWood/Image 1.png";
import urbanWoodCarousel2 from "../assets/categories/bucatarii/BucătărieUrbanWood/Image 2.png";

// Arctic Line (2), Nordic Home (3), Loft Beige (4), Amber Touch (5), Walnut Flow (6)
import bucatarii2 from "../assets/categories/bucatarii/arcticline/Image.png";
import arcticline1 from "../assets/categories/bucatarii/arcticline/Image-1.png";
import arcticline2 from "../assets/categories/bucatarii/arcticline/Image-2.png";

import bucatarii3 from "../assets/categories/bucatarii/nordichome/Image.png";
import nordichome1 from "../assets/categories/bucatarii/nordichome/20250729_153104 1.png";
import nordichome2 from "../assets/categories/bucatarii/nordichome/20250729_103300 1.png";

import bucatarii4 from "../assets/categories/bucatarii/loftbeige/Image.png";
import loftbeige1 from "../assets/categories/bucatarii/loftbeige/IMG_4381 1.png";
import loftbeige2 from "../assets/categories/bucatarii/loftbeige/IMG_4382 1.png";

import bucatarii5 from "../assets/categories/bucatarii/ambertouch/Image.png";
import ambertouch1 from "../assets/categories/bucatarii/ambertouch/IMG-20230614-WA0006 1.png";
import ambertouch2 from "../assets/categories/bucatarii/ambertouch/IMG-20230615-WA0002 1.png";

import bucatarii6 from "../assets/categories/bucatarii/walnutflow/Image.png";
import walnutflow1 from "../assets/categories/bucatarii/walnutflow/20211014_155205 1.png";
import walnutflow2 from "../assets/categories/bucatarii/walnutflow/20211014_155628 1.png";

// Industrial Grey (7), Soft Contrast (8), Marble Line (9), Concrete Mood (10), Sand Gloss (11), Forest Light (12)
import bucatarii7 from "../assets/categories/bucatarii/industrialgrey/Image.png";
import industrialgrey1 from "../assets/categories/bucatarii/industrialgrey/Image-1.png";
import industrialgrey2 from "../assets/categories/bucatarii/industrialgrey/Image-2.png";

import bucatarii8 from "../assets/categories/bucatarii/softcontrast/Image.png";
import softcontrast1 from "../assets/categories/bucatarii/softcontrast/Image-1.png";
import softcontrast2 from "../assets/categories/bucatarii/softcontrast/Image-2.png";

import bucatarii9 from "../assets/categories/bucatarii/marbieline/Image.png";
import marbieline1 from "../assets/categories/bucatarii/marbieline/Image-1.png";
import marbieline2 from "../assets/categories/bucatarii/marbieline/Image-2.png";

import bucatarii10 from "../assets/categories/bucatarii/concretemood/Image.png";
import concretemood1 from "../assets/categories/bucatarii/concretemood/Image-1.png";

import bucatarii11 from "../assets/categories/bucatarii/sandgaloss/Image.png";
import sandgaloss1 from "../assets/categories/bucatarii/sandgaloss/Image-1.png";

import bucatarii12 from "../assets/categories/bucatarii/forestlight/Image.png";
import forestlight1 from "../assets/categories/bucatarii/forestlight/Image-1.png";
import forestlight2 from "../assets/categories/bucatarii/forestlight/Image-2.png";

// Paturi (1–3)
import paturi1 from "../assets/categories/paturi/Pat matrimonial tapițat cu somieră inclusă/viber_image_2026-05-27_16-37-46-543 3.png";
import paturi1c1 from "../assets/categories/paturi/Pat matrimonial tapițat cu somieră inclusă/viber_image_2026-05-27_16-38-31-686 3.png";
import paturi1c2 from "../assets/categories/paturi/Pat matrimonial tapițat cu somieră inclusă/viber_image_2026-05-27_16-38-31-686 5.png";
import paturi1c3 from "../assets/categories/paturi/Pat matrimonial tapițat cu somieră inclusă/viber_image_2026-05-27_16-38-31-893 3.png";

import paturi2 from "../assets/categories/paturi/Pat matrimonial tapițat cu tăblie decorativă/viber_image_2026-05-27_16-37-46-543 2.png";
import paturi2c1 from "../assets/categories/paturi/Pat matrimonial tapițat cu tăblie decorativă/viber_image_2026-05-27_16-38-31-686 2.png";
import paturi2c2 from "../assets/categories/paturi/Pat matrimonial tapițat cu tăblie decorativă/viber_image_2026-05-27_16-38-31-686 6.png";
import paturi2c3 from "../assets/categories/paturi/Pat matrimonial tapițat cu tăblie decorativă/viber_image_2026-05-27_16-38-31-893 2.png";

import paturi3 from "../assets/categories/paturi/Pat tapițat matrimonial cu design modern/viber_image_2026-05-27_16-37-46-543 1.png";
import paturi3c1 from "../assets/categories/paturi/Pat tapițat matrimonial cu design modern/viber_image_2026-05-27_16-38-31-686 1.png";
import paturi3c2 from "../assets/categories/paturi/Pat tapițat matrimonial cu design modern/viber_image_2026-05-27_16-38-31-686 4.png";
import paturi3c3 from "../assets/categories/paturi/Pat tapițat matrimonial cu design modern/viber_image_2026-05-27_16-38-31-893 1.png";

import dulapImage from "../assets/categories/main/dulap.svg";
import ComingSoonOverlay from "./ComingSoonOverlay";

interface GalleryBlockProps {
  categoryName: string;
  categorySlug: string;
}

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  carouselImages?: string[];
  description?: string;
  comingSoon?: boolean;
}

const BUCATARII_IMAGES = [
  bucatarii1, bucatarii2, bucatarii3, bucatarii4,
  bucatarii5, bucatarii6, bucatarii7, bucatarii8,
  bucatarii9, bucatarii10, bucatarii11, bucatarii12,
];

/* Карусель: Image (0) + Image-1 (1) + Image-2 (2) где есть */
const BUCATARII_CAROUSEL: Record<number, string[]> = {
  1: [bucatarii1, urbanWoodCarousel1, urbanWoodCarousel2],
  2: [bucatarii2, arcticline1, arcticline2],
  3: [bucatarii3, nordichome1, nordichome2],
  4: [bucatarii4, loftbeige1, loftbeige2],
  5: [bucatarii5, ambertouch1, ambertouch2],
  6: [bucatarii6, walnutflow1, walnutflow2],
  7: [bucatarii7, industrialgrey1, industrialgrey2],
  8: [bucatarii8, softcontrast1, softcontrast2],
  9: [bucatarii9, marbieline1, marbieline2],
  10: [bucatarii10, concretemood1],
  11: [bucatarii11, sandgaloss1],
  12: [bucatarii12, forestlight1, forestlight2],
};

const PATURI_IMAGES = [paturi1, paturi2, paturi3];

const PATURI_CAROUSEL: Record<number, string[]> = {
  1: [paturi1, paturi1c1, paturi1c2, paturi1c3],
  2: [paturi2, paturi2c1, paturi2c2, paturi2c3],
  3: [paturi3, paturi3c1, paturi3c2, paturi3c3],
};

const DULAPURI_IMAGES = [dulapImage, dulapImage, dulapImage];

const GalleryBlock: React.FC<GalleryBlockProps> = ({ categoryName, categorySlug }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useLanguage();

  const itemsPerPage = 6;

  const getCategoryItems = (slug: string): GalleryItem[] => {
    switch (slug) {
      case "bucatarii":
        return t.categories.bucatarii.map((item, i) => ({
          id: i + 1,
          title: item.title,
          description: item.description,
          image: BUCATARII_IMAGES[i],
          carouselImages: BUCATARII_CAROUSEL[i + 1],
        }));
      case "paturi":
        return t.categories.paturi.map((item, i) => ({
          id: i + 1,
          title: item.title,
          description: item.description,
          image: PATURI_IMAGES[i],
          carouselImages: PATURI_CAROUSEL[i + 1],
        }));
      case "dulapuri-si-comode":
        return t.categories.dulapuri.map((item, i) => ({
          id: i + 1,
          title: item.title,
          image: DULAPURI_IMAGES[i],
          comingSoon: true,
        }));
      default:
        return [];
    }
  };

  const allItems = useMemo(
    () => getCategoryItems(categorySlug),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [categorySlug, t]
  );

  const totalPages = Math.ceil(allItems.length / itemsPerPage);
  const currentPage = Math.min(totalPages, Math.max(1, Number(searchParams.get("page")) || 1));

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return allItems.slice(startIndex, startIndex + itemsPerPage);
  }, [allItems, currentPage]);

  const handleItemClick = (item: GalleryItem) => {
    if (item.comingSoon) return;
    navigate(`/category/${categorySlug}/${item.id}`);
  };

  const handlePageChange = (page: number) => {
    setSearchParams({ page: String(page) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  const renderPaginationNumbers = () => {
    const numbers: number[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) numbers.push(i);
    } else if (currentPage <= 3) {
      for (let i = 1; i <= 4; i++) numbers.push(i);
      numbers.push(-1);
      numbers.push(totalPages);
    } else if (currentPage >= totalPages - 2) {
      numbers.push(1);
      numbers.push(-1);
      for (let i = totalPages - 3; i <= totalPages; i++) numbers.push(i);
    } else {
      numbers.push(1);
      numbers.push(-1);
      for (let i = currentPage - 1; i <= currentPage + 1; i++) numbers.push(i);
      numbers.push(-1);
      numbers.push(totalPages);
    }

    return numbers.map((num, index) => {
      if (num === -1) {
        return (
          <span key={`ellipsis-${index}`} className="pagination-ellipsis">
            ...
          </span>
        );
      }
      return (
        <button
          key={num}
          className={`pagination-button ${currentPage === num ? "active" : ""}`}
          onClick={() => handlePageChange(num)}
        >
          {num}
        </button>
      );
    });
  };

  return (
    <section className="gallery-block-section">
      <div className="gallery-block-container">
        <h2 className="gallery-block-title">{categoryName}</h2>

        <div className="gallery-grid">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className={`gallery-item ${item.comingSoon ? "is-coming-soon" : ""}`}
              onClick={() => handleItemClick(item)}
            >
              <div className="gallery-item-image">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`gallery-item-img ${item.comingSoon ? "is-coming-soon" : ""}`}
                  loading="lazy"
                  decoding="async"
                />
                {item.comingSoon && <ComingSoonOverlay />}
              </div>
              <h3 className="gallery-item-title">{item.title}</h3>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="gallery-pagination">
            <div className="pagination-numbers">{renderPaginationNumbers()}</div>
            <button
              className={`pagination-next ${currentPage >= totalPages ? "disabled" : ""}`}
              onClick={handleNextPage}
              disabled={currentPage >= totalPages}
            >
              {t.categories.next} →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryBlock;
