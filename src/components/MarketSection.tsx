import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

export const MarketSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].market;

  return (
    <section className="proyection-section">
      <div className="text-wrapper-center">
        <div className="title-page">
          {t.titlePrefix}<span className="title-page gradient-desert-white">{t.titleHighlight}</span>{t.titleSuffix}
        </div>
        <div className="body-base">
          {t.desc}
        </div>
      </div>
      <div className="proyection-card-wrapper">
        <div className="proyection-cards capture" style={{ borderRadius: '0px' }}>
          <div className="subtitle valley-300">{t.card1Title}</div>
          <div className="risk-list">
            <div className="subheading">{t.card1Subtitle}</div>
            <div className="body-base">{t.card1Item1}</div>
            <div className="body-base">{t.card1Item2}</div>
            <div className="body-base">{t.card1Item3}</div>
            <div className="body-base">{t.card1Item4}</div>
          </div>
        </div>
        <div className="proyection-cards" style={{ borderRadius: '0px' }}>
          <div className="subtitle fauna-300">{t.card2Title}</div>
          <div className="risk-list">
            <div className="subheading">{t.card2Subtitle}</div>
            <div className="body-base">{t.card2Item1}</div>
            <div className="body-base">{t.card2Item2}</div>
            <div className="body-base">{t.card2Item3}</div>
            <div className="body-base">{t.card2Item4}</div>
          </div>
        </div>
      </div>
      <div className="cta-color ocean" style={{ borderRadius: '0px' }}>
        <div className="title-page center">{t.ctaTitle}</div>
        <div className="body-base center width-50">
          {t.ctaDesc}
        </div>
        <a href="#footer-contact" className="button-primary dark w-button" style={{ borderRadius: '0px' }}>
          {t.ctaButton}
        </a>
        <div className="noise-overlay"></div>
      </div>
    </section>
  );
};
