import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const FloatingWhatsApp: React.FC = () => {
  const { lang } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const message = lang === 'TR'
    ? 'Merhaba, YB Fintech çözümleri ve ortaklıklar hakkında bilgi almak istiyorum.'
    : 'Hello, I would like to get information regarding YB Fintech solutions and partnerships.';

  const waUrl = 'https://wa.me/905074589644?text=' + encodeURIComponent(message);

  return (
    <aside
      aria-label="WhatsApp Contact"
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        pointerEvents: 'auto',
      }}
    >
      {/* Tooltip on hover */}
      <div
        style={{
          backgroundColor: '#071D3A',
          color: '#FFFFFF',
          padding: '8px 14px',
          borderRadius: '0px',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.3px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
          whiteSpace: 'nowrap',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateX(0)' : 'translateX(10px)',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#25D366' }} />
        <span>{lang === 'TR' ? 'WhatsApp İletişim Hattı' : 'Chat on WhatsApp'}</span>
        <span style={{ color: '#94A3B8', fontSize: '11px' }}>+90 507 458 96 44</span>
      </div>

      {/* Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="WhatsApp"
        style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          boxShadow: isHovered
            ? '0 8px 28px rgba(37, 211, 102, 0.55), 0 0 0 4px rgba(37, 211, 102, 0.25)'
            : '0 6px 20px rgba(37, 211, 102, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          textDecoration: 'none',
          cursor: 'pointer',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: isHovered ? 'scale(1.08)' : 'scale(1)',
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="#25D366" stroke="#FFFFFF" strokeWidth="1.8"></path>
        </svg>
      </a>
    </aside>
  );
};
