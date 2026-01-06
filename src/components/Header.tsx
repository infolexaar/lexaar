import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/Logo.svg";
import closeButtonIcon from "../assets/categories/main/CloseButton.svg";
import phoneIcon from "../assets/icons/phone.svg";
import type { HeaderProps } from "../types";
import { COMPANY_INFO } from "../constants";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "../contexts/LanguageContext";
import "./Header.css";

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Main Navigation */}
      <div className="header-main">
        {/* Burger Menu Button */}
        <button
          className="header-burger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <img
              src={closeButtonIcon}
              alt="Close"
              className="header-burger-close-icon"
            />
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        {/* Logo */}
        <Link to="/" className="header-logo-wrapper" onClick={closeMenu}>
          <img
            src={Logo}
            alt="LexAar Bucătării"
            className="header-logo-image"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="header-nav">
          <Link to="/servicii" className="header-nav-link">
            {t.header.servicii}
          </Link>
          <Link to="/despre-noi" className="header-nav-link">
            {t.header.despreNoi}
          </Link>
          <Link to="/blog" className="header-nav-link">
            {t.header.blog}
          </Link>
        </nav>

        {/* Right Side - Phone, CTA, Language */}
        <div className="header-right">
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
            className="header-phone"
          >
            {COMPANY_INFO.phone}
          </a>
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
            className="header-phone-icon"
            aria-label="Call us"
          >
            <img src={phoneIcon} alt="phone" />
          </a>
          <button className="header-cta-button" onClick={onOpenModal}>
            {t.header.solicitOferta}
          </button>
          <LanguageSelector />
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`header-mobile-menu ${isMenuOpen ? "header-mobile-menu-open" : ""}`}
          onClick={closeMenu}
        >
          <div
            className="header-mobile-menu-content"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="header-mobile-nav">
              <Link
                to="/servicii"
                className="header-mobile-nav-link"
                onClick={closeMenu}
              >
                {t.header.servicii}
              </Link>
              <Link
                to="/despre-noi"
                className="header-mobile-nav-link"
                onClick={closeMenu}
              >
                {t.header.despreNoi}
              </Link>
              <Link
                to="/blog"
                className="header-mobile-nav-link"
                onClick={closeMenu}
              >
                {t.header.blog}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
