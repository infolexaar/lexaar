import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import ColorPage from "./pages/ColorPage";
import ServiciiPage from "./pages/ServiciiPage";
import DespreNoiPage from "./pages/DespreNoiPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <PageTransition>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/category/:category/:itemId" element={<ProductPage />} />
          <Route path="/colors" element={<ColorPage />} />
          <Route path="/servicii" element={<ServiciiPage />} />
          <Route path="/despre-noi" element={<DespreNoiPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:postId" element={<BlogPostPage />} />
        </Routes>
        </PageTransition>
      </Router>
    </LanguageProvider>
  );
}

export default App;
