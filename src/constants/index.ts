// Константы проекта

export const COMPANY_INFO = {
  name: "LexAar Bucătării",
  phone: import.meta.env.VITE_COMPANY_PHONE || "+373 78 90 70 07",
  email: import.meta.env.VITE_COMPANY_EMAIL || "info@lexaar.md",
  address: "Strada Bucovinei 9F, Stăuceni, Chișinău",
} as const;

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/lexaar.md/",
  instagram: "https://www.instagram.com/lexaar.md/",
} as const;

export const getPhoneHref = () => COMPANY_INFO.phone.replace(/\s/g, "");

export const getPhoneDigits = () => getPhoneHref().replace(/\D/g, "");

export const MESSENGER_LINKS = {
  whatsapp: () => `https://wa.me/${getPhoneDigits()}`,
  viber: () => `viber://chat?number=${encodeURIComponent(getPhoneHref())}`,
  messenger: () => `https://m.me/+${getPhoneDigits()}`,
} as const;

export const BENEFITS = [
  "10.000+ clienți mulțumiți",
  "15+ ani experiență",
  "Export internațional",
  "Garanție 5 ani",
  "Parteneriate B2B",
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
