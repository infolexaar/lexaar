import React from "react";
import reviewImage from "../assets/review.svg";
import "./ReviewsBlock.css";

const ReviewsBlock: React.FC = () => {
  const reviews = [
    {
      quote:
        "Mobilierul a fost livrat exact cum am discutat, cu finisaje impecabile. Echipa a fost foarte profesionistă și atentă la fiecare detaliu. Recomand!",
      author: "Maria P., Chișinău",
    },
    {
      quote:
        "Am fost impresionată de seriozitatea și promptitudinea cu care s-au ocupat de proiectul nostru. Bucătăria arată exact cum mi-am dorit.",
      author: "Alexandru M., Rezina",
    },
    {
      quote:
        "Consultanța gratuită m-a convins să lucrez cu ei. M-au ajutat să optimizez spațiul mult mai bine decât îmi imaginam. Sunt foarte mulțumită!",
      author: "Elena R., Orhei",
    },
  ];

  return (
    <section className="reviews-block-section">
      <div className="reviews-block-container">
        {/* Background Image */}
        <div className="reviews-block-background">
          <img
            src={reviewImage}
            alt="Modern Interior"
            className="reviews-block-image"
          />
        </div>

        {/* Content */}
        <div className="reviews-block-content">
          {/* Title */}
          <h2 className="reviews-block-title">Ce spun clienții noștri</h2>

          {/* Cards */}
          <div className="reviews-block-cards">
            {reviews.map((review, index) => (
              <div key={index} className="reviews-block-card">
                {/* Glass Effect Overlay */}
                <div className="reviews-block-card-overlay"></div>

                {/* Card Content */}
                <div className="reviews-block-card-content">
                  <p className="reviews-block-quote">{review.quote}</p>
                  <p className="reviews-block-author">{review.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsBlock;







