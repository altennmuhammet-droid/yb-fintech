import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';
import { getAssetUrl } from '../utils/assets';

export const TechnologySection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].technology;
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch(getAssetUrl('/assets/animations/partners-illustration.json'))
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Failed to load Lottie animation:', err));
  }, []);

  const techPartners = [
    { src: '/assets/partners/mars-data-center-white.svg', name: 'Mars Data Center' },
    { src: '/assets/partners/linkedeep-white.svg', name: 'Linkedeep' },
    { src: '/assets/partners/cyi-real.png', name: 'CYI' },
    { src: '/assets/partners/ai4sec-white.svg', name: 'AI4SEC' },
  ];

  return (
    <section className="partners-section">
      <div className="color-blob ocean partners"></div>
      <div className="partners-info-wrapper">
        <div className="text-wrapper-down">
          <div className="title-page">{t.title}</div>
          <div className="body-base">
            {t.desc}
          </div>
        </div>
        <div className="partners-logos">
          <div className="heading ocean-400">{t.partnerHeading}</div>
          <div className="partners-logo-slider" style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            {techPartners.map((tp, idx) => (
              <div key={idx} className="logo-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={getAssetUrl(tp.src)}
                  loading="lazy"
                  alt={tp.name}
                  style={{
                    maxHeight: '38px',
                    maxWidth: '120px',
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)',
                    opacity: 0.9
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="noise-overlay"></div>
      <div className="animation">
        {animationData ? (
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: '100%', height: 'auto' }}
          />
        ) : (
          <div style={{ color: 'rgba(255,255,255,0.3)', padding: '40px' }}>Loading...</div>
        )}
      </div>
    </section>
  );
};
