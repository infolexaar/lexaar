import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/Logo.svg";
import type { HeaderProps } from "../types";
import { COMPANY_INFO } from "../constants";
import "./Header.css";

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Main Navigation */}
      <div className="header-main">
        {/* Logo */}
        <Link to="/" className="header-logo-wrapper">
          <img
            src={Logo}
            alt="LexAar Bucătării"
            className="header-logo-image"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="header-nav">
          <a href="#servicii" className="header-nav-link">
            Servicii
          </a>
          <a href="#despre" className="header-nav-link">
            Despre noi
          </a>
          <a href="#blog" className="header-nav-link">
            Blog
          </a>
        </nav>

        {/* Right Side - Phone, CTA, Language */}
        <div className="header-right">
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`}
            className="header-phone"
          >
            {COMPANY_INFO.phone}
          </a>
          <button className="header-cta-button" onClick={onOpenModal}>
            Solicită ofertă
          </button>
          <button className="header-language">RO</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
