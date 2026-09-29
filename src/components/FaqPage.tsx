import React, { useState } from 'react';
import { PageId } from '../types';
import { FAQ_ITEMS } from '../data/faqData';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Lightbulb, 
  X,
  Sparkles
} from 'lucide-react';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export function FaqPage({ onNavigate }: FaqPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Track open state of individual FAQ questions
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-what-is-utaite': true,
    'faq-need-amazing-singer': true,
    'faq-what-mic': true,
  });

  const categories = ['All', 'Getting Started', 'Recording', 'Mixing', 'Collaboration', 'Uploading'];

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesSearch = 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full space-y-8 py-6 sm:py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* HEADER */}
      <div className="space-y-3 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#EEEBFF] text-[#6C5CE7] text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Help & Clarifications</span>
        </div>
        
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] tracking-tight">
          Frequently Asked Questions
        </h1>
        
        <p className="text-base text-[#6B6B73] leading-relaxed">
          Straightforward answers addressing copyright guidelines, Japanese language requirements, starter budgets, and collaborator etiquette.
        </p>
      </div>

      {/* SEARCH AND CATEGORY FILTER */}
      <div className="space-y-3.5 bg-white border border-[#E7E7EA] rounded-lg p-5">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B6B73]" />
          <input
            id="faq-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., 'Japanese', 'copyright', 'cost', 'phone', 'views')..."
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

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs whitespace-nowrap transition-colors border ${
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

      {/* FAQ ACCORDION LIST */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="p-10 text-center bg-white border border-[#E7E7EA] rounded-lg space-y-2">
            <HelpCircle className="w-6 h-6 text-[#6B6B73] mx-auto" />
            <h3 className="font-heading text-sm font-bold text-[#18181B]">No Questions Match</h3>
            <p className="text-xs text-[#6B6B73]">
              No answers match your query. Try a broader search term or switch categories.
            </p>
          </div>
        ) : (
          filteredFaqs.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className={`border rounded-lg overflow-hidden transition-colors ${
                  isOpen 
                    ? 'bg-white border-[#6C5CE7]/60 shadow-xs' 
                    : 'bg-white border-[#E7E7EA]'
                }`}
              >
                {/* Question Row */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono font-medium text-[#6C5CE7]">
                      {item.category}
                    </span>
                    <h2 className="font-heading text-base sm:text-lg font-bold text-[#18181B] leading-snug">
                      {item.question}
                    </h2>
                  </div>

                  <div className="p-1 rounded text-[#6B6B73] shrink-0 mt-1">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#6C5CE7]" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-sm text-[#6B6B73] leading-relaxed border-t border-[#E7E7EA] pt-3.5 space-y-3 bg-[#F8F8F6]/50">
                    <p>{item.answer}</p>
                    {item.extraTip && (
                      <div className="flex items-start gap-2.5 p-3 rounded-md bg-[#EEEBFF]/60 border border-[#EEEBFF] text-xs text-[#18181B]">
                        <Lightbulb className="w-4 h-4 text-[#6C5CE7] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#6C5CE7]">Tip: </strong>
                          <span>{item.extraTip}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Helpful Closing Banner */}
      <div className="p-5 sm:p-6 bg-white border border-[#E7E7EA] rounded-lg text-center space-y-3">
        <h4 className="font-heading text-base font-bold text-[#18181B]">
          Still have questions?
        </h4>
        <p className="text-sm text-[#6B6B73] max-w-md mx-auto">
          Explore our in-depth field guides or follow the step-by-step roadmap to produce your debut cover.
        </p>
        <div className="flex justify-center gap-2 pt-1 text-xs">
          <button
            onClick={() => onNavigate('guides')}
            className="px-4 py-2 rounded-md bg-[#6C5CE7] text-white font-medium hover:bg-[#5A4AD1] transition-colors"
          >
            Browse Guides
          </button>
          <button
            onClick={() => onNavigate('start-here')}
            className="px-4 py-2 rounded-md bg-[#F8F8F6] border border-[#E7E7EA] text-[#18181B] hover:bg-white transition-colors"
          >
            Start Roadmap
          </button>
        </div>
      </div>

    </div>
  );
}
