import { useState } from "react";
import headerImage from "../assets/header.svg";
import checkmarkIcon from "../assets/icons/checkmark.svg";
import LGIcon from "../assets/icons/LG.svg";
import arrowIcon from "../assets/icons/arrow.svg";
import ContactModal from "./ContactModal";
import Header from "./Header";
import { trackButtonClick, trackFacebookEvent } from "../utils/analytics";
import { BENEFITS, COMPANY_INFO } from "../constants";
import "./Hero.css";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSmsShaking, setIsSmsShaking] = useState(false);

  const handleSmsClick = () => {
    setIsSmsShaking(true);

    // Убрать анимацию через 600ms
    setTimeout(() => {
      setIsSmsShaking(false);
    }, 600);

    // Открыть SMS на номер телефона компании
    const phoneNumber = COMPANY_INFO.phone.replace(/\s/g, ""); // Убираем пробелы
    window.location.href = `sms:${phoneNumber}`;
  };

  const benefits = BENEFITS;
  return (
    <div
      className="w-screen relative overflow-x-hidden"
      style={{
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
        minHeight: "100vh",
      }}
    >
      <section className="relative w-full min-h-screen flex items-start">
        {/* Background Image - Full Width */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img
            src={headerImage}
            alt="Modern Kitchen Interior"
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-transparent" />
        </div>

        {/* Header */}
        <Header onOpenModal={() => setIsModalOpen(true)} />

        {/* Content */}
        <div className="hero-content">
          <div className="w-full lg:w-auto">
            {/* Main heading */}
            <h2 className="hero-heading">
              Mobila la comandă.
              <br />
              Design profesionist.
              <br />
              Execuție premium.
            </h2>

            <div style={{ marginBottom: "32px" }}>
              <p className="hero-description">
                Noi ne ocupăm de măsurători, proiectare, fabricație și montajul
                gratuit — tu doar te bucuri de rezultatul final.
              </p>
            </div>

            <button
              className="hero-cta-button"
              onClick={() => {
                trackButtonClick("request_quote_button");
                trackFacebookEvent("InitiateCheckout", {
                  content_name: "Request Quote Button",
                  content_category: "Kitchen Furniture",
                  value: 1,
                  currency: "EUR",
                });
                setIsModalOpen(true);
              }}
            >
              <span>Solicită oferta</span>
              <img
                src={arrowIcon}
                alt="arrow"
                style={{ width: "20px", height: "20px" }}
              />
            </button>

            {/* Benefits Panel - Mobile/Tablet */}
            <div className="hero-benefits-mobile">
              <div className="flex flex-col justify-center w-full h-full gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-[16px] h-[16px] flex-shrink-0 mr-3">
                      <img
                        src={checkmarkIcon}
                        alt="checkmark"
                        className="w-full h-full pointer-events-none"
                      />
                    </div>
                    <span className="text-white font-medium leading-[20px] text-[14px]">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Panel - Desktop */}
        <div className="hero-benefits-panel">
          <div
            className="flex flex-col justify-center w-[221px] h-[168px]"
            style={{ gap: "12px" }}
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <div
                  className="w-[18px] h-[18px] flex-shrink-0"
                  style={{ marginRight: "12px" }}
                >
                  <img
                    src={checkmarkIcon}
                    alt="checkmark"
                    className="w-[18px] h-[18px] pointer-events-none"
                  />
                </div>
                <span className="text-white font-medium leading-[24px] text-[16px]">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SMS Button - Fixed for all resolutions */}
        <div
          className="fixed z-50 flex items-center justify-center w-24 h-24"
          style={{
            bottom: "35px",
            right: "24px",
          }}
        >
          {/* Wave animations */}
          <div className="absolute inset-0 rounded-full border-2 border-[#BF1A1A] animate-pulse-waves"></div>
          <div className="absolute inset-0 rounded-full border-2 border-[#BF1A1A] animate-pulse-waves-delay-1"></div>
          <div className="absolute inset-0 rounded-full border-2 border-[#BF1A1A] animate-pulse-waves-delay-2"></div>

          <button
            className={`w-24 h-24 p-0 m-0 transition-transform duration-150 animate-pulse-gentle relative z-10 ${
              isSmsShaking ? "animate-shake" : ""
            }`}
            onClick={handleSmsClick}
          >
            <img
              src={LGIcon}
              alt="LG"
              className="w-full h-full p-0 m-0"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
                padding: 0,
                margin: 0,
                display: "block",
              }}
            />
          </button>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Hero;
