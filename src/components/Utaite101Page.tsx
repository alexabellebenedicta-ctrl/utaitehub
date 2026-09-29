import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Music, 
  Radio, 
  Palette, 
  Video, 
  Upload, 
  Share2, 
  Mic2, 
  Wand2, 
  Layers,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';

interface Utaite101PageProps {
  onNavigate: (page: PageId) => void;
}

export function Utaite101Page({ onNavigate }: Utaite101PageProps) {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(0);

  const workflowSteps = [
    {
      title: 'Song Selection',
      desc: 'Choosing a track that fits your vocal resonance and passion.',
      icon: Music,
      details: 'Analyze song vocal range, comfortable key, tempo, and verify that the original Vocaloid producer (ボカロP) allows non-commercial cover uploads on Piapro or YouTube.'
    },
    {
      title: 'Instrumental',
      desc: 'Acquiring high-resolution audio and setting the right key.',
      icon: Radio,
      details: 'Download a clean 24-bit WAV file directly from the producer\'s official Piapro or cloud link. Transpose key (±1~4 semitones) in your DAW if required for effortless resonance.'
    },
    {
      title: 'Vocal Recording',
      desc: 'Capturing clean takes in a quiet acoustic space.',
      icon: Mic2,
      details: 'Using a cardioid mic, pop filter, and closed-back headphones, record section-by-section. Target -18dBFS ~ -12dBFS average headroom to prevent digital clipping.'
    },
    {
      title: 'Comping & Cleanup',
      desc: 'Selecting the best takes, trimming silence, and tuning prep.',
      icon: Layers,
      details: 'Select the tightest takes into a composite lead track, cut mouth saliva clicks, add micro-fades (5~10ms) to every audio boundary, and eliminate room noise.'
    },
    {
      title: 'Mixing & Tuning',
      desc: 'Balancing EQ, compression, pitch correction, and spatial reverb.',
      icon: Wand2,
      details: 'Vocal pitch correction (Melodyne/Auto-Tune), subtractive surgical EQ, compression, de-essing harsh sibilance, and stereo reverb/delay spatial sends.'
    },
    {
      title: 'Artwork & Visuals',
      desc: 'Commissioning character illustration and thumbnail assets.',
      icon: Palette,
      details: 'Commission an indie illustrator or create clean graphic layers. Provide transparent character PNGs to allow dynamic background video camera movements.'
    },
    {
      title: 'Video Creation (PV)',
      desc: 'Adding animated lyrics, camera pans, and motion typography.',
      icon: Video,
      details: 'Render in DaVinci Resolve, Premiere, After Effects, or CapCut. Ensure lyrics synchronize precisely to the vocal transients and export in 1080p60.'
    },
    {
      title: 'Upload & Credits',
      desc: 'Publishing on YouTube / Niconico with full attribution.',
      icon: Upload,
      details: 'Include the iconic 【歌ってみた】 (Utattemita) tag, link the original composer/producer, and list every collaborator (Mixer, Illust, PV) in credits.'
    },
    {
      title: 'Promotion & Community',
      desc: 'Sharing short vertical clips and celebrating release.',
      icon: Share2,
      details: 'Post 30-second chorus hooks to TikTok and YouTube Shorts, tag collaborators on X (Twitter), and engage respectfully with listeners.'
    }
  ];

  const creatorComparisons = [
    {
      name: 'Utaite',
      jp: '歌い手',
      roleSummary: 'Vocalists specializing in creative online covers (predominantly Vocaloid, anime, and Japanese internet indie music).',
      typicalFormat: 'Online video uploads (YouTube, Niconico), often represented by an illustrated 2D persona or avatar rather than IRL camera.',
      creativeControl: '100% independent. Decides song choice, vocal harmonies, art style, and release schedule.',
      teamCollab: 'Heavy community collaboration with freelance mixers, fan illustrators, and video animators.',
      signatureStyle: 'High emotional expressiveness, intricate harmonies/ad-libs, stylized 2D visual identities.',
      highlight: true
    },
    {
      name: 'General Cover Singer',
      jp: 'カバーシンガー',
      roleSummary: 'Musicians performing pop, acoustic, or billboard covers on social media platforms.',
      typicalFormat: 'Often live acoustic video (singing to camera with guitar/piano), busking, or acoustic arrangements.',
      creativeControl: 'Self-directed or agency-managed depending on tier.',
      teamCollab: 'Typically solo performance or small acoustic band setup.',
      signatureStyle: 'Focus on face-to-camera intimacy, raw acoustic instruments, and radio chart songs.'
    },
    {
      name: 'VTuber (Virtual YouTuber)',
      jp: 'バーチャルYouTuber',
      roleSummary: 'Virtual avatar livestreamers who entertain through gaming, chatting, and variety shows, with cover/original music releases.',
      typicalFormat: 'Live 2D/3D rigged avatar streaming on Twitch or YouTube multiple hours weekly; covers complement broader content.',
      creativeControl: 'Varies between indie VTubers (autonomous) and agencies (Hololive, NIJISANJI, etc.).',
      teamCollab: 'Large multidisciplinary teams (character riggers, 3D engineers, managers, sound staff).',
      signatureStyle: 'Character lore, interactive livestreaming, multi-hour community chat entertainment.'
    },
    {
      name: 'Idol',
      jp: 'アイドル',
      roleSummary: 'Performers trained in synchronized stage choreography, live vocals, charm, and fan events.',
      typicalFormat: 'Live stage concerts, group handshake/cheki events, broadcast media, and label singles.',
      creativeControl: 'Generally guided by talent agencies, producers, and choreographers.',
      teamCollab: 'Professional record labels, choreographers, vocal directors, and stylists.',
      signatureStyle: 'Synchronized group dancing, infectious energy, unified uniforms, and idol fan culture.'
    },
    {
      name: 'Vocaloid Producer (ボカロP)',
      jp: 'ボカロP / 作曲家',
      roleSummary: 'Composers and lyricists who write original backing music and program vocal synthesizers (Miku, GUMI, Teto).',
      typicalFormat: 'Original song releases, instrumental off-vocal distribution on Piapro, and digital streaming.',
      creativeControl: 'Total authorship over composition, synth tuning, and lyrics.',
      teamCollab: 'Provides instrumentals for utaite to sing; often collaborates with video animators and cover vocalists.',
      signatureStyle: 'Inventive synthesizer melodies, complex song structures, and emotional storytelling.'
    }
  ];

  return (
    <div className="w-full space-y-10 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* PAGE HEADER */}
      <div className="space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#EEEBFF] text-[#6C5CE7] text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Culture & Origins</span>
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] tracking-tight">
          What is an <span className="text-[#6C5CE7]">Utaite?</span>
        </h1>
        <p className="text-base text-[#6B6B73] leading-relaxed">
          Welcome to one of the most creative, collaborative internet music ecosystems in the world. Here is the foundation of the online cover singer community.
        </p>
      </div>

      {/* SECTION 1: WHAT IS AN UTAITE? */}
      <section className="bg-white border border-[#E7E7EA] rounded-lg p-6 sm:p-8 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#18181B]">
              The Meaning & Modern Definition of “Utaite” (歌い手)
            </h2>
            
            <p className="text-sm text-[#6B6B73] leading-relaxed">
              In Japanese, the literal dictionary word <strong className="text-[#18181B]">utaite (歌い手)</strong> simply translates to “singer.” However, across global internet music culture, the term represents a distinct, celebrated subculture:
            </p>

            <blockquote className="border-l-3 border-[#6C5CE7] pl-4 py-2 text-sm text-[#18181B] bg-[#F8F8F6] rounded-r">
              “An online vocalist who records and releases creative interpretations of Japanese songs—predominantly Vocaloid, anime music, J-pop, and indie compositions—often represented by an illustrated 2D persona.”
            </blockquote>

            <p className="text-sm text-[#6B6B73] leading-relaxed">
              Unlike traditional karaoke, utaite covers are seen as full creative interpretations. Vocalists frequently craft intricate harmonies, rearrange vocal dynamics, collaborate with community illustrators for custom character art, and work closely with mix engineers to sculpt professional spatial audio.
            </p>
          </div>

          {/* Associated Music Genres */}
          <div className="lg:col-span-5 bg-[#F8F8F6] border border-[#E7E7EA] rounded-lg p-5 space-y-3">
            <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-[#18181B] flex items-center gap-2">
              <Music className="w-3.5 h-3.5 text-[#6C5CE7]" />
              <span>Core Repertoire & Genres</span>
            </h3>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-md bg-white border border-[#E7E7EA] space-y-0.5">
                <span className="text-[#6C5CE7] font-semibold block">01 • Vocaloid & Synthesizer</span>
                <span className="text-[#6B6B73]">Songs composed for Hatsune Miku, GUMI, Rin/Len, flower, and Kasane Teto.</span>
              </div>

              <div className="p-3 rounded-md bg-white border border-[#E7E7EA] space-y-0.5">
                <span className="text-[#6C5CE7] font-semibold block">02 • Anime & Game Soundtracks</span>
                <span className="text-[#6B6B73]">Iconic series opening/ending tracks and video game anthems.</span>
              </div>

              <div className="p-3 rounded-md bg-white border border-[#E7E7EA] space-y-0.5">
                <span className="text-[#6C5CE7] font-semibold block">03 • J-Rock & Japanese Indie</span>
                <span className="text-[#6B6B73]">Tracks by King Gnu, Yorushika, YOASOBI, Official HIGE DANdism, and ZUTOMAYO.</span>
              </div>

              <div className="p-3 rounded-md bg-white border border-[#E7E7EA] space-y-0.5">
                <span className="text-[#6C5CE7] font-semibold block">04 • Doujin & Originals</span>
                <span className="text-[#6B6B73]">Independent collaborative tracks, unit releases (e.g. After the Rain, Eve).</span>
              </div>
            </div>
          </div>

        </div>

        {/* Nico Nico Douga historical context */}
        <div className="p-4 rounded-md bg-[#EEEBFF]/50 border border-[#EEEBFF] flex items-start gap-3 text-xs text-[#6B6B73]">
          <div className="w-7 h-7 rounded-md bg-white border border-[#E7E7EA] flex items-center justify-center text-[#6C5CE7] shrink-0 font-mono font-bold text-xs">
            NND
          </div>
          <div className="space-y-0.5">
            <span className="font-heading font-bold text-[#18181B] block">Historical Roots: 【歌ってみた】 (Utattemita)</span>
            <p className="text-xs leading-relaxed">
              The tag <strong>【歌ってみた】 ("I tried singing it")</strong> originated on Nico Nico Douga in 2007. Global stars like <strong>Ado</strong>, <strong>Eve</strong>, <strong>Mafumafu</strong>, and <strong>Sou</strong> all launched their music careers from bedroom condenser microphones releasing covers under this tag.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRODUCTION STAGES (WORKFLOW) */}
      <section className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6C5CE7]">
              Production Pipeline
            </span>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#18181B]">
              The 9 Stages of a Cover Release
            </h2>
          </div>
          <span className="text-xs text-[#6B6B73]">Select any step to view details</span>
        </div>

        {/* Interactive Step Navigator */}
        <div className="bg-white border border-[#E7E7EA] rounded-lg p-5 sm:p-6 space-y-4">
          
          {/* Workflow Sequence Ribbon */}
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-1.5">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeWorkflowStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className={`p-2 rounded-md border text-center transition-colors flex flex-col items-center gap-1 ${
                    isActive
                      ? 'bg-[#EEEBFF] border-[#6C5CE7] text-[#6C5CE7]'
                      : 'bg-white text-[#6B6B73] border-[#E7E7EA] hover:border-[#6C5CE7]/40 hover:text-[#18181B]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#6C5CE7]' : 'text-[#6B6B73]'}`} />
                  <span className="text-[11px] font-medium leading-tight line-clamp-1">
                    {step.title}
                  </span>
                  <span className="text-[10px] font-mono text-[#6B6B73]">
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Spotlight Card */}
          <div className="bg-[#F8F8F6] border border-[#E7E7EA] rounded-md p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-white text-[#6C5CE7] border border-[#E7E7EA]">
                  Stage 0{activeWorkflowStep + 1}
                </span>
                <span className="text-xs font-semibold text-[#18181B]">
                  {workflowSteps[activeWorkflowStep].title}
                </span>
              </div>

              <h3 className="font-heading text-lg font-bold text-[#18181B]">
                {workflowSteps[activeWorkflowStep].desc}
              </h3>

              <p className="text-sm text-[#6B6B73] max-w-2xl leading-relaxed">
                {workflowSteps[activeWorkflowStep].details}
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={() => setActiveWorkflowStep((prev) => (prev + 1) % workflowSteps.length)}
                className="px-3 py-1.5 rounded-md bg-white hover:bg-[#EEEBFF] text-[#6C5CE7] text-xs font-medium flex items-center gap-1.5 transition-colors border border-[#E7E7EA]"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="text-center pt-1">
            <button
              onClick={() => onNavigate('start-here')}
              className="inline-flex items-center gap-1 text-xs font-medium text-[#6C5CE7] hover:text-[#5A4AD1] transition-colors"
            >
              <span>View interactive checklists for each stage in the 8-step roadmap</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 3: UTAITE VS OTHER ROLES */}
      <section className="space-y-4">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6C5CE7]">
            Role Comparison
          </span>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#18181B]">
            Utaite vs. Other Creator Types
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {creatorComparisons.map((c, i) => (
            <div
              key={i}
              className={`p-5 rounded-lg border flex flex-col justify-between transition-colors ${
                c.highlight
                  ? 'bg-white border-[#6C5CE7] shadow-xs'
                  : 'bg-white border-[#E7E7EA]'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-base font-bold text-[#18181B]">
                    {c.name}
                  </h3>
                  <span className="text-[11px] font-mono text-[#6B6B73] bg-[#F8F8F6] px-2 py-0.5 rounded border border-[#E7E7EA]">
                    {c.jp}
                  </span>
                </div>

                <p className="text-xs text-[#6B6B73] leading-relaxed">
                  {c.roleSummary}
                </p>

                <div className="pt-2 space-y-2 text-xs border-t border-[#E7E7EA]">
                  <div>
                    <span className="text-[#6B6B73] font-medium text-[11px] block">Typical Format:</span>
                    <span className="text-[#18181B] text-xs">{c.typicalFormat}</span>
                  </div>

                  <div>
                    <span className="text-[#6B6B73] font-medium text-[11px] block">Creative Control:</span>
                    <span className="text-[#18181B] text-xs">{c.creativeControl}</span>
                  </div>

                  <div>
                    <span className="text-[#6B6B73] font-medium text-[11px] block">Signature Trait:</span>
                    <span className="text-[#18181B] text-xs">{c.signatureStyle}</span>
                  </div>
                </div>
              </div>

              {c.highlight && (
                <div className="mt-4 pt-2.5 border-t border-[#EEEBFF] text-xs font-medium text-[#6C5CE7] flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  <span>Primary focus of this resource platform</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
