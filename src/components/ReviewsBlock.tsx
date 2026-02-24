import React from "react";
import reviewImage from "../assets/review.svg";
import { useLanguage } from "../contexts/LanguageContext";
import "./ReviewsBlock.css";

const ReviewsBlock: React.FC = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      quote: t.reviews.review1.quote,
      author: t.reviews.review1.author,
    },
    {
      quote: t.reviews.review2.quote,
      author: t.reviews.review2.author,
    },
    {
      quote: t.reviews.review3.quote,
      author: t.reviews.review3.author,
    },
  ];

  return (
    <section className="reviews-block-section" id="recenzii">
      <div className="reviews-block-container">
        {/* Content */}
        <div className="reviews-block-content">
          {/* Title */}
          <h2 className="reviews-block-title">{t.reviews.title}</h2>

          {/* Background Image with Cards inside */}
          <div className="reviews-block-background">
            <img
              src={reviewImage}
              alt="Modern Interior"
              className="reviews-block-image"
            />

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
      </div>
    </section>
  );
};

export default ReviewsBlock;
