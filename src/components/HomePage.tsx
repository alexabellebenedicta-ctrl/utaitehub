import React from 'react';
import { PageId } from '../types';
import { 
  Mic, 
  Headphones, 
  Music, 
  Users, 
  ArrowRight, 
  Check, 
  Sliders, 
  FileAudio, 
  Palette, 
  Upload, 
  Share2, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { AudioWaveGraphic, DawClipVisualizer, HeadroomMeter } from './AudioGraphics';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenGuide: (guideId: string) => void;
  onFilterGuidesCategory?: (category: string) => void;
}

export function HomePage({ onNavigate, onOpenGuide, onFilterGuidesCategory }: HomePageProps) {
  const needsCards = [
    {
      id: 'start',
      icon: Sparkles,
      title: "I'm a beginner & don't know where to start",
      description: 'Follow our structured 8-step chronological roadmap from selecting your first song to publishing your YouTube debut.',
      actionLabel: 'Open 8-step roadmap',
      tag: 'Recommended',
      highlight: true,
      target: () => onNavigate('start-here')
    },
    {
      id: 'record',
      icon: Mic,
      title: 'I want to record clean vocals',
      description: 'Understand microphone choices (USB vs XLR), bedroom acoustics, gain staging, pop filters, and multi-take recording.',
      actionLabel: 'Read recording guides',
      tag: 'Hardware & Tracking',
      target: () => {
        if (onFilterGuidesCategory) onFilterGuidesCategory('Recording');
        onNavigate('guides');
      }
    },
    {
      id: 'mixing',
      icon: Headphones,
      title: 'I want to choose a DAW & learn mixing',
      description: 'Compare free & paid DAWs (BandLab, REAPER, GarageBand) and understand pitch correction, EQ, compression, and reverb.',
      actionLabel: 'Compare DAWs',
      tag: 'Software & Audio',
      target: () => onNavigate('daw-guide')
    },
    {
      id: 'prepare',
      icon: Music,
      title: 'I want to find instrumentals & key',
      description: 'Find official off-vocals (inst) on Piapro, understand copyright rules, and learn how to transpose to fit your natural vocal range.',
      actionLabel: 'Song preparation guide',
      tag: 'Pre-Production',
      target: () => {
        if (onFilterGuidesCategory) onFilterGuidesCategory('Song Preparation');
        onNavigate('guides');
      }
    },
    {
      id: 'collab',
      icon: Users,
      title: 'I want to work with mixers & illustrators',
      description: 'Master the 0:00 stem alignment rule, dry 24-bit WAV file naming, commissioner etiquette, and outreach message templates.',
      actionLabel: 'Collaboration protocol',
      tag: 'Teamwork',
      target: () => onNavigate('collaboration')
    }
  ];

  const journeySteps = [
    { num: '01', title: 'Song Selection', desc: 'Pick a track within your comfortable tessitura. Never strain.', icon: Music },
    { num: '02', title: 'Find Instrumental', desc: 'Locate official off-vocals from Piapro, YouTube, or producer drives.', icon: FileAudio },
    { num: '03', title: 'Key Transposition', desc: 'Shift key (±1~4 semitones) so you sing with effortless control.', icon: Sliders },
    { num: '04', title: 'Record Dry Vocals', desc: 'Keep -18dBFS headroom. No baked-in reverb or compression.', icon: Mic },
    { num: '05', title: 'Vocal Production', desc: 'Comp best takes, pitch-correct notes, and glue vocals into the mix.', icon: Headphones },
    { num: '06', title: 'Visuals & Video', desc: 'Commission or create 16:9 illustration and typography video.', icon: Palette },
    { num: '07', title: 'Export & Upload', desc: 'Format video metadata with (歌ってみた), tags, and producer credits.', icon: Upload },
    { num: '08', title: 'Share & Celebrate', desc: 'Post short video previews, credit team members, and release!', icon: Share2 }
  ];

  return (
    <div className="w-full space-y-16 pb-16">
      
      {/* HERO SECTION */}
      <section className="pt-8 sm:pt-14 pb-12 border-b border-[#E7E7EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Subtitle, Actions */}
            <div className="lg:col-span-7 space-y-5 text-left">
              
              {/* Creator platform status badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEEBFF] text-[#6C5CE7] text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-[#6C5CE7]" />
                <span>Beginner-Friendly Utaite & Cover Guide</span>
              </div>

              {/* Main Heading in Space Grotesk */}
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#18181B] leading-[1.12]">
                Learn how to make your first{' '}
                <span className="text-[#6C5CE7]">Japanese music cover.</span>
              </h1>

              {/* Body in Inter */}
              <p className="text-base sm:text-lg text-[#6B6B73] leading-relaxed max-w-2xl">
                A clean, practical handbook for aspiring utaite and bedroom vocalists. Everything you need to know about finding instrumentals, recording clean takes, working with audio mixers, and releasing your debut.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  id="hero-start-journey-btn"
                  onClick={() => onNavigate('start-here')}
                  className="px-5 py-3 rounded-md font-medium text-sm bg-[#6C5CE7] text-white hover:bg-[#5A4AD1] transition-colors flex items-center gap-2"
                >
                  <span>Start the 8-Step Roadmap</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-explore-guides-btn"
                  onClick={() => onNavigate('guides')}
                  className="px-4 py-3 rounded-md font-medium text-sm bg-white text-[#18181B] border border-[#E7E7EA] hover:bg-[#F8F8F6] transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-4 h-4 text-[#6B6B73]" />
                  <span>Browse Field Guides</span>
                </button>
              </div>

              {/* Core takeaways pill row */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#6B6B73]">
                <span className="px-3 py-1 rounded-md bg-white border border-[#E7E7EA] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#6C5CE7]" />
                  <span>Free & budget-friendly tools</span>
                </span>
                <span className="px-3 py-1 rounded-md bg-white border border-[#E7E7EA] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#6C5CE7]" />
                  <span>24-bit / 44.1kHz stem standard</span>
                </span>
                <span className="px-3 py-1 rounded-md bg-white border border-[#E7E7EA] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#6C5CE7]" />
                  <span>0:00 alignment explained</span>
                </span>
              </div>
            </div>

            {/* Right Column: Clean White Audio Stem Preview Card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full max-w-md bg-white border border-[#E7E7EA] rounded-lg p-5 shadow-xs space-y-4">
                
                {/* Header bar */}
                <div className="flex items-center justify-between pb-3 border-b border-[#E7E7EA] text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6C5CE7]" />
                    <span className="font-semibold text-[#18181B]">Cover Vocal Stems</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#6B6B73]">24-BIT / 44.1kHz</span>
                </div>

                {/* Subtle Waveform */}
                <div className="bg-[#F8F8F6] p-3 rounded-md border border-[#E7E7EA]">
                  <div className="flex justify-between items-center text-[11px] font-mono text-[#6B6B73] mb-2">
                    <span>RECORDING GAIN PEAK</span>
                    <span className="text-[#6C5CE7] font-semibold">-14.2 dBFS</span>
                  </div>
                  <AudioWaveGraphic className="h-7 w-full" active={true} />
                </div>

                {/* Stems Rack */}
                <div className="space-y-2">
                  <DawClipVisualizer trackName="01_Lead_Vocal_Dry.wav" />
                  <DawClipVisualizer trackName="02_Harmonies_High_Dry.wav" />
                </div>

                {/* Headroom Meter Component */}
                <div className="pt-1">
                  <HeadroomMeter />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* "WHAT DO YOU WANT TO DO?" SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6C5CE7]">
              Navigation by Goal
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#18181B]">
              What do you want to accomplish?
            </h2>
            <p className="text-sm text-[#6B6B73]">
              Choose where you are in your journey to jump directly to curated guides.
            </p>
          </div>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {needsCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                id={`need-card-${card.id}`}
                onClick={card.target}
                className={`p-5 rounded-lg border transition-all cursor-pointer flex flex-col justify-between group ${
                  card.highlight
                    ? 'bg-white border-[#6C5CE7] shadow-xs hover:border-[#5A4AD1]'
                    : 'bg-white border-[#E7E7EA] hover:border-[#6C5CE7]/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-9 h-9 rounded-md bg-[#EEEBFF] flex items-center justify-center text-[#6C5CE7]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-[#6B6B73] bg-[#F8F8F6] px-2 py-0.5 rounded border border-[#E7E7EA]">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#18181B] group-hover:text-[#6C5CE7] transition-colors">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#6B6B73] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E7E7EA] flex items-center justify-between text-xs font-medium text-[#6C5CE7]">
                  <span>{card.actionLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* “THE UTAITE JOURNEY” TIMELINE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E7E7EA] rounded-lg p-6 sm:p-8 space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-5 border-b border-[#E7E7EA]">
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6C5CE7]">
                Production Lifecycle
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#18181B]">
                The 8-Step Utaite Journey
              </h2>
              <p className="text-sm text-[#6B6B73] max-w-xl">
                A realistic overview of the chronological stages involved in producing an online cover song.
              </p>
            </div>

            <button
              id="journey-view-roadmap-btn"
              onClick={() => onNavigate('start-here')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs sm:text-sm font-medium bg-[#6C5CE7] text-white hover:bg-[#5A4AD1] transition-colors self-start md:self-auto shrink-0"
            >
              <span>Explore Detailed Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 8 Step Visual Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {journeySteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  id={`journey-step-${step.num}`}
                  onClick={() => onNavigate('start-here')}
                  className="bg-[#F8F8F6] border border-[#E7E7EA] rounded-md p-4 hover:border-[#6C5CE7] hover:bg-white transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold text-[#6C5CE7]">
                        Step {step.num}
                      </span>
                      <div className="w-6 h-6 rounded bg-white border border-[#E7E7EA] flex items-center justify-center text-[#6B6B73] group-hover:text-[#6C5CE7] transition-colors">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    
                    <h3 className="font-heading text-sm font-bold text-[#18181B] group-hover:text-[#6C5CE7] transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="mt-1 text-xs text-[#6B6B73] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#E7E7EA] flex items-center justify-between text-xs text-[#6B6B73] group-hover:text-[#6C5CE7]">
                    <span>View checklist</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 CORE RULES FOR BEGINNERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white border border-[#E7E7EA] rounded-lg p-6 sm:p-8">
          
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6C5CE7]">
              Essential Principles
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#18181B]">
              4 Golden Rules Every Cover Artist Should Know
            </h2>
            <p className="text-sm text-[#6B6B73] leading-relaxed">
              Before worrying about follower counts or expensive studio gear, ground your workflow in good habits and respectful collaboration.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('utaite-101')}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#6C5CE7] hover:text-[#5A4AD1] transition-colors"
              >
                <span>Read Utaite 101 Culture & History</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-md bg-[#F8F8F6] border border-[#E7E7EA]">
              <div className="flex items-center gap-2 font-heading font-bold text-sm text-[#18181B] mb-1.5">
                <span className="font-mono text-xs text-[#6C5CE7]">01</span>
                <span>Transposing is Standard</span>
              </div>
              <p className="text-xs text-[#6B6B73] leading-relaxed">
                Vocaloid songs are written for software without human biological limits. Shifting key down 1–4 semitones protects your vocal cords and sounds much better.
              </p>
            </div>

            <div className="p-4 rounded-md bg-[#F8F8F6] border border-[#E7E7EA]">
              <div className="flex items-center gap-2 font-heading font-bold text-sm text-[#18181B] mb-1.5">
                <span className="font-mono text-xs text-[#6C5CE7]">02</span>
                <span>Always Record Dry</span>
              </div>
              <p className="text-xs text-[#6B6B73] leading-relaxed">
                Never bake reverb, delay, or heavy compression into recorded tracks. Mix engineers need dry audio to cleanly tune and carve space in the mix.
              </p>
            </div>

            <div className="p-4 rounded-md bg-[#F8F8F6] border border-[#E7E7EA]">
              <div className="flex items-center gap-2 font-heading font-bold text-sm text-[#18181B] mb-1.5">
                <span className="font-mono text-xs text-[#6C5CE7]">03</span>
                <span>The 0:00 Sync Law</span>
              </div>
              <p className="text-xs text-[#6B6B73] leading-relaxed">
                Every exported vocal stem must start at the exact same point as the instrumental (0:00.000). Otherwise, your vocals will be out of time.
              </p>
            </div>

            <div className="p-4 rounded-md bg-[#F8F8F6] border border-[#E7E7EA]">
              <div className="flex items-center gap-2 font-heading font-bold text-sm text-[#18181B] mb-1.5">
                <span className="font-mono text-xs text-[#6C5CE7]">04</span>
                <span>Finishing &gt; Perfection</span>
              </div>
              <p className="text-xs text-[#6B6B73] leading-relaxed">
                Don't leave your debut cover trapped in folder limbo for months. Complete your takes, collaborate, publish, and carry the lessons into your next cover.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
