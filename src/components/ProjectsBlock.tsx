import React, { useState, useEffect, useRef } from "react";
import GalleryModal from "./GalleryModal";
import { useLanguage } from "../contexts/LanguageContext";
import "./ProjectsBlock.css";

const CARD_WIDTH = 400;
const CARD_GAP = 16;
const VISIBLE_CARDS = 3;
const SCROLL_STEP = CARD_WIDTH + CARD_GAP;

import sandGlossMain from "../assets/categories/bucatarii/sandgaloss/Image.png";
import sandGloss1 from "../assets/categories/bucatarii/sandgaloss/Image-1.png";

import forestLightMain from "../assets/categories/bucatarii/forestlight/Image.png";
import forestLight1 from "../assets/categories/bucatarii/forestlight/Image-1.png";
import forestLight2 from "../assets/categories/bucatarii/forestlight/Image-2.png";

import industrialGreyMain from "../assets/categories/bucatarii/industrialgrey/Image.png";
import industrialGrey1 from "../assets/categories/bucatarii/industrialgrey/Image-1.png";
import industrialGrey2 from "../assets/categories/bucatarii/industrialgrey/Image-2.png";

import marbleLineMain from "../assets/categories/bucatarii/marbieline/Image.png";
import marbleLine1 from "../assets/categories/bucatarii/marbieline/Image-1.png";
import marbleLine2 from "../assets/categories/bucatarii/marbieline/Image-2.png";

import concreteMoodMain from "../assets/categories/bucatarii/concretemood/Image.png";
import concreteMood1 from "../assets/categories/bucatarii/concretemood/Image-1.png";

import softContrastMain from "../assets/categories/bucatarii/softcontrast/Image.png";
import softContrast1 from "../assets/categories/bucatarii/softcontrast/Image-1.png";
import softContrast2 from "../assets/categories/bucatarii/softcontrast/Image-2.png";

import arcticLineMain from "../assets/categories/bucatarii/arcticline/Image.png";
import arcticLine1 from "../assets/categories/bucatarii/arcticline/Image-1.png";
import arcticLine2 from "../assets/categories/bucatarii/arcticline/Image-2.png";

const ProjectsBlock: React.FC = () => {
  const { t } = useLanguage();
  const projects = [
    {
      id: 1,
      image: sandGlossMain,
      title: t.home.projectsBlock.project1Title,
      description: t.home.projectsBlock.project1Description,
      carouselImages: [sandGlossMain, sandGloss1],
    },
    {
      id: 2,
      image: forestLightMain,
      title: t.home.projectsBlock.project2Title,
      description: t.home.projectsBlock.project2Description,
      carouselImages: [forestLightMain, forestLight1, forestLight2],
    },
    {
      id: 3,
      image: industrialGreyMain,
      title: t.home.projectsBlock.project3Title,
      description: t.home.projectsBlock.project3Description,
      carouselImages: [industrialGreyMain, industrialGrey1, industrialGrey2],
    },
    {
      id: 4,
      image: marbleLineMain,
      title: t.home.projectsBlock.project4Title,
      description: t.home.projectsBlock.project4Description,
      carouselImages: [marbleLineMain, marbleLine1, marbleLine2],
    },
    {
      id: 5,
      image: concreteMoodMain,
      title: t.home.projectsBlock.project5Title,
      description: t.home.projectsBlock.project5Description,
      carouselImages: [concreteMoodMain, concreteMood1],
    },
    {
      id: 6,
      image: softContrastMain,
      title: t.home.projectsBlock.project6Title,
      description: t.home.projectsBlock.project6Description,
      carouselImages: [softContrastMain, softContrast1, softContrast2],
    },
    {
      id: 7,
      image: arcticLineMain,
      title: t.home.projectsBlock.project7Title,
      description: t.home.projectsBlock.project7Description,
      carouselImages: [arcticLineMain, arcticLine1, arcticLine2],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
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

  const maxIndex = Math.max(0, projects.length - VISIBLE_CARDS);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.scrollTo({ left: currentIndex * SCROLL_STEP, behavior: "smooth" });
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="projects-block-section" id="proiecte">
      <div className="projects-block-container">
        {/* Заголовок */}
        <h2 className="projects-block-title">
          {t.home.projectsBlock.title} <span className="projects-block-title-accent">LexAar</span>
        </h2>

        {/* Проекты: карусель на 3 видимых, скролл по кнопкам */}
        <div className="projects-block-projects">
          <button
            className="projects-block-button projects-block-button-left"
            onClick={prevSlide}
            disabled={currentIndex === 0}
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
          <div
            className="projects-block-scroll-wrapper"
            ref={scrollContainerRef}
          >
            <div className="projects-block-cards-container">
              {projects.map((project) => (
                <div key={project.id} className="projects-block-card">
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
                </div>
              ))}
            </div>
          </div>
          <button
            className="projects-block-button projects-block-button-right"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
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
