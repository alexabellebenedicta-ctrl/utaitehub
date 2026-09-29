import { FaqItem } from '../types';

export const FAQ_DATA: FaqItem[] = [
  // --- GETTING STARTED ---
  {
    id: 'faq-what-is-utaite',
    category: 'Getting Started',
    question: 'What is an utaite?',
    answer: '“Utaite” (歌い手, literally “singer”) refers to vocalists who record and publish cover versions of songs online—most famously originating in the Japanese Vocaloid and internet music subcultures on Nico Nico Douga and YouTube. Rather than traditional karaoke, utaite covers are creative, artistic re-interpretations often featuring custom illustrations, creative mixing, and personal vocal flair.',
    extraTip: 'Many mainstream Japanese pop icons today (including Eve, Ado, Mafumafu, and Sou) began their careers as bedroom utaite posting covers!'
  },
  {
    id: 'faq-need-amazing-singer',
    category: 'Getting Started',
    question: 'Do I need to be an amazing singer to start?',
    answer: 'Not at all! Many celebrated utaite started out completely untrained. The utaite community is fundamentally about passion, growth, and creative self-expression. As you record more covers, your pitch awareness, breath control, and vocal tone naturally evolve. Modern vocal production and supportive community mixers also help polish your raw tracks.',
    extraTip: 'Consistency and genuine emotion in your delivery often resonate with listeners far more than clinical vocal perfection.'
  },
  {
    id: 'faq-expensive-gear',
    category: 'Getting Started',
    question: 'Do I need expensive equipment to get started?',
    answer: 'No. You do not need a multi-thousand-dollar studio. A budget USB microphone (like an Audio-Technica AT2020USB, Fifine K669B, or Blue Yeti), a pair of standard wired headphones, and free software like BandLab or Audacity are all you need to record clean, lovable covers.',
    extraTip: 'Room acoustics and quiet surroundings make a much bigger difference to audio quality than buying a pricey microphone.'
  },
  {
    id: 'faq-know-japanese',
    category: 'Getting Started',
    question: 'Do I need to know fluent Japanese to sing Japanese songs?',
    answer: 'You do not need to be fluent in Japanese! Many international utaite sing using romaji (phonetic romanized lyrics) and translation guides. Learning basic Japanese vowel pronunciation (A, I, U, E, O) and listening carefully to how native vocalists articulate consonants will make your pronunciation sound natural and confident.',
    extraTip: 'Sites like Vocaloid Lyrics Wiki provide romaji and English translations for almost every song.'
  },
  {
    id: 'faq-never-recorded',
    category: 'Getting Started',
    question: 'Can I start if I have never recorded anything before in my life?',
    answer: 'Yes! That is exactly why this hub exists. Everyone starts from zero: plugging in their first microphone and feeling awkward hearing their recorded voice for the first time. Follow our 8-step "Start Here" roadmap—take it one step at a time, and remember that making mistakes is part of the fun.',
    extraTip: 'It is completely normal to feel shy listening to your own voice at first. Your brain gets used to it after just a few sessions.'
  },

  // --- RECORDING ---
  {
    id: 'faq-what-mic',
    category: 'Recording',
    question: 'What microphone should I buy for my first setup?',
    answer: 'If you want maximum simplicity with zero extra boxes, choose a reliable USB condenser mic like the Audio-Technica AT2020USB-X or Samson Q2U. If you want a modular setup you can upgrade over time, get an XLR dynamic mic (like the Shure SM58 or SE V7) paired with a Focusrite Scarlett Solo or MOTU M2 audio interface.',
    extraTip: 'If your bedroom has echoey hardwood floors and no curtains, a dynamic mic will give you cleaner results than a hyper-sensitive condenser mic.'
  },
  {
    id: 'faq-noisy-recording',
    category: 'Recording',
    question: 'Why does my recording sound so noisy or echoey?',
    answer: 'Background noise usually comes from three culprits: computer fans/AC units in your room, excessive microphone gain amplifying room hiss, or sound waves bouncing off bare walls. To fix this: turn down gain so peaks hit around -10dB, hang heavy duvets or clothes behind you, and position your mic away from computer exhausts.',
    extraTip: 'Singing into an open clothes closet full of hanging sweaters provides remarkable acoustic absorption for $0!'
  },
  {
    id: 'faq-recording-delayed',
    category: 'Recording',
    question: 'Why does my voice sound delayed when I listen in my headphones (latency)?',
    answer: 'Audio latency happens when your computer takes a fraction of a second to process digital sound before sending it to your ears. To fix latency: 1) In your DAW audio settings, lower the buffer size to 128 or 256 samples while recording, 2) Use ASIO drivers on Windows (such as your audio interface\'s dedicated ASIO driver or ASIO4ALL), or 3) Enable "Direct Monitoring" on your interface or USB mic.',
    extraTip: 'Never record with Bluetooth wireless headphones! Bluetooth adds an unavoidable 150–300ms delay. Always use wired 3.5mm headphones.'
  },
  {
    id: 'faq-how-loud',
    category: 'Recording',
    question: 'How loud should I record my vocal tracks?',
    answer: 'Aim for your singing to bounce in the yellow/upper green meter zone between -18dB and -12dB RMS, with your loudest, most powerful chorus belt peaking around -6dBFS. NEVER let the meter hit 0dB (red). Leaving 6dB of "headroom" ensures your voice stays crystal-clear without digital clipping distortion.',
    extraTip: 'Sing your loudest high note during your soundcheck to make sure the meter never touches the top red zone.'
  },

  // --- MIXING ---
  {
    id: 'faq-need-learn-mixing',
    category: 'Mixing',
    question: 'Do I need to learn mixing myself, or should I hire a mixer?',
    answer: 'As a beginner, you don\'t have to be a master mixer! Many vocalists collaborate with community audio mixers through Twitter/X, Discord, or VGen. However, learning the basics—how to comp your best takes, export clean stems starting at 0:00, and do basic volume balancing—will make you a much better singer and collaborator.',
    extraTip: 'Try mixing a short 30-second chorus yourself in BandLab or REAPER just to experience how EQ, compression, and reverb interact.'
  },
  {
    id: 'faq-what-daw-to-use',
    category: 'Mixing',
    question: 'What DAW should I use?',
    answer: 'If you want something instant in your web browser: BandLab. If you are on an Apple Mac: GarageBand. If you want the most versatile, lightweight, professional vocal production workstation in the utaite world: Cockos REAPER. Check our interactive DAW Comparison tool to view feature breakdowns!',
    extraTip: 'Every DAW produces identical audio quality when exporting WAV files—the difference is just the user interface and workflow.'
  },
  {
    id: 'faq-what-is-pitch-correction',
    category: 'Mixing',
    question: 'What is pitch correction, and is it "cheating"?',
    answer: 'Pitch correction (using tools like Celemony Melodyne, Antares Auto-Tune, or ReaTune) gently adjusts the frequencies of recorded notes to lock onto the key of the song. It is standard across the music industry. It is not cheating—it is a musical production tool that tightens natural human micro-wobbles and makes harmonies blend seamlessly.',
    extraTip: 'Natural tuning retains human vibrato and dynamics, whereas hard autotune is used as an intentional robotic electronic aesthetic.'
  },
  {
    id: 'faq-can-i-use-autotune',
    category: 'Mixing',
    question: 'Can I use autotune on my cover?',
    answer: 'Yes! Autotune is widely embraced in Japanese electronic, hyperpop, and modern Vocaloid covers. You can dial it in subtly for pitch stability or crank the retune speed to 0 for the famous robotic effect heard in electronic Vocaloid anthems.',
    extraTip: 'Always make sure your autotune plugin is set to the exact key (e.g. D Minor) and scale of the backing track; otherwise, it will pull notes into jarring wrong pitches.'
  },

  // --- COLLABORATION ---
  {
    id: 'faq-find-collaborators',
    category: 'Collaboration',
    question: 'How do I find collaborators (mixers, artists, duet partners)?',
    answer: 'Collaborators congregate on Twitter/X, specialized creative Discord servers, VGen, and Casting Call Club. Search tags like #歌い手MIX, #mixerforhire, #utaitecollab, and #絵師募集. Start by becoming an active, supportive listener in community discords and commenting kindly on other creators’ projects.',
    extraTip: 'People love working with singers who have a clear vision, organized files, and realistic deadlines.'
  },
  {
    id: 'faq-join-cover-project',
    category: 'Collaboration',
    question: 'How do I join a multi-singer cover project or chorus battle?',
    answer: 'Look for open casting calls posted on CastingCall.club or Twitter/X. Read the audition guidelines carefully, submit a clean, unmixed raw audio recording demonstrating your vocal range, and confirm that you can meet the specified submission deadline before accepting.',
    extraTip: 'Submitting your audition on time with clear file labels immediately puts you at the top of an organizer’s list.'
  },
  {
    id: 'faq-contact-mixer-artist',
    category: 'Collaboration',
    question: 'What should I include when messaging a mixer or artist?',
    answer: 'Be polite, brief, and structured. Include: 1) Song title and link to original, 2) Your target release date, 3) Your budget, 4) The scope (e.g. "Main vocal + 2 harmony tracks" for a mixer, or "16:9 full-color illustration with separate character PNG" for an artist), and 5) Reference examples of work you admire.',
    extraTip: 'Never message an artist or mixer with just "hi" or "how much for a cover?" Presenting a clear creative brief shows professionalism.'
  },
  {
    id: 'faq-credit-collaborators',
    category: 'Collaboration',
    question: 'How should I credit collaborators in my video and description?',
    answer: 'List original creators at the top (Original Song, Music, Lyrics, Original Singer). Below that, credit your entire cover production crew: Vocal, Mix & Master, Illustration, Movie / Video, and Instrumental source. Include clickable links to their primary social media profiles.',
    extraTip: 'Send your collaborators the private unlisted video link before premiere so they can review their credits and celebrate with you!'
  },

  // --- UPLOADING & LEGAL ---
  {
    id: 'faq-where-to-upload',
    category: 'Uploading',
    question: 'Where can I upload my cover?',
    answer: 'The primary platforms for utaite covers are YouTube and Niconico Douga (ニコニコ動画), with supplementary teasers shared on TikTok, Twitter/X, and Bilibili. YouTube provides the largest global audience, while Niconico connects you directly to the traditional Japanese Vocaloid community.',
    extraTip: 'Creating 15–30 second vertical shorts for TikTok and YouTube Shorts is currently the most effective way for new listeners to discover your full YouTube video.'
  },
  {
    id: 'faq-description-content',
    category: 'Uploading',
    question: 'What should I put in the description box of my video?',
    answer: 'Include: 1) Song title and attribution, 2) Link to the original composer\'s YouTube/Niconico video, 3) Instrumental source link (e.g. Piapro link), 4) Credits for yourself (vocal), your mixer, illustrator, and video editor, 5) Social media links, and 6) Hashtags (#歌ってみた, #utaite, song name).',
    extraTip: 'Check our "Start Here" and "Collaboration" pages for a copy-paste description template!'
  },
  {
    id: 'faq-credit-original',
    category: 'Uploading',
    question: 'How do I credit original creators properly?',
    answer: 'State the composer\'s name, lyricist, and original singer/Vocaloid voice bank. Always provide a clickable URL to the composer\'s official upload. In Japanese internet culture, acknowledging the original producer is considered an essential gesture of respect that sustains the cover ecosystem.',
    extraTip: 'Use official kanji/romaji for the producer\'s name (e.g. "Music: Kanaria", "Music: DECO*27") as requested in their video.'
  },
  {
    id: 'faq-copyright-claim',
    category: 'Uploading',
    question: 'What should I do if my upload receives a copyright claim on YouTube?',
    answer: 'Don\'t panic! A "Content ID Copyright Claim" is NOT the same as a copyright strike. In most cases, a Content ID claim simply means YouTube\'s automated system recognized the musical composition and will place ads on the video, routing ad revenue directly to the original rights holder and composer. Your channel is not penalized, and the video remains viewable.',
    extraTip: 'Always review the specific claim details in YouTube Studio. If the original producer explicitly prohibits cover uploads, you must respect their wishes. Policies and terms vary between rights holders, record labels, and platforms.'
  }
];

export const FAQ_ITEMS = FAQ_DATA;
