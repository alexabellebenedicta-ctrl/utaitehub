import React, { useState } from 'react';
import { PageId } from '../types';
import { DAW_COMPARISONS } from '../data/dawData';
import { 
  Cpu, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface DawGuideSectionProps {
  onNavigate: (page: PageId) => void;
}

export function DawGuideSection({ onNavigate }: DawGuideSectionProps) {
  const [priceFilter, setPriceFilter] = useState<'All' | 'Free' | 'Paid'>('All');
  const [platformFilter, setPlatformFilter] = useState<'All' | 'Windows' | 'Mac' | 'Browser'>('All');
  const [levelFilter, setLevelFilter] = useState<'All' | 'Beginner' | 'Advanced'>('All');

  const filteredDaws = DAW_COMPARISONS.filter((daw) => {
    // Price filter
    if (priceFilter === 'Free') {
      if (daw.price !== 'Free' && daw.price !== 'Free Tier / Low-Cost') return false;
    } else if (priceFilter === 'Paid') {
      if (daw.price === 'Free') return false;
    }

    // Platform filter
    if (platformFilter !== 'All') {
      if (!daw.platforms.includes(platformFilter)) return false;
    }

    // Level filter
    if (levelFilter === 'Beginner') {
      if (!daw.level.includes('Beginner')) return false;
    } else if (levelFilter === 'Advanced') {
      if (!daw.level.includes('Advanced')) return false;
    }

    return true;
  });

  return (
    <div className="w-full space-y-8 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Back button & Header */}
      <div className="space-y-4">
        <button
          id="back-to-guides-btn"
          onClick={() => onNavigate('guides')}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6C5CE7] hover:text-[#5A4AD1] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Field Guides</span>
        </button>

        <div className="space-y-2.5 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#EEEBFF] text-[#6C5CE7] text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Software Directory</span>
          </div>
          
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] tracking-tight">
            Digital Audio Workstation (DAW) Guide
          </h1>
          
          <p className="text-base text-[#6B6B73] leading-relaxed">
            A <strong>DAW (Digital Audio Workstation)</strong> is your virtual recording, tuning, and mixing program. Every major workstation records uncompressed WAV data with identical audio fidelity; choose based on workflow comfort, budget, and computer operating system.
          </p>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="bg-white border border-[#E7E7EA] rounded-lg p-5 space-y-4">
        <div className="flex items-center justify-between text-xs">
          <span className="font-heading font-bold text-sm text-[#18181B]">
            Filter Workstations
          </span>
          <span className="text-[#6B6B73] text-xs">Showing {filteredDaws.length} DAWs</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          
          {/* Price Filter */}
          <div>
            <label className="block text-[#6B6B73] text-xs font-medium mb-1.5">Pricing Model</label>
            <div className="flex rounded-md bg-[#F8F8F6] border border-[#E7E7EA] p-1 gap-1">
              {(['All', 'Free', 'Paid'] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPriceFilter(p)}
                  className={`flex-1 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    priceFilter === p
                      ? 'bg-white text-[#18181B] shadow-xs'
                      : 'text-[#6B6B73] hover:text-[#18181B]'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Platform Filter */}
          <div>
            <label className="block text-[#6B6B73] text-xs font-medium mb-1.5">Operating System</label>
            <div className="flex rounded-md bg-[#F8F8F6] border border-[#E7E7EA] p-1 gap-1">
              {(['All', 'Windows', 'Mac', 'Browser'] as const).map((os) => (
                <button
                  key={os}
                  onClick={() => setPlatformFilter(os)}
                  className={`flex-1 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    platformFilter === os
                      ? 'bg-white text-[#18181B] shadow-xs'
                      : 'text-[#6B6B73] hover:text-[#18181B]'
                  }`}
                >
                  {os}
                </button>
              ))}
            </div>
          </div>

          {/* Level Filter */}
          <div>
            <label className="block text-[#6B6B73] text-xs font-medium mb-1.5">Experience Level</label>
            <div className="flex rounded-md bg-[#F8F8F6] border border-[#E7E7EA] p-1 gap-1">
              {(['All', 'Beginner', 'Advanced'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setLevelFilter(lvl)}
                  className={`flex-1 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    levelFilter === lvl
                      ? 'bg-white text-[#18181B] shadow-xs'
                      : 'text-[#6B6B73] hover:text-[#18181B]'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* COMPARISON CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {filteredDaws.map((daw) => {
          return (
            <div
              key={daw.name}
              id={`daw-card-${daw.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-white border border-[#E7E7EA] rounded-lg p-6 flex flex-col justify-between hover:border-[#6C5CE7]/60 transition-colors"
            >
              <div className="space-y-4">
                
                {/* Header */}
                <div className="flex items-start justify-between gap-4 pb-3 border-b border-[#E7E7EA]">
                  <div>
                    <h2 className="font-heading text-xl font-bold text-[#18181B]">
                      {daw.name}
                    </h2>
                    <p className="text-xs text-[#6B6B73] mt-0.5">
                      {daw.tagline}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EEEBFF] text-[#6C5CE7]">
                      {daw.price}
                    </span>
                    <span className="text-[11px] text-[#6B6B73]">
                      {daw.level}
                    </span>
                  </div>
                </div>

                {/* Best Suited For Callout */}
                <div className="p-3 rounded-md bg-[#F8F8F6] border border-[#E7E7EA] text-xs text-[#18181B]">
                  <strong className="text-[#6C5CE7] block font-medium uppercase tracking-wider text-[10px] mb-0.5">
                    Best Suited For:
                  </strong>
                  <span>{daw.bestSuitedFor}</span>
                </div>

                {/* Platform support badges */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="text-[#6B6B73] text-[11px] font-medium mr-1">Platforms:</span>
                  {daw.platforms.map((p) => (
                    <span key={p} className="px-2 py-0.5 rounded bg-[#F8F8F6] border border-[#E7E7EA] text-[11px] text-[#6B6B73]">
                      {p}
                    </span>
                  ))}
                </div>

                {/* Strengths */}
                <div className="space-y-1 pt-1">
                  <h4 className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Notable Strengths</span>
                  </h4>
                  <ul className="space-y-1 text-xs text-[#6B6B73]">
                    {daw.strengths.map((str, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Considerations */}
                <div className="space-y-1 pt-1">
                  <h4 className="text-xs font-semibold text-amber-700 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Considerations</span>
                  </h4>
                  <ul className="space-y-1 text-xs text-[#6B6B73]">
                    {daw.considerations.map((con, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Bottom footer badge */}
              <div className="mt-5 pt-3 border-t border-[#E7E7EA] flex items-center justify-between text-xs">
                <span className="text-[#6B6B73]">
                  Vocal Tracking: <strong className="text-[#18181B]">{daw.vocalRecordingScore}</strong>
                </span>

                <button
                  onClick={() => onNavigate('resources')}
                  className="text-xs font-medium text-[#6C5CE7] hover:text-[#5A4AD1] flex items-center gap-1 transition-colors"
                >
                  <span>Equipment specs</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Production note */}
      <div className="p-4 sm:p-5 bg-white border border-[#E7E7EA] rounded-lg text-xs text-[#6B6B73] text-center max-w-2xl mx-auto space-y-1">
        <h4 className="font-heading font-bold text-sm text-[#18181B]">
          Audio Engineering Truth
        </h4>
        <p className="text-xs text-[#6B6B73] leading-relaxed">
          A vocal captured on a $60 microphone inside a quiet, blanket-damped bedroom using free BandLab or REAPER will sound significantly clearer than a $3,000 Neumann microphone placed in a reverberant, untreated bare room.
        </p>
      </div>

    </div>
  );
}
