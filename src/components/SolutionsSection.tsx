import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';

export const SolutionsSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang].solutions;

  return (
    <div className="solutions-background">
      <div className="color-blob ocean solutions"></div>
      <div className="color-blob valley solutions"></div>
      <div className="color-blob flora solutions"></div>
      <div className="color-blob mountain solutions"></div>
      <div className="color-blob desert"></div>

      <section id="solutions" className="solutions-section">
        <div className="w-layout-blockcontainer solutions-nav w-container">
          <div className="solutions-nav-sticky">
            <div className="text-wrapper-down">
              <div className="title-page dark" style={{ whiteSpace: 'pre-line' }}>
                {t.mainTitle}
              </div>
              <p className="body-base dark">
                {t.mainDesc}
              </p>
            </div>
            <div className="solutions-nav-buttons">
              <a href="#solution-creditvault" className="link-block w-inline-block">
                <div className="tag solution-nav" style={{ borderRadius: '0px' }}>
                  <div className="solution-dot aura"></div>
                  <div>YB CreditVault</div>
                </div>
              </a>
              <a href="#solution-tracechain" className="link-block w-inline-block">
                <div className="tag solution-nav" style={{ borderRadius: '0px' }}>
                  <div className="solution-dot tsexplorer"></div>
                  <div>YB TraceChain</div>
                </div>
              </a>
              <a href="#solution-energreen" className="link-block w-inline-block">
                <div className="tag solution-nav" style={{ borderRadius: '0px' }}>
                  <div className="solution-dot enertoken"></div>
                  <div>YB EnerGreen</div>
                </div>
              </a>
              <a href="#solution-assetforge" className="link-block w-inline-block">
                <div className="tag solution-nav" style={{ borderRadius: '0px' }}>
                  <div className="solution-dot rtm"></div>
                  <div>YB AssetForge</div>
                </div>
              </a>
              <a href="#solution-studio" className="link-block w-inline-block">
                <div className="tag solution-nav" style={{ borderRadius: '0px' }}>
                  <div className="solution-dot labs"></div>
                  <div>YB Solutions Studio</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="w-layout-blockcontainer solutions-cards-container w-container">
          {/* 1. YB CreditVault */}
          <div id="solution-creditvault" className="anchor">
            <div className="card-solution" style={{ borderRadius: '0px' }}>
              <div className="solution-card-info">
                <div className="frame-1171277540">
                  <div className="tag desert" style={{ borderRadius: '0px' }}><div className="body-small">{t.card1.tag1}</div></div>
                  <div className="tag desert" style={{ borderRadius: '0px' }}><div className="body-small">{t.card1.tag2}</div></div>
                </div>
                <div className="text-wrapper-down">
                  <div className="title-page dark">{t.card1.title}</div>
                  <div className="heading dark">{t.card1.heading}</div>
                  <div className="body-base dark">
                    {t.card1.desc}
                  </div>
                </div>
              </div>
              <div className="solution-card-img aura" style={{ backgroundImage: 'url(/assets/images/solution-aura.png)', backgroundSize: 'cover', borderRadius: '0px' }}>
                <div className="solution-card-quote" style={{ borderRadius: '0px' }}>
                  <div className="body-base dark">
                    {t.card1.quote}
                  </div>
                  <div className="text-wrapper-down">
                    <div className="body-strong">{t.card1.author}<br /></div>
                    <div className="body-small">{t.card1.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. YB TraceChain */}
          <div id="solution-tracechain" className="anchor">
            <div className="card-solution" style={{ borderRadius: '0px' }}>
              <div className="solution-card-info">
                <div className="frame-1171277540">
                  <div className="tag valley" style={{ borderRadius: '0px' }}><div className="body-small">{t.card2.tag1}</div></div>
                  <div className="tag valley" style={{ borderRadius: '0px' }}><div className="body-small">{t.card2.tag2}</div></div>
                </div>
                <div className="text-wrapper-down">
                  <div className="title-page dark">{t.card2.title}</div>
                  <div className="heading dark">{t.card2.heading}</div>
                  <div className="body-base dark">
                    {t.card2.desc}
                  </div>
                </div>
              </div>
              <div className="solution-card-img tse" style={{ backgroundImage: 'url(/assets/images/solution-tse.png)', backgroundSize: 'cover', borderRadius: '0px' }}>
                <div className="solution-card-quote tse" style={{ borderRadius: '0px' }}>
                  <div className="body-base dark">
                    {t.card2.quote}
                  </div>
                  <div className="text-wrapper-down">
                    <div className="body-strong">{t.card2.author}<br /></div>
                    <div className="body-small">{t.card2.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. YB EnerGreen */}
          <div id="solution-energreen" className="anchor">
            <div className="card-solution" style={{ borderRadius: '0px' }}>
              <div className="solution-card-info">
                <div className="frame-1171277540">
                  <div className="tag ocean" style={{ borderRadius: '0px' }}><div className="body-small">{t.card3.tag1}</div></div>
                  <div className="tag ocean" style={{ borderRadius: '0px' }}><div className="body-small">{t.card3.tag2}</div></div>
                </div>
                <div className="text-wrapper-down">
                  <div className="title-page dark">{t.card3.title}</div>
                  <div className="heading dark">{t.card3.heading}</div>
                  <div className="body-base dark">
                    {t.card3.desc}
                  </div>
                </div>
              </div>
              <div className="solution-card-img enertoken" style={{ backgroundImage: 'url(/assets/images/solution-enertoken.png)', backgroundSize: 'cover', borderRadius: '0px' }}>
                <div className="solution-card-quote enertoken" style={{ borderRadius: '0px' }}>
                  <div className="body-base dark">
                    {t.card3.quote}
                  </div>
                  <div className="text-wrapper-down">
                    <div className="body-strong">{t.card3.author}<br /></div>
                    <div className="body-small">{t.card3.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. YB AssetForge */}
          <div id="solution-assetforge" className="anchor">
            <div className="card-solution" style={{ borderRadius: '0px' }}>
              <div className="solution-card-info">
                <div className="frame-1171277540">
                  <div className="tag mountain" style={{ borderRadius: '0px' }}><div className="body-small">{t.card4.tag1}</div></div>
                  <div className="tag mountain" style={{ borderRadius: '0px' }}><div className="body-small">{t.card4.tag2}</div></div>
                </div>
                <div className="text-wrapper-down">
                  <div className="title-page dark">{t.card4.title}</div>
                  <div className="heading dark">{t.card4.heading}</div>
                  <div className="body-base dark">
                    {t.card4.desc}
                  </div>
                </div>
              </div>
              <div className="solution-card-img rtm" style={{ backgroundImage: 'url(/assets/images/solution-rtm.png)', backgroundSize: 'cover', borderRadius: '0px' }}>
                <div className="solution-card-quote rtm" style={{ borderRadius: '0px' }}>
                  <div className="body-base dark">
                    {t.card4.quote}
                  </div>
                  <div className="text-wrapper-down">
                    <div className="body-strong">{t.card4.author}<br /></div>
                    <div className="body-small">{t.card4.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5. YB Solutions Studio */}
          <div id="solution-studio" className="anchor">
            <div className="card-solution" style={{ borderRadius: '0px' }}>
              <div className="solution-card-info">
                <div className="frame-1171277540">
                  <div className="tag flora" style={{ borderRadius: '0px' }}><div className="body-small">{t.card5.tag1}</div></div>
                  <div className="tag flora" style={{ borderRadius: '0px' }}><div className="body-small">{t.card5.tag2}</div></div>
                </div>
                <div className="text-wrapper-down">
                  <div className="title-page dark">{t.card5.title}</div>
                  <div className="heading dark">{t.card5.heading}</div>
                  <div className="body-base dark">
                    {t.card5.desc}
                  </div>
                </div>
              </div>
              <div className="solution-card-img labs" style={{ backgroundImage: 'url(/assets/images/solution-labs.png)', backgroundSize: 'cover', borderRadius: '0px' }}>
                <div className="solution-card-quote labs" style={{ borderRadius: '0px' }}>
                  <div className="body-base dark">
                    {t.card5.quote}
                  </div>
                  <div className="text-wrapper-down">
                    <div className="body-strong">{t.card5.author}<br /></div>
                    <div className="body-small">{t.card5.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
