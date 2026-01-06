import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTABlock from "../components/CTABlock";
import FormBlock from "../components/FormBlock";
import MapSection from "../components/MapSection";
import ContactModal from "../components/ContactModal";
// import { useLanguage } from "../contexts/LanguageContext"; // Reserved for future use
import "./BlogPostPage.css";

// Иконка стрелки назад не нужна, используем SVG

// Импорт изображений блога
import blogImage1 from "../assets/blog/Image-1.svg";
// Reserved for future use:
// import blogImage2 from "../assets/blog/Image-2.svg";
// import blogImage3 from "../assets/blog/Image-3.svg";
// import blogImage4 from "../assets/blog/Image-4.svg";
// import blogImage5 from "../assets/blog/Image-5.svg";
// import blogImage6 from "../assets/blog/Image-6.svg";
// import blogImage7 from "../assets/blog/Image-7.svg";
// import blogImage8 from "../assets/blog/Image-8.svg";
// import blogImage9 from "../assets/blog/Image.svg";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  fullContent: string;
}

const BlogPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const { t } = useLanguage(); // Reserved for future use

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleBack = () => {
    navigate("/blog");
  };

  // Данные статей блога
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Cum aleg materialul potrivit pentru mobila mea?",
      description:
        "Alegerea materialului potrivit depinde de mai mulți factori: buget, durabilitate, stilul dorit și...",
      image: blogImage1,
      fullContent: `Alegerea materialului potrivit depinde de mai mulți factori: buget, durabilitate, stilul dorit și funcționalitatea camerei. MDF-ul este un material accesibil, ușor de prelucrat și ideal pentru mobilier cu design modern, deoarece permite realizarea de forme complexe și finisaje variate. Lemnul masiv oferă durabilitate și un aspect premium, însă necesită întreținere regulată, protecție împotriva umezelii și a razelor directe de soare și are un cost mai ridicat. Blaturile pot fi fabricate din PAL laminat, quartz sau piatră naturală. PAL-ul laminat este economic și ușor de întreținut, quartz-ul este rezistent la zgârieturi și pete și oferă o durată lungă de viață, iar piatra naturală conferă eleganță, rezistență și o notă exclusivistă, dar necesită o atenție mai mare la întreținere. Alegerea corectă se face în funcție de buget, stilul camerei și nivelul de uzură preconizat.

## MDF-ul

este un material accesibil, ușor de prelucrat și ideal pentru mobilier cu design modern, deoarece permite realizarea de forme complexe și finisaje variate. Se folosește în special pentru fațadele bucătăriilor, dar și pentru dulapuri, corpuri de depozitare sau mobilier de birou, unde greutatea redusă și flexibilitatea în design sunt avantaje importante. MDF-ul poate fi vopsit în orice culoare, oferind astfel libertate mare de personalizare. Totuși, trebuie ferit de umezeală excesivă și de expunerea directă la soare, deoarece acestea pot afecta finisajul și stabilitatea materialului.

## Lemnul masiv

oferă durabilitate și un aspect premium, conferind mobilierului un aer natural și elegant. Este ideal pentru piese centrale, cum ar fi mese, paturi sau dulapuri mari, care trebuie să reziste mult timp. Lemnul masiv poate fi finisat cu lacuri, uleiuri sau ceară specială, protejându-l împotriva zgârieturilor, umezelii și variațiilor de temperatură. Avantajul major este că lemnul masiv poate fi recondiționat și șlefuit pentru a-și recăpăta aspectul inițial, oferind astfel o durată de viață foarte lungă. Dezavantajul constă în costul mai ridicat și necesitatea unei întrețineri periodice.

## Blaturile pot fi fabricate din PAL laminat, HPL, quartz sau piatră naturală.

• PAL laminat: economic, ușor de întreținut, rezistent la zgârieturi moderate. Ideal pentru mobilier de bucătărie sau birou, unde întreținerea simplă este un avantaj.
• HPL (High Pressure Laminate): foarte rezistent la zgârieturi, umezeală și temperaturi ridicate. Este în prezent unul dintre cele mai utilizate materiale pentru blaturi de bucătărie, datorită durabilității ridicate, întreținerii ușoare și gamei variate de culori și texturi.
• Quartz: foarte rezistent la zgârieturi, pete și temperaturi ridicate, ideal pentru blaturi de lucru și bucătării cu trafic intens. Necesită întreținere minimă și oferă un aspect uniform.
• Piatra naturală: oferă eleganță și rezistență, cu un aspect exclusivist. Este durabilă, dar necesită protecție împotriva petelor și curățare atentă pentru a preveni deteriorarea suprafeței.

## Sfaturi practice pentru alegerea materialului corect:

1. Stabilește bugetul și compară costurile pe termen lung, nu doar prețul inițial.
2. Ia în considerare funcționalitatea mobilierului și camera unde va fi plasat (bucătărie, living, dormitor, birou).
3. Alege materiale ușor de întreținut pentru camere cu trafic intens sau copii.
4. Testează mostre de materiale în lumina naturală a camerei pentru a observa nuanțele și efectul real al finisajului.
5. Gândește-te la combinarea materialelor pentru un efect estetic armonios și durabil (de exemplu, lemn masiv cu sticlă sau MDF cu metal).
6. Protejează mobilierul sensibil la umezeală și soare pentru a-i prelungi viața și a păstra aspectul inițial.

## Concluzie:

Alegerea corectă a materialului se face în funcție de buget, stilul camerei, nivelul de uzură preconizat și preferințele estetice. MDF și PAL sunt ideale pentru mobilier modern și economic, lemnul masiv conferă durabilitate și un aspect premium, iar blaturile din quartz sau piatră naturală aduc rezistență și eleganță. O alegere informată asigură mobilier practic, durabil și plăcut vizual pentru mulți ani.`,
    },
    // Добавьте остальные статьи по аналогии
  ];

  const post = blogPosts.find((p) => p.id === Number(postId));

  if (!post) {
    return (
      <div className="overflow-x-hidden">
        <Header onOpenModal={handleOpenModal} />
        <main className="blog-post-page" style={{ marginTop: "82px" }}>
          <div className="blog-post-container">
            <p>Статья не найдена</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Парсинг контента - возвращает первый параграф и остальные секции
  const parseContent = (content: string) => {
    const sections = content.split(/\n\n## /);
    const introText = sections[0].trim();
    const restSections = sections.slice(1);
    const restResult: React.ReactElement[] = [];

    // Остальные секции
    restSections.forEach((section, sectionIndex) => {
      // Секции с заголовками
      const lines = section.split("\n");
      const title = lines[0].trim();
      const contentLines = lines.slice(1);

      restResult.push(
        <h2 key={`title-${sectionIndex}`} className="blog-post-section-title">
          {title}
        </h2>
      );

        // Проверяем, есть ли нумерованный список
        const hasNumberedList = contentLines.some((line) =>
          /^\d+\./.test(line.trim())
        );

        if (hasNumberedList) {
          // Обработка нумерованного списка
          contentLines.forEach((line, lineIndex) => {
            const trimmedLine = line.trim();
            if (!trimmedLine) return;

            if (/^\d+\./.test(trimmedLine)) {
              const listItem = trimmedLine.replace(/^\d+\.\s*/, "");
              restResult.push(
                <p key={`list-${sectionIndex}-${lineIndex}`} className="blog-post-text">
                  {listItem}
                </p>
              );
            } else if (trimmedLine.startsWith("•")) {
              const listItem = trimmedLine.replace(/^•\s*/, "");
              restResult.push(
                <p key={`bullet-${sectionIndex}-${lineIndex}`} className="blog-post-bullet-item">
                  {listItem}
                </p>
              );
            } else if (trimmedLine.startsWith("**") && trimmedLine.endsWith(":**")) {
              const boldText = trimmedLine.replace(/\*\*/g, "");
              restResult.push(
                <p key={`bold-${sectionIndex}-${lineIndex}`} className="blog-post-bold">
                  <strong>{boldText}</strong>
                </p>
              );
            } else {
              restResult.push(
                <p key={`p-${sectionIndex}-${lineIndex}`} className="blog-post-text">
                  {trimmedLine}
                </p>
              );
            }
          });
        } else {
          // Обычная обработка параграфов
          let currentParagraph = "";
          contentLines.forEach((line, lineIndex) => {
            const trimmedLine = line.trim();
            if (!trimmedLine) {
              if (currentParagraph) {
                restResult.push(
                  <p key={`p-${sectionIndex}-${lineIndex}`} className="blog-post-text">
                    {currentParagraph}
                  </p>
                );
                currentParagraph = "";
              }
            } else if (trimmedLine.startsWith("•")) {
              if (currentParagraph) {
                restResult.push(
                  <p key={`p-${sectionIndex}-${lineIndex}-before`} className="blog-post-text">
                    {currentParagraph}
                  </p>
                );
                currentParagraph = "";
              }
              const listItem = trimmedLine.replace(/^•\s*/, "");
              restResult.push(
                <p key={`bullet-${sectionIndex}-${lineIndex}`} className="blog-post-bullet-item">
                  {listItem}
                </p>
              );
            } else if (trimmedLine.startsWith("**") && trimmedLine.endsWith(":**")) {
              if (currentParagraph) {
                restResult.push(
                  <p key={`p-${sectionIndex}-${lineIndex}-before`} className="blog-post-text">
                    {currentParagraph}
                  </p>
                );
                currentParagraph = "";
              }
              const boldText = trimmedLine.replace(/\*\*/g, "");
              restResult.push(
                <p key={`bold-${sectionIndex}-${lineIndex}`} className="blog-post-bold">
                  <strong>{boldText}</strong>
                </p>
              );
            } else {
              if (currentParagraph) {
                currentParagraph += " ";
              }
              currentParagraph += trimmedLine;
            }
          });

          if (currentParagraph) {
            restResult.push(
              <p key={`p-${sectionIndex}-final`} className="blog-post-text">
                {currentParagraph}
              </p>
            );
          }
        }
    });

    return { introText, restContent: restResult };
  };

  return (
    <div className="overflow-x-hidden">
      <Header onOpenModal={handleOpenModal} />
      <main className="blog-post-page" style={{ marginTop: "82px" }}>
        <div className="blog-post-container">
          <div className="blog-post-nav">
            <div className="blog-post-nav-content">
              <button className="blog-post-back-button" onClick={handleBack}>
                <svg
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2L2 10L10 18"
                    stroke="#858480"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <h1 className="blog-post-title">{post.title}</h1>
            </div>
          </div>

          <div className="blog-post-content">
            <div className="blog-post-image-wrapper">
              <img
                src={post.image}
                alt={post.title}
                className="blog-post-image"
              />
            </div>
            <div className="blog-post-intro-text">
              <p className="blog-post-intro-paragraph">
                {parseContent(post.fullContent).introText}
              </p>
            </div>
          </div>

          <div className="blog-post-main-content">
            <div className="blog-post-main-content-wrapper">
              {parseContent(post.fullContent).restContent}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <CTABlock />

        {/* Form Block */}
        <FormBlock />

        {/* Map Section */}
        <MapSection />
      </main>
      <Footer />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default BlogPostPage;

