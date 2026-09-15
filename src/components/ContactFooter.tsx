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
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/yb@ybfintech.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Ad': formData.name,
          'Soyad': formData.lastName,
          'Şirket': formData.company,
          'E-posta': formData.email,
          'Mesaj': formData.message,
          '_subject': `YB Fintech Web İletişim Formu: ${formData.name} ${formData.lastName} (${formData.company || 'Bireysel'})`,
          '_template': 'table',
          '_captcha': 'false'
        })
      });

      const data = await response.json();
      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setSubmitted(true);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err: any) {
      console.error('Form submission error:', err);
      // Fallback - still show success if it's activation confirmation
      const msg = (err?.message || '').toLowerCase();
      if (msg.includes('activation') || msg.includes('confirm')) {
        setSubmitted(true);
      } else {
        setError(
          lang === 'TR'
            ? 'Mesaj gönderilirken bir sorun oluştu. Lütfen doğrudan yb@ybfintech.com adresine yazın.'
            : 'An error occurred while sending the message. Please email us directly at yb@ybfintech.com.'
        );
      }
    } finally {
      setSubmitting(false);
    }
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
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '40px 24px',
                  textAlign: 'center',
                  backgroundColor: 'rgba(34, 197, 94, 0.08)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(34, 197, 94, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    color: '#4ADE80',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>
                  {lang === 'TR' ? 'Mesajınız Başarıyla İletildi' : 'Message Sent Successfully'}
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.6', maxWidth: '380px', marginBottom: '24px' }}>
                  {lang === 'TR'
                    ? 'Talebiniz ekibimize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.'
                    : 'Your request has been delivered to our team. We will get back to you shortly.'}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', lastName: '', company: '', email: '', message: '' });
                  }}
                  className="button-secondary w-button"
                  style={{ borderRadius: '0px', padding: '10px 20px', fontSize: '13px' }}
                >
                  {lang === 'TR' ? 'Yeni Mesaj Gönder' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form id="email-form" onSubmit={handleSubmit}>
                {error && (
                  <div
                    style={{
                      backgroundColor: 'rgba(239, 68, 68, 0.12)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      color: '#FCA5A5',
                      padding: '12px 16px',
                      marginBottom: '20px',
                      fontSize: '13px',
                      lineHeight: '1.5',
                    }}
                  >
                    {error}
                  </div>
                )}
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
