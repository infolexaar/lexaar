import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTABlock from "../components/CTABlock";
import FormBlock from "../components/FormBlock";
import MapSection from "../components/MapSection";
import ContactModal from "../components/ContactModal";
import { useLanguage } from "../contexts/LanguageContext";
import "./BlogPostPage.css";

// Иконка стрелки назад не нужна, используем SVG

// Импорт изображений блога
import blogImage1 from "../assets/blog/Image-1.svg";
import blogImage2 from "../assets/blog/Image-2.svg";
import blogImage3 from "../assets/blog/Image-3.svg";
import blogImage4 from "../assets/blog/Image-4.svg";
import blogImage5 from "../assets/blog/Image-5.svg";
import blogImage6 from "../assets/blog/Image-6.svg";
import blogImage7 from "../assets/blog/Image-7.svg";
import blogImage8 from "../assets/blog/Image-8.svg";
import blogImage9 from "../assets/blog/Image.svg";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  fullContent?: string;
}

const BlogPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleBack = () => {
    navigate("/blog");
  };

  const imageById: Record<number, string> = {
    1: blogImage1,
    2: blogImage2,
    3: blogImage3,
    4: blogImage4,
    5: blogImage5,
    6: blogImage6,
    7: blogImage7,
    8: blogImage8,
    9: blogImage9,
  };

  const postData = postId ? t.blog.posts[postId] : null;
  const id = postId ? Number(postId) : 0;
  const post: BlogPost | null =
    id >= 1 && id <= 9 && postData
      ? {
          id,
          title: postData.title,
          description: postData.description,
          image: imageById[id],
          fullContent: postData.fullContent,
        }
      : null;

  if (!post) {
    return (
      <div className="overflow-x-hidden">
        <Header onOpenModal={handleOpenModal} />
        <main className="blog-post-page">
          <div className="blog-post-container">
            <p className="blog-post-placeholder">{t.blog.notFound}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Парсинг контента - возвращает первый параграф и остальные секции
  const parseContent = (content: string) => {
    const sections = content.split(/\n\n## /);
    const introText = sections[0].trim();
    const restSections = sections.slice(1);
    const restResult: React.ReactElement[] = [];

    // Остальные секции
    restSections.forEach((section, sectionIndex) => {
      // Секции с заголовками
      const lines = section.split("\n");
      const title = lines[0].trim();
      const contentLines = lines.slice(1);

      restResult.push(
        <h2 key={`title-${sectionIndex}`} className="blog-post-section-title">
          {title}
        </h2>
      );

        // Проверяем, есть ли нумерованный список
        const hasNumberedList = contentLines.some((line) =>
          /^\d+\./.test(line.trim())
        );

        if (hasNumberedList) {
          // Обработка нумерованного списка
          contentLines.forEach((line, lineIndex) => {
            const trimmedLine = line.trim();
            if (!trimmedLine) return;

            if (/^\d+\./.test(trimmedLine)) {
              const listItem = trimmedLine.replace(/^\d+\.\s*/, "");
              restResult.push(
                <p key={`list-${sectionIndex}-${lineIndex}`} className="blog-post-text">
                  {listItem}
                </p>
              );
            } else if (trimmedLine.startsWith("•")) {
              const listItem = trimmedLine.replace(/^•\s*/, "");
              restResult.push(
                <p key={`bullet-${sectionIndex}-${lineIndex}`} className="blog-post-bullet-item">
                  {listItem}
                </p>
              );
            } else if (trimmedLine.startsWith("**") && trimmedLine.endsWith(":**")) {
              const boldText = trimmedLine.replace(/\*\*/g, "");
              restResult.push(
                <p key={`bold-${sectionIndex}-${lineIndex}`} className="blog-post-bold">
                  <strong>{boldText}</strong>
                </p>
              );
            } else {
              restResult.push(
                <p key={`p-${sectionIndex}-${lineIndex}`} className="blog-post-text">
                  {trimmedLine}
                </p>
              );
            }
          });
        } else {
          // Обычная обработка параграфов
          let currentParagraph = "";
          contentLines.forEach((line, lineIndex) => {
            const trimmedLine = line.trim();
            if (!trimmedLine) {
              if (currentParagraph) {
                restResult.push(
                  <p key={`p-${sectionIndex}-${lineIndex}`} className="blog-post-text">
                    {currentParagraph}
                  </p>
                );
                currentParagraph = "";
              }
            } else if (trimmedLine.startsWith("•")) {
              if (currentParagraph) {
                restResult.push(
                  <p key={`p-${sectionIndex}-${lineIndex}-before`} className="blog-post-text">
                    {currentParagraph}
                  </p>
                );
                currentParagraph = "";
              }
              const listItem = trimmedLine.replace(/^•\s*/, "");
              restResult.push(
                <p key={`bullet-${sectionIndex}-${lineIndex}`} className="blog-post-bullet-item">
                  {listItem}
                </p>
              );
            } else if (trimmedLine.startsWith("**") && trimmedLine.endsWith(":**")) {
              if (currentParagraph) {
                restResult.push(
                  <p key={`p-${sectionIndex}-${lineIndex}-before`} className="blog-post-text">
                    {currentParagraph}
                  </p>
                );
                currentParagraph = "";
              }
              const boldText = trimmedLine.replace(/\*\*/g, "");
              restResult.push(
                <p key={`bold-${sectionIndex}-${lineIndex}`} className="blog-post-bold">
                  <strong>{boldText}</strong>
                </p>
              );
            } else {
              if (currentParagraph) {
                currentParagraph += " ";
              }
              currentParagraph += trimmedLine;
            }
          });

          if (currentParagraph) {
            restResult.push(
              <p key={`p-${sectionIndex}-final`} className="blog-post-text">
                {currentParagraph}
              </p>
            );
          }
        }
    });

    return { introText, restContent: restResult };
  };

  return (
    <div className="overflow-x-hidden">
      <Header onOpenModal={handleOpenModal} />
      <main className="blog-post-page">
        <div className="blog-post-container">
          <div className="blog-post-nav">
            <div className="blog-post-nav-content">
              <button className="blog-post-back-button" onClick={handleBack}>
                <svg
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2L2 10L10 18"
                    stroke="#858480"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <h1 className="blog-post-title">{post.title}</h1>
            </div>
          </div>

          <div className="blog-post-content">
            <div className="blog-post-image-wrapper">
              <img
                src={post.image}
                alt={post.title}
                className="blog-post-image"
              />
            </div>
            <div className="blog-post-intro-text">
              <p className="blog-post-intro-paragraph">
                {post.fullContent
                  ? parseContent(post.fullContent).introText
                  : post.description}
              </p>
            </div>
          </div>

          <div className="blog-post-main-content">
            <div className="blog-post-main-content-wrapper">
              {post.fullContent ? (
                parseContent(post.fullContent).restContent
              ) : (
                <p className="blog-post-placeholder">
                  {t.blog.descriptionNotAdded}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <CTABlock />

        {/* Form Block */}
        <FormBlock />

        {/* Map Section */}
        <MapSection />
      </main>
      <Footer />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default BlogPostPage;

