import React, { useState, useEffect } from "react";
import ContactModal from "./ContactModal";
import closeButtonIcon from "../assets/categories/main/CloseButton.svg";
import "./GalleryModal.css";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    id: number;
    title: string;
    image: string;
    carouselImages?: string[];
    description?: string;
  } | null;
  allItems?: {
    id: number;
    title: string;
    image: string;
    carouselImages?: string[];
    description?: string;
  }[];
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  item,
  // allItems = [], // Reserved for future use
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Сбрасываем индекс при открытии модального окна или изменении товара
  useEffect(() => {
    if (isOpen && item) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, item?.id]);

  if (!isOpen || !item) return null;

  // Используем изображения карусели товара, если они есть, иначе используем основное изображение
  const galleryImages = item.carouselImages && item.carouselImages.length > 0
    ? item.carouselImages
    : [item.image];

  const currentImageSrc = galleryImages[currentImageIndex] || galleryImages[0];

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div className="gallery-modal-overlay" onClick={onClose}>
        <div
          className="gallery-modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="gallery-modal-close" onClick={onClose}>
            <img
              src={closeButtonIcon}
              alt="Close"
              className="gallery-modal-close-icon"
            />
          </button>

          {/* Стрелки навигации - показываем только если есть несколько изображений */}
          {galleryImages.length > 1 && (
            <>
              <button
                className="gallery-modal-nav gallery-modal-nav-left"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                aria-label="Previous image"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="gallery-modal-nav gallery-modal-nav-right"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                aria-label="Next image"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Основной контейнер 1120x583 */}
          <div className="gallery-modal-main-container">
            {/* Левая часть - фотки */}
            <div className="gallery-modal-images-section">
              {/* Основная фотка 688x462 */}
              <div className="gallery-modal-main-image-wrapper">
                <img
                  src={currentImageSrc}
                  alt={item.title}
                  className="gallery-modal-main-image"
                />
              </div>

              {/* Галерея миниатюр 508x97 */}
              <div className="gallery-modal-thumbnails">
                {galleryImages.map((imgSrc, index) => (
                  <div
                    key={index}
                    className={`gallery-modal-thumbnail ${
                      index === currentImageIndex ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleThumbnailClick(index);
                    }}
                  >
                    <img
                      src={imgSrc}
                      alt={`${item.title} ${index + 1}`}
                      className="gallery-modal-thumbnail-image"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Правая часть - информация */}
            <div className="gallery-modal-info-section">
              <div className="gallery-modal-info-content">
                <h2 className="gallery-modal-info-title">{item.title}</h2>
                <div className="gallery-modal-info-line"></div>
                <p className="gallery-modal-info-description">
                  {item.description ||
                    "Bucătărie modernă cu design minimalist, combinație elegantă de lemn natural și antracit, perfect echilibrată între stil și funcționalitate."}
                </p>
                <div className="gallery-modal-info-line"></div>
                <p className="gallery-modal-info-cta-text">
                  Pentru recomandări personalizate, contactează-ne.
                </p>
                <button
                  className="gallery-modal-info-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsContactModalOpen(true);
                  }}
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

export default GalleryModal;

