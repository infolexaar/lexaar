import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "./ProcessBlock.css";

const ProcessBlock: React.FC = () => {
  const { t } = useLanguage();
  const steps = [
    { number: 1, title: t.home.processBlock.step1Title, description: t.home.processBlock.step1Desc },
    { number: 2, title: t.home.processBlock.step2Title, description: t.home.processBlock.step2Desc },
    { number: 3, title: t.home.processBlock.step3Title, description: t.home.processBlock.step3Desc },
    { number: 4, title: t.home.processBlock.step4Title, description: t.home.processBlock.step4Desc },
    { number: 5, title: t.home.processBlock.step5Title, description: t.home.processBlock.step5Desc },
    { number: 6, title: t.home.processBlock.step6Title, description: t.home.processBlock.step6Desc },
  ];

  return (
    <section className="process-block-section" id="proces">
      <div className="process-block-container">
        <div className="process-block-header">
          <h2 className="process-block-title">
            {t.home.processBlock.title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {i > 0 && <br />}
                {line}
              </React.Fragment>
            ))}
          </h2>
        </div>

        <div className="process-block-cards">
          {steps.map((step, index) => (
            <div key={index} className="process-block-card">
              <div className="process-block-number-circle">
                <span className="process-block-number">{step.number}</span>
              </div>
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
