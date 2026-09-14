import React from 'react';

interface AnnouncementsProps {
  navigate: (path: string) => void;
}

export const AnnouncementsSection: React.FC<AnnouncementsProps> = ({ navigate }) => {
  const pressReleaseUrl = '/press-releases/ypf-luz-and-yb-fintech-announce-one-of-the-worlds-largest-tokenized-energy-asset-projects-on-the-xrp-ledger';

  return (
    <section className="press-releases">
      <div className="text-button-wrap">
        <div className="text-wrapper-down">
          <div className="title-page dark">Company Announcements</div>
          <div className="body-base dark">First-hand updates on our deals, partnerships, and milestones.</div>
        </div>
      </div>
      <div className="collection-list-wrapper-2 w-dyn-list">
        <div role="list" className="w-dyn-items">
          <div role="listitem" className="collection-item w-dyn-item">
            <div className="body-base dark">March 12, 2026</div>
            <div className="subheading dark">YPF Luz and YB Fintech announce one of the world’s largest tokenized energy asset projects on the XRP Ledger</div>
            <a
              href={pressReleaseUrl}
              onClick={(e) => {
                e.preventDefault();
                navigate(pressReleaseUrl);
              }}
              className="button-link w-inline-block"
            >
              <h4 className="body-base dark">Read more</h4>
              <img src="/assets/images/flecha-dark.png" loading="lazy" width="20" alt="" className="image-67"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
