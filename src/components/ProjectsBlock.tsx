import React, { useState, useEffect, useRef } from "react";
import GalleryModal from "./GalleryModal";
import { useLanguage } from "../contexts/LanguageContext";
import ComingSoonOverlay from "./ComingSoonOverlay";
import "./ProjectsBlock.css";

const CARD_WIDTH = 400;
const CARD_GAP = 16;
const VISIBLE_CARDS = 3;
const SCROLL_STEP = CARD_WIDTH + CARD_GAP;

// Ordine carousel: 1=folder 3, 2=folder 4, 3=folder 5, 4=folder 6, 5=folder 7, 6=folder 1, 7=folder 2
import proj3_1 from "../assets/projects/3/Image 10.png";
import proj3_2 from "../assets/projects/3/Image 11.png";
import proj3_3 from "../assets/projects/3/Image 12.png";
import proj4_1 from "../assets/projects/4/Image 13.png";
import proj4_2 from "../assets/projects/4/Image 14.png";
import proj4_3 from "../assets/projects/4/Image 15.png";
import proj5_1 from "../assets/projects/5/Image 16.png";
import proj5_2 from "../assets/projects/5/Image 17.png";
import proj6_1 from "../assets/projects/6/Image 18.png";
import proj6_2 from "../assets/projects/6/Image 19.png";
import proj6_3 from "../assets/projects/6/Image 20.png";
import proj7_1 from "../assets/projects/7/Image 1.png";
import proj7_2 from "../assets/projects/7/Image 2.png";
import proj7_3 from "../assets/projects/7/Image 4.png";
import proj1_1 from "../assets/projects/1/Image 5.png";
import proj1_2 from "../assets/projects/1/Image 6.png";
import proj2_1 from "../assets/projects/2/Image 7.png";
import proj2_2 from "../assets/projects/2/Image 8.png";
import proj2_3 from "../assets/projects/2/Image 9.png";

const ProjectsBlock: React.FC = () => {
  const { t } = useLanguage();
  const projects = [
    {
      id: 1,
      image: proj3_1,
      title: t.home.projectsBlock.project1Title,
      description: t.home.projectsBlock.project1Description,
      carouselImages: [proj3_1, proj3_2, proj3_3],
    },
    {
      id: 2,
      image: proj4_1,
      title: t.home.projectsBlock.project2Title,
      description: t.home.projectsBlock.project2Description,
      carouselImages: [proj4_1, proj4_2, proj4_3],
    },
    {
      id: 3,
      image: proj5_1,
      title: t.home.projectsBlock.project3Title,
      description: t.home.projectsBlock.project3Description,
      carouselImages: [proj5_1, proj5_2],
    },
    {
      id: 4,
      image: proj6_1,
      title: t.home.projectsBlock.project4Title,
      description: t.home.projectsBlock.project4Description,
      carouselImages: [proj6_1, proj6_2, proj6_3],
      comingSoon: true,
    },
    {
      id: 5,
      image: proj7_1,
      title: t.home.projectsBlock.project5Title,
      description: t.home.projectsBlock.project5Description,
      carouselImages: [proj7_1, proj7_2, proj7_3],
      comingSoon: true,
    },
    {
      id: 6,
      image: proj1_1,
      title: t.home.projectsBlock.project6Title,
      description: t.home.projectsBlock.project6Description,
      carouselImages: [proj1_1, proj1_2],
      comingSoon: true,
    },
    {
      id: 7,
      image: proj2_1,
      title: t.home.projectsBlock.project7Title,
      description: t.home.projectsBlock.project7Description,
      carouselImages: [proj2_1, proj2_2, proj2_3],
      comingSoon: true,
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
                    onClick={() => {
                      if (project.comingSoon) return;
                      openProject(project);
                    }}
                    style={{
                      cursor: project.comingSoon ? "default" : "pointer",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`projects-block-image ${project.comingSoon ? "is-coming-soon" : ""}`}
                    />
                    {project.comingSoon && <ComingSoonOverlay />}
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

