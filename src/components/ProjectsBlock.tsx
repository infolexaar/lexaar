import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import {
  HOMEPAGE_PREVIEW_COUNT,
  LEXAAR_PROJECT_INDEX,
} from "../data/lexaarProjects";
import { useProjectTitle } from "../hooks/useProjectTitle";
import ProjectCoverImage from "./ProjectCoverImage";
import "./ProjectsBlock.css";

const CARD_WIDTH = 400;
const CARD_GAP = 16;
const VISIBLE_CARDS = 3;
const SCROLL_STEP = CARD_WIDTH + CARD_GAP;

const PreviewCard: React.FC<{ projectId: number }> = ({ projectId }) => {
  const title = useProjectTitle(projectId);
  const navigate = useNavigate();

  return (
    <div className="projects-block-card">
      <div
        className="projects-block-image-wrapper"
        onClick={() => navigate(`/projects/${projectId}`)}
        style={{ cursor: "pointer" }}
      >
        <ProjectCoverImage
          projectId={projectId}
          alt={title}
          className="projects-block-image"
          loading="lazy"
        />
      </div>
      <p className="projects-block-title-text">{title}</p>
    </div>
  );
};

const ProjectsBlock: React.FC = () => {
  const { t } = useLanguage();
  const previewProjects = LEXAAR_PROJECT_INDEX.slice(0, HOMEPAGE_PREVIEW_COUNT);

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(0, previewProjects.length - VISIBLE_CARDS);

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
        <div className="projects-block-header">
          <h2 className="projects-block-title">
            {t.home.projectsBlock.title}{" "}
            <span className="projects-block-title-accent">LexAar</span>
          </h2>
          <Link to="/projects" className="projects-block-view-all">
            {t.home.projectsBlock.viewAll} →
          </Link>
        </div>

        <div className="projects-block-projects">
          <button
            className="projects-block-button projects-block-button-left"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            aria-label="Previous project"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="projects-block-scroll-wrapper" ref={scrollContainerRef}>
            <div className="projects-block-cards-container">
              {previewProjects.map((project) => (
                <PreviewCard key={project.id} projectId={project.id} />
              ))}
            </div>
          </div>
          <button
            className="projects-block-button projects-block-button-right"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            aria-label="Next project"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </section>
  );
};

export default ProjectsBlock;
