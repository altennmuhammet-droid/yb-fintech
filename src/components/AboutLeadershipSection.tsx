import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

export const AboutLeadershipSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section id="about" style={{
      width: '100%',
      maxWidth: 'none',
      paddingTop: '100px',
      paddingBottom: '110px',
      backgroundColor: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="w-layout-blockcontainer w-container" style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '0 20px',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#F8FAFC',
            border: '1px solid #E2E8F0',
            padding: '6px 16px',
            borderRadius: '0px',
            marginBottom: '16px'
          }}>
            <span style={{ width: '6px', height: '6px', backgroundColor: '#071D3A', display: 'inline-block' }}></span>
            <span style={{
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              color: '#071D3A',
              fontFamily: 'Instrument Sans, sans-serif'
            }}>
              {t.badge}
            </span>
          </div>

          <h2 style={{
            fontSize: '44px',
            fontWeight: 800,
            color: '#071D3A',
            marginBottom: '18px',
            lineHeight: 1.15,
            letterSpacing: '-0.5px',
            fontFamily: 'Instrument Sans, sans-serif'
          }}>
            {t.title}
          </h2>

          <p style={{
            maxWidth: '740px',
            margin: '0 auto',
            fontSize: '17.5px',
            lineHeight: 1.65,
            color: '#475569',
            fontFamily: 'Instrument Sans, sans-serif'
          }}>
            {t.desc}
          </p>
        </div>

        {/* Leadership Grid - Modern, Soft, Architectural & Sharp-Cornered */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '32px',
          alignItems: 'stretch'
        }}>
          {/* Card 1: Yavuz Boztemir - Founder & CEO */}
          <div style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFCFF 100%)',
            borderRadius: '0px',
            border: '1px solid #E2E8F0',
            borderTop: '3px solid #071D3A',
            padding: '44px 38px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            boxShadow: '0 12px 32px rgba(7, 29, 58, 0.04)',
            transition: 'all 0.25s ease'
          }}>
            <div>
              {/* Header: Executive Monogram & Name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '28px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '0px',
                  backgroundColor: '#071D3A',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Instrument Serif, Georgia, serif',
                  fontSize: '28px',
                  fontWeight: 700,
                  boxShadow: '0 4px 12px rgba(7, 29, 58, 0.12)',
                  flexShrink: 0
                }}>
                  YB
                </div>

                <div>
                  <div style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#2563EB',
                    marginBottom: '3px'
                  }}>
                    {t.yavuz.role}
                  </div>
                  <h3 style={{
                    fontSize: '26px',
                    fontWeight: 800,
                    color: '#071D3A',
                    margin: 0,
                    lineHeight: 1.2,
                    fontFamily: 'Instrument Sans, sans-serif'
                  }}>
                    {t.yavuz.name}
                  </h3>
                </div>
              </div>

              {/* Soft Highlight Box */}
              <div style={{
                backgroundColor: '#F8FAFC',
                borderLeft: '3px solid #071D3A',
                borderRadius: '0px',
                padding: '14px 18px',
                marginBottom: '26px'
              }}>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#071D3A', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '4px' }}>
                  {t.yavuz.highlightBadge}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#334155', lineHeight: 1.45 }}>
                  {t.yavuz.highlightText}
                </div>
              </div>

              {/* Bio Narrative */}
              <div style={{
                fontSize: '15px',
                lineHeight: '1.75',
                color: '#475569',
                fontFamily: 'Instrument Sans, sans-serif'
              }}>
                <p style={{ marginBottom: '16px' }}>
                  {t.yavuz.p1}
                </p>
                <p style={{ margin: 0 }}>
                  {t.yavuz.p2}
                </p>
              </div>
            </div>

            {/* Competency Badges */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginTop: '32px',
              paddingTop: '24px',
              borderTop: '1px solid #F1F5F9'
            }}>
              {t.yavuz.tags.map((badge) => (
                <span
                  key={badge}
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    backgroundColor: '#F8FAFC',
                    color: '#334155',
                    padding: '6px 12px',
                    borderRadius: '0px',
                    border: '1px solid #E2E8F0'
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Mustafa Bulan - CTO */}
          <div style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFCFF 100%)',
            borderRadius: '0px',
            border: '1px solid #E2E8F0',
            borderTop: '3px solid #2563EB',
            padding: '44px 38px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            boxShadow: '0 12px 32px rgba(7, 29, 58, 0.04)',
            transition: 'all 0.25s ease'
          }}>
            <div>
              {/* Header: Tech Monogram, Name & LinkedIn */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '0px',
                    backgroundColor: '#0F2744',
                    color: '#38BDF8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Instrument Serif, Georgia, serif',
                    fontSize: '28px',
                    fontWeight: 700,
                    boxShadow: '0 4px 12px rgba(15, 39, 68, 0.12)',
                    flexShrink: 0
                  }}>
                    MB
                  </div>

                  <div>
                    <div style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: '#2563EB',
                      marginBottom: '3px'
                    }}>
                      {t.mustafa.role}
                    </div>
                    <h3 style={{
                      fontSize: '26px',
                      fontWeight: 800,
                      color: '#071D3A',
                      margin: 0,
                      lineHeight: 1.2,
                      fontFamily: 'Instrument Sans, sans-serif'
                    }}>
                      {t.mustafa.name}
                    </h3>
                  </div>
                </div>

                {/* Refined LinkedIn Link */}
                <a
                  href="https://www.linkedin.com/in/📡-mustafa-bulan-0273848?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #CBD5E1',
                    color: '#0A66C2',
                    padding: '8px 14px',
                    borderRadius: '0px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0A66C2';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#0A66C2';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#0A66C2';
                    e.currentTarget.style.borderColor = '#CBD5E1';
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34M7.86 18.5V10.13H5.06V18.5h2.8z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* Soft Highlight Box */}
              <div style={{
                backgroundColor: '#F8FAFC',
                borderLeft: '3px solid #2563EB',
                borderRadius: '0px',
                padding: '14px 18px',
                marginBottom: '26px'
              }}>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#2563EB', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '4px' }}>
                  {t.mustafa.highlightBadge}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#334155', lineHeight: 1.45 }}>
                  {t.mustafa.highlightText}
                </div>
              </div>

              {/* Bio Narrative */}
              <div style={{
                fontSize: '15px',
                lineHeight: '1.75',
                color: '#475569',
                fontFamily: 'Instrument Sans, sans-serif'
              }}>
                <p style={{ marginBottom: '16px' }}>
                  {t.mustafa.p1}
                </p>
                <p style={{ margin: 0 }}>
                  {t.mustafa.p2}
                </p>
              </div>
            </div>

            {/* Competency Badges */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginTop: '32px',
              paddingTop: '24px',
              borderTop: '1px solid #F1F5F9'
            }}>
              {t.mustafa.tags.map((badge) => (
                <span
                  key={badge}
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    backgroundColor: '#F8FAFC',
                    color: '#334155',
                    padding: '6px 12px',
                    borderRadius: '0px',
                    border: '1px solid #E2E8F0'
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
