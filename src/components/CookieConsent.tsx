import React, { useState, useEffect } from "react";
import { initAnalyticsAfterConsent } from "../utils/analytics";
import { initFirebaseAnalytics } from "../config/firebase";

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    // Проверяем, дал ли пользователь согласие на куки
    const cookieConsent = localStorage.getItem("cookieConsent");

    if (!cookieConsent) {
      // Если согласие не дано, показываем попап с блюром
      setIsBlurred(true);
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Сохраняем согласие в localStorage
    localStorage.setItem("cookieConsent", "accepted");
    // Инициализируем аналитику после согласия
    initAnalyticsAfterConsent();
    initFirebaseAnalytics();
    setIsVisible(false);
    setIsBlurred(false);
  };

  const handleReject = () => {
    // Показываем сообщение об отказе и перенаправляем
    alert(
      "Pentru a utiliza site-ul, trebuie să acceptați utilizarea cookie-urilor."
    );
  };

  const handlePrivacyPolicy = () => {
    // Здесь можно добавить ссылку на политику конфиденциальности
    alert("Politica de confidențialitate va fi disponibilă în curând.");
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Blur overlay */}
      {isBlurred && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 animate-fade-in"
          style={{ backdropFilter: "blur(4px)" }}
        />
      )}

      {/* Cookie consent popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative animate-fade-in">
          {/* Close button */}
          <button
            onClick={handleReject}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
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

          {/* Content */}
          <div className="p-6 pt-8">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#BF1A1A] rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-900 text-center mb-4">
              Utilizarea Cookie-urilor
            </h2>

            {/* Message */}
            <p className="text-gray-700 text-sm leading-relaxed mb-6 text-center">
              Utilizăm cookie-uri pentru a ne asigura că vă oferim cea mai bună
              experiență pe site-ul nostru. Dacă continuați să utilizați acest
              site, vom presupune că sunteți mulțumit de acest lucru.
            </p>

            {/* Privacy policy link */}
            <p className="text-gray-600 text-xs text-center mb-6">
              Pentru mai multe informații, consultați{" "}
              <button
                onClick={handlePrivacyPolicy}
                className="text-[#BF1A1A] hover:underline font-medium"
              >
                Politica de confidențialitate
              </button>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleReject}
                className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Refuz
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-3 bg-[#BF1A1A] text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                De acord
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
