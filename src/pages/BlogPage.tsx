import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTABlock from "../components/CTABlock";
import FormBlock from "../components/FormBlock";
import MapSection from "../components/MapSection";
import ContactModal from "../components/ContactModal";
import { useLanguage } from "../contexts/LanguageContext";
import "./BlogPage.css";

// Blog images (Image-0 → post 1, Image-1 → post 2, ..., Image-8 → post 9, image-9 → post 10, ...)
import blogImage1 from "../assets/blog/Image-0.svg";
import blogImage2 from "../assets/blog/Image-1.svg";
import blogImage3 from "../assets/blog/Image-2.svg";
import blogImage4 from "../assets/blog/Image-3.svg";
import blogImage5 from "../assets/blog/Image-4.svg";
import blogImage6 from "../assets/blog/Image-5.svg";
import blogImage7 from "../assets/blog/Image-6.svg";
import blogImage8 from "../assets/blog/Image-7.svg";
import blogImage9 from "../assets/blog/Image-8.svg";
import blogImage10 from "../assets/blog/image-9.png";
import blogImage11 from "../assets/blog/image-10.png";
import blogImage12 from "../assets/blog/Image-11.png";
import blogImage13 from "../assets/blog/Image-12.png";
import blogImage14 from "../assets/blog/Image-13.png";
import blogImage15 from "../assets/blog/Image-14.png";
import blogImage16 from "../assets/blog/image-15.png";
import blogImage17 from "../assets/blog/Image-16.png";
import blogImage18 from "../assets/blog/Image-17.png";
import arrowIcon from "../assets/blog/Icons.svg";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
}

const BlogPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    10: blogImage10,
    11: blogImage11,
    12: blogImage12,
    13: blogImage13,
    14: blogImage14,
    15: blogImage15,
    16: blogImage16,
    17: blogImage17,
    18: blogImage18,
  };

  const allPosts: BlogPost[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((id) => {
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
  const currentPage = Math.min(totalPages, Math.max(1, Number(searchParams.get("page")) || 1));
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = allPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page: number) => {
    setSearchParams({ page: String(page) });
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

