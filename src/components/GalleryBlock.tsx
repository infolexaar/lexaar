import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import "./GalleryBlock.css";

import bucatarii1 from "../assets/categories/bucatarii/1.svg";
import bucatarii2 from "../assets/categories/bucatarii/2.svg";
import bucatarii3 from "../assets/categories/bucatarii/3.svg";
import bucatarii4 from "../assets/categories/bucatarii/4.svg";
import bucatarii5 from "../assets/categories/bucatarii/5.svg";
import bucatarii6 from "../assets/categories/bucatarii/6.svg";
import bucatarii7 from "../assets/categories/bucatarii/7.svg";
import bucatarii8 from "../assets/categories/bucatarii/8.svg";
import bucatarii9 from "../assets/categories/bucatarii/9.svg";
import bucatarii10 from "../assets/categories/bucatarii/10.svg";
import bucatarii11 from "../assets/categories/bucatarii/11.svg";
import bucatarii12 from "../assets/categories/bucatarii/12.svg";

import carousel2 from "../assets/categories/bucatarii/itemimg/carousel2.svg";
import carousel3 from "../assets/categories/bucatarii/itemimg/carousel3.svg";

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
}

const BUCATARII_IMAGES = [
  bucatarii1, bucatarii2, bucatarii3, bucatarii4,
  bucatarii5, bucatarii6, bucatarii7, bucatarii8,
  bucatarii9, bucatarii10, bucatarii11, bucatarii12,
];

// carousel2 и carousel3 содержат JPEG 3024x4032 — отличное качество
// carousel1 — только 560x420, поэтому для главного вида используем bucatarii7 + carousel2/3
const BUCATARII_CAROUSEL: Record<number, string[]> = {
  7: [bucatarii7, carousel2, carousel3],
};

const PATURI_IMAGES = [bucatarii1, bucatarii2, bucatarii3];
const DULAPURI_IMAGES = [bucatarii1, bucatarii2, bucatarii3];

const GalleryBlock: React.FC<GalleryBlockProps> = ({ categoryName, categorySlug }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);

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
          image: PATURI_IMAGES[i],
        }));
      case "dulapuri-si-comode":
        return t.categories.dulapuri.map((item, i) => ({
          id: i + 1,
          title: item.title,
          image: DULAPURI_IMAGES[i],
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

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return allItems.slice(startIndex, startIndex + itemsPerPage);
  }, [allItems, currentPage]);

  const handleItemClick = (item: GalleryItem) => {
    navigate(`/category/${categorySlug}/${item.id}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
              className="gallery-item"
              onClick={() => handleItemClick(item)}
            >
              <div className="gallery-item-image">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-item-img"
                  loading="lazy"
                  decoding="async"
                />
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
