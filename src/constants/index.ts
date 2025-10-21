// Константы проекта

export const COMPANY_INFO = {
  name: "LexAar Bucătării",
  phone: import.meta.env.VITE_COMPANY_PHONE || "+373 78 90 70 07",
  email: import.meta.env.VITE_COMPANY_EMAIL || "info@lexaar.md",
  address: "Chișinău, Moldova",
} as const;

export const BENEFITS = [
  "10.000+ clienți mulțumiți",
  "15+ ani experiență",
  "Proiectare 3D",
  "Proiectare 3D",
  "Montaj gratuit",
] as const;

export const COLORS = {
  primary: "#BF1A1A",
  dark: "#171717",
  white: "#FFFFFF",
} as const;

export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
} as const;
