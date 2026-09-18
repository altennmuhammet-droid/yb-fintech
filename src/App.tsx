import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { MediaCoveragePage } from './pages/MediaCoveragePage';
import { PressReleasePage } from './pages/PressReleasePage';
import { LanguageProvider } from './context/LanguageContext';

export const App: React.FC = () => {
  const getCleanPath = () => {
    if (window.location.hash) {
      const hash = window.location.hash.replace(/^#/, '');
      return hash.startsWith('/') ? hash : `/${hash}`;
    }
    return '/';
  };

  const [currentPath, setCurrentPath] = useState(getCleanPath);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(getCleanPath());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    const targetHash = path.startsWith('/') ? path : `/${path}`;
    window.location.hash = targetHash;
    setCurrentPath(targetHash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    if (currentPath === '/media-coverage') {
      return <MediaCoveragePage navigate={navigate} />;
    }
    if (currentPath.startsWith('/press-releases/')) {
      return <PressReleasePage navigate={navigate} />;
    }
    return <HomePage navigate={navigate} />;
  };

  return (
    <LanguageProvider>
      <div className="page-wrapper">
        <Header currentPath={currentPath} navigate={navigate} />
        <main>{renderContent()}</main>
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
};
