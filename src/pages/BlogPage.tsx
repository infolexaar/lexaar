import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTABlock from "../components/CTABlock";
import FormBlock from "../components/FormBlock";
import MapSection from "../components/MapSection";
import ContactModal from "../components/ContactModal";
import { useLanguage } from "../contexts/LanguageContext";
import "./BlogPage.css";

// Blog images
import blogImage1 from "../assets/blog/Image-1.svg";
import blogImage2 from "../assets/blog/Image-2.svg";
import blogImage3 from "../assets/blog/Image-3.svg";
import blogImage4 from "../assets/blog/Image-4.svg";
import blogImage5 from "../assets/blog/Image-5.svg";
import blogImage6 from "../assets/blog/Image-6.svg";
import blogImage7 from "../assets/blog/Image-7.svg";
import blogImage8 from "../assets/blog/Image-8.svg";
import blogImage9 from "../assets/blog/Image.svg";
import arrowIcon from "../assets/blog/Icons.svg";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
}

const BlogPage: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useLanguage();

  const handleOpenModal = () => {
    setIsModalOpen(true);
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

  const allPosts: BlogPost[] = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => {
    const key = String(id);
    const post = t.blog.posts[key];
    return {
      id,
      title: post?.title ?? "",
      description: post?.description ?? "",
      image: imageById[id],
    };
  });

  const postsPerPage = 9;
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = allPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // Генерация номеров страниц для пагинации
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="overflow-x-hidden">
      <Header onOpenModal={handleOpenModal} />
      <main className="blog-page">
        {/* Blog Section */}
        <section className="blog-section">
          <div className="blog-container">
            <h1 className="blog-title">{t.blog.title}</h1>
            <div className="blog-grid">
              {currentPosts.map((post) => (
                <article
                  key={post.id}
                  className="blog-card"
                  onClick={() => navigate(`/blog/${post.id}`)}
                >
                  <div className="blog-card-image-wrapper">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="blog-card-image"
                    />
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-card-title-wrapper">
                      <h2 className="blog-card-title">{post.title}</h2>
                      <img
                        src={arrowIcon}
                        alt="Arrow"
                        className="blog-card-arrow-inline"
                      />
                    </div>
                    <p className="blog-card-description">{post.description}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="blog-pagination">
                <div className="pagination-numbers">
                  {getPageNumbers().map((page, index) => {
                    if (page === "...") {
                      return (
                        <span
                          key={`ellipsis-${index}`}
                          className="pagination-ellipsis"
                        >
                          ...
                        </span>
                      );
                    }
                    return (
                      <button
                        key={page}
                        className={`pagination-button ${
                          currentPage === page ? "active" : ""
                        }`}
                        onClick={() => handlePageChange(page as number)}
                      >
                        {page}
                      </button>
                    );
                  })}
                </div>
                <button
                  className={`pagination-next ${
                    currentPage >= totalPages ? "disabled" : ""
                  }`}
                  onClick={handleNextPage}
                  disabled={currentPage >= totalPages}
                >
                  {t.blog.next} →
                </button>
              </div>
            )}
          </div>
        </section>

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

export default BlogPage;

