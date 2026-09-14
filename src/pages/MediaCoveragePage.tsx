import React from 'react';
import { ContactFooter } from '../components/ContactFooter';
import { getAssetUrl } from '../utils/assets';

interface MediaCoveragePageProps {
  navigate: (path: string) => void;
}

export const MediaCoveragePage: React.FC<MediaCoveragePageProps> = ({ navigate }) => {
  const articles = [
    {
      image: getAssetUrl('/assets/images/news-ypfluz.png'),
      media: 'YPF Luz',
      tag: 'Enertoken',
      tagColor: '#2563eb',
      title: "YPF Luz launches Enertoken, Argentina's largest platform for contracting and managing electricity using blockchain technology",
      link: 'https://www.ypfluz.com/Noticias/NoticiaCompleta/213'
    },
    {
      image: getAssetUrl('/assets/images/news-bunge.png'),
      media: 'Bunge',
      tag: 'T&S Explorer',
      tagColor: '#10b981',
      title: 'Bunge and Bangkok Produce Merchandising expand partnership to supply deforestation-free soy tracked using blockchain technology',
      link: 'https://www.bunge.com.br/Press-Releases/Bunge-e-Bangkok-Produce-Merchandising-expandem-parceria-com-tecnologia-blockchain'
    },
    {
      image: getAssetUrl('/assets/images/news-bv.png'),
      media: 'TI Inside',
      tag: 'Aura',
      tagColor: '#f59e0b',
      title: 'Banco BV launches tokenized CDCA and reinforces its leadership in the innovation and tokenization of assets agenda.',
      link: 'https://tiinside.com.br/es/08/12/2025/banco-bv-lanca-cdca-tokenizado-e-reforca-protagonismo-na-agenda-de-inovacao-e-tokenizacao-de-ativos/'
    },
    {
      image: getAssetUrl('/assets/images/news-globo.png'),
      media: 'Globo Rural',
      tag: 'Labs',
      tagColor: '#8b5cf6',
      title: "Technology becomes 'key' to unlocking access to rural credit.",
      link: 'https://globorural.globo.com/tecnologia-e-inovacao/noticia/2025/10/tecnologia-torna-se-chave-para-destravar-acesso-a-credito-rural.ghtml'
    }
  ];

  return (
    <div className="body-news">
      {/* Featured Header */}
      <div
        className="dark-section-background news-template-hero"
        style={{
          backgroundImage: `url(${getAssetUrl('/assets/images/news-ypfluz.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '480px',
          display: 'flex',
          alignItems: 'center',
          padding: '60px 40px',
          position: 'relative'
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(9, 14, 36, 0.88)', borderRadius: 'inherit' }}></div>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="body-base" style={{ color: '#60a5fa', fontWeight: 700, letterSpacing: '2px', marginBottom: '16px' }}>
            FEATURED
          </div>
          <h1 className="title-page news" style={{ color: '#ffffff', fontSize: '38px', lineHeight: '130%', marginBottom: '24px' }}>
            YPF Luz launches Enertoken, Argentina's largest platform for contracting and managing electricity using blockchain technology
          </h1>
          <a
            href="https://www.ypfluz.com/Noticias/NoticiaCompleta/213"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link w-inline-block"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}
          >
            <span className="subheading" style={{ color: '#ffffff' }}>Read more</span>
            <img src={getAssetUrl('/assets/images/flecha.png')} width="20" alt="Arrow" />
          </a>
        </div>
      </div>

      {/* All News Grid */}
      <section className="all-news-section" style={{ maxWidth: '1240px', margin: '60px auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="title-page dark center" style={{ fontSize: '42px', marginBottom: '12px' }}>
            YB Fintech in the news
          </div>
          <div className="body-base dark center" style={{ opacity: 0.75, fontSize: '18px' }}>
            Latest media coverage and global announcements.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {articles.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: '#ffffff',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                border: '1px solid rgba(9,14,36,0.08)',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 8px 30px rgba(9,14,36,0.04)'
              }}
            >
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '12px' }}>
                    <span className="body-small font-semibold">{item.media}</span>
                    <span
                      style={{
                        backgroundColor: item.tagColor,
                        color: '#ffffff',
                        fontSize: '12px',
                        padding: '3px 8px',
                        borderRadius: '100px',
                        fontWeight: 600
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <div className="body-base dark" style={{ fontWeight: 600, fontSize: '15px', lineHeight: '140%', marginBottom: '20px' }}>
                    {item.title}
                  </div>
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-link dark"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#090e24', fontWeight: 600 }}
                >
                  <span>Read more</span>
                  <img src={getAssetUrl('/assets/images/flecha-dark.png')} width="16" alt="Arrow" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Valley CTA Banner */}
      <div style={{ maxWidth: '1240px', margin: '40px auto 60px', padding: '0 24px' }}>
        <div className="cta-color valley" style={{ borderRadius: '2rem', padding: '60px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div className="title-page center width-50" style={{ color: '#ffffff', fontSize: '38px', margin: '0 auto 24px' }}>
            Ready to unlock your assets full potential?
          </div>
          <a href="#footer-contact" className="button-primary dark">
            Let's talk
          </a>
          <div className="noise-overlay"></div>
        </div>
      </div>

      <ContactFooter />
    </div>
  );
};
