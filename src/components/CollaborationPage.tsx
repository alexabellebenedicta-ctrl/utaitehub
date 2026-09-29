import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Users, 
  Mic, 
  Headphones, 
  Palette, 
  Video, 
  PenTool, 
  Copy, 
  Check, 
  CheckCircle2, 
  AlertTriangle,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { DawClipVisualizer } from './AudioGraphics';

interface CollaborationPageProps {
  onNavigate: (page: PageId) => void;
  onOpenGuide: (guideId: string) => void;
}

export function CollaborationPage({ onNavigate, onOpenGuide }: CollaborationPageProps) {
  // Brief generator states
  const [targetRole, setTargetRole] = useState<'Mixer' | 'Artist' | 'Video' | 'Duet Partner'>('Mixer');
  const [briefSong, setBriefSong] = useState('Phony');
  const [briefProducer, setBriefProducer] = useState('Tsumiki');
  const [briefDeadline, setBriefDeadline] = useState('4 weeks from delivery');
  const [briefBudget, setBriefBudget] = useState('$50 USD');
  const [briefTracks, setBriefTracks] = useState('1 Lead vocal + 2 Harmonies');
  const [copiedBrief, setCopiedBrief] = useState(false);

  const roleSections = [
    {
      id: 'mixer',
      title: 'Mix Engineer (歌い手MIX)',
      icon: Headphones,
      summary: 'Specialists who tune, time-align, clean, EQ, and master your raw dry vocals into the instrumental.',
      whereToLook: [
        'Twitter/X: Search #mixerforhire, #mix依頼, #歌い手MIX',
        'VGen: Filter by "Audio & Mixing" for upfront pricing and portfolio reels',
        'Utaite Discord Communities: Dedicated mixer commission channels'
      ],
      whatToPrepare: '24-bit dry WAV stems starting at 0:00, original off-vocal, BPM, key, and reference links.'
    },
    {
      id: 'artist',
      title: 'Cover Illustrator (絵師)',
      icon: Palette,
      summary: 'Draws custom character artwork, promotional illustrations, and thumbnail graphics.',
      whereToLook: [
        'VGen: Dedicated marketplace for anime, VTuber, and utaite illustrators',
        'Twitter/X: Search #絵師募集, #commissionsopen, #coverart',
        'Skeb: Japanese commission requests (requires clear prompt and single delivery)'
      ],
      whatToPrepare: 'Character reference sheet, song mood/link, 16:9 canvas requirement, and request transparent PNG layers.'
    },
    {
      id: 'video',
      title: 'Video Editor / Motion (動画師)',
      icon: Video,
      summary: 'Animates kinetic Japanese lyrics, camera motion, typography, and optical particle effects.',
      whereToLook: [
        'Twitter/X: Search #動画師募集, #videoeditorforhire',
        'VGen: "Video & Animation" category',
        'YouTube credits of indie covers you admire'
      ],
      whatToPrepare: 'Final master audio WAV, artwork PSD/PNG files with separate background, and timestamped lyric document.'
    },
    {
      id: 'vocalist',
      title: 'Duet & Chorus Partner (合唱)',
      icon: Mic,
      summary: 'Find duet partners, chorus battle teammates (OCBs), or backing vocalists for ensemble releases.',
      whereToLook: [
        'Twitter/X: Search #utaite, #collabwanted, #歌い手好きと繋がりたい',
        'Discord: Casting & collab channels in utaite community servers',
        'Casting Call Club: Host open auditions for multi-singer projects'
      ],
      whatToPrepare: 'Guide track with lines assigned to each singer, off-vocal instrumental, and submission deadline.'
    },
    {
      id: 'translyricist',
      title: 'Translyricist (英語作詞)',
      icon: PenTool,
      summary: 'Adapts Japanese lyrics into poetic, rhythmically singable English or multilingual lyrics.',
      whereToLook: [
        'YouTube translyric community (creators who provide singable lyrics under CC-BY license)',
        'Twitter/X: #translyrics, #englishcover',
        'Utaite Discord servers dedicated to localization'
      ],
      whatToPrepare: 'Share your intended vocal cadence and always provide prominent attribution in title & description.'
    }
  ];

  const collabSteps = [
    { num: '01', title: 'Find Project', desc: 'Browse chorus calls (OCB) or duet announcements on Twitter/X & Discord.' },
    { num: '02', title: 'Verify Specs', desc: 'Confirm deadline, vocal range demands, mic expectations, and whether mixing is included.' },
    { num: '03', title: 'Record Dry Take', desc: 'Capture a clean, unmixed raw sample demonstrating your tone and rhythm.' },
    { num: '04', title: 'Submit Audition', desc: 'Submit politely via Google Form or DM following strict file naming rules.' },
    { num: '05', title: 'Check-in Regularly', desc: 'Acknowledge role acceptance, join the group chat, and verify project timeline.' },
    { num: '06', title: 'Deliver at 0:00', desc: 'Send dry stems rendered from 0:00.000 before the deadline. Never ghost the team.' },
    { num: '07', title: 'Cross-Promote', desc: 'Review premiere credits, tag collaborators, and celebrate the milestone release.' }
  ];

  const generateOutreachMessage = () => {
    return `Hello! I really admire your work.

I am preparing an utaite cover of "${briefSong}" (originally by ${briefProducer}) and would love to inquire about your availability for ${targetRole.toLowerCase()} work!

Here are the project specifications:
- Song: ${briefSong} - ${briefProducer}
- Scope / Track Count: ${briefTracks}
- Target Delivery Deadline: ${briefDeadline}
- Budget: ${briefBudget}
- Stems: 24-bit 44.1kHz dry WAVs synchronized to 0:00
- Commercial status: Non-commercial fan cover for YouTube

Please let me know if you are open for commissions or collaborations. Thank you so much for your time and creativity!`;
  };

  const copyOutreach = () => {
    navigator.clipboard.writeText(generateOutreachMessage());
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2000);
  };

  return (
    <div className="w-full space-y-10 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* HERO SECTION */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#EEEBFF] text-[#6C5CE7] text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Teamwork & Etiquette</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] tracking-tight">
          Mixer Handoff & Collaboration Guide
        </h1>
        <p className="text-base text-[#6B6B73] leading-relaxed">
          Online cover music is built on collaborative chemistry. Understand the technical requirements mix engineers expect, how to commission illustrators, and how to maintain smooth communication.
        </p>
      </div>

      {/* TECHNICAL HIGHLIGHT: 0:00 STEM SYNC STANDARD */}
      <div className="bg-white border border-[#E7E7EA] rounded-lg p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#E7E7EA]">
          <div className="space-y-1">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6C5CE7] block">
              Crucial Audio Rule
            </span>
            <h3 className="font-heading text-xl font-bold text-[#18181B]">
              The 0:00 Synchronization Law
            </h3>
            <p className="text-sm text-[#6B6B73] max-w-xl">
              Every single vocal stem you export must begin at bar 1, beat 1 (0:00.000). Even if you don't start singing until 1 minute into the song, leave silence at the beginning!
            </p>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#EEEBFF] text-[#6C5CE7] text-xs font-medium shrink-0">
            24-Bit / 44.1kHz Dry WAV
          </span>
        </div>

        {/* Visual DAW Stem representation */}
        <div className="space-y-2 pt-1">
          <DawClipVisualizer trackName="01_Lead_Vocal_0_00_Sync.wav" color="purple" />
          <DawClipVisualizer trackName="02_Harmonies_High_0_00_Sync.wav" color="purple" />
          <DawClipVisualizer trackName="03_Harmonies_Low_0_00_Sync.wav" color="purple" />
        </div>
      </div>

      {/* SECTION: "LOOKING FOR..." ROLES BREAKDOWN */}
      <section className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6C5CE7]">
              Creative Disciplines
            </span>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#18181B]">
              Collaborator Roles & Where to Recruit
            </h2>
          </div>
          <span className="text-xs text-[#6B6B73]">5 specialized roles</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {roleSections.map((role) => {
            const Icon = role.icon;
            return (
              <div
                key={role.id}
                id={`collab-role-${role.id}`}
                className="bg-white border border-[#E7E7EA] rounded-lg p-5 flex flex-col justify-between hover:border-[#6C5CE7]/60 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-md bg-[#EEEBFF] flex items-center justify-center text-[#6C5CE7]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-[#18181B]">
                      {role.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#6B6B73] leading-relaxed">
                    {role.summary}
                  </p>

                  <div className="pt-2 border-t border-[#E7E7EA] space-y-1.5 text-xs">
                    <span className="text-[11px] text-[#6B6B73] font-medium block">
                      Where to look:
                    </span>
                    <ul className="space-y-1 text-xs text-[#6B6B73]">
                      {role.whereToLook.map((place, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-1.5">
                          <span className="text-[#6C5CE7]">•</span>
                          <span>{place}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-[#E7E7EA]">
                    <span className="text-[11px] text-[#18181B] font-medium block mb-1">
                      What to prepare:
                    </span>
                    <p className="text-xs text-[#6B6B73] bg-[#F8F8F6] p-2 rounded-md border border-[#E7E7EA]">
                      {role.whatToPrepare}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION: HOW TO JOIN A COLLAB (7 SEQUENTIAL STEPS) */}
      <section className="bg-white border border-[#E7E7EA] rounded-lg p-6 space-y-4">
        <div className="space-y-1">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6C5CE7]">
            Process
          </span>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#18181B]">
            Auditioning & Participating in 7 Steps
          </h2>
          <p className="text-xs text-[#6B6B73]">
            Joining an Open Chorus Battle (OCB) or duet is one of the fastest routes to meeting friends and community peers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-2.5 pt-2">
          {collabSteps.map((step) => (
            <div
              key={step.num}
              className="bg-[#F8F8F6] border border-[#E7E7EA] rounded-md p-3 flex flex-col justify-between space-y-2 hover:border-[#6C5CE7]/60 transition-colors"
            >
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#6C5CE7] block">
                  {step.num}
                </span>
                <h4 className="font-heading text-xs font-bold text-[#18181B] leading-tight">
                  {step.title}
                </h4>
                <p className="text-[11px] text-[#6B6B73] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COLLAB ETIQUETTE TERMINAL */}
      <section className="bg-white border border-[#E7E7EA] rounded-lg p-6 space-y-4">
        <div>
          <h3 className="font-heading text-lg sm:text-xl font-bold text-[#18181B]">
            Community Collaboration Etiquette
          </h3>
          <p className="text-xs text-[#6B6B73]">
            Reliability and polite communication determine whether other creators will want to work with you again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          
          <div className="space-y-2.5 bg-[#F8F8F6] p-4 rounded-md border border-emerald-200">
            <h4 className="font-semibold text-emerald-800 text-xs flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Recommended Practices</span>
            </h4>
            <ul className="space-y-2 text-[#6B6B73]">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong className="text-[#18181B]">Notify Early:</strong> If an unforeseen event delays your recording, message the organizer immediately rather than disappearing.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong className="text-[#18181B]">0:00 Sync Guarantee:</strong> Every vocal stem should line up with the instrumental immediately upon drag-and-drop into a DAW.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span><strong className="text-[#18181B]">Support the Premiere:</strong> Hype up other singers, share social teasers, and celebrate the release together.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5 bg-[#F8F8F6] p-4 rounded-md border border-rose-200">
            <h4 className="font-semibold text-rose-800 text-xs flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              <span>Critical Mistakes to Avoid</span>
            </h4>
            <ul className="space-y-2 text-[#6B6B73]">
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">✗</span>
                <span><strong className="text-[#18181B]">Ghosting:</strong> Disappearing when deadlines approach delays the entire team's mixing and video production schedule.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">✗</span>
                <span><strong className="text-[#18181B]">Haggling Posted Rates:</strong> If a freelance mixer or artist has set prices, never bargain or ask for free work.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">✗</span>
                <span><strong className="text-[#18181B]">Submitting Noisy Takes:</strong> Do not deliver recordings with loud computer fans, room echo, or digital distortion.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* INTERACTIVE COLLABORATION BRIEF GENERATOR */}
      <section className="bg-white border border-[#E7E7EA] rounded-lg p-6 space-y-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#6C5CE7]" />
            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#18181B]">
              Commission & Outreach Message Generator
            </h3>
          </div>
          <p className="text-xs text-[#6B6B73]">
            Fill in your project details to create a polite, professional outreach DM:
          </p>
        </div>

        {/* Form Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div>
            <label className="block text-[#6B6B73] font-medium mb-1">Target Collaborator</label>
            <select
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value as any)}
              className="w-full px-2.5 py-1.5 rounded-md bg-[#F8F8F6] border border-[#E7E7EA] text-[#18181B] focus:border-[#6C5CE7] focus:bg-white outline-none"
            >
              <option value="Mixer">Mix Engineer</option>
              <option value="Artist">Cover Illustrator</option>
              <option value="Video">Video / Motion Editor</option>
              <option value="Duet Partner">Duet Singer</option>
            </select>
          </div>

          <div>
            <label className="block text-[#6B6B73] font-medium mb-1">Song Title</label>
            <input
              type="text"
              value={briefSong}
              onChange={(e) => setBriefSong(e.target.value)}
              className="w-full px-2.5 py-1.5 rounded-md bg-[#F8F8F6] border border-[#E7E7EA] text-[#18181B] focus:border-[#6C5CE7] focus:bg-white outline-none"
            />
          </div>

          <div>
            <label className="block text-[#6B6B73] font-medium mb-1">Producer (ボカロP)</label>
            <input
              type="text"
              value={briefProducer}
              onChange={(e) => setBriefProducer(e.target.value)}
              className="w-full px-2.5 py-1.5 rounded-md bg-[#F8F8F6] border border-[#E7E7EA] text-[#18181B] focus:border-[#6C5CE7] focus:bg-white outline-none"
            />
          </div>

          <div>
            <label className="block text-[#6B6B73] font-medium mb-1">Track Count / Scope</label>
            <input
              type="text"
              value={briefTracks}
              onChange={(e) => setBriefTracks(e.target.value)}
              className="w-full px-2.5 py-1.5 rounded-md bg-[#F8F8F6] border border-[#E7E7EA] text-[#18181B] focus:border-[#6C5CE7] focus:bg-white outline-none"
            />
          </div>
        </div>

        {/* Message Preview Box */}
        <div className="relative">
          <pre className="p-4 bg-[#F8F8F6] rounded-md border border-[#E7E7EA] text-xs font-mono text-[#18181B] whitespace-pre-wrap leading-relaxed select-all">
            {generateOutreachMessage()}
          </pre>
          <button
            id="copy-collab-brief-btn"
            onClick={copyOutreach}
            className="absolute top-3 right-3 px-3 py-1.5 rounded-md bg-[#6C5CE7] text-white text-xs font-medium flex items-center gap-1.5 hover:bg-[#5A4AD1] transition-colors"
          >
            {copiedBrief ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedBrief ? 'Copied!' : 'Copy message'}</span>
          </button>
        </div>
      </section>

    </div>
  );
}
