import React, { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowRight, Music } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'utaite-101', label: 'Utaite 101' },
    { id: 'start-here', label: 'Start Here' },
    { id: 'guides', label: 'Guides' },
    { id: 'collaboration', label: 'Collab & Mix' },
    { id: 'resources', label: 'Gear Vault' },
    { id: 'glossary', label: 'Glossary' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-xs border-b border-[#E7E7EA] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <button 
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left focus:outline-none group"
          >
            <div className="w-8 h-8 rounded-md bg-[#EEEBFF] flex items-center justify-center text-[#6C5CE7] transition-colors">
              <Music className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-lg font-bold tracking-tight text-[#18181B]">
                Utaite<span className="text-[#6C5CE7]">Hub</span>
              </span>
              <span className="hidden sm:inline-block text-[11px] font-mono text-[#6B6B73] bg-[#F8F8F6] px-2 py-0.5 rounded border border-[#E7E7EA]">
                vocal resource
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-[#6C5CE7] bg-[#EEEBFF]'
                      : 'text-[#6B6B73] hover:text-[#18181B] hover:bg-[#F8F8F6]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: START HERE Button (Desktop) & Hamburger (Mobile) */}
          <div className="flex items-center gap-2.5">
            <button
              id="nav-start-here-btn"
              onClick={() => handleNavClick('start-here')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-medium bg-[#6C5CE7] text-white hover:bg-[#5A4AD1] transition-colors"
            >
              <span>First Cover Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#6B6B73] hover:text-[#18181B] hover:bg-[#F8F8F6] border border-[#E7E7EA]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E7E7EA] px-4 pt-2 pb-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium flex items-center justify-between transition-colors ${
                  isActive
                    ? 'text-[#6C5CE7] bg-[#EEEBFF]'
                    : 'text-[#6B6B73] hover:text-[#18181B] hover:bg-[#F8F8F6]'
                }`}
              >
                <span>{link.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
