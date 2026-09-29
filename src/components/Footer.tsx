import React from 'react';
import { PageId } from '../types';
import { ArrowUp, Music } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'utaite-101', label: 'Utaite 101' },
    { id: 'start-here', label: '8-Step Roadmap' },
    { id: 'guides', label: 'All Guides' },
    { id: 'daw-guide', label: 'DAW Comparison' },
    { id: 'collaboration', label: 'Collaboration & Mix' },
    { id: 'resources', label: 'Gear & Software' },
    { id: 'glossary', label: 'Glossary' },
    { id: 'faq', label: 'FAQ' },
  ];

  return (
    <footer className="w-full bg-white border-t border-[#E7E7EA] pt-12 pb-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#E7E7EA]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-[#EEEBFF] flex items-center justify-center text-[#6C5CE7]">
                <Music className="w-4 h-4" />
              </div>
              <span className="font-heading text-lg font-bold tracking-tight text-[#18181B]">
                Utaite<span className="text-[#6C5CE7]">Hub</span>
              </span>
            </div>

            <p className="text-sm text-[#6B6B73] leading-relaxed max-w-sm">
              A beginner-friendly educational hub helping aspiring cover singers understand the utaite scene and produce their debut cover with confidence.
            </p>

            <p className="text-xs text-[#6B6B73] font-mono">
              Find inst • Record • Mix & Tune • Commission • Release
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6B6B73]">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`footer-nav-${item.id}`}
                  onClick={() => {
                    onNavigate(item.id);
                    scrollToTop();
                  }}
                  className="text-left text-[#6B6B73] hover:text-[#6C5CE7] transition-colors py-0.5 truncate"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Creator Communities */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6B6B73]">
              Ecosystem & Links
            </h4>
            <p className="text-xs text-[#6B6B73] leading-relaxed">
              Find instrumentals, mixers, illustrators, and communities:
            </p>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {['Piapro', 'Nico Nico', 'YouTube', 'Discord', 'Skeb', 'X / Twitter'].map((channel) => (
                <span
                  key={channel}
                  className="px-2.5 py-1 rounded-md bg-[#F8F8F6] border border-[#E7E7EA] text-[#6B6B73]"
                >
                  {channel}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6C5CE7] hover:text-[#5A4AD1] transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer & Metadata */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B6B73]">
          <p className="text-center sm:text-left">
            Independent educational resource. All original musical compositions belong to their respective Vocaloid producers and copyright holders.
          </p>
          <p className="shrink-0 text-center font-mono">
            歌い手 制作ハブ
          </p>
        </div>
      </div>
    </footer>
  );
}
