import React from 'react';
import { Hero } from '../components/Hero';
import { TrustSlider } from '../components/TrustSlider';
import { Stats } from '../components/Stats';
import { SolutionsSection } from '../components/SolutionsSection';
import { TechnologySection } from '../components/TechnologySection';
import { MarketSection } from '../components/MarketSection';
import { AboutLeadershipSection } from '../components/AboutLeadershipSection';
import { PartnersEcosystemSection } from '../components/PartnersEcosystemSection';
import { PreFooterCta } from '../components/PreFooterCta';
import { ContactFooter } from '../components/ContactFooter';

import { PremiumBackgroundDecorations } from '../components/PremiumBackgroundDecorations';

interface HomePageProps {
  navigate?: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate = () => {} }) => {
  return (
    <>
      {/* Top Hero Dark Background Block */}
      <div className="dark-section-background">
        <Hero />
        <TrustSlider />
        <Stats />

        {/* Ambient background blur blobs */}
        <div className="color-blob flora"></div>
        <div className="color-blob ocean"></div>
        <div className="color-blob valley"></div>
        <div className="color-blob fauna"></div>
      </div>

      {/* Solutions 1-Stop-Shop Section */}
      <SolutionsSection />

      {/* Partners & Market Projections Continuous Dark Background Block */}
      <div className="dark-section-background partners">
        <TechnologySection />
        <MarketSection />
      </div>

      {/* Leadership & Strategic Partners Zone with Sticky Background Dots */}
      <div
        id="leadership-and-partners-zone"
        style={{
          display: 'grid',
          gridTemplateColumns: '100%',
          position: 'relative',
          width: '100%',
        }}
      >
        {/* Sticky Background Dots Layer - Sticks from 'Behind YB Fintech' until 'Ready to unlock' CTA */}
        <div
          style={{
            gridColumn: 1,
            gridRow: 1,
            position: 'sticky',
            top: 0,
            height: '100vh',
            width: '100%',
            alignSelf: 'start',
            pointerEvents: 'none',
            zIndex: 5,
            overflow: 'hidden',
          }}
        >
          <PremiumBackgroundDecorations />
        </div>

        {/* Content of About and Ecosystem */}
        <div style={{ gridColumn: 1, gridRow: 1, width: '100%', zIndex: 1 }}>
          <AboutLeadershipSection />
          <PartnersEcosystemSection />
        </div>
      </div>

      {/* PreFooter CTA Banner & Contact Footer */}
      <PreFooterCta />
      <ContactFooter />
    </>
  );
};
