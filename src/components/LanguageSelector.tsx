import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "./LanguageSelector.css";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: "RO" | "EN" | "RU"; label: string }[] = [
    { code: "RO", label: "RO" },
    { code: "EN", label: "EN" },
    { code: "RU", label: "RU" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageSelect = (lang: "RO" | "EN" | "RU") => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button
        className="language-selector-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        {language}
      </button>
      {isOpen && (
        <div className="language-selector-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-selector-option ${
                language === lang.code ? "active" : ""
              }`}
              onClick={() => handleLanguageSelect(lang.code)}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;




