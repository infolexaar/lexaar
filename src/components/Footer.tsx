import React from "react";
import logoIcon from "../assets/icons/Logo.svg";
import mailIcon from "../assets/icons/mail.svg";
import phoneIcon from "../assets/icons/phone.svg";
import facebookIcon from "../assets/icons/messengers/facebook.svg";
import instagramIcon from "../assets/icons/messengers/inst.svg";
import whatsappIcon from "../assets/icons/messengers/watsapp.svg";
import viberIcon from "../assets/icons/messengers/viber.svg";
import messengerIcon from "../assets/icons/messengers/messenger.svg";
import { COMPANY_INFO, MESSENGER_LINKS, SOCIAL_LINKS } from "../constants";
import { useLanguage } from "../contexts/LanguageContext";
import "./Footer.css";

const LocationIcon = () => (
  <svg
    className="footer-contact-icon"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
      fill="white"
    />
  </svg>
);

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer-section" id="contacte">
      <div className="footer-container">
        <div className="footer-container-top">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={logoIcon} alt="LexAar" className="footer-logo-image" />
            </div>
            <p className="footer-description">{t.footer.description}</p>
            <div className="footer-contacts">
              <a href="mailto:infolexaar@gmail.com" className="footer-contact-item">
                <img src={mailIcon} alt="" className="footer-contact-icon" />
                <span className="footer-contact-text">infolexaar@gmail.com</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
                className="footer-contact-item"
              >
                <img src={phoneIcon} alt="" className="footer-contact-icon" />
                <span className="footer-contact-text">{COMPANY_INFO.phone}</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Strada+Bucovinei+9F+Stăuceni+Chișinău"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <LocationIcon />
                <span className="footer-contact-text">{t.common.addressShowroom}</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Str.+M.+Sadoveanu+42%2F5+Chișinău"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item footer-contact-item--stacked"
              >
                <LocationIcon />
                <span className="footer-contact-text">
                  <span className="footer-contact-label">{t.common.productionLabel}</span>
                  {t.common.addressProduction}
                </span>
              </a>
            </div>
          </div>

          <div className="footer-middle">
            <h3 className="footer-section-title">{t.footer.social}</h3>
            <ul className="footer-links">
              <li>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-right">
            <h3 className="footer-section-title">{t.footer.company}</h3>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  {t.footer.aboutUs}
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  {t.footer.blog}
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  {t.footer.services}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-separator"></div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">{t.footer.copyright}</p>
        <div className="footer-social-icons">
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="Facebook"
          >
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="Instagram"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a
            href={MESSENGER_LINKS.whatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="WhatsApp"
          >
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <a
            href={MESSENGER_LINKS.viber()}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="Viber"
          >
            <img src={viberIcon} alt="Viber" />
          </a>
          <a
            href={MESSENGER_LINKS.messenger()}
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
