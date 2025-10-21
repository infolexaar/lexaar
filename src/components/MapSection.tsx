import React from "react";
import mapImage from "../assets/map.svg";
import { COMPANY_INFO } from "../constants";

const MapSection: React.FC = () => {
  const handleAddressClick = () => {
    // Открываем карту в новом окне с указанной меткой
    const mapUrl = "https://maps.app.goo.gl/b91ahGUeZL6JSJor9";
    window.open(mapUrl, "_blank");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Locația noastră
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vă așteptăm să discutăm despre bucătăria visurilor voastre. Veniți
              să ne vizitați pentru a vedea calitatea execuției noastre!
            </p>
          </div>

          {/* Блок с картой - десктопная версия */}
          <div
            className="hidden lg:block relative w-full max-w-5xl mx-auto"
            style={{ width: "1249px", height: "496px" }}
          >
            {/* Карта как фон */}
            <img
              src={mapImage}
              alt="Harta locației LexAar Bucătării"
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* Контактная форма слева - точно как на фото */}
            <div
              className="absolute bg-white rounded-2xl"
              style={{
                left: "38px",
                top: "38px",
                width: "420px",
                height: "420px",
                borderRadius: "14px",
                padding: "53px 44px",
              }}
            >
              {/* Контент внутри формы */}
              <div style={{ width: "332px", height: "314px" }}>
                {/* Заголовок Contacte */}
                <h3
                  className="font-medium text-black"
                  style={{
                    fontSize: "50px",
                    lineHeight: "64px",
                    height: "64px",
                    width: "332px",
                    marginBottom: "16px",
                  }}
                >
                  Contacte
                </h3>

                {/* Разделительная линия */}
                <div
                  style={{
                    width: "332px",
                    height: "1px",
                    backgroundColor: "#E8E7E3",
                    marginBottom: "16px",
                  }}
                ></div>

                {/* Адрес */}
                <div
                  className="flex items-start"
                  style={{ marginBottom: "24px" }}
                >
                  <svg
                    className="text-gray-600 mt-1 mr-3 flex-shrink-0"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <button
                    onClick={handleAddressClick}
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-left"
                    style={{
                      fontSize: "16px",
                      lineHeight: "24px",
                      fontWeight: "300",
                    }}
                  >
                    Strada Bucovina 9F, Stăuceni, Chișinău (Port Mall)
                  </button>
                </div>

                {/* Часы работы */}
                <div
                  className="flex items-start"
                  style={{ marginBottom: "24px" }}
                >
                  <svg
                    className="text-gray-600 mt-1 mr-3 flex-shrink-0"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p
                    className="text-gray-600"
                    style={{
                      fontSize: "16px",
                      lineHeight: "24px",
                      fontWeight: "300",
                    }}
                  >
                    Luni-Duminică: 10:00-19:00
                  </p>
                </div>

                {/* Email */}
                <div
                  className="flex items-start"
                  style={{ marginBottom: "16px" }}
                >
                  <svg
                    className="text-gray-600 mt-1 mr-3 flex-shrink-0"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-gray-600 hover:text-red-600 transition-colors duration-200"
                    style={{
                      fontSize: "16px",
                      lineHeight: "24px",
                      fontWeight: "300",
                    }}
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>

                {/* Разделительная линия */}
                <div
                  style={{
                    width: "332px",
                    height: "1px",
                    backgroundColor: "#E8E7E3",
                    marginBottom: "16px",
                  }}
                ></div>

                {/* Кнопка с номером телефона - по центру контейнера */}
                <div className="flex justify-center">
                  <button
                    onClick={() =>
                      window.open(
                        `tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`,
                        "_self"
                      )
                    }
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center"
                    style={{
                      width: "192px",
                      height: "40px",
                      borderRadius: "8px",
                    }}
                  >
                    {COMPANY_INFO.phone}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Мобильная версия - карта и форма вертикально */}
          <div className="lg:hidden space-y-4 pb-8">
            {/* Карта */}
            <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <img
                src={mapImage}
                alt="Harta locației LexAar Bucătării"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: "right center",
                  filter:
                    "contrast(1.5) brightness(1.2) saturate(1.3) sharpness(2)",
                  imageRendering: "crisp-edges",
                  transform: "scale(1)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
                loading="eager"
                decoding="sync"
                width="100%"
                height="100%"
              />
            </div>

            {/* Контактная форма */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              {/* Заголовок Contacte */}
              <h3 className="font-medium text-black text-2xl mb-4">Contacte</h3>

              {/* Разделительная линия */}
              <div
                className="border-t mb-4"
                style={{ borderColor: "#E8E7E3" }}
              ></div>

              {/* Адрес */}
              <div className="flex items-start mb-6">
                <svg
                  className="text-gray-600 mt-1 mr-3 flex-shrink-0"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <button
                  onClick={handleAddressClick}
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-left text-base leading-6 font-light"
                >
                  Strada Bucovina 9F, Stăuceni, Chișinău (Port Mall)
                </button>
              </div>

              {/* Часы работы */}
              <div className="flex items-start mb-6">
                <svg
                  className="text-gray-600 mt-1 mr-3 flex-shrink-0"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-gray-600 text-base leading-6 font-light">
                  Luni-Duminică: 10:00-19:00
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start mb-4">
                <svg
                  className="text-gray-600 mt-1 mr-3 flex-shrink-0"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-gray-600 hover:text-red-600 transition-colors duration-200 text-base leading-6 font-light"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              {/* Разделительная линия */}
              <div
                className="border-t mb-4"
                style={{ borderColor: "#E8E7E3" }}
              ></div>

              {/* Кнопка с номером телефона */}
              <div className="flex justify-center">
                <button
                  onClick={() =>
                    window.open(
                      `tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`,
                      "_self"
                    )
                  }
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center px-6 py-3"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {COMPANY_INFO.phone}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
