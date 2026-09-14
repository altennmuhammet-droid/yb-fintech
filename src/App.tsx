import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { MediaCoveragePage } from './pages/MediaCoveragePage';
import { PressReleasePage } from './pages/PressReleasePage';
import { LanguageProvider } from './context/LanguageContext';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
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
      </div>
    </LanguageProvider>
  );
};
