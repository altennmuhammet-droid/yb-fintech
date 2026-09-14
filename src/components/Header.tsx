import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/translations';
import { getAssetUrl } from '../utils/assets';

interface HeaderProps {
  currentPath?: string;
  navigate?: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath = '/', navigate }) => {
  const { lang, setLang } = useLanguage();
  const t = translations[lang].nav;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const navMenuRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (path: string) => {
    if (navigate) {
      navigate(path);
    } else {
      window.location.href = path;
    }
    setMobileMenuOpen(false);
    setLangDropdownOpen(false);
  };

  // Close dropdown and mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
      if (navMenuRef.current && !navMenuRef.current.contains(event.target as Node)) {
        const menuBtn = document.querySelector('.menu-button-3');
        if (menuBtn && !menuBtn.contains(event.target as Node)) {
          setMobileMenuOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="navbar-logo-left">
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar-logo-left-container shadow-three w-nav"
      >
        <div className="nav-container">
          <div className="navbar-wrapper-2">
            {/* Logo */}
            <a
              id="yb-logo"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate('/');
              }}
              aria-current="page"
              className="navbar-brand-2 w-nav-brand w--current"
              title="YB Uluslararası Finansal Danışmanlık"
              style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
            >
              <img
                src={getAssetUrl(lang === 'TR' ? '/assets/logos/yb-logo-tr.svg' : '/assets/logos/yb-logo-en.svg')}
                alt="YB Uluslararası Finansal Danışmanlık"
                style={{
                  height: '52px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </a>

            {/* Navigation Menu */}
            <nav
              ref={navMenuRef}
              role="navigation"
              className={`nav-menu-wrapper-2 w-nav-menu ${mobileMenuOpen ? 'w--open' : ''}`}
              data-nav-menu-open={mobileMenuOpen ? '' : undefined}
            >
              <ul role="list" className="nav-menu-two w-list-unstyled">
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      if (currentPath !== '/') {
                        e.preventDefault();
                        handleNavigate('/#about');
                      } else {
                        setMobileMenuOpen(false);
                      }
                    }}
                    className="nav-link-button"
                  >
                    {t.about}
                  </a>
                </li>

                <li>
                  <a
                    href="#ecosystem"
                    onClick={(e) => {
                      if (currentPath !== '/') {
                        e.preventDefault();
                        handleNavigate('/#ecosystem');
                      } else {
                        setMobileMenuOpen(false);
                      }
                    }}
                    className="nav-link-button"
                  >
                    {t.ecosystem}
                  </a>
                </li>

                

                <li>
                  <div className="nav-divider"></div>
                </li>

                {/* Language Switcher */}
                <li className="list-item" ref={dropdownRef} style={{ position: 'relative' }}>
                  <div className="w-locales-list">
                    <div
                      className={`nav-dropdown-2 w-dropdown ${langDropdownOpen ? 'w--open' : ''}`}
                    >
                      <div
                        className={`nav-dropdown-style w-dropdown-toggle ${langDropdownOpen ? 'w--open' : ''}`}
                        onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                      >
                        <div className="body-small" style={{ fontWeight: 700 }}>{lang}</div>
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          style={{
                            transform: langDropdownOpen ? 'rotate(180deg)' : 'none',
                            transition: 'transform 0.2s',
                          }}
                        >
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="#4D6E99"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      {langDropdownOpen && (
                        <nav
                          className="nav-dropdown-spacing w-dropdown-list w--open"
                          style={{
                            position: 'absolute',
                            top: '100%',
                            right: 0,
                            display: 'block',
                            paddingTop: '8px',
                            zIndex: 1000,
                          }}
                        >
                          <div
                            role="list"
                            className="nav-dropdown-list-2 w-locales-items"
                            style={{
                              backgroundColor: '#fff',
                              borderRadius: '12px',
                              boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                              padding: '12px 16px',
                              minWidth: '120px',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '6px',
                            }}
                          >
                            <div role="listitem" className="w-locales-item">
                              <a
                                href="#tr"
                                className={`nav-dropdown-link ${lang === 'TR' ? 'w--current' : ''}`}
                                style={{ fontWeight: lang === 'TR' ? 700 : 400, color: lang === 'TR' ? '#071D3A' : '#475569' }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setLang('TR');
                                  setLangDropdownOpen(false);
                                }}
                              >
                                Türkçe
                              </a>
                            </div>
                            <div role="listitem" className="w-locales-item">
                              <a
                                href="#en"
                                className={`nav-dropdown-link ${lang === 'EN' ? 'w--current' : ''}`}
                                style={{ fontWeight: lang === 'EN' ? 700 : 400, color: lang === 'EN' ? '#071D3A' : '#475569' }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setLang('EN');
                                  setLangDropdownOpen(false);
                                }}
                              >
                                English
                              </a>
                            </div>
                          </div>
                        </nav>
                      )}
                    </div>
                  </div>
                </li>

                {/* Contact CTA Button */}
                <li className="mobile-margin-top-11">
                  <a
                    href="#footer-contact"
                    className="button-primary dark w-button"
                    style={{ borderRadius: '0px' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.contact}
                  </a>
                </li>
              </ul>
            </nav>

            {/* Mobile Hamburger Button */}
            <div
              className={`menu-button-3 w-nav-button ${mobileMenuOpen ? 'w--open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ display: 'none', cursor: 'pointer', padding: '10px' }}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4D6E99" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4D6E99" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
