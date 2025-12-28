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

  // Все статьи блога
  const allPosts: BlogPost[] = [
    {
      id: 1,
      title: "Cum aleg materialul potrivit pentru mobila mea?",
      description:
        "Alegerea materialului potrivit depinde de mai mulți factori: buget, durabilitate, stilul dorit și...",
      image: blogImage1,
    },
    {
      id: 2,
      title: "Ce culori și finisaje sunt potrivite pentru camerele mici?",
      description:
        "Culorile deschise, neutre sau pastelate fac ca încăperile mici să pară mai spațioase și...",
      image: blogImage2,
    },
    {
      id: 3,
      title: "Cum aleg între mobilier modular și personalizat?",
      description:
        "Mobilierul modular este o soluție rapidă și accesibilă, ideal pentru spațiile standard...",
      image: blogImage3,
    },
    {
      id: 4,
      title: "Cum se desfășoară procesul de comandă a mobilei la comandă?",
      description:
        "Procesul începe cu consultanța inițială, unde se discută preferințele de design...",
      image: blogImage4,
    },
    {
      id: 5,
      title: "Cum întrețin mobila din MDF sau lemn masiv?",
      description:
        "Întreținerea corectă prelungește durata de viață a mobilierului și păstrează aspectul său.",
      image: blogImage5,
    },
    {
      id: 6,
      title: "Ce trebuie să știu despre combinarea diferitelor materiale?",
      description:
        "Combinarea MDF, lemn și sticlă trebuie făcută ținând cont de rezistența și compatibilitatea...",
      image: blogImage6,
    },
    {
      id: 7,
      title: "Cum planific iluminatul în camere cu mobilă personalizată?",
      description:
        "Iluminatul trebuie să fie funcțional și estetic. Spoturile și benzile LED pot evidenția anumite...",
      image: blogImage7,
    },
    {
      id: 8,
      title: "Ce garanție oferă mobila la comandă și cum funcționează serviciile post-livrare?",
      description:
        "Garanția acoperă defectele de fabricație și problemele de calitate care apar în mod normal...",
      image: blogImage8,
    },
    {
      id: 9,
      title: "Cum pot evalua calitatea unei mobile la comandă înainte de a o comanda?",
      description:
        "Pentru a evalua calitatea mobilei, verifică tipul de materiale folosite, grosimea și densitatea plăcilor...",
      image: blogImage9,
    },
  ];

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
      <main className="blog-page" style={{ marginTop: "82px" }}>
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

