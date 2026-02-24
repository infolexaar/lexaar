import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { initAnalytics } from "./utils/analytics";

// Initialize analytics when the app loads
initAnalytics();

// Чтобы при переходе на страницу (например /colors) всегда открывалось с верха
if (typeof history !== "undefined" && "scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
