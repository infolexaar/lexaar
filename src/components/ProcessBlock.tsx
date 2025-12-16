import React from "react";
import "./ProcessBlock.css";

const ProcessBlock: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Completează formularul",
      description:
        "Managerul nostru te va contacta pentru a discuta mai multe detalii.",
    },
    {
      number: 2,
      title: "Proiectare personalizată & Vizualizare 3D",
      description:
        "Venim, măsurăm și îți arătăm mobilierul în 3D înainte de realizare.",
    },
    {
      number: 3,
      title: "Mobilier personalizat pe gustul tău",
      description:
        "Mobilierul tău va fi realizat cu atenție, folosind tehnologie de ultimă oră.",
    },
    {
      number: 4,
      title: "Livrăm rapid și gratuit",
      description:
        "Asigurăm livrare şi siguranţă. Livrare gratuită în Chișinău",
    },
    {
      number: 5,
      title: "Montaj profesional",
      description:
        "Montăm cu precizie, asigurând integrarea perfectă a mobilierului.",
    },
    {
      number: 6,
      title: "Garanție inclusă",
      description:
        "După montaj, îți oferim şi garanţie de 5 ani pentru mobilierul realizat.",
    },
  ];

  return (
    <section className="process-block-section">
      <div className="process-block-container">
        {/* Заголовок */}
        <div className="process-block-header">
          <h2 className="process-block-title">
            De la idee la realitate: 6 pași spre mobilierul tău perfect
          </h2>
        </div>

        {/* Карточки */}
        <div className="process-block-cards">
          {steps.map((step, index) => (
            <div key={index} className="process-block-card">
              {/* Круг с номером */}
              <div className="process-block-number-circle">
                <span className="process-block-number">{step.number}</span>
              </div>

              {/* Контент */}
              <div className="process-block-card-content">
                <h4 className="process-block-card-title">{step.title}</h4>
                <p className="process-block-card-description">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessBlock;
