import React from 'react';

interface NewsProps {
  navigate: (path: string) => void;
}

export const NewsSection: React.FC<NewsProps> = ({ navigate }) => {
  return (
    <section className="news-section">
      <div className="text-button-wrap">
        <div className="text-wrapper-down">
          <div className="title-page dark">YB Fintech in the news</div>
          <div className="body-base dark">Latest media coverage and global announcements.</div>
        </div>
        <a
          href="/media-coverage"
          onClick={(e) => {
            e.preventDefault();
            navigate('/media-coverage');
          }}
          className="button-primary dark w-button"
        >
          All media coverage
        </a>
      </div>
      <div className="news-collection-list-wrapper w-dyn-list">
        <div role="list" className="news-list w-dyn-items">
          {/* Card 1 */}
          <div role="listitem" className="news-item w-dyn-item">
            <img src="/assets/images/news-ypfluz.png" loading="lazy" alt="" className="news-image"/>
            <div className="text-wrapper-down news">
              <div className="medio-tag">
                <div className="body-small news-media">YPF Luz</div>
                <div style={{ backgroundColor: '#478df8' }} className="tag news"><div className="body-small">Enertoken</div></div>
              </div>
              <div className="body-base dark">YPF Luz launches Enertoken, Argentina's largest platform for contracting and managing electricity using blockchain technology</div>
            </div>
            <a href="https://www.ypfluz.com/Noticias/NoticiaCompleta/213" target="_blank" rel="noopener noreferrer" className="button-link dark w-inline-block">
              <h4 className="body-base dark">Read more</h4>
              <img src="/assets/images/flecha-dark.png" loading="lazy" width="20" alt="" className="image-67"/>
            </a>
          </div>

          {/* Card 2 */}
          <div role="listitem" className="news-item w-dyn-item">
            <img src="/assets/images/news-bunge.png" loading="lazy" alt="" className="news-image"/>
            <div className="text-wrapper-down news">
              <div className="medio-tag">
                <div className="body-small news-media">Bunge</div>
                <div style={{ backgroundColor: '#42a6a6' }} className="tag news"><div className="body-small">T&amp;S Explorer</div></div>
              </div>
              <div className="body-base dark">Bunge and Bangkok Produce Merchandising expand partnership to supply deforestation-free soy tracked using blockchain technology</div>
            </div>
            <a href="https://www.bunge.com.br/Press-Releases/Bunge-e-Bangkok-Produce-Merchandising-expandem-parceria-com-tecnologia-blockchain" target="_blank" rel="noopener noreferrer" className="button-link dark w-inline-block">
              <h4 className="body-base dark">Read more</h4>
              <img src="/assets/images/flecha-dark.png" loading="lazy" width="20" alt="" className="image-67"/>
            </a>
          </div>

          {/* Card 3 */}
          <div role="listitem" className="news-item w-dyn-item">
            <img src="/assets/images/news-bv.png" loading="lazy" alt="" className="news-image"/>
            <div className="text-wrapper-down news">
              <div className="medio-tag">
                <div className="body-small news-media">TI Inside</div>
                <div style={{ backgroundColor: '#e69c0d' }} className="tag news"><div className="body-small">Aura</div></div>
              </div>
              <div className="body-base dark">Banco BV launches tokenized CDCA and reinforces its leadership in the innovation and tokenization of assets agenda.</div>
            </div>
            <a href="https://tiinside.com.br/es/08/12/2025/banco-bv-lanca-cdca-tokenizado-e-reforca-protagonismo-na-agenda-de-inovacao-e-tokenizacao-de-ativos/" target="_blank" rel="noopener noreferrer" className="button-link dark w-inline-block">
              <h4 className="body-base dark">Read more</h4>
              <img src="/assets/images/flecha-dark.png" loading="lazy" width="20" alt="" className="image-67"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
