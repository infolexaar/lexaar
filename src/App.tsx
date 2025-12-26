import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import ColorPage from "./pages/ColorPage";
import ServiciiPage from "./pages/ServiciiPage";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/category/:category/:itemId" element={<ProductPage />} />
          <Route path="/colors" element={<ColorPage />} />
          <Route path="/servicii" element={<ServiciiPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
