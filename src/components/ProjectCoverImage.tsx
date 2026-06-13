import React, { useEffect, useState } from "react";
import { loadProjectCover } from "../data/lexaarProjects";

interface ProjectCoverImageProps {
  projectId: number;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}

const ProjectCoverImage: React.FC<ProjectCoverImageProps> = ({
  projectId,
  alt,
  className,
  loading = "lazy",
}) => {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    loadProjectCover(projectId).then((url) => {
      if (active && url) setSrc(url);
    });
    return () => {
      active = false;
    };
  }, [projectId]);

  if (!src) {
    return <div className={`${className ?? ""} project-cover-placeholder`} aria-hidden />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
    />
  );
};

export default ProjectCoverImage;
