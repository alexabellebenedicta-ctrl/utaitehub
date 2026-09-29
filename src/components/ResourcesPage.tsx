import React, { useState } from 'react';
import { PageId } from '../types';
import { RESOURCES_DATA } from '../data/resourcesData';
import { 
  FolderOpen, 
  Search, 
  Mic, 
  Laptop, 
  Music, 
  Users, 
  Sliders, 
  X,
  Sparkles
} from 'lucide-react';

interface ResourcesPageProps {
  onNavigate: (page: PageId) => void;
}

export function ResourcesPage({ onNavigate }: ResourcesPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories: { label: string; icon: any }[] = [
    { label: 'All', icon: FolderOpen },
    { label: 'Recording', icon: Mic },
    { label: 'Audio', icon: Sliders },
    { label: 'Music', icon: Music },
    { label: 'Visual', icon: Laptop },
    { label: 'Learning', icon: Users },
  ];

  const filteredResources = RESOURCES_DATA.filter((res) => {
    const matchesSearch = 
      res.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (res.recommendedFor && res.recommendedFor.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (res.bestFor && res.bestFor.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full space-y-8 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* HEADER */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#EEEBFF] text-[#6C5CE7] text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Toolkit</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] tracking-tight">
          Gear & Software Recommendations
        </h1>
        <p className="text-base text-[#6B6B73] leading-relaxed">
          Curated microphones, audio interfaces, digital audio workstations, off-vocal directories, and community casting platforms tested for bedroom cover artists.
        </p>
      </div>

      {/* SEARCH AND CATEGORY FILTER */}
      <div className="space-y-3.5 bg-white border border-[#E7E7EA] rounded-lg p-5">
        
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B6B73]" />
          <input
            id="resource-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search equipment, tools, instrumentals (e.g., 'AT2020', 'Piapro', 'Reaper', 'headphones')..."
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

        {/* Categories Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <span className="text-[11px] font-medium text-[#6B6B73] mr-1.5 shrink-0">Category:</span>
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.label;
            return (
              <button
                key={cat.label}
                id={`res-cat-${cat.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
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

      </div>

      {/* RESOURCES GRID */}
      <div>
        <div className="flex items-center justify-between text-xs text-[#6B6B73] mb-3">
          <span>Cataloged Items: <strong className="text-[#18181B]">{filteredResources.length}</strong></span>
          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-[#6C5CE7] hover:text-[#5A4AD1] font-medium transition-colors"
            >
              Reset Filters
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              id={`resource-item-${res.id}`}
              className="bg-white border border-[#E7E7EA] rounded-lg p-5 flex flex-col justify-between hover:border-[#6C5CE7]/60 transition-colors group"
            >
              <div className="space-y-3">
                
                {/* Category & Price badge */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#EEEBFF] text-[#6C5CE7]">
                    {res.category}
                  </span>
                  <span className="text-[11px] font-medium text-[#6B6B73] bg-[#F8F8F6] px-2 py-0.5 rounded border border-[#E7E7EA]">
                    {res.priceType || res.priceTier}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-heading text-lg font-bold text-[#18181B] group-hover:text-[#6C5CE7] transition-colors">
                  {res.name}
                </h3>

                {/* Platform tag */}
                {res.platform && (
                  <p className="text-xs text-[#6B6B73]">
                    {res.platform}
                  </p>
                )}

                {/* Description */}
                <p className="text-xs text-[#6B6B73] leading-relaxed">
                  {res.description}
                </p>

                {/* Best For Callout */}
                {(res.recommendedFor || res.bestFor) && (
                  <div className="p-2.5 rounded-md bg-[#F8F8F6] border border-[#E7E7EA] text-xs">
                    <strong className="text-[#6C5CE7] text-[10px] font-medium uppercase block mb-0.5">Best For:</strong>
                    <span className="text-[#6B6B73] text-xs">{res.recommendedFor || res.bestFor}</span>
                  </div>
                )}
              </div>

              {/* Card Footer: Pro tip */}
              {res.beginnerTip && (
                <div className="mt-4 pt-2.5 border-t border-[#E7E7EA] text-xs text-[#6B6B73]">
                  <span className="text-[#6C5CE7] font-medium">Tip:</span> {res.beginnerTip}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Practical Advice Banner */}
      <div className="p-5 sm:p-6 bg-white border border-[#E7E7EA] rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1 max-w-xl">
          <h3 className="font-heading text-base sm:text-lg font-bold text-[#18181B]">
            Unsure which DAW or microphone to pick first?
          </h3>
          <p className="text-sm text-[#6B6B73]">
            Check our side-by-side DAW comparison guide or review our 8-step production roadmap.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={() => onNavigate('daw-guide')}
            className="px-3.5 py-2 rounded-md bg-[#6C5CE7] text-white font-medium hover:bg-[#5A4AD1] transition-colors"
          >
            Compare DAWs
          </button>
          <button
            onClick={() => onNavigate('start-here')}
            className="px-3.5 py-2 rounded-md bg-white border border-[#E7E7EA] text-[#18181B] hover:bg-[#F8F8F6] transition-colors"
          >
            Start Roadmap
          </button>
        </div>
      </div>

    </div>
  );
}
