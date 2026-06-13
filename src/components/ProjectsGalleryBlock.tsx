import React, { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { LEXAAR_PROJECT_INDEX } from "../data/lexaarProjects";
import { useProjectTitle } from "../hooks/useProjectTitle";
import ProjectCoverImage from "./ProjectCoverImage";
import "./GalleryBlock.css";

interface ProjectsGalleryBlockProps {
  pageTitle: string;
}

const ProjectGalleryCard: React.FC<{ projectId: number }> = ({ projectId }) => {
  const title = useProjectTitle(projectId);
  const navigate = useNavigate();

  return (
    <div
      className="gallery-item"
      onClick={() => navigate(`/projects/${projectId}`)}
    >
      <div className="gallery-item-image">
        <ProjectCoverImage
          projectId={projectId}
          alt={title}
          className="gallery-item-img"
        />
      </div>
      <h3 className="gallery-item-title">{title}</h3>
    </div>
  );
};

const ProjectsGalleryBlock: React.FC<ProjectsGalleryBlockProps> = ({ pageTitle }) => {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const itemsPerPage = 6;

  const allItems = useMemo(
    () => LEXAAR_PROJECT_INDEX.map((project) => project.id),
    []
  );

  const totalPages = Math.ceil(allItems.length / itemsPerPage);
  const currentPage = Math.min(totalPages, Math.max(1, Number(searchParams.get("page")) || 1));

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return allItems.slice(startIndex, startIndex + itemsPerPage);
  }, [allItems, currentPage]);

  const handlePageChange = (page: number) => {
    setSearchParams({ page: String(page) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  const renderPaginationNumbers = () => {
    const numbers: number[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) numbers.push(i);
    } else if (currentPage <= 3) {
      for (let i = 1; i <= 4; i++) numbers.push(i);
      numbers.push(-1);
      numbers.push(totalPages);
    } else if (currentPage >= totalPages - 2) {
      numbers.push(1);
      numbers.push(-1);
      for (let i = totalPages - 3; i <= totalPages; i++) numbers.push(i);
    } else {
      numbers.push(1);
      numbers.push(-1);
      for (let i = currentPage - 1; i <= currentPage + 1; i++) numbers.push(i);
      numbers.push(-1);
      numbers.push(totalPages);
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
        <h2 className="gallery-block-title">{pageTitle}</h2>

        <div className="gallery-grid">
          {currentItems.map((projectId) => (
            <ProjectGalleryCard key={projectId} projectId={projectId} />
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
              {t.projectsPage.next} →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGalleryBlock;
