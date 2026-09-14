import React from 'react';
import { getAssetUrl } from '../utils/assets';

export const TrustSlider: React.FC = () => {
  const logos = [
    { src: '/assets/partners/bts-partners-real.svg', name: 'BTS & Partners' },
    { src: '/assets/partners/paymio-real.png', name: 'Paymio' },
    { src: '/assets/partners/aks-yatirim-real.png', name: 'AKS Yatırım' },
    { src: '/assets/partners/mars-data-center-white.svg', name: 'Mars Data Center' },
    { src: '/assets/partners/linkedeep-white.svg', name: 'Linkedeep' },
    { src: '/assets/partners/awa-enerji-real.png', name: 'Awa Enerji' },
    { src: '/assets/partners/360-enerji-real.png', name: '360 Enerji' },
    { src: '/assets/partners/nixon-led-real.png', name: 'Nixon LED' },
    { src: '/assets/partners/buser-project-real.png', name: 'Buser Project' },
    { src: '/assets/partners/buroseren-real.png', name: 'Büroseren' },
    { src: '/assets/partners/oztreyler-real.png', name: 'Öztreyler' },
    { src: '/assets/partners/rukim-real.png', name: 'Rukim' },
    { src: '/assets/partners/cyi-real.png', name: 'CYI' },
  ];

  return (
    <section className="trusted-by-section">
      <div className="logo-slider">
        <div className="logo-slider-track">
          {logos.map((item, idx) => (
            <div key={`a-${idx}`} className="logo-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '140px' }}>
              <img
                src={getAssetUrl(item.src)}
                loading="lazy"
                alt={item.name}
                style={{
                  maxHeight: '36px',
                  maxWidth: '130px',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)', // Elegant white silhouette in dark hero section
                  opacity: 0.85
                }}
              />
            </div>
          ))}
        </div>
        <div className="logo-slider-track" aria-hidden="true">
          {logos.map((item, idx) => (
            <div key={`b-${idx}`} className="logo-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '140px' }}>
              <img
                src={getAssetUrl(item.src)}
                loading="lazy"
                alt={item.name}
                style={{
                  maxHeight: '36px',
                  maxWidth: '130px',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.85
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
