import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

export const PreFooterCta: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].preFooter;

  return (
    <div className="cta-color valley">
      <div className="title-page center width-50">{t.title}</div>
      <a href="#footer-contact" className="button-primary dark w-button" style={{ borderRadius: '0px' }}>{t.button}</a>
      <div className="noise-overlay"></div>
    </div>
  );
};
