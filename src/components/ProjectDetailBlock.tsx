import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { getProjectEntry, loadProjectMedia, type MediaType } from "../data/lexaarProjects";
import { useProjectDescription, useProjectTitle } from "../hooks/useProjectTitle";
import "./ProductDetailBlock.css";
import "./ProjectDetailBlock.css";

interface LoadedMedia {
  type: MediaType;
  src: string;
}

interface ProjectDetailBlockProps {
  onOpenModal?: () => void;
}

const ProjectDetailBlock: React.FC<ProjectDetailBlockProps> = ({ onOpenModal }) => {
  const { t } = useLanguage();
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  const id = Number(projectId);
  const projectEntry = getProjectEntry(id);
  const title = useProjectTitle(id);
  const description = useProjectDescription(id);

  const [media, setMedia] = useState<LoadedMedia[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!projectEntry) {
      setMedia([]);
      setIsLoading(false);
      return;
    }

    let active = true;
    setIsLoading(true);
    setCurrentIndex(0);

    loadProjectMedia(id).then((items) => {
      if (active) {
        setMedia(items);
        setIsLoading(false);
      }
    });

    return () => {
      active = false;
    };
  }, [id, projectEntry]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  }, [currentIndex]);

  if (!projectEntry) {
    return (
      <div className="product-detail-container">
        <p>{t.projectsPage.notFound}</p>
      </div>
    );
  }

  const currentMedia = media[currentIndex];

  const handleThumbnailClick = (index: number) => setCurrentIndex(index);
  const handleBackClick = () => navigate("/projects");

  return (
    <div className="product-detail-wrapper">
      <div className="product-detail-container">
        <div className="product-detail-nav">
          <div className="product-detail-nav-content">
            <button className="product-detail-back-button" onClick={handleBackClick}>
              <svg viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 2L2 10L10 18"
                  stroke="#1a1911"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <h1 className="product-detail-title">{title}</h1>
          </div>
        </div>
      </div>

      <div className="product-detail-main-wrapper">
        <div className="product-detail-main">
          <div className="product-detail-images-section">
            <div className="product-detail-main-image-wrapper">
              {isLoading ? (
                <div className="project-detail-media-placeholder" />
              ) : currentMedia?.type === "video" ? (
                <video
                  ref={videoRef}
                  key={currentMedia.src}
                  src={currentMedia.src}
                  className="product-detail-main-image project-detail-video"
                  controls
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img
                  src={currentMedia?.src}
                  alt={title}
                  className="product-detail-main-image"
                />
              )}
            </div>

            {!isLoading && media.length > 0 && (
              <div className="product-detail-thumbnails">
                {media.map((item, index) => (
                  <div
                    key={`${item.src}-${index}`}
                    className={`product-detail-thumbnail ${
                      index === currentIndex ? "active" : ""
                    } ${item.type === "video" ? "is-video" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleThumbnailClick(index);
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleThumbnailClick(index);
                      }
                    }}
                    aria-label={
                      item.type === "video"
                        ? `${t.projectsPage.videoLabel} ${index + 1}`
                        : `Imagine ${index + 1}`
                    }
                  >
                    {item.type === "video" ? (
                      <div className="project-detail-video-thumb">
                        <span className="project-detail-video-play">▶</span>
                      </div>
                    ) : (
                      <img
                        src={item.src}
                        alt={`${title} ${index + 1}`}
                        className="product-detail-thumbnail-image"
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="product-detail-info-section">
            <div className="product-detail-info-content">
              <div className="product-detail-info-text-wrapper">
                <p className="product-detail-info-text-17">{description}</p>
              </div>
              <button
                type="button"
                className="product-detail-info-button"
                onClick={() => {
                  onOpenModal?.();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {t.cta.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailBlock;
