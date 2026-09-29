import React, { useState } from 'react';
import { PageId } from '../types';
import { GLOSSARY_TERMS } from '../data/glossaryData';
import { 
  BookA, 
  Search, 
  HelpCircle, 
  X,
  Sparkles
} from 'lucide-react';

interface GlossaryPageProps {
  onNavigate: (page: PageId) => void;
}

export function GlossaryPage({ onNavigate }: GlossaryPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Available initial letters from terms
  const letters = ['All', ...Array.from(new Set(GLOSSARY_TERMS.map((t) => t.term[0].toUpperCase()))).sort()];
  
  const categories = ['All', 'Song Prep', 'Audio/Tech', 'Recording', 'Community'];

  const filteredTerms = GLOSSARY_TERMS.filter((item) => {
    const matchesSearch = 
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDefinition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.fullExplanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.japanese && item.japanese.includes(searchQuery)) ||
      (item.exampleOrAnalogy && item.exampleOrAnalogy.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesLetter = selectedLetter === 'All' || item.term[0].toUpperCase() === selectedLetter;
    const matchesCategory = selectedCategory === 'All' || item.relatedCategory === selectedCategory;

    return matchesSearch && matchesLetter && matchesCategory;
  });

  return (
    <div className="w-full space-y-8 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* HEADER */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#EEEBFF] text-[#6C5CE7] text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Terminology Lexicon</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] tracking-tight">
          Audio & Utaite Lexicon
        </h1>
        <p className="text-base text-[#6B6B73] leading-relaxed">
          Decipher Japanese producer terminology, audio engineering lingo, and internet music culture terms with clear, practical explanations.
        </p>
      </div>

      {/* SEARCH AND FILTER CONTROLS */}
      <div className="space-y-3.5 bg-white border border-[#E7E7EA] rounded-lg p-5">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B6B73]" />
          <input
            id="glossary-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search keyword (e.g., 'inst', 'dry', 'clipping', 'stems', 'kiyaku', 'DAW', 'mix')..."
            className="w-full pl-10 pr-10 py-2 rounded-md bg-[#F8F8F6] border border-[#E7E7EA] text-sm text-[#18181B] focus:outline-none focus:border-[#6C5CE7] focus:bg-white placeholder-[#6B6B73]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6B6B73] hover:text-[#18181B]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Letter Filter Ribbon */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs">
          <span className="text-[11px] font-medium text-[#6B6B73] mr-1.5 shrink-0">Letter:</span>
          {letters.map((letter) => {
            const isSelected = selectedLetter === letter;
            return (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                className={`w-7 h-7 rounded-md text-xs shrink-0 transition-colors flex items-center justify-center border ${
                  isSelected
                    ? 'bg-[#6C5CE7] text-white border-[#6C5CE7] font-semibold'
                    : 'bg-white text-[#6B6B73] border-[#E7E7EA] hover:text-[#18181B] hover:border-[#6C5CE7]/40'
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs pt-1 border-t border-[#E7E7EA]">
          <span className="text-[11px] font-medium text-[#6B6B73] mr-1.5 shrink-0">
            Category:
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-md text-xs whitespace-nowrap transition-colors border ${
                  isSelected
                    ? 'bg-[#EEEBFF] text-[#6C5CE7] border-[#6C5CE7] font-medium'
                    : 'bg-white text-[#6B6B73] border-[#E7E7EA] hover:text-[#18181B]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

      </div>

      {/* GLOSSARY TERMS GRID */}
      <div>
        <div className="flex items-center justify-between text-xs text-[#6B6B73] mb-3">
          <span>Matching Entries: <strong className="text-[#18181B]">{filteredTerms.length}</strong></span>
          {(selectedLetter !== 'All' || selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedLetter('All');
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-[#6C5CE7] hover:text-[#5A4AD1] font-medium transition-colors"
            >
              Reset Filters
            </button>
          )}
        </div>

        {filteredTerms.length === 0 ? (
          <div className="p-12 text-center bg-white border border-[#E7E7EA] rounded-lg space-y-2">
            <HelpCircle className="w-6 h-6 text-[#6B6B73] mx-auto" />
            <h3 className="font-heading text-sm font-bold text-[#18181B]">No Matching Terms</h3>
            <p className="text-xs text-[#6B6B73]">
              No vocabulary terms match your query. Try broadening your keyword or clearing filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTerms.map((t) => (
              <div
                key={t.term}
                id={`glossary-card-${t.term.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="bg-white border border-[#E7E7EA] rounded-lg p-5 flex flex-col justify-between hover:border-[#6C5CE7]/60 transition-colors"
              >
                <div className="space-y-2.5">
                  {/* Category and Japanese tag */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#EEEBFF] text-[#6C5CE7]">
                      {t.relatedCategory}
                    </span>
                    {t.japanese && (
                      <span className="text-[11px] font-mono text-[#6B6B73] bg-[#F8F8F6] px-2 py-0.5 rounded border border-[#E7E7EA]">
                        {t.japanese}
                      </span>
                    )}
                  </div>

                  {/* Term Name */}
                  <div className="space-y-0.5">
                    <h3 className="font-heading text-xl font-bold text-[#18181B]">
                      {t.term}
                    </h3>
                    {t.pronunciation && (
                      <p className="text-xs text-[#6B6B73]">
                        {t.pronunciation}
                      </p>
                    )}
                  </div>

                  {/* Definition */}
                  <p className="text-xs font-semibold text-[#18181B] leading-relaxed">
                    {t.shortDefinition}
                  </p>
                  <p className="text-xs text-[#6B6B73] leading-relaxed">
                    {t.fullExplanation}
                  </p>
                </div>

                {/* Plain English / Example Box */}
                {t.exampleOrAnalogy && (
                  <div className="mt-4 pt-2.5 border-t border-[#E7E7EA] bg-[#F8F8F6] -mx-5 -mb-5 p-3 rounded-b-lg text-xs">
                    <strong className="text-[#6C5CE7] text-[11px] font-medium uppercase block mb-0.5">
                      Plain English Translation:
                    </strong>
                    <span className="text-[#6B6B73] text-xs leading-relaxed">
                      {t.exampleOrAnalogy}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
