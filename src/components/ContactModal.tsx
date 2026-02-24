import React from "react";
import arrowIcon from "../assets/icons/arrow.svg";
import nameIcon from "../assets/icons/name.svg";
import phoneIcon from "../assets/icons/phone.svg";
import mailIcon from "../assets/icons/mail.svg";
import backgroundImage from "../assets/backgrContact.jpg";
import type { ContactModalProps } from "../types";
import { useContactForm } from "../hooks/useContactForm";
import { useLanguage } from "../contexts/LanguageContext";

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const {
    formData,
    isSubmitting,
    isSubmitted,
    handleSubmit,
    handleChange,
  } = useContactForm({
    onSuccess: onClose,
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl mx-4">
        {/* Background Image Container */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "500px",
            width: "100%",
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-30 rounded-full p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Form Panel - Responsive */}
          <div className="absolute top-0 right-0 h-full w-full md:w-1/2 lg:w-1/3 lg:min-w-[400px]">
            {/* Glass Effect Overlay for Form */}
            <div
              className="absolute inset-0"
              style={{
                background: "rgba(0, 0, 0, 0.6)",
                backdropFilter: "blur(10px)",
              }}
            />

            {/* Form Content */}
            <div className="relative z-10 p-4 sm:p-6 md:p-8 h-full flex flex-col justify-center">
              {/* Title */}
              <h2 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                {t.contactSection.formTitle}
              </h2>

              {/* Success Message */}
              {isSubmitted && (
                <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-20">
                  {/* Compact Success Card */}
                  <div className="bg-white rounded-2xl shadow-2xl p-6 mx-4 max-w-sm w-full text-center">
                    {/* Success Icon */}
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
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

                    {/* Success Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t.modal.successTitle}
                    </h3>

                    {/* Success Message */}
                    <p className="text-gray-600 text-sm mb-4">
                      {t.modal.successMessage}
                    </p>

                    {/* Compact Details */}
                    <div className="bg-gray-50 rounded-lg p-3 text-left mb-4">
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-500">{t.modal.from}</span>
                          <span className="font-medium text-gray-900">
                            {formData.name}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">{t.modal.phone}</span>
                          <span className="font-medium text-gray-900">
                            {formData.phone}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">{t.modal.date}</span>
                          <span className="font-medium text-gray-900">
                            {new Date().toLocaleDateString(
                              language === "RO"
                                ? "ro-RO"
                                : language === "EN"
                                ? "en-US"
                                : "ru-RU"
                            )}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Auto-close notice */}
                    <div className="text-xs text-gray-500">
                      {t.modal.autoClose}
                    </div>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    {t.form.name}
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <img
                        src={nameIcon}
                        alt="name"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.form.name}
                      className="w-full pl-10 pr-4 py-2 sm:py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                      disabled={isSubmitting || isSubmitted}
                      required
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    {t.form.phone} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <img
                        src={phoneIcon}
                        alt="phone"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.form.phone}
                      className="w-full pl-10 pr-4 py-2 sm:py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                      disabled={isSubmitting || isSubmitted}
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    {t.form.email}
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <img
                        src={mailIcon}
                        alt="mail"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.form.email}
                      className="w-full pl-10 pr-4 py-2 sm:py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                      disabled={isSubmitting || isSubmitted}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-gradient-to-b from-red-500 to-red-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg flex items-center justify-center space-x-2 hover:from-red-600 hover:to-red-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
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
      </div>
    </div>
  );
};

export default ContactModal;
