import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./GalleryBlock.css";

// Импорт изображений для категории bucatarii
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

interface GalleryBlockProps {
  categoryName: string;
}

interface GalleryItem {
  id: number;
  title: string;
  image: string;
}

const GalleryBlock: React.FC<GalleryBlockProps> = ({ categoryName }) => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Данные товаров для категории bucatarii
  const getCategoryItems = (): GalleryItem[] => {
    if (category === "bucatarii") {
      return [
        { id: 1, title: "Bucătărie Urban Wood", image: image1 },
        { id: 2, title: "Bucătărie Arctic Line", image: image2 },
        { id: 3, title: "Bucătărie Nordic Home", image: image3 },
        { id: 4, title: "Bucătărie Loft Beige", image: image4 },
        { id: 5, title: "Bucătărie Amber Touch", image: image5 },
        { id: 6, title: "Bucătărie Walnut Flow", image: image6 },
        { id: 7, title: "Bucătărie Industrial Grey", image: image7 },
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
  const totalPages = Math.ceil(allItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = allItems.slice(startIndex, endIndex);

  const handleItemClick = (itemId: number) => {
    navigate(`/category/${category}/${itemId}`);
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

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push(-1); // Ellipsis
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push(-1); // Ellipsis
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push(-1); // Ellipsis
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push(-1); // Ellipsis
        pages.push(totalPages);
      }
    }

    return (
      <div className="gallery-pagination">
        <div className="pagination-numbers">
          {pages.map((page, index) => {
            if (page === -1) {
              return (
                <span key={`ellipsis-${index}`} className="pagination-ellipsis">
                  ...
                </span>
              );
            }
            return (
              <button
                key={page}
                className={`pagination-button ${currentPage === page ? "active" : ""}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            );
          })}
        </div>
        <button
          className={`pagination-next ${currentPage >= totalPages ? "disabled" : ""}`}
          onClick={handleNextPage}
          disabled={currentPage >= totalPages}
        >
          Următorul
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    );
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
        {totalPages > 1 && renderPagination()}
      </div>
    </section>
  );
};

export default GalleryBlock;
