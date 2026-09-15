import React, { useState } from 'react';
import partnersData from '../data/partners.json';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';
import { getAssetUrl } from '../utils/assets';

type Category = 'All' | 'Energy Partners' | 'Tech Partners' | 'Legal Partners' | 'Identity Partners' | 'Advisory' | 'Communities';

export const PartnersEcosystemSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].partners;
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const categories: Category[] = [
    'All',
    'Energy Partners',
    'Tech Partners',
    'Legal Partners',
    'Identity Partners',
    'Advisory',
    'Communities'
  ];

  const categoryLabels: Record<Category, { TR: string; EN: string }> = {
    'All': { TR: 'Tümü', EN: 'All' },
    'Energy Partners': { TR: 'Yenilenebilir Enerji', EN: 'Renewable Energy' },
    'Tech Partners': { TR: 'Teknoloji Ortakları', EN: 'Tech Partners' },
    'Legal Partners': { TR: 'Hukuk Ortakları', EN: 'Legal Partners' },
    'Identity Partners': { TR: 'Kimlik Ortakları', EN: 'Identity Partners' },
    'Advisory': { TR: 'Danışmanlık', EN: 'Advisory' },
    'Communities': { TR: 'Sanayi & Altyapı', EN: 'Industry & Infrastructure' },
  };

  const filteredPartners = activeCategory === 'All'
    ? partnersData
    : partnersData.filter(p => p.category === activeCategory);

  return (
    <section id="ecosystem" style={{
      width: '100%',
      maxWidth: 'none',
      paddingTop: '80px',
      paddingBottom: '100px',
      backgroundColor: '#F8FAFC',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="w-layout-blockcontainer w-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="tag hero-energy" style={{ margin: '0 auto 16px auto', display: 'inline-flex', borderRadius: '0px' }}>
            <div className="subheading ocean" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              {t.badge}
            </div>
          </div>
          <h2 className="title-page dark" style={{ fontSize: '42px', marginBottom: '16px', lineHeight: 1.2, fontWeight: 700 }}>
            {t.title}
          </h2>
          <p className="body-base dark" style={{ maxWidth: '780px', margin: '0 auto', fontSize: '17px', color: '#475569', lineHeight: 1.6 }}>
            {t.desc}
          </p>
        </div>

        {/* Paymio Services & Solutions v1.3 Featured Integration Showcase */}
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #CBD5E1',
          borderLeft: '4px solid #2563EB',
          borderRadius: '0px',
          padding: '32px 36px',
          marginBottom: '48px',
          boxShadow: '0 8px 24px rgba(7, 29, 58, 0.04)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            borderBottom: '1px solid #F1F5F9',
            paddingBottom: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{
                height: '50px',
                padding: '6px 14px',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img
                  src={getAssetUrl('/assets/partners/paymio-real.png')}
                  alt="Paymio"
                  style={{ maxHeight: '36px', width: 'auto', objectFit: 'contain' }}
                />
              </div>
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: '#2563EB',
                  marginBottom: '4px'
                }}>
                  <span>{t.paymioBadge1}</span>
                  <span style={{ backgroundColor: '#DBEAFE', color: '#1D4ED8', padding: '2px 6px', fontSize: '10px' }}>{t.paymioBadge2}</span>
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 800,
                  color: '#071D3A',
                  margin: 0,
                  fontFamily: 'Instrument Sans, sans-serif'
                }}>
                  {t.paymioTitle}
                </h3>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={getAssetUrl('/assets/docs/Paymio-Services-Solutions-v1.3.pdf')}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#071D3A',
                  color: '#FFFFFF',
                  padding: '10px 20px',
                  borderRadius: '0px',
                  fontSize: '13px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  letterSpacing: '0.4px',
                  boxShadow: '0 4px 12px rgba(7, 29, 58, 0.15)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2563EB';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#071D3A';
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <span>{t.paymioBtnPdf}</span>
              </a>

              <a
                href="https://www.paymio.com.tr"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#FFFFFF',
                  color: '#071D3A',
                  border: '1px solid #CBD5E1',
                  padding: '10px 18px',
                  borderRadius: '0px',
                  fontSize: '13px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2563EB';
                  e.currentTarget.style.color = '#2563EB';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#CBD5E1';
                  e.currentTarget.style.color = '#071D3A';
                }}
              >
                <span>paymio.com.tr</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </div>

          {/* Capabilities Grid from PDF */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px'
          }}>
            <div style={{ backgroundColor: '#F8FAFC', padding: '14px 16px', border: '1px solid #E2E8F0', borderRadius: '0px' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#071D3A', marginBottom: '4px' }}>
                {lang === 'TR' ? 'Ödeme Switch & Takas Mutabakatı' : 'Payment Switch & Clearing'}
              </div>
              <div style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.45 }}>
                {lang === 'TR'
                  ? 'BKM, Troy, Visa, Mastercard entegrasyonu, takas mutabakat ve dinamik yönlendirme mimarisi.'
                  : 'BKM, Troy, Visa, Mastercard integration, clearing settlement and dynamic routing architecture.'}
              </div>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', padding: '14px 16px', border: '1px solid #E2E8F0', borderRadius: '0px' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#071D3A', marginBottom: '4px' }}>
                {lang === 'TR' ? 'Dijital Cüzdan & Sanal Kartlar' : 'Digital Wallet & Virtual Cards'}
              </div>
              <div style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.45 }}>
                {lang === 'TR'
                  ? 'Bireysel ve kurumsal cüzdan, anlık P2P transfer, QR kodla ödeme ve dijital KYC / AML doğrulaması.'
                  : 'Retail & corporate wallets, instant P2P transfers, QR payments, and digital KYC/AML verification.'}
              </div>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', padding: '14px 16px', border: '1px solid #E2E8F0', borderRadius: '0px' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#071D3A', marginBottom: '4px' }}>
                {lang === 'TR' ? 'Soft POS, Sanal POS & PayFac' : 'Soft POS, vPOS & PayFac'}
              </div>
              <div style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.45 }}>
                {lang === 'TR'
                  ? 'Android POS, Sanal POS ve Payment Facilitator altyapısıyla uçtan uca üye işyeri yönetimi.'
                  : 'Android POS, Virtual POS, and Payment Facilitator infrastructure for merchant acquiring.'}
              </div>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', padding: '14px 16px', border: '1px solid #E2E8F0', borderRadius: '0px' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#071D3A', marginBottom: '4px' }}>
                {lang === 'TR' ? 'EMV & Tokenizasyon' : 'EMV & Tokenization'}
              </div>
              <div style={{ fontSize: '12px', color: '#64748B', lineHeight: 1.45 }}>
                {lang === 'TR'
                  ? 'TSP/TSM mimarisi, kart kişiselleştirme ve toplu taşıma (AFC) temassız açık çevrim geçiş sistemleri.'
                  : 'TSP/TSM architecture, card personalization, and contactless open-loop transit (AFC) systems.'}
              </div>
            </div>
          </div>
        </div>

        {/* Sharp Filter Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '48px'
        }}>
          {categories.map((cat) => {
            const count = cat === 'All' ? partnersData.length : partnersData.filter(p => p.category === cat).length;
            const isActive = activeCategory === cat;
            const label = categoryLabels[cat][lang];
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '0px',
                  border: isActive ? '1px solid #071D3A' : '1px solid #CBD5E1',
                  backgroundColor: isActive ? '#071D3A' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#334155',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.4px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.15s ease',
                  boxShadow: isActive ? '0 4px 12px rgba(7, 29, 58, 0.12)' : 'none'
                }}
              >
                <span>{label}</span>
                <span style={{
                  fontSize: '11px',
                  padding: '1px 6px',
                  backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : '#F1F5F9',
                  color: isActive ? '#FFFFFF' : '#64748B',
                  borderRadius: '0px'
                }}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Partners Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '0px',
                border: '1px solid #E2E8F0',
                borderTop: '3px solid #071D3A',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(7, 29, 58, 0.03)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(7, 29, 58, 0.08)';
                e.currentTarget.style.borderColor = '#CBD5E1';
                e.currentTarget.style.borderTopColor = '#2563EB';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(7, 29, 58, 0.03)';
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.borderTopColor = '#071D3A';
              }}
            >
              <div>
                {/* Logo Container */}
                <div style={{
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  padding: '8px 12px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '0px',
                  border: '1px solid #F1F5F9'
                }}>
                  <img
                    src={getAssetUrl(partner.logo)}
                    alt={partner.name}
                    loading="lazy"
                    style={{
                      maxHeight: '44px',
                      maxWidth: '180px',
                      width: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                {/* Partner Name & Subtitle */}
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#071D3A',
                  margin: '0 0 6px 0',
                  lineHeight: 1.3,
                  fontFamily: 'Instrument Sans, sans-serif'
                }}>
                  {partner.name}
                </h3>

                <p style={{
                  fontSize: '13px',
                  lineHeight: '1.5',
                  color: '#64748B',
                  margin: '0 0 16px 0',
                  minHeight: '40px',
                  fontFamily: 'Instrument Sans, sans-serif'
                }}>
                  {partner.desc}
                </p>

                {/* Paymio Specific Presentation Link Button */}
                {partner.id === 'paymio' && (
                  <div style={{ marginBottom: '16px' }}>
                    <a
                      href="/assets/docs/Paymio-Services-Solutions-v1.3.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: '#1D4ED8',
                        backgroundColor: '#EFF6FF',
                        border: '1px solid #BFDBFE',
                        padding: '6px 12px',
                        borderRadius: '0px',
                        textDecoration: 'none',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#DBEAFE';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#EFF6FF';
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                      </svg>
                      <span>{lang === 'TR' ? 'Çözüm & Hizmetler Sunumu (PDF)' : 'Services & Solutions Presentation (PDF)'}</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Card Footer: Category Tag & External Link Arrow */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '14px',
                borderTop: '1px solid #F1F5F9'
              }}>
                <span style={{
                  fontSize: '10.5px',
                  fontWeight: 700,
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  color: '#2563EB',
                  backgroundColor: '#EFF6FF',
                  padding: '4px 10px',
                  borderRadius: '0px',
                  border: '1px solid #DBEAFE'
                }}>
                  {categoryLabels[partner.category as Category] ? categoryLabels[partner.category as Category][lang] : partner.category}
                </span>

                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#071D3A',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#2563EB';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#071D3A';
                  }}
                >
                  <span>{t.visitBtn}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
