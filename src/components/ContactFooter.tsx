import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';
import { getAssetUrl } from '../utils/assets';

export const ContactFooter: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    company: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section id="footer-contact" className="footer">
      <div className="contact-section">
        <div className="column-wrapper-left">
          <div className="text-wrapper-down">
            <h1 className="title-page gradient-ocean-white">{t.title}</h1>
            <div className="subheading width-80" style={{ marginBottom: '24px' }}>
              {t.subtitle}
            </div>

            {/* Official Contact Info Card from Business Card */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '0px',
              padding: '24px',
              marginBottom: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              {/* Phone */}
              <a
                href="tel:+905074589644"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: 600,
                  transition: 'color 0.2s'
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(71, 141, 248, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#478DF8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span>0507 458 96 44</span>
              </a>

              {/* Address */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                color: '#CBD5E1',
                fontSize: '14px',
                lineHeight: '1.6'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(71, 141, 248, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#478DF8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#FFFFFF', marginBottom: '2px' }}>{t.headquarters}</div>
                  {t.address}
                </div>
              </div>

              {/* Email */}
              <a
                href="mailto:yb@ybfintech.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#CBD5E1',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.2s'
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(71, 141, 248, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#478DF8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <span>yb@ybfintech.com</span>
              </a>
            </div>
          </div>

          {/* Legal Entity & Copyright */}
          <div className="logo-and-legal" style={{ marginTop: '32px' }}>
            <img
              loading="lazy"
              src={getAssetUrl(lang === 'TR' ? '/assets/logos/yb-logo-tr-white.svg' : '/assets/logos/yb-logo-en-white.svg')}
              alt="YB Uluslararası Finansal Danışmanlık"
              style={{
                height: '52px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block'
              }}
            />
            <div style={{ marginTop: '8px' }}>
              <div className="body-small rock-300" style={{ fontWeight: 600, color: '#FFFFFF' }}>
                YB Uluslararası Finansal Danışmanlık A.Ş.
              </div>
              <div className="body-small rock-300" style={{ fontSize: '12px', marginTop: '2px' }}>
                {t.copyright}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-forrm-container box-wrapper-style" style={{ borderRadius: '0px' }}>
          <div className="form-block w-form">
            {submitted ? (
              <div className="success-message w-form-done" style={{ display: 'block' }}>
                <div className="success-message-text">
                  {lang === 'TR' ? 'Teşekkürler! En kısa sürede sizinle iletişime geçeceğiz.' : 'Thank you! We will contact you shortly.'}
                </div>
              </div>
            ) : (
              <form id="email-form" onSubmit={handleSubmit}>
                <div className="form-input-group">
                  <label htmlFor="Name" className="form-label">{t.firstNameLabel}:</label>
                  <input
                    className="text-field w-input"
                    maxLength={256}
                    name="Name"
                    placeholder={t.firstNamePlaceholder}
                    type="text"
                    id="Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ borderRadius: '0px' }}
                  />
                </div>
                <div className="form-input-group">
                  <label htmlFor="lastname-3" className="form-label">{t.lastNameLabel}:</label>
                  <input
                    className="text-field w-input"
                    maxLength={256}
                    name="lastname-3"
                    placeholder={t.lastNamePlaceholder}
                    type="text"
                    id="lastname-3"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    style={{ borderRadius: '0px' }}
                  />
                </div>
                <div className="form-input-group">
                  <label htmlFor="company-3" className="form-label">{t.companyLabel}:</label>
                  <input
                    className="text-field w-input"
                    maxLength={256}
                    name="company-3"
                    placeholder={t.companyPlaceholder}
                    type="text"
                    id="company-3"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{ borderRadius: '0px' }}
                  />
                </div>
                <div className="form-input-group">
                  <label htmlFor="email-3" className="form-label">{t.emailLabel}:</label>
                  <input
                    className="text-field w-input"
                    maxLength={256}
                    name="email-3"
                    placeholder={t.emailPlaceholder}
                    type="email"
                    id="email-3"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ borderRadius: '0px' }}
                  />
                </div>
                <div className="form-input-group">
                  <label htmlFor="Message" className="form-label">{t.messageLabel}:</label>
                  <textarea
                    id="Message"
                    name="Message"
                    maxLength={5000}
                    placeholder={t.messagePlaceholder}
                    className="textarea w-input"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ borderRadius: '0px' }}
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value={submitting ? t.submittingBtn : submitted ? t.submittedBtn : t.submitBtn}
                  className="button-primary dark form w-button"
                  style={{ borderRadius: '0px' }}
                  disabled={submitting}
                />
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
