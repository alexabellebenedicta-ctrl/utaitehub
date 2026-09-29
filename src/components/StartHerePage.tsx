import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { ROADMAP_STEPS } from '../data/roadmapData';
import { 
  CheckCircle, 
  Circle, 
  AlertTriangle, 
  Lightbulb, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  RotateCcw,
  Sparkles,
  FileCode2
} from 'lucide-react';

interface StartHerePageProps {
  onNavigate: (page: PageId) => void;
  onOpenGuide: (guideId: string) => void;
}

export function StartHerePage({ onNavigate, onOpenGuide }: StartHerePageProps) {
  // Store checked task IDs in localStorage
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('utaite_roadmap_progress');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [expandedSteps, setExpandedSteps] = useState<Record<string, boolean>>({
    '01': true,
    '02': true,
    '03': true,
    '04': true,
    '05': true,
    '06': true,
    '07': true,
    '08': true
  });

  // Title & description generator state
  const [genSong, setGenSong] = useState('Ghost Rule');
  const [genProducer, setGenProducer] = useState('DECO*27');
  const [genSinger, setGenSinger] = useState('YourName');
  const [genMixer, setGenMixer] = useState('MixerName');
  const [genArtist, setGenArtist] = useState('ArtistName');
  const [copiedDesc, setCopiedDesc] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('utaite_roadmap_progress', JSON.stringify(checkedItems));
    } catch (e) {
      // ignore
    }
  }, [checkedItems]);

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleStepExpand = (stepNum: string) => {
    setExpandedSteps((prev) => ({
      ...prev,
      [stepNum]: !prev[stepNum]
    }));
  };

  const resetAllProgress = () => {
    if (window.confirm('Reset all checked items in your roadmap progress?')) {
      setCheckedItems({});
    }
  };

  // Calculate total checklist count
  const allChecklistItems = ROADMAP_STEPS.flatMap((s) => s.checklistItems);
  const totalTasks = allChecklistItems.length;
  const completedTasks = allChecklistItems.filter((item) => !!checkedItems[item.id]).length;
  const progressPercent = Math.round((completedTasks / totalTasks) * 100);

  const formattedDescription = `◆ Original Work
Music & Lyrics: ${genProducer}
Original Video: https://youtube.com/watch?v=OFFICIAL_URL

◆ Cover Production
Vocal: ${genSinger} (@your_handle)
Mix & Mastering: ${genMixer} (@mixer_handle)
Illustration: ${genArtist} (@artist_handle)
Movie / PV: ${genSinger}

Instrumental: Official Piapro off-vocal
Key: Standard (±0)

#歌ってみた #utaite #${genProducer.replace(/\s+/g, '')} #${genSong.replace(/\s+/g, '')} #cover`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedDescription);
    setCopiedDesc(true);
    setTimeout(() => setCopiedDesc(false), 2000);
  };

  return (
    <div className="w-full space-y-8 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* HEADER & PROGRESS TRACKER */}
      <div className="bg-white border border-[#E7E7EA] rounded-lg p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#EEEBFF] text-[#6C5CE7] text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step-by-Step Curriculum</span>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#18181B] tracking-tight">
              Your First Cover: The 8-Step Roadmap
            </h1>

            <p className="text-sm sm:text-base text-[#6B6B73] leading-relaxed">
              A comprehensive beginner checklist tracking your debut cover from pre-production key analysis to publishing your video. Progress is saved locally in your browser.
            </p>
          </div>

          {/* Progress Console */}
          <div className="bg-[#F8F8F6] border border-[#E7E7EA] rounded-md p-4 w-full lg:w-72 space-y-2.5 shrink-0">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#6B6B73] font-medium">Completion</span>
              <span className="font-heading text-sm font-bold text-[#6C5CE7]">{progressPercent}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-[#E7E7EA] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#6C5CE7] transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#6B6B73] pt-0.5">
              <span>{completedTasks} of {totalTasks} tasks complete</span>
              {completedTasks > 0 && (
                <button
                  onClick={resetAllProgress}
                  className="text-[#6B6B73] hover:text-[#18181B] flex items-center gap-1 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ROADMAP STEPS CONTAINER */}
      <div className="space-y-4">
        {ROADMAP_STEPS.map((step) => {
          const isExpanded = !!expandedSteps[step.stepNumber];
          const stepCompletedCount = step.checklistItems.filter((item) => !!checkedItems[item.id]).length;
          const isStepAllComplete = stepCompletedCount === step.checklistItems.length;

          return (
            <div 
              key={step.stepNumber}
              id={`roadmap-step-${step.stepNumber}`}
              className="bg-white rounded-lg border border-[#E7E7EA] overflow-hidden transition-all"
            >
              {/* Step Title Header Bar */}
              <div 
                onClick={() => toggleStepExpand(step.stepNumber)}
                className={`p-4 sm:p-5 flex items-center justify-between cursor-pointer select-none transition-colors border-b ${
                  isExpanded ? 'border-[#E7E7EA] bg-[#F8F8F6]/50' : 'border-transparent hover:bg-[#F8F8F6]/40'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 font-heading font-bold text-sm ${
                    isStepAllComplete 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-[#EEEBFF] text-[#6C5CE7]'
                  }`}>
                    {step.stepNumber}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-heading text-base sm:text-lg font-bold text-[#18181B]">
                        {step.title}
                      </h2>
                      {isStepAllComplete && (
                        <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <Check className="w-3 h-3" /> Complete
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#6B6B73]">
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#6B6B73] hidden md:inline">
                    {stepCompletedCount}/{step.checklistItems.length}
                  </span>
                  <div className="p-1 rounded text-[#6B6B73]">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Step Expanded Content */}
              {isExpanded && (
                <div className="p-5 sm:p-6 space-y-6">
                  
                  {/* Step Summary */}
                  <p className="text-sm text-[#6B6B73] leading-relaxed">
                    {step.summary}
                  </p>

                  {/* Checklist Items */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6B6B73]">
                      Action Checklist
                    </h3>

                    <div className="space-y-2">
                      {step.checklistItems.map((item) => {
                        const isChecked = !!checkedItems[item.id];
                        return (
                          <div
                            key={item.id}
                            onClick={() => toggleCheck(item.id)}
                            className={`p-3 rounded-md border flex items-start gap-3 cursor-pointer transition-colors ${
                              isChecked
                                ? 'bg-[#F8F8F6] border-[#E7E7EA]'
                                : 'bg-white border-[#E7E7EA] hover:border-[#6C5CE7]/50'
                            }`}
                          >
                            <button
                              type="button"
                              className="mt-0.5 shrink-0 focus:outline-none"
                              aria-label={isChecked ? 'Mark incomplete' : 'Mark complete'}
                            >
                              {isChecked ? (
                                <CheckCircle className="w-4 h-4 text-[#6C5CE7]" />
                              ) : (
                                <Circle className="w-4 h-4 text-[#D9D9DE]" />
                              )}
                            </button>

                            <div className="space-y-0.5">
                              <p className={`text-sm ${isChecked ? 'line-through text-[#6B6B73]' : 'text-[#18181B] font-medium'}`}>
                                {item.text}
                              </p>
                              {item.tip && (
                                <p className="text-xs text-[#6B6B73]">
                                  <span className="text-[#6C5CE7] font-medium">Tip:</span> {item.tip}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Deep Dive Cards (Why It Matters, Beginner Trap, Pro Advice) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2 border-t border-[#E7E7EA] text-xs">
                    
                    <div className="p-3.5 rounded-md bg-[#F8F8F6] border border-[#E7E7EA] space-y-1">
                      <div className="flex items-center gap-1.5 font-semibold text-[#18181B]">
                        <Lightbulb className="w-3.5 h-3.5 text-[#6C5CE7]" />
                        <span>Why It Matters</span>
                      </div>
                      <p className="text-[#6B6B73] leading-relaxed">
                        {step.deepDive.whyItMatters}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-md bg-[#F8F8F6] border border-[#E7E7EA] space-y-1">
                      <div className="flex items-center gap-1.5 font-semibold text-[#18181B]">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        <span>Common Trap</span>
                      </div>
                      <p className="text-[#6B6B73] leading-relaxed">
                        {step.deepDive.beginnerTrap}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-md bg-[#F8F8F6] border border-[#E7E7EA] space-y-1">
                      <div className="flex items-center gap-1.5 font-semibold text-[#18181B]">
                        <Sparkles className="w-3.5 h-3.5 text-[#6C5CE7]" />
                        <span>Creator Advice</span>
                      </div>
                      <p className="text-[#6B6B73] leading-relaxed">
                        {step.deepDive.proAdvice}
                      </p>
                    </div>

                  </div>

                  {/* Special Interactive Widget for Step 7: Title & Description Formatter */}
                  {step.stepNumber === '07' && (
                    <div className="mt-4 p-5 bg-[#F8F8F6] border border-[#E7E7EA] rounded-md space-y-4">
                      <div className="flex items-center gap-2">
                        <FileCode2 className="w-4 h-4 text-[#6C5CE7]" />
                        <h4 className="font-heading text-base font-bold text-[#18181B]">
                          Video Description & Credit Generator
                        </h4>
                      </div>
                      <p className="text-xs text-[#6B6B73]">
                        Fill in your collaborators to generate a standardized, polite YouTube video description:
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 text-xs">
                        <div>
                          <label className="block text-[#6B6B73] mb-1 font-medium">Song Title</label>
                          <input
                            type="text"
                            value={genSong}
                            onChange={(e) => setGenSong(e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md bg-white border border-[#E7E7EA] text-[#18181B] focus:border-[#6C5CE7] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[#6B6B73] mb-1 font-medium">Producer (Vocaloid-P)</label>
                          <input
                            type="text"
                            value={genProducer}
                            onChange={(e) => setGenProducer(e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md bg-white border border-[#E7E7EA] text-[#18181B] focus:border-[#6C5CE7] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[#6B6B73] mb-1 font-medium">Your Vocal Name</label>
                          <input
                            type="text"
                            value={genSinger}
                            onChange={(e) => setGenSinger(e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md bg-white border border-[#E7E7EA] text-[#18181B] focus:border-[#6C5CE7] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[#6B6B73] mb-1 font-medium">Mix Engineer</label>
                          <input
                            type="text"
                            value={genMixer}
                            onChange={(e) => setGenMixer(e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md bg-white border border-[#E7E7EA] text-[#18181B] focus:border-[#6C5CE7] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[#6B6B73] mb-1 font-medium">Illustrator</label>
                          <input
                            type="text"
                            value={genArtist}
                            onChange={(e) => setGenArtist(e.target.value)}
                            className="w-full px-2.5 py-1.5 rounded-md bg-white border border-[#E7E7EA] text-[#18181B] focus:border-[#6C5CE7] focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Title standard preview */}
                      <div className="p-3 bg-white rounded-md border border-[#E7E7EA] text-xs">
                        <span className="text-[#6B6B73] text-[11px] font-medium block mb-1">Recommended YouTube Title Format:</span>
                        <code className="text-[#18181B] font-mono select-all">
                          {genSong} - {genProducer} // Covered by {genSinger} 【歌ってみた】
                        </code>
                      </div>

                      {/* Description preview */}
                      <div className="relative">
                        <pre className="p-4 bg-white rounded-md border border-[#E7E7EA] text-xs font-mono text-[#18181B] whitespace-pre-wrap leading-relaxed select-all">
                          {formattedDescription}
                        </pre>
                        <button
                          onClick={copyToClipboard}
                          className="absolute top-3 right-3 px-3 py-1.5 rounded-md bg-[#6C5CE7] hover:bg-[#5A4AD1] text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                        >
                          {copiedDesc ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedDesc ? 'Copied!' : 'Copy description'}</span>
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
