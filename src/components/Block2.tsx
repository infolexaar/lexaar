import React from "react";
import bucatariiImage from "../assets/categories/main/bucatarii.svg";
import paturiImage from "../assets/categories/main/paturi.svg";
import dulapImage from "../assets/categories/main/dulap.svg";
import "./Block2.css";

const Block2: React.FC = () => {
  const categories = [
    { image: bucatariiImage, title: "Bucătării" },
    { image: paturiImage, title: "Paturi" },
    { image: dulapImage, title: "Dulapuri și Comode" },
  ];

  return (
    <section className="block2-section">
      <div className="block2-container">
        <h3 className="block2-title">Descoperă colecțiile noastre</h3>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="category-item"
              onClick={() => {
                // TODO: Add routing to category page
                console.log(`Navigate to ${category.title}`);
              }}
            >
              <div className="category-image-wrapper">
                <img
                  src={category.image}
                  alt={category.title}
                  className="category-image"
                />
              </div>
              <p className="category-title">{category.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Block2;
