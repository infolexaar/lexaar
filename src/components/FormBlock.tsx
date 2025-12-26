import React from "react";
import arrowIcon from "../assets/icons/arrow.svg";
import nameIcon from "../assets/icons/name.svg";
import phoneIcon from "../assets/icons/phone.svg";
import mailIcon from "../assets/icons/mail.svg";
import { useContactForm } from "../hooks/useContactForm";
import { useLanguage } from "../contexts/LanguageContext";
import "./FormBlock.css";

const FormBlock: React.FC = () => {
  const { t } = useLanguage();
  const {
    formData,
    isSubmitting,
    isSubmitted,
    handleSubmit,
    handleChange,
  } = useContactForm();

  return (
    <section className="form-block-section">
      <div className="form-block-container">
        <div className="form-block-content">
          {/* Текст слева */}
          <div className="form-block-text">
            <h2 className="form-block-title">{t.form.title}</h2>
            <p className="form-block-description">{t.form.subtitle}</p>
          </div>

          {/* Форма справа */}
          <div className="form-block-form-wrapper">
            {/* Success Message */}
            {isSubmitted && (
              <div className="form-block-success">
                <div className="form-block-success-card">
                  <div className="form-block-success-icon">
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
                  <h4 className="form-block-success-title">
                    {t.form.successTitle}
                  </h4>
                  <p className="form-block-success-message">
                    {t.form.successMessage}
                  </p>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="form-block-form">
              {/* Name Field */}
              <div className="form-block-field">
                <label className="form-block-label">
                  {t.form.name} <span className="form-block-required">*</span>
                </label>
                <div className="form-block-input-wrapper">
                  <div className="form-block-input-icon">
                    <img src={nameIcon} alt="name" className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.form.name}
                    className="form-block-input"
                    disabled={isSubmitting || isSubmitted}
                    required
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="form-block-field">
                <label className="form-block-label">
                  {t.form.phone} <span className="form-block-required">*</span>
                </label>
                <div className="form-block-input-wrapper">
                  <div className="form-block-input-icon">
                    <img src={phoneIcon} alt="phone" className="w-5 h-5" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.form.phone}
                    className="form-block-input"
                    disabled={isSubmitting || isSubmitted}
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="form-block-field">
                <label className="form-block-label">{t.form.email}</label>
                <div className="form-block-input-wrapper">
                  <div className="form-block-input-icon">
                    <img src={mailIcon} alt="mail" className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.form.email}
                    className="form-block-input"
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="form-block-button"
              >
                {isSubmitting ? (
                  <>
                    <div className="form-block-spinner"></div>
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

export default FormBlock;

