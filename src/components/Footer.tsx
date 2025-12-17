import React from "react";
import logoIcon from "../assets/icons/Logo.svg";
import mailIcon from "../assets/icons/mail.svg";
import phoneIcon from "../assets/icons/phone.svg";
import facebookIcon from "../assets/icons/messengers/facebook.svg";
import instagramIcon from "../assets/icons/messengers/inst.svg";
import telegramIcon from "../assets/icons/messengers/tg.svg";
import whatsappIcon from "../assets/icons/messengers/watsapp.svg";
import viberIcon from "../assets/icons/messengers/viber.svg";
import messengerIcon from "../assets/icons/messengers/messenger.svg";
import { COMPANY_INFO } from "../constants";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-container-top">
          {/* Left Column - Logo and Info */}
          <div className="footer-left">
          <div className="footer-logo">
            <img src={logoIcon} alt="LexAar" className="footer-logo-image" />
          </div>
          <p className="footer-description">
            De peste 15 ani creăm mobilier la comandă, cu soluții adaptate
            oricărui spațiu și buget.
          </p>
          <div className="footer-contacts">
            <a
              href="mailto:infolexaar@gmail.com"
              className="footer-contact-item"
            >
              <img src={mailIcon} alt="email" className="footer-contact-icon" />
              <span className="footer-contact-text">infolexaar@gmail.com</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
              className="footer-contact-item"
            >
              <img src={phoneIcon} alt="phone" className="footer-contact-icon" />
              <span className="footer-contact-text">{COMPANY_INFO.phone}</span>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Strada+Bucovinei+9F+Stăuceni+Chișinău"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-item"
            >
              <svg
                className="footer-contact-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                  fill="white"
                />
              </svg>
              <span className="footer-contact-text">
                {COMPANY_INFO.address}
              </span>
            </a>
          </div>
        </div>

        {/* Middle Column - Social Links */}
        <div className="footer-middle">
          <h3 className="footer-section-title">Social</h3>
          <ul className="footer-links">
            <li>
              <a
                href="https://www.instagram.com/lexaar.md/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column - Company Links */}
        <div className="footer-right">
          <h3 className="footer-section-title">Companie</h3>
          <ul className="footer-links">
            <li>
              <a href="#" className="footer-link">
                Despre noi
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Servicii
              </a>
            </li>
          </ul>
        </div>
        </div>

        {/* Separator Line */}
        <div className="footer-separator"></div>
      </div>

      {/* Bottom Section - Copyright and Social Icons */}
      <div className="footer-bottom">
        <p className="footer-copyright">© 2025 MOBILIA</p>
        <div className="footer-social-icons">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="Facebook"
          >
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/lexaar.md/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="Instagram"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a
            href={`https://t.me/${COMPANY_INFO.phone.replace(/\s/g, "").replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="Telegram"
          >
            <img src={telegramIcon} alt="Telegram" />
          </a>
          <a
            href={`https://wa.me/${COMPANY_INFO.phone.replace(/\s/g, "").replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="WhatsApp"
          >
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <a
            href={`viber://chat?number=${COMPANY_INFO.phone.replace(/\s/g, "").replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="Viber"
          >
            <img src={viberIcon} alt="Viber" />
          </a>
          <a
            href={`https://m.me/${COMPANY_INFO.phone.replace(/\s/g, "").replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="Messenger"
          >
            <img src={messengerIcon} alt="Messenger" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

