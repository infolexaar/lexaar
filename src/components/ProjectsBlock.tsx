import React, { useState } from "react";
import GalleryModal from "./GalleryModal";
import image1 from "../assets/projects/Image.svg";
import image2 from "../assets/projects/Image-1.svg";
import image3 from "../assets/projects/Image-2.svg";
// Импорт изображений карусели для товара "Bucătărie Industrial Grey"
import carousel1 from "../assets/categories/bucatarii/itemimg/carousel1.svg";
import carousel2 from "../assets/categories/bucatarii/itemimg/carousel2.svg";
import carousel3 from "../assets/categories/bucatarii/itemimg/carousel3.svg";
import "./ProjectsBlock.css";

const ProjectsBlock: React.FC = () => {
  const projects = [
    {
      id: 1,
      image: image1,
      title: "Bucătărie Industrial Grey",
      carouselImages: [carousel1, carousel2, carousel3],
      description:
        "Bucătărie modernă cu design minimalist, combinație elegantă de lemn natural și antracit, perfect echilibrată între stil și funcționalitate.",
    },
    {
      id: 2,
      image: image2,
      title: "Bucătărie Marble Line",
    },
    {
      id: 3,
      image: image3,
      title: "Bucătărie Urban Wood",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<{
    id: number;
    title: string;
    image: string;
    carouselImages?: string[];
    description?: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="projects-block-section">
      <div className="projects-block-container">
        {/* Заголовок */}
        <h2 className="projects-block-title">
          Proiecte recente <span className="projects-block-title-accent">LexAar</span>
        </h2>

        {/* Проекты */}
        <div className="projects-block-projects">
          {/* Контейнер проектов */}
          <div className="projects-block-cards-container">
            {projects.map((project, index) => (
              <div key={index} className="projects-block-card">
                {index === 0 && (
                  <button
                    className="projects-block-button projects-block-button-left"
                    onClick={prevSlide}
                    aria-label="Previous project"
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
                )}
                <div 
                  className="projects-block-image-wrapper"
                  onClick={() => {
                    setSelectedItem(project);
                    setIsModalOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="projects-block-image"
                  />
                </div>
                <p className="projects-block-title-text">{project.title}</p>
                {index === projects.length - 1 && (
                  <button
                    className="projects-block-button projects-block-button-right"
                    onClick={nextSlide}
                    aria-label="Next project"
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
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <GalleryModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedItem(null);
        }}
        item={selectedItem}
        allItems={projects}
      />
    </section>
  );
};

export default ProjectsBlock;

