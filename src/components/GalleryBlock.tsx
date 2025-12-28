import React, { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./GalleryBlock.css";

// Импорт изображений для категории Bucătării
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

interface GalleryItem {
  id: number;
  title: string;
  image: string;
}

interface GalleryBlockProps {
  categoryName: string;
}

const GalleryBlock: React.FC<GalleryBlockProps> = ({ categoryName }) => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Данные для галереи в зависимости от категории
  const getCategoryItems = (): GalleryItem[] => {
    if (category === "bucatarii") {
      return [
        { id: 1, title: "Bucătărie Urban Wood", image: bucatarii1 },
        { id: 2, title: "Bucătărie Arctic Line", image: bucatarii2 },
        { id: 3, title: "Bucătărie Nordic Home", image: bucatarii3 },
        { id: 4, title: "Bucătărie Loft Beige", image: bucatarii4 },
        { id: 5, title: "Bucătărie Amber Touch", image: bucatarii5 },
        { id: 6, title: "Bucătărie Walnut Flow", image: bucatarii6 },
        { id: 7, title: "Bucătărie Industrial Grey", image: bucatarii7 },
        { id: 8, title: "Bucătărie Soft Contrast", image: bucatarii8 },
        { id: 9, title: "Bucătărie Marble Line", image: bucatarii9 },
        { id: 10, title: "Bucătărie Concrete Mood", image: bucatarii10 },
        { id: 11, title: "Bucătărie Sand Gloss", image: bucatarii11 },
        { id: 12, title: "Bucătărie Forest Light", image: bucatarii12 },
      ];
    }
    // Для других категорий можно добавить данные позже
    return [];
  };

  const allItems = useMemo(() => getCategoryItems(), [category]);
  const totalPages = Math.ceil(allItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = allItems.slice(startIndex, startIndex + itemsPerPage);

  const handleItemClick = (itemId: number) => {
    if (category) {
      navigate(`/category/${category}/${itemId}`);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // Генерация номеров страниц для пагинации
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (allItems.length === 0) {
    return (
      <section className="gallery-block-container">
        <h2 className="gallery-block-title">{categoryName}</h2>
        <p>Нет товаров в этой категории</p>
      </section>
    );
  }

  return (
    <section className="gallery-block-container">
      <h2 className="gallery-block-title">{categoryName}</h2>
      <div className="gallery-grid">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="gallery-item"
            onClick={() => handleItemClick(item.id)}
          >
            <div className="gallery-item-image">
              <img
                src={item.image}
                alt={item.title}
                className="gallery-item-img"
              />
            </div>
            <h3 className="gallery-item-title">{item.title}</h3>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="gallery-pagination">
          <div className="pagination-numbers">
            {getPageNumbers().map((page, index) => {
              if (page === "...") {
                return (
                  <span key={`ellipsis-${index}`} className="pagination-ellipsis">
                    ...
                  </span>
                );
              }
              return (
                <button
                  key={page}
                  className={`pagination-button ${
                    currentPage === page ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(page as number)}
                >
                  {page}
                </button>
              );
            })}
          </div>
          <button
            className={`pagination-next ${
              currentPage >= totalPages ? "disabled" : ""
            }`}
            onClick={handleNextPage}
            disabled={currentPage >= totalPages}
          >
            Next →
          </button>
        </div>
      )}
    </section>
  );
};

export default GalleryBlock;
