import React from 'react';
import { ContactFooter } from '../components/ContactFooter';

interface PressReleasePageProps {
  navigate: (path: string) => void;
}

export const PressReleasePage: React.FC<PressReleasePageProps> = ({ navigate }) => {
  return (
    <div className="body-press-release">
      <div style={{ maxWidth: '900px', margin: '60px auto 80px', padding: '0 24px' }}>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#090e24', textDecoration: 'none', fontWeight: 600, marginBottom: '32px' }}
        >
          <span>← Back to home</span>
        </a>

        <div style={{ color: '#2563eb', fontWeight: 600, fontSize: '14px', letterSpacing: '1px', marginBottom: '12px' }}>
          COMPANY ANNOUNCEMENT • MARCH 12, 2026
        </div>

        <h1 style={{ fontSize: '42px', lineHeight: '120%', color: '#090e24', marginBottom: '32px', fontFamily: 'var(--font-sans)' }}>
          YPF Luz and YB Fintech announce one of the world’s largest tokenized energy asset projects on the XRP Ledger
        </h1>

        <div style={{ borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '40px' }}>
          <img
            src="/assets/images/news-ypfluz.png"
            alt="YPF Luz and YB Fintech"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        <div style={{ fontSize: '18px', lineHeight: '180%', color: '#090e24', opacity: 0.9 }}>
          <p style={{ marginBottom: '24px' }}>
            YPF Luz, the leading electric power generator in Argentina, and YB Fintech, the global real-world asset (RWA) tokenization infrastructure provider, have announced a milestone initiative to tokenize renewable and conventional energy contracts on the XRP Ledger.
          </p>
          <p style={{ marginBottom: '24px' }}>
            Through the Enertoken platform, corporate clients and institutional buyers will be able to verify origin, monitor consumption in real time, and contract clean energy with automated settlement and transparent guarantees.
          </p>
          <p style={{ marginBottom: '24px' }}>
            "This development alongside YB Fintech will facilitate new ways of contracting energy and will modernize the electricity market," said Martín Mandarano, CEO of YPF Luz.
          </p>
        </div>
      </div>

      <ContactFooter />
    </div>
  );
};
