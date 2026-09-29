import React from 'react';
import { Guide } from '../types';
import { X, Clock, Award, Lightbulb, ArrowLeft } from 'lucide-react';

interface GuideModalProps {
  guide: Guide | null;
  onClose: () => void;
  onNavigateToCategory?: (category: string) => void;
}

export function GuideModal({ guide, onClose }: GuideModalProps) {
  if (!guide) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-[#18181B]/40 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-white border border-[#E7E7EA] rounded-xl shadow-xl overflow-hidden my-6 max-h-[90vh] flex flex-col text-[#18181B]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E7E7EA] bg-white shrink-0 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#EEEBFF] text-[#6C5CE7] text-[11px] font-medium">
              {guide.category}
            </span>
            <span className="text-[#E7E7EA]">•</span>
            <span className="flex items-center gap-1 text-[#6B6B73] text-xs">
              <Clock className="w-3.5 h-3.5" />
              {guide.readTime}
            </span>
          </div>

          <button
            id="close-guide-modal-btn"
            onClick={onClose}
            className="p-1 rounded-md text-[#6B6B73] hover:text-[#18181B] hover:bg-[#F8F8F6] transition-colors"
            aria-label="Close guide"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Title & Difficulty */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs mb-2 bg-[#F8F8F6] text-[#6C5CE7] border border-[#E7E7EA]">
              <Award className="w-3.5 h-3.5" />
              <span>{guide.difficulty} Level</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[#18181B] tracking-tight leading-snug">
              {guide.title}
            </h1>
            <p className="mt-2 text-sm text-[#6B6B73] leading-relaxed">
              {guide.shortDescription}
            </p>
          </div>

          {/* Key Takeaways Card */}
          {guide.keyTakeaways && guide.keyTakeaways.length > 0 && (
            <div className="bg-[#F8F8F6] border border-[#E7E7EA] rounded-lg p-4">
              <div className="text-xs font-semibold text-[#18181B] mb-2">
                Core Takeaways
              </div>
              <ul className="space-y-1.5">
                {guide.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#6B6B73] leading-relaxed">
                    <span className="text-[#6C5CE7] font-bold shrink-0">•</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Main Sections */}
          <div className="space-y-6 pt-1">
            {guide.content.map((sec, idx) => (
              <section key={idx} className="space-y-2.5 pb-5 border-b border-[#E7E7EA] last:border-0">
                <h2 className="font-heading text-lg sm:text-xl font-bold text-[#18181B] flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#6C5CE7] px-2 py-0.5 rounded bg-[#EEEBFF]">
                    0{idx + 1}
                  </span>
                  <span>{sec.heading}</span>
                </h2>
                
                <div className="text-sm text-[#6B6B73] leading-relaxed whitespace-pre-line">
                  {sec.body}
                </div>

                {sec.tips && sec.tips.length > 0 && (
                  <div className="mt-3 bg-[#EEEBFF]/50 border border-[#EEEBFF] p-3.5 rounded-lg text-xs text-[#18181B]">
                    <div className="font-semibold text-[#6C5CE7] text-xs mb-1.5 flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>Pro-Tip:</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-[#6B6B73] text-xs">
                      {sec.tips.map((tip, tIdx) => (
                        <li key={tIdx}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-[#E7E7EA] bg-[#F8F8F6] shrink-0 text-xs">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-white border border-[#E7E7EA] text-[#18181B] hover:bg-[#F8F8F6] transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#6B6B73]" />
            <span>Close Handbook</span>
          </button>

          <span className="text-xs text-[#6B6B73] hidden sm:inline">
            Utaite Resource Hub
          </span>
        </div>
      </div>
    </div>
  );
}
