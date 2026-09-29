import React, { useState } from 'react';
import { PageId } from '../types';
import { GUIDES_DATA } from '../data/guidesData';
import { 
  Search, 
  Clock, 
  Award, 
  ArrowRight, 
  BookOpen, 
  Music, 
  Mic, 
  Headphones, 
  Palette, 
  Users, 
  X,
  Sparkles
} from 'lucide-react';

interface GuidesPageProps {
  onOpenGuide: (guideId: string) => void;
  onNavigate: (page: PageId) => void;
  initialCategory?: string;
}

export function GuidesPage({ onOpenGuide, onNavigate, initialCategory }: GuidesPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  const categories = [
    { label: 'All', icon: BookOpen },
    { label: 'Song Preparation', icon: Music },
    { label: 'Recording', icon: Mic },
    { label: 'Audio & Mixing', icon: Headphones },
    { label: 'Visuals', icon: Palette },
    { label: 'Collaboration', icon: Users },
  ];

  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  // Filter guides
  const filteredGuides = GUIDES_DATA.filter((guide) => {
    const matchesSearch = 
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.keyTakeaways.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || guide.difficulty === selectedDifficulty;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="w-full space-y-8 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* HEADER */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#EEEBFF] text-[#6C5CE7] text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Field Manuals</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] tracking-tight">
          Field Guides & Technical Handbooks
        </h1>
        <p className="text-base text-[#6B6B73] leading-relaxed">
          Step-by-step documentation on finding instrumentals, acoustic vocal tracking, gain-staging headroom, tuning prep, and collaborating with artists.
        </p>
      </div>

      {/* SPECIAL INTERACTIVE CALLOUT: DAW GUIDE */}
      <div className="bg-white border border-[#E7E7EA] rounded-lg p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6C5CE7]">
            Interactive Comparison
          </span>
          <h3 className="font-heading text-lg sm:text-xl font-bold text-[#18181B]">
            Choosing a Digital Audio Workstation?
          </h3>
          <p className="text-sm text-[#6B6B73] max-w-2xl">
            Compare BandLab, REAPER, GarageBand, Audacity, and FL Studio side-by-side based on operating system, price tier, and vocal tracking ergonomics.
          </p>
        </div>

        <button
          onClick={() => onNavigate('daw-guide')}
          className="px-4 py-2 rounded-md bg-[#6C5CE7] text-white text-xs sm:text-sm font-medium hover:bg-[#5A4AD1] transition-colors shrink-0 flex items-center gap-1.5"
        >
          <span>Open DAW Comparison</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* SEARCH AND FILTERS */}
      <div className="space-y-3.5 bg-white border border-[#E7E7EA] rounded-lg p-5">
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B6B73]" />
          <input
            id="guide-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guides (e.g., 'instrumental', 'gain', 'reverb', 'DAW', 'artist', 'budget')..."
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

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <span className="text-[11px] font-medium text-[#6B6B73] mr-1.5 shrink-0">Topic:</span>
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.label;
            return (
              <button
                key={cat.label}
                id={`guide-cat-${cat.label.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setSelectedCategory(cat.label)}
                className={`px-3 py-1.5 rounded-md text-xs whitespace-nowrap flex items-center gap-1.5 transition-colors border ${
                  isSelected
                    ? 'bg-[#EEEBFF] text-[#6C5CE7] border-[#6C5CE7] font-medium'
                    : 'bg-white text-[#6B6B73] border-[#E7E7EA] hover:text-[#18181B] hover:border-[#6C5CE7]/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Difficulty Filter Pills */}
        <div className="flex items-center gap-1.5 text-xs pt-1 border-t border-[#E7E7EA]">
          <span className="text-[#6B6B73] text-[11px] font-medium mr-1.5 shrink-0">Difficulty:</span>
          {difficulties.map((diff) => {
            const isSelected = selectedDifficulty === diff;
            return (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-2.5 py-1 rounded-md text-xs transition-colors ${
                  isSelected
                    ? 'bg-[#18181B] text-white font-medium'
                    : 'bg-[#F8F8F6] text-[#6B6B73] border border-[#E7E7EA] hover:text-[#18181B]'
                }`}
              >
                {diff}
              </button>
            );
          })}
        </div>

      </div>

      {/* GUIDES GRID */}
      <div>
        <div className="flex items-center justify-between text-xs text-[#6B6B73] mb-3">
          <span>Available Handbooks: <strong className="text-[#18181B]">{filteredGuides.length}</strong></span>
          {(selectedCategory !== 'All' || selectedDifficulty !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedDifficulty('All');
                setSearchQuery('');
              }}
              className="text-[#6C5CE7] hover:text-[#5A4AD1] font-medium transition-colors"
            >
              Reset Filters
            </button>
          )}
        </div>

        {filteredGuides.length === 0 ? (
          <div className="p-12 text-center bg-white border border-[#E7E7EA] rounded-lg space-y-2">
            <BookOpen className="w-6 h-6 text-[#6B6B73] mx-auto" />
            <h3 className="font-heading text-sm font-bold text-[#18181B]">No Guides Found</h3>
            <p className="text-xs text-[#6B6B73]">
              No guides match your query. Try searching for terms like "mic", "off-vocal", "key", or "collab".
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredGuides.map((guide) => {
              return (
                <div
                  key={guide.id}
                  id={`guide-card-${guide.id}`}
                  onClick={() => onOpenGuide(guide.id)}
                  className="bg-white border border-[#E7E7EA] rounded-lg p-5 flex flex-col justify-between hover:border-[#6C5CE7]/60 hover:-translate-y-0.5 transition-all cursor-pointer group"
                >
                  <div className="space-y-3">
                    
                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#EEEBFF] text-[#6C5CE7]">
                        {guide.category}
                      </span>
                      <span className="flex items-center gap-1 text-[#6B6B73] text-[11px]">
                        <Clock className="w-3 h-3 text-[#6B6B73]" />
                        {guide.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-heading text-base sm:text-lg font-bold text-[#18181B] group-hover:text-[#6C5CE7] transition-colors leading-snug">
                      {guide.title}
                    </h2>

                    {/* Short Description */}
                    <p className="text-xs text-[#6B6B73] leading-relaxed">
                      {guide.shortDescription}
                    </p>

                    {/* Key takeaway preview */}
                    {guide.keyTakeaways && guide.keyTakeaways[0] && (
                      <div className="pt-2 border-t border-[#E7E7EA] text-xs text-[#6B6B73]">
                        <span className="text-[#6C5CE7] font-medium">Core rule:</span> {guide.keyTakeaways[0]}
                      </div>
                    )}
                  </div>

                  {/* Card Bottom: Difficulty badge & CTA */}
                  <div className="mt-5 pt-3 border-t border-[#E7E7EA] flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1 text-[#6B6B73]">
                      <Award className="w-3 h-3 text-[#6C5CE7]" />
                      <span>{guide.difficulty}</span>
                    </span>

                    <span className="font-medium text-[#6C5CE7] group-hover:text-[#5A4AD1] flex items-center gap-1">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}
