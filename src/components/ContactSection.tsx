import React, { useState, useEffect } from "react";
import arrowIcon from "../assets/icons/arrow.svg";
import nameIcon from "../assets/icons/name.svg";
import phoneIcon from "../assets/icons/phone.svg";
import mailIcon from "../assets/icons/mail.svg";
import backgroundImage from "../assets/backgrContact.svg";
import contact375Image from "../assets/contact375.svg";
import { useContactForm } from "../hooks/useContactForm";
import { useLanguage } from "../contexts/LanguageContext";
import "./ContactSection.css";

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const {
    formData,
    isSubmitting,
    isSubmitted,
    handleSubmit,
    handleChange,
  } = useContactForm();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 375);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const currentBackgroundImage = isMobile ? contact375Image : backgroundImage;

  return (
    <section className="contact-section" id="contact">
      <div className="contact-section-container">
        {/* Background Image */}
        <div className="contact-section-background">
          <img
            src={currentBackgroundImage}
            alt="Modern Kitchen Interior"
            className="contact-section-image"
          />
          {/* Overlay for better text readability */}
          <div className="contact-section-overlay"></div>
        </div>

        {/* Text Content - Left Side */}
        <div className="contact-section-text">
          <h2 className="contact-section-title">
            {t.contactSection.title}
          </h2>
          <p className="contact-section-description">
            {t.contactSection.description}
          </p>
        </div>

        {/* Form Panel - Right Side */}
        <div className="contact-section-form-wrapper">
          {/* Glass Effect Overlay for Form */}
          <div className="contact-section-form-overlay"></div>

          {/* Form Content */}
          <div className="contact-section-form-content">
            {/* Title */}
            <h3 className="contact-section-form-title">
              {t.contactSection.formTitle}
            </h3>

            {/* Success Message */}
            {isSubmitted && (
              <div className="contact-section-success">
                <div className="contact-section-success-card">
                  <div className="contact-section-success-icon">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="contact-section-success-title">
                    {t.contactSection.successTitle}
                  </h4>
                  <p className="contact-section-success-message">
                    {t.contactSection.successMessage}
                  </p>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="contact-section-form">
              {/* Name Field */}
              <div className="contact-section-field">
                <label className="contact-section-label">{t.form.name}</label>
                <div className="contact-section-input-wrapper">
                  <div className="contact-section-input-icon">
                    <img src={nameIcon} alt="name" className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.form.name}
                    className="contact-section-input"
                    disabled={isSubmitting || isSubmitted}
                    required
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="contact-section-field">
                <label className="contact-section-label">
                  {t.form.phone} <span className="contact-section-required">*</span>
                </label>
                <div className="contact-section-input-wrapper">
                  <div className="contact-section-input-icon">
                    <img src={phoneIcon} alt="phone" className="w-5 h-5" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.form.phone}
                    className="contact-section-input"
                    disabled={isSubmitting || isSubmitted}
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="contact-section-field">
                <label className="contact-section-label">{t.form.email}</label>
                <div className="contact-section-input-wrapper">
                  <div className="contact-section-input-icon">
                    <img src={mailIcon} alt="mail" className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.form.email}
                    className="contact-section-input"
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="contact-section-button"
              >
                {isSubmitting ? (
                  <>
                    <div className="contact-section-spinner"></div>
                    <span>{t.form.sending}</span>
                  </>
                ) : (
                  <>
                    <span>{t.form.send}</span>
                    <img src={arrowIcon} alt="arrow" className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
