import React, { useState } from "react";
import arrowIcon from "../assets/icons/arrow.svg";
import nameIcon from "../assets/icons/name.svg";
import phoneIcon from "../assets/icons/phone.svg";
import mailIcon from "../assets/icons/mail.svg";
import { trackFormSubmission, trackFacebookEvent } from "../utils/analytics";
import type { ContactModalProps, FormData } from "../types";
import { sendContactEmail } from "../services/firebaseEmailService";

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track form submission
    trackFormSubmission("contact_form");
    trackFacebookEvent("Lead", {
      content_name: "Contact Form Submission",
      content_category: "Kitchen Furniture",
      value: 1,
      currency: "EUR",
    });

    try {
      // Отправляем email
      const emailSent = await sendContactEmail({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: "Cerere de ofertă pentru bucătării la comandă",
      });

      if (emailSent) {
        setIsSubmitted(true);

        // Автоматически закрыть модалку через 3 секунды
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", phone: "", email: "" });
          onClose();
        }, 3000);
      } else {
        alert(
          "A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou."
        );
      }
    } catch {
      alert(
        "A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
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
            backgroundImage: "url('/src/assets/backgrContact.svg')",
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
                Începe transformarea bucătăriei tale
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
                      Mesajul a fost trimis!
                    </h3>

                    {/* Success Message */}
                    <p className="text-gray-600 text-sm mb-4">
                      Vă mulțumim! Vă vom contacta în cel mai scurt timp
                      posibil.
                    </p>

                    {/* Compact Details */}
                    <div className="bg-gray-50 rounded-lg p-3 text-left mb-4">
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-500">De la:</span>
                          <span className="font-medium text-gray-900">
                            {formData.name}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Telefon:</span>
                          <span className="font-medium text-gray-900">
                            {formData.phone}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Data:</span>
                          <span className="font-medium text-gray-900">
                            {new Date().toLocaleDateString("ro-RO")}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Auto-close notice */}
                    <div className="text-xs text-gray-500">
                      Se va închide automat...
                    </div>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Nume, Prenume
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
                      placeholder="Nume, Prenume"
                      className="w-full pl-10 pr-4 py-2 sm:py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                      disabled={isSubmitting || isSubmitted}
                      required
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Telefon <span className="text-red-500">*</span>
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
                      placeholder="Telefon"
                      className="w-full pl-10 pr-4 py-2 sm:py-3 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                      disabled={isSubmitting || isSubmitted}
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email
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
                      placeholder="Email"
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
                      <span>Se trimite...</span>
                    </>
                  ) : (
                    <>
                      <span>Trimite</span>
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
