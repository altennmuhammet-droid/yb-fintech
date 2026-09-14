import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

export const Hero: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section className="hero-section">
      <div className="hero-text-wrapper">
        <h1 className="title-hero center gradient-white">{t.title}</h1>
        <div className="hero-tags">
          <div className="tag hero-commodities"><div className="subheading desert">{t.tagCommodities}</div></div>
          <div className="tag hero-energy"><div className="subheading ocean">{t.tagEnergy}</div></div>
          <div className="tag hero-natural-r"><div className="subheading valley">{t.tagNaturalResources}</div></div>
        </div>
        <h5 className="subheading center">{t.subheading}</h5>
      </div>
      <div className="button-wrapper">
        <a href="#footer-contact" className="button-primary w-button" style={{ borderRadius: '0px' }}>{t.ctaPrimary}</a>
        <a href="#solutions" className="button-secondary w-button" style={{ borderRadius: '0px' }}>{t.ctaSecondary}</a>
      </div>
    </section>
  );
};
