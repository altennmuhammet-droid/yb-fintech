import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';
import { getAssetUrl } from '../utils/assets';

export const Stats: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].stats;

  return (
    <section className="numers-section">
      <div className="column">
        <div className="numbers-card height-100 color-dark" style={{ borderRadius: '0px' }}>
          <div className="numbers-text-wrapper">
            <div className="title-page gradient-ocean-white">{t.stat1Number}<br/></div>
            <h4 className="subheading">{t.stat1Title}</h4>
            <div className="divider-line"></div>
            <div className="title-page gradient-ocean-white">{t.stat2Number}</div>
            <h4 className="subheading">{t.stat2Title}</h4>
          </div>
          <a href="#solutions" className="button-link w-inline-block">
            <h4 className="body-base">{t.stat1Cta}</h4>
            <img src={getAssetUrl('/assets/images/flecha.png')} loading="lazy" width="20" alt="" className="image-67"/>
          </a>
        </div>
      </div>

      <div className="column">
        <div className="numbers-card" style={{ borderRadius: '0px' }}>
          <div className="numbers-text-wrapper">
            <div className="title-page gradient-desert-white">{t.stat3Number}</div>
            <h4 className="subheading">{t.stat3Title}</h4>
          </div>
          <a href="#ecosystem" className="button-link w-inline-block">
            <h4 className="body-base">{t.stat3Cta}</h4>
            <img src={getAssetUrl('/assets/images/flecha.png')} loading="lazy" width="20" alt="" className="image-67"/>
          </a>
        </div>
        <div className="numbers-card height-100" style={{ borderRadius: '0px' }}>
          <div className="numbers-text-wrapper">
            <div className="title-page gradient-fauna-white">{t.stat4Number}</div>
            <h4 className="subheading">{t.stat4Title}</h4>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="numbers-card" style={{ borderRadius: '0px' }}>
          <div className="numbers-text-wrapper">
            <div className="title-page gradient-valley-white">{t.stat5Number}</div>
            <h4 className="subheading">{t.stat5Title}</h4>
          </div>
          <a href="#about" className="button-link w-inline-block">
            <h4 className="body-base">{t.stat5Cta}</h4>
            <img src={getAssetUrl('/assets/images/flecha.png')} loading="lazy" width="20" alt="" className="image-67"/>
          </a>
        </div>
        <div className="numbers-card color-dark" style={{ borderRadius: '0px' }}>
          <div className="numbers-text-wrapper">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '14px' }}>
              <img src={getAssetUrl('/assets/partners/bts-partners-real.svg')} loading="lazy" alt="BTS & Partners" style={{ height: '28px', filter: 'brightness(0) invert(1)' }}/>
              <img src={getAssetUrl('/assets/partners/paymio-real.png')} loading="lazy" alt="Paymio" style={{ height: '28px', filter: 'brightness(0) invert(1)' }}/>
            </div>
            <h4 className="subheading">{t.stat6Desc}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
