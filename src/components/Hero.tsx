import { useState } from "react";
import headerImage from "../assets/header.svg";
import checkmarkIcon from "../assets/icons/checkmark.svg";
import LGIcon from "../assets/icons/LG.svg";
import arrowIcon from "../assets/icons/arrow.svg";
import ContactModal from "./ContactModal";
import Header from "./Header";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSmsShaking, setIsSmsShaking] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleSmsClick = () => {
    setIsSmsShaking(true);
    setShowComingSoon(true);

    // Убрать анимацию через 600ms
    setTimeout(() => {
      setIsSmsShaking(false);
    }, 600);

    // Убрать сообщение через 2 секунды
    setTimeout(() => {
      setShowComingSoon(false);
    }, 2000);
  };

  const benefits = [
    "10.000+ clienți mulțumiți",
    "15+ ani experiență",
    "Proiectare 3D",
    "Garanție 5 ani",
    "Montaj gratuit",
  ];
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
        <div className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row items-start pt-[160px] lg:pt-[170px] px-4 sm:px-6 lg:px-8 lg:pl-[104px] pb-8">
          <div className="w-full lg:w-auto">
            {/* Main heading */}
            <h2
              className="text-white font-bold leading-[48px] sm:leading-[60px] lg:leading-[80px] text-[35px] sm:text-[50px] lg:text-[60px]"
              style={{ marginBottom: "32px" }}
            >
              Mobila la comandă.
              <br />
              Design profesionist.
              <br />
              Execuție premium.
            </h2>

            <div style={{ marginBottom: "32px" }}>
              <p className="text-gray-200 font-medium leading-[24px] text-[17px] w-[326px] md:w-[504px] lg:w-[732px] xl:w-[797px]">
                Noi ne ocupăm de măsurători, proiectare, fabricație și montajul
                gratuit — tu doar te bucuri de rezultatul final.
              </p>
            </div>

            <button
              className="bg-[#BF1A1A] text-white hover:bg-red-700 transition-colors font-medium flex items-center justify-center animate-pulse-gentle"
              style={{
                borderRadius: "8px",
                width: "251px",
                height: "64px",
                padding: "20px 28px",
                marginBottom: "32px",
              }}
              onClick={() => setIsModalOpen(true)}
            >
              <span
                className="text-white font-medium"
                style={{
                  width: "163px",
                  height: "24px",
                  fontSize: "20px",
                  lineHeight: "24px",
                }}
              >
                Solicită oferta
              </span>
              <div style={{ width: "12px" }}></div>
              <img
                src={arrowIcon}
                alt="arrow"
                style={{ width: "20px", height: "20px" }}
              />
            </button>

            {/* Benefits Panel and SMS Button - Mobile/Tablet */}
            <div
              className="lg:hidden flex justify-end relative pr-2"
              style={{ marginBottom: "120px" }}
            >
              <div
                className="relative w-[327px] h-[192px] sm:w-[269px] sm:h-[216px] lg:w-[269px] lg:h-[216px] xl:w-[269px] xl:h-[216px]"
                style={{
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(7px) saturate(120%)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
                  padding: "16px",
                }}
              >
                <div className="flex flex-col justify-center w-full h-full gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] flex-shrink-0 mr-3">
                        <img
                          src={checkmarkIcon}
                          alt="checkmark"
                          className="w-full h-full pointer-events-none"
                        />
                      </div>
                      <span className="text-white font-medium leading-[20px] text-[14px] sm:leading-[24px] sm:text-[16px]">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Panel */}
        <div
          className="absolute z-40 hidden lg:block lg:w-[269px] lg:h-[216px] xl:w-[269px] xl:h-[216px]"
          style={{
            bottom: "86px",
            right: "104px",
            borderRadius: "12px",
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(7px) saturate(120%)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
            padding: "24px",
          }}
        >
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

          {/* Coming Soon Message */}
          {showComingSoon && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap animate-fade-in">
              În curând...
            </div>
          )}

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
