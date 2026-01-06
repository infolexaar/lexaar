import React, { useState, useMemo } from "react";
// import { useNavigate } from "react-router-dom"; // Reserved for future use
import GalleryModal from "./GalleryModal";
import "./GalleryBlock.css";

// Импорт изображений для категории bucatarii
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

import carousel1 from "../assets/categories/bucatarii/itemimg/carousel1.svg";
import carousel2 from "../assets/categories/bucatarii/itemimg/carousel2.svg";
import carousel3 from "../assets/categories/bucatarii/itemimg/carousel3.svg";

interface GalleryBlockProps {
  categoryName: string;
}

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  carouselImages?: string[];
  description?: string;
}

const GalleryBlock: React.FC<GalleryBlockProps> = ({ categoryName }) => {
  // const navigate = useNavigate(); // Reserved for future use
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const itemsPerPage = 6;

  // Функция для получения элементов категории
  const getCategoryItems = (category: string): GalleryItem[] => {
    switch (category) {
      case "Bucătării":
        return [
          {
            id: 1,
            title: "Bucătărie Industrial Grey",
            image: bucatarii1,
            carouselImages: [carousel1, carousel2, carousel3],
            description:
              "Bucătărie modernă cu design minimalist, combinație elegantă de lemn natural și antracit.",
          },
          {
            id: 2,
            title: "Bucătărie Marble Line",
            image: bucatarii2,
          },
          {
            id: 3,
            title: "Bucătărie Urban Wood",
            image: bucatarii3,
          },
          {
            id: 4,
            title: "Bucătărie Nordic Home",
            image: bucatarii4,
          },
          {
            id: 5,
            title: "Bucătărie Amber Touch",
            image: bucatarii5,
          },
          {
            id: 6,
            title: "Bucătărie Modern Classic",
            image: bucatarii6,
          },
          {
            id: 7,
            title: "Bucătărie Elegant Design",
            image: bucatarii7,
          },
          {
            id: 8,
            title: "Bucătărie Contemporary",
            image: bucatarii8,
          },
          {
            id: 9,
            title: "Bucătărie Premium",
            image: bucatarii9,
          },
          {
            id: 10,
            title: "Bucătărie Luxury",
            image: bucatarii10,
          },
          {
            id: 11,
            title: "Bucătărie Style",
            image: bucatarii11,
          },
          {
            id: 12,
            title: "Bucătărie Exclusive",
            image: bucatarii12,
          },
        ];
      case "Paturi":
        return [
          {
            id: 1,
            title: "Pat Modern",
            image: bucatarii1, // Заглушка
          },
          {
            id: 2,
            title: "Pat Classic",
            image: bucatarii2, // Заглушка
          },
          {
            id: 3,
            title: "Pat Premium",
            image: bucatarii3, // Заглушка
          },
        ];
      case "Dulapuri și Comode":
        return [
          {
            id: 1,
            title: "Dulap Modern",
            image: bucatarii1, // Заглушка
          },
          {
            id: 2,
            title: "Comodă Premium",
            image: bucatarii2, // Заглушка
          },
          {
            id: 3,
            title: "Dulap Classic",
            image: bucatarii3, // Заглушка
          },
        ];
      default:
        return [];
    }
  };

  const allItems = useMemo(() => getCategoryItems(categoryName), [categoryName]);

  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return allItems.slice(startIndex, endIndex);
  }, [allItems, currentPage, itemsPerPage]);

  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
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

  const renderPaginationNumbers = () => {
    const numbers = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        numbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          numbers.push(i);
        }
        numbers.push(-1); // Ellipsis
        numbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        numbers.push(1);
        numbers.push(-1); // Ellipsis
        for (let i = totalPages - 3; i <= totalPages; i++) {
          numbers.push(i);
        }
      } else {
        numbers.push(1);
        numbers.push(-1); // Ellipsis
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          numbers.push(i);
        }
        numbers.push(-1); // Ellipsis
        numbers.push(totalPages);
      }
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
              Next →
            </button>
          </div>
        )}
      </div>

      <GalleryModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedItem(null);
        }}
        item={selectedItem}
        allItems={allItems}
      />
    </section>
  );
};

export default GalleryBlock;
