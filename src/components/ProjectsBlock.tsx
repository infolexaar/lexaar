import React, { useState, useEffect } from "react";
import GalleryModal from "./GalleryModal";
import image1 from "../assets/projects/Image.svg";
import image2 from "../assets/projects/Image-1.svg";
import image3 from "../assets/projects/Image-2.svg";
// Импорт изображений карусели для товара "Bucătărie Industrial Grey"
import carousel1 from "../assets/categories/bucatarii/itemimg/carousel1.svg";
import carousel2 from "../assets/categories/bucatarii/itemimg/carousel2.svg";
import carousel3 from "../assets/categories/bucatarii/itemimg/carousel3.svg";
import { useLanguage } from "../contexts/LanguageContext";
import "./ProjectsBlock.css";

const ProjectsBlock: React.FC = () => {
  const { t } = useLanguage();
  const projects = [
    {
      id: 1,
      image: image1,
      title: t.home.projectsBlock.project1Title,
      carouselImages: [carousel1, carousel2, carousel3],
      description: t.home.projectsBlock.project1Description,
    },
    {
      id: 2,
      image: image2,
      title: t.home.projectsBlock.project2Title,
      description: t.home.projectsBlock.project2Description,
    },
    {
      id: 3,
      image: image3,
      title: t.home.projectsBlock.project3Title,
      description: t.home.projectsBlock.project3Description,
    },
  ];

  const [, setCurrentIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<{
    id: number;
    title: string;
    image: string;
    carouselImages?: string[];
    description?: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // При монтировании: если в URL есть #project-N — открываем нужный проект
  useEffect(() => {
    const match = window.location.hash.match(/^#project-(\d+)$/);
    if (match) {
      const id = parseInt(match[1], 10);
      const found = projects.find((p) => p.id === id);
      if (found) {
        setSelectedItem(found);
        setIsModalOpen(true);
      }
    }
    // Браузерная кнопка «Назад» — закрываем попап если хэш убран
    const handlePopState = () => {
      if (!window.location.hash.startsWith("#project-")) {
        setIsModalOpen(false);
        setSelectedItem(null);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openProject = (project: typeof projects[0]) => {
    setSelectedItem(project);
    setIsModalOpen(true);
    window.history.pushState(null, "", `#project-${project.id}`);
  };

  const closeProject = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    // Убираем хэш из URL без перезагрузки страницы
    window.history.pushState(
      null,
      "",
      window.location.pathname + window.location.search
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev: number) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev: number) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="projects-block-section" id="proiecte">
      <div className="projects-block-container">
        {/* Заголовок */}
        <h2 className="projects-block-title">
          {t.home.projectsBlock.title} <span className="projects-block-title-accent">LexAar</span>
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
                  onClick={() => openProject(project)}
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
        onClose={closeProject}
        item={selectedItem}
        allItems={projects}
      />
    </section>
  );
};

export default ProjectsBlock;

