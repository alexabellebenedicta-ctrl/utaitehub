import React, { useState, useEffect } from 'react';
import { PageId, Guide } from './types';
import { GUIDES_DATA } from './data/guidesData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { Utaite101Page } from './components/Utaite101Page';
import { StartHerePage } from './components/StartHerePage';
import { GuidesPage } from './components/GuidesPage';
import { DawGuideSection } from './components/DawGuideSection';
import { CollaborationPage } from './components/CollaborationPage';
import { ResourcesPage } from './components/ResourcesPage';
import { GlossaryPage } from './components/GlossaryPage';
import { FaqPage } from './components/FaqPage';
import { GuideModal } from './components/GuideModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [activeGuideId, setActiveGuideId] = useState<string | null>(null);
  const [guidesCategoryFilter, setGuidesCategoryFilter] = useState<string>('All');

  // Handle URL hash if user enters with #start-here or similar
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home', 
        'utaite-101', 
        'start-here', 
        'guides', 
        'daw-guide', 
        'collaboration', 
        'resources', 
        'glossary', 
        'faq'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenGuide = (guideId: string) => {
    setActiveGuideId(guideId);
  };

  const handleCloseGuide = () => {
    setActiveGuideId(null);
  };

  const handleFilterGuidesCategory = (category: string) => {
    setGuidesCategoryFilter(category);
    navigateTo('guides');
  };

  const currentGuide: Guide | null = activeGuideId 
    ? (GUIDES_DATA.find((g) => g.id === activeGuideId) || null)
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F6] text-[#18181B] font-sans selection:bg-[#EEEBFF] selection:text-[#6C5CE7]">
      {/* Top Navbar */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Area */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={navigateTo} 
            onOpenGuide={handleOpenGuide}
            onFilterGuidesCategory={handleFilterGuidesCategory}
          />
        )}

        {currentPage === 'utaite-101' && (
          <Utaite101Page onNavigate={navigateTo} />
        )}

        {currentPage === 'start-here' && (
          <StartHerePage 
            onNavigate={navigateTo} 
            onOpenGuide={handleOpenGuide} 
          />
        )}

        {currentPage === 'guides' && (
          <GuidesPage 
            onOpenGuide={handleOpenGuide}
            onNavigate={navigateTo}
            initialCategory={guidesCategoryFilter}
          />
        )}

        {currentPage === 'daw-guide' && (
          <DawGuideSection onNavigate={navigateTo} />
        )}

        {currentPage === 'collaboration' && (
          <CollaborationPage 
            onNavigate={navigateTo} 
            onOpenGuide={handleOpenGuide} 
          />
        )}

        {currentPage === 'resources' && (
          <ResourcesPage onNavigate={navigateTo} />
        )}

        {currentPage === 'glossary' && (
          <GlossaryPage onNavigate={navigateTo} />
        )}

        {currentPage === 'faq' && (
          <FaqPage onNavigate={navigateTo} />
        )}
      </main>

      {/* Guide Reading Modal */}
      {currentGuide && (
        <GuideModal 
          guide={currentGuide} 
          onClose={handleCloseGuide} 
        />
      )}

      {/* Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
