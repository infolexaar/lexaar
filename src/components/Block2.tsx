import React from "react";
import { Link } from "react-router-dom";
import bucatariiImage from "../assets/categories/main/bucatarii.svg";
import paturiImage from "../assets/categories/main/paturi.svg";
import dulapImage from "../assets/categories/main/dulap.svg";
import { useLanguage } from "../contexts/LanguageContext";
import "./Block2.css";

const Block2: React.FC = () => {
  const { t } = useLanguage();
  const categories = [
    { id: 1, title: t.home.block2.bucatarii, slug: "bucatarii", image: bucatariiImage },
    { id: 2, title: t.home.block2.paturi, slug: "paturi", image: paturiImage },
    { id: 3, title: t.home.block2.dulapuriSiComode, slug: "dulapuri-si-comode", image: dulapImage },
  ];

  return (
    <section className="block2-section" id="colectii">
      <div className="block2-container">
        <h2 className="block2-title">{t.home.block2.title}</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="category-item"
            >
              <div className="category-image-wrapper">
                <img
                  src={category.image}
                  alt={category.title}
                  className="category-image"
                />
              </div>
              <h3 className="category-title">{category.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Block2;
