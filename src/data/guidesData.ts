import { Guide } from '../types';

export const GUIDES_DATA: Guide[] = [
  // --- SONG PREPARATION ---
  {
    id: 'find-instrumental',
    category: 'Song Preparation',
    title: 'How to Find an Instrumental',
    shortDescription: 'Locate official off-vocals, navigate Piapro and producer storage links, and avoid low-quality rips.',
    difficulty: 'Beginner',
    readTime: '4 min read',
    iconName: 'Search',
    keyTakeaways: [
      'Official instrumentals are often linked in the producer\'s video description.',
      'Piapro is the primary repository for Vocaloid instrumentals.',
      'Always download uncompressed WAV files whenever possible instead of YouTube rips.'
    ],
    content: [
      {
        heading: 'Where Do Official Instrumentals Live?',
        body: 'In the Japanese online music scene (specifically Vocaloid, J-rock, and doujin music), producers traditionally distribute high-resolution backing tracks free for fan covers. The most common places are: 1) Piapro (Crypton’s creator sharing portal), 2) Cloud storage links in the YouTube / Niconico video description (Dropbox, Google Drive, Box), and 3) Producer websites (such as BOOTH or personal blogs).'
      },
      {
        heading: 'How to Navigate Piapro for Off-Vocals',
        body: 'When you open a producer’s Piapro link, look for the title with "(off vocal)", "(inst)", or "インスト". Click the track, agree to the download terms (利用規約に同意する), and click the orange Download button (ダウンロード). You will get the master audio rendered directly from the producer’s DAW project.',
        tips: [
          'Piapro requires a free account to download files. Setting one up takes 2 minutes.',
          'Notice if there is a file marked "+2" or "-2"—some generous producers upload pre-transposed instrumentals!'
        ]
      },
      {
        heading: 'What If There Is No Official Instrumental?',
        body: 'If a commercial song has no official off-vocal: 1) Check CD single releases for an "Instrumental" or "Less Vocal" track, or 2) Search YouTube for guitar or piano arrangements explicitly labeled "off vocal arrangement / 歌ってみた用音源". Always contact or credit community arrangers!'
      }
    ]
  },
  {
    id: 'choose-right-key',
    category: 'Song Preparation',
    title: 'How to Choose the Right Key',
    shortDescription: 'Transpose backing tracks safely, preserve your vocal health, and sing with effortless resonance.',
    difficulty: 'Beginner',
    readTime: '5 min read',
    iconName: 'Sliders',
    keyTakeaways: [
      'Changing key is standard for human singers—never feel ashamed to transpose.',
      'Lowering by 2 to 4 semitones often relieves strain on high Vocaloid notes.',
      'Use high-quality pitch shift algorithms to avoid artifacts.'
    ],
    content: [
      {
        heading: 'The Vocaloid Range Trap',
        body: 'Virtual singers like Hatsune Miku or Kasane Teto have no lungs or vocal cords. Producers frequently write melodies that soar into the fifth octave (E5, F#5, G5) or leap across two octaves in seconds. Attempting to belt these in original key without years of vocal technique can cause vocal strain or dysphonia.'
      },
      {
        heading: 'Finding Your Vocal "Sweet Spot"',
        body: '1. Locate the climax note of the chorus.\n2. Sing it on a comfortable "AH" or "OH" vowel.\n3. If your throat tightens, your chin pushes up, or your voice cracks, lower the track by -1, -2, -3, or -4 semitones until you can hit the note with relaxed resonance.\n4. Check the verses to ensure your lowest notes don’t turn into inaudible gravel.'
      },
      {
        heading: 'Tools to Transpose Your Instrumental',
        body: 'You can transpose without changing tempo using free software like Audacity (Effect > Pitch and Tempo > Change Pitch) or within REAPER, GarageBand, or BandLab. Always communicate your key change (e.g. "-3 key") to your audio mixer so their vocal tuning plugins align to the correct musical scale.',
        tips: [
          'A shift of 1 semitone is half a step (e.g. C to B). A shift of 2 semitones is a full step.',
          'Try octave-swapping: if a song is sung by a singer of the opposite gender, shifting by -4 or -5, or singing an octave lower, may fit like a glove.'
        ]
      }
    ]
  },
  {
    id: 'how-to-choose-a-song',
    category: 'Song Preparation',
    title: 'How to Choose a Song',
    shortDescription: 'Criteria for selecting your debut cover so you finish the project and love the final result.',
    difficulty: 'Beginner',
    readTime: '3 min read',
    iconName: 'Music',
    keyTakeaways: [
      'Select a song you know intimately—rhythm, pitch, and lyrics.',
      'Match technical difficulty to your current comfort level.',
      'Ensure instrumental access before making extensive plans.'
    ],
    content: [
      {
        heading: 'The 3-Factor Selection Rule',
        body: 'When picking your debut cover, evaluate: 1) Familiarity: Can you hum the entire melody without music? 2) Emotional connection: Do you genuinely love the vibe and story? 3) Technical feasibility: Does the song have reasonable breath pauses, moderate tempo, and an accessible off-vocal?'
      },
      {
        heading: 'Great Song Types for Beginners',
        body: 'Mid-tempo melodic J-pop, gentle emotional ballads, and story-driven Vocaloid classics (such as songs by 40mP, n-buna/Yorushika, or early DECO*27) are fantastic choices. Avoid hyper-fast speed songs or songs requiring rapid scream/growl techniques on your first try.'
      }
    ]
  },
  {
    id: 'what-is-an-off-vocal',
    category: 'Song Preparation',
    title: 'What Is an Off-Vocal?',
    shortDescription: 'Demystifying inst, off-vocal, karaoke versions, and stems in Japanese music.',
    difficulty: 'Beginner',
    readTime: '3 min read',
    iconName: 'FileAudio',
    keyTakeaways: [
      'Off-vocal (オフボーカル) means the lead vocals are muted.',
      'Chorus-on off-vocals retain backing choir/harmonies; Chorus-off has zero vocals.',
      'Always download WAV format for uncompressed quality.'
    ],
    content: [
      {
        heading: 'Understanding the Types of Off-Vocals',
        body: 'When producers upload karaoke files, you will often see variations:\n- "Off Vocal (Main Off)": Lead vocal is gone, but backing Vocaloid harmonies remain.\n- "Off Vocal (Chorus Off)": Completely silent of any voice—ideal if you want to sing all backing harmonies yourself.\n- "Inst / Instrumental": General term for backing music.'
      },
      {
        heading: 'Which One Should You Choose?',
        body: 'As a beginner, a "Chorus On" off-vocal is often wonderful because the producer\'s backing harmonies give your cover rich depth without you needing to record 8 harmony tracks yourself!'
      }
    ]
  },
  {
    id: 'check-before-using-instrumental',
    category: 'Song Preparation',
    title: 'What Should I Check Before Using an Instrumental?',
    shortDescription: 'Respecting creator usage rules, licensing guidelines, and non-commercial caveats.',
    difficulty: 'Beginner',
    readTime: '4 min read',
    iconName: 'ShieldCheck',
    keyTakeaways: [
      'Always review the producer\'s license conditions on Piapro or YouTube.',
      'Non-commercial (非営利) is standard for community covers.',
      'Crediting original composers and lyricists is mandatory.'
    ],
    content: [
      {
        heading: 'Common Japanese License Terms',
        body: 'When browsing producer terms, you will encounter terms like:\n- "二次創作OK" (Derivative works / covers permitted)\n- "歌ってみた大歓迎" (Covers warmly welcomed)\n- "非営利に限る" (Non-commercial use only—do not monetize without permission)\n- "クレジット表記必須" (Attribution mandatory)'
      },
      {
        heading: 'Can I Monetize a Cover?',
        body: 'Most Vocaloid off-vocals are provided strictly for non-commercial fan creation. While YouTube content identification may automatically route ad revenue to the original publisher, you should never sell the cover on Spotify/Apple Music unless you obtain mechanical licensing or express producer permission.'
      }
    ]
  },

  // --- RECORDING ---
  {
    id: 'record-first-cover',
    category: 'Recording',
    title: 'How to Record Your First Cover',
    shortDescription: 'The step-by-step recording session walkthrough from setup to finished vocal tracks.',
    difficulty: 'Beginner',
    readTime: '6 min read',
    iconName: 'Mic',
    keyTakeaways: [
      'Warm up your voice 10 minutes before recording.',
      'Record in short phrases or sections for maximum energy and pitch accuracy.',
      'Always leave head-room: peak meter between -12dB and -6dB.'
    ],
    content: [
      {
        heading: 'Pre-Session Preparation',
        body: '1. Drink room-temperature water (avoid cold dairy or sugary sodas before singing).\n2. Warm up with gentle lip trills, hums, and sirens.\n3. Have lyrics printed or open on a tablet at eye level so your head stays upright and your airway remains open.'
      },
      {
        heading: 'The Recording Flow',
        body: 'Don\'t try to sing the entire 4-minute song in one single breath. Professional vocalists record section by section: Verse 1, Pre-Chorus 1, Chorus 1, etc. Do 3 to 4 solid takes of each section. This allows you to punch in and maintain fresh energy.'
      },
      {
        heading: 'Checking Your Recorded Audio',
        body: 'Solo your vocal track and listen through headphones. Listen for:\n- Any harsh "pops" on "P" sounds\n- Unwanted computer fan hum\n- Distortion or crackle from singing too loudly\nIf you hear clipping, turn down your microphone gain knob and re-record!'
      }
    ]
  },
  {
    id: 'microphone-101',
    category: 'Recording',
    title: 'Microphone 101 for Cover Singers',
    shortDescription: 'Understand polar patterns, frequency response, and how mics capture vocal character.',
    difficulty: 'Beginner',
    readTime: '5 min read',
    iconName: 'Radio',
    keyTakeaways: [
      'Cardioid is the only polar pattern you need for vocal recording.',
      'Mics don\'t make you a better singer, but they capture honest vocal details.',
      'Placement and room acoustics matter more than microphone price.'
    ],
    content: [
      {
        heading: 'Why Cardioid Pattern is King',
        body: 'A cardioid microphone captures sound primarily from the front while rejecting sound from the back. This is crucial for home recording because it ignores room reflections bouncing off the wall behind the microphone.'
      },
      {
        heading: 'The Proximity Effect',
        body: 'When you move closer to a directional microphone, low bass frequencies increase. If your voice sounds too boomy or muddy, take one step back. If your voice sounds thin and distant, move closer (about 15 cm).'
      }
    ]
  },
  {
    id: 'usb-vs-xlr',
    category: 'Recording',
    title: 'USB vs XLR Microphones',
    shortDescription: 'Which connection type makes sense for your budget, workflow, and long-term goals?',
    difficulty: 'Beginner',
    readTime: '4 min read',
    iconName: 'Cable',
    keyTakeaways: [
      'USB mics plug directly into computers—great for plug-and-play beginners.',
      'XLR mics require an audio interface but offer superior upgradeability and preamps.',
      'High-quality modern USB mics (like Audio-Technica AT2020USB-X) sound excellent.'
    ],
    content: [
      {
        heading: 'USB Microphones (The Simple Path)',
        body: 'USB microphones have a built-in pre-amp and analog-to-digital converter. You plug them straight into a USB port on Windows or Mac. They are portable, cost-effective ($50–$140), and require zero extra hardware.'
      },
      {
        heading: 'XLR Microphones (The Modular Path)',
        body: 'XLR microphones use a standard 3-pin balanced cable that connects to an audio interface (e.g. Focusrite Scarlett Solo, MOTU M2). The interface handles the preamp gain and headphone monitoring. This setup gives you lower latency, physical gain knobs, and the ability to swap mics in the future.'
      }
    ]
  },
  {
    id: 'condenser-vs-dynamic',
    category: 'Recording',
    title: 'Condenser vs Dynamic Microphones',
    shortDescription: 'The truth about room acoustics, sensitivity, and choosing the right capsule.',
    difficulty: 'Beginner',
    readTime: '4 min read',
    iconName: 'Zap',
    keyTakeaways: [
      'Condensers capture crisp high frequencies but pick up room echo easily.',
      'Dynamic mics are rugged and naturally reject distant background noise.',
      'In an untreated bedroom, a dynamic mic (like Shure SM58 / SE V7) is often a secret weapon.'
    ],
    content: [
      {
        heading: 'Condenser Mics: Detailed and Airy',
        body: 'Large diaphragm condensers are the studio standard. They have light diaphragms that respond instantly to delicate vocal nuances and breath sounds. However, their sensitivity means they will also record your computer fan, cars outside, and tile wall reflections.'
      },
      {
        heading: 'Dynamic Mics: Reliable and Forgiving',
        body: 'Dynamic mics require more acoustic energy to move their heavier coil. This makes them naturally reject background chatter and untreated room flutter. If your bedroom has hard walls and floorboards, a dynamic mic can yield cleaner tracks than an overly sensitive condenser.'
      }
    ]
  },
  {
    id: 'how-far-to-stand',
    category: 'Recording',
    title: 'How Far Should I Stand From My Mic?',
    shortDescription: 'Master distance, angle, and the pop filter "hang-loose" rule of thumb.',
    difficulty: 'Beginner',
    readTime: '3 min read',
    iconName: 'Maximize2',
    keyTakeaways: [
      'Standard distance: 15–20 cm (the distance between thumb and pinky finger).',
      'Always position a pop filter 5–7 cm in front of the mic capsule.',
      'Angle the mic slightly toward your nose/bridge rather than directly at your mouth.'
    ],
    content: [
      {
        heading: 'The Hang-Loose Hand Measurement',
        body: 'Make the "hang loose" / shaka sign with your thumb on the pop filter and pinky on your lips. That 15–20 cm distance is the golden zone: close enough for intimate warmth, far enough to avoid plosive blasts.'
      },
      {
        heading: 'Angling for Clarity',
        body: 'Position the mic capsule slightly above your mouth tilted slightly downward, or angled 15 degrees off-axis. Plosive air puffs will sail underneath the microphone capsule rather than hitting the diaphragm directly.'
      }
    ]
  },
  {
    id: 'reduce-background-noise',
    category: 'Recording',
    title: 'How to Reduce Background Noise',
    shortDescription: 'Acoustic treatment on a $0 budget using blankets, closets, and pillows.',
    difficulty: 'Beginner',
    readTime: '4 min read',
    iconName: 'VolumeX',
    keyTakeaways: [
      'Room echo sounds like recording in a bathroom—absorb reflections behind you.',
      'Clothes wardrobes act as natural acoustic damping chambers.',
      'Turn off AC, fans, and close windows during actual recording takes.'
    ],
    content: [
      {
        heading: 'The "Behind the Singer" Rule',
        body: 'Cardioid mics reject sound directly behind them, meaning the reflections that enter your mic are the ones bouncing off the wall BEHIND YOUR HEAD. Hang a thick duvet, winter coat, or heavy blanket directly behind where you stand.'
      },
      {
        heading: 'The Closet Technique',
        body: 'Singing facing an open wardrobe packed with soft wool sweaters and jackets is a time-tested utaite trick. Clothing diffuses and absorbs flutter echo remarkably well.'
      }
    ]
  },
  {
    id: 'set-recording-gain',
    category: 'Recording',
    title: 'How to Set Your Recording Gain',
    shortDescription: 'Understand decibels, headroom, and preventing harsh digital clipping.',
    difficulty: 'Beginner',
    readTime: '3 min read',
    iconName: 'Gauge',
    keyTakeaways: [
      'Never let your audio meter hit red (0 dBFS).',
      'Aim for regular singing at -18dB to -12dB, with loudest shouts peaking at -6dB.',
      'Clean quiet vocals can be easily amplified later; clipped audio cannot be fixed.'
    ],
    content: [
      {
        heading: 'Finding the Sweet Spot',
        body: 'Sing the loudest, most energetic chorus of your song into the microphone while watching your DAW track meter. Turn the interface gain knob until the meter bounces in the upper green and lower yellow zone (around -10dB to -6dB).'
      },
      {
        heading: 'Why Digital Clipping is Fatal',
        body: 'Unlike vintage analog tape which saturates warmly, digital audio clips off square waves at 0dB, resulting in harsh buzzing spikes. Leaving 6dB of headroom ensures you can sing with full emotion without distortion.'
      }
    ]
  },
  {
    id: 'beginner-recording-checklist',
    category: 'Recording',
    title: 'Beginner Recording Checklist',
    shortDescription: 'A quick 10-point inspection before hitting the red record button.',
    difficulty: 'Beginner',
    readTime: '2 min read',
    iconName: 'CheckSquare',
    keyTakeaways: [
      'Run through this checklist every single time you record.',
      'Saves you from recording 20 takes only to realize your laptop mic was active.',
      'Check sample rate is set to 44.1kHz or 48kHz 24-bit.'
    ],
    content: [
      {
        heading: 'The 60-Second Pre-Flight Check',
        body: '1. Headphones connected and sealed around ears\n2. DAW input set to your USB/Audio Interface (not Built-in Mic)\n3. Buffer size set low (128 or 256 samples) to prevent latency\n4. Pop filter aligned\n5. Test take recorded and verified\n6. No background fans or AC hum\n7. Room temperature water nearby\n8. Phone on silent mode'
      }
    ]
  },

  // --- AUDIO & MIXING ---
  {
    id: 'what-is-a-daw',
    category: 'Audio & Mixing',
    title: 'What Is a DAW?',
    shortDescription: 'Everything about Digital Audio Workstations: tracks, plugins, and timelines explained simply.',
    difficulty: 'Beginner',
    readTime: '4 min read',
    iconName: 'Cpu',
    keyTakeaways: [
      'DAW stands for Digital Audio Workstation.',
      'It is your software studio where you record vocal takes, align timing, and export audio.',
      'Free DAWs like BandLab, GarageBand, and REAPER trial are world-class.'
    ],
    content: [
      {
        heading: 'The Core Components of a DAW',
        body: 'A DAW is like a canvas for sound. It contains:\n- The Timeline: Where time flows from left to right in bars and seconds.\n- Tracks: Horizontal lanes holding audio clips (Track 1 = Instrumental, Track 2 = Main Vocal, Track 3 = Harmonies).\n- Mixer: Vertical faders controlling volume, panning (left/right), and plugin inserts.'
      },
      {
        heading: 'Do I Need to Buy an Expensive DAW?',
        body: 'Absolutely not! Some of the most viral covers on Niconico and YouTube were mixed in REAPER ($60 or indefinite evaluation) or even Audacity/BandLab. The skill of the user matters far more than the software logo.'
      }
    ]
  },
  {
    id: 'beginner-daw-guide',
    category: 'Audio & Mixing',
    title: 'Beginner DAW Guide: Which to Choose?',
    shortDescription: 'Comparing BandLab, GarageBand, Audacity, REAPER, FL Studio, and Studio One.',
    difficulty: 'Beginner',
    readTime: '5 min read',
    iconName: 'Layers',
    keyTakeaways: [
      'BandLab is best for absolute beginners who want instant browser recording.',
      'GarageBand is unbeatable for Mac/iPad users.',
      'REAPER is the community gold standard for serious vocal mixing and editing.'
    ],
    content: [
      {
        heading: 'Quick Decision Matrix',
        body: 'If you want to record immediately without installing software: BandLab.\nIf you are on Mac/iOS: GarageBand.\nIf you want simple podcast-style editing: Audacity.\nIf you want the ultimate vocal-editing DAW with unlimited flexibility: REAPER.'
      },
      {
        heading: 'Why REAPER is the Utaite Community Favorite',
        body: 'REAPER is lightweight (installs in 15MB), rarely crashes, has superb pitch manipulation (ReaTune), and has an indefinite non-expiring evaluation period. A massive portion of utaite community mixers work exclusively in REAPER.'
      }
    ]
  },
  {
    id: 'what-is-vocal-editing',
    category: 'Audio & Mixing',
    title: 'What Is Vocal Editing?',
    shortDescription: 'Comping, slip editing, breath cleanup, and preparing raw vocals for mixing.',
    difficulty: 'Beginner',
    readTime: '4 min read',
    iconName: 'Scissors',
    keyTakeaways: [
      'Editing happens BEFORE mixing.',
      'Comping combines the best phrases from multiple takes into one ideal lead track.',
      'Fades and breath management create natural human flow without unwanted noise.'
    ],
    content: [
      {
        heading: 'Step 1: Comping (Composite Take)',
        body: 'You recorded 3 takes of the verse. Take 1 had great pitch in line 1, Take 2 had amazing emotion in line 2, and Take 3 nailed the transition. Comping is cutting and stitching those best moments together into one seamless lead vocal track.'
      },
      {
        heading: 'Step 2: Cleaning the Dead Space',
        body: 'Cut out the silent parts between vocal phrases to eliminate room hiss, chair creaks, or clothes rustling. Always apply 5ms crossfades or fade-ins/fade-outs at every cut so there are no digital clicks.'
      }
    ]
  },
  {
    id: 'what-is-pitch-correction',
    category: 'Audio & Mixing',
    title: 'What Is Pitch Correction?',
    shortDescription: 'Demystifying Melodyne, Auto-Tune, and natural pitch tuning in modern covers.',
    difficulty: 'Beginner',
    readTime: '5 min read',
    iconName: 'Activity',
    keyTakeaways: [
      'Almost every professional commercial and utaite cover utilizes pitch correction.',
      'Manual graphical tuning (Melodyne) sounds transparent and natural.',
      'Auto-Tune is real-time automatic correction, often used stylistically.'
    ],
    content: [
      {
        heading: 'Pitch Correction is Not "Faking"',
        body: 'Pitch correction in vocal production is analogous to color grading in cinematography. It tightens natural micro-deviations so your voice locks into harmonic resonance with the backing instrumental, making harmonies sound luminous and clean.'
      },
      {
        heading: 'Melodyne vs Auto-Tune',
        body: 'Melodyne displays notes as "blobs" on a musical pitch grid, allowing note-by-note nudging of pitch, vibrato, and formant. Auto-Tune corrects notes on the fly. For Japanese cover songs with fast pitch transitions and intricate vibrato, Melodyne or ReaTune manual correction is preferred.'
      }
    ]
  },
  {
    id: 'what-is-mixing',
    category: 'Audio & Mixing',
    title: 'What Is Mixing?',
    shortDescription: 'How EQ, compression, de-essers, and spatial reverbs blend vocals into the track.',
    difficulty: 'Beginner',
    readTime: '5 min read',
    iconName: 'Disc',
    keyTakeaways: [
      'Mixing blends individual vocal tracks and the instrumental into a cohesive unit.',
      'EQ removes clashing frequencies and boosts clarity.',
      'Compression evens out volume between soft whispers and loud belts.'
    ],
    content: [
      {
        heading: 'The Goal of Vocal Mixing',
        body: 'Raw vocals usually sound like they are sitting awkwardly "on top" of a song. Mixing embeds the voice into the track so it feels like the vocalist was in the exact same room as the band/instruments.'
      },
      {
        heading: 'The Core Vocal Processing Chain',
        body: '1. High-Pass Filter: Cuts inaudible low-end rumble (below 80–100Hz).\n2. De-Esser: Tames sharp "s", "sh", and "t" frequencies (5kHz–8kHz).\n3. EQ: Cuts boxy 300Hz–500Hz frequencies and adds high-end sheen (10kHz).\n4. Compressor: Tames peaks so every word is clearly understood.\n5. Reverb & Delay: Adds three-dimensional depth and ambiance.'
      }
    ]
  },
  {
    id: 'what-is-mastering',
    category: 'Audio & Mixing',
    title: 'What Is Mastering?',
    shortDescription: 'The final polish, competitive loudness (LUFS), and export for YouTube/streaming.',
    difficulty: 'Intermediate',
    readTime: '3 min read',
    iconName: 'Sparkles',
    keyTakeaways: [
      'Mastering happens after the mix is finished and exported as a stereo file.',
      'It ensures consistent loudness and tonal balance across all playback devices.',
      'For covers, mastering often involves limiting to around -14 to -11 LUFS.'
    ],
    content: [
      {
        heading: 'Mastering in the Utaite Context',
        body: 'In traditional record production, mastering balances an entire 12-track album. In cover production, "mastering" usually refers to the final 2-track limiter applied to your combined vocal + instrumental file so it sounds appropriately loud and punchy next to other YouTube videos.'
      }
    ]
  },
  {
    id: 'what-are-plugins',
    category: 'Audio & Mixing',
    title: 'What Are Plugins?',
    shortDescription: 'VSTs, audio units, virtual instruments, and effects processors explained.',
    difficulty: 'Beginner',
    readTime: '3 min read',
    iconName: 'Box',
    keyTakeaways: [
      'Plugins are modular software add-ons that insert into your DAW channels.',
      'Common formats: VST3 (Windows/Mac) and AU (Mac only).',
      'Countless high-quality plugins are 100% free (e.g. Tokyo Dawn Records, Valhalla Supermassive).'
    ],
    content: [
      {
        heading: 'The Kitchen Analogy',
        body: 'Think of your DAW as the kitchen, and plugins as the specialized appliances and spices. You might add a free reverb plugin to create a cathedral echo, or an EQ plugin to sculpt your tone.'
      }
    ]
  },
  {
    id: 'basic-vocal-mixing-workflow',
    category: 'Audio & Mixing',
    title: 'Basic Vocal Mixing Workflow',
    shortDescription: 'A beginner step-by-step roadmap to mixing your first song from scratch.',
    difficulty: 'Intermediate',
    readTime: '6 min read',
    iconName: 'Workflow',
    keyTakeaways: [
      'Follow an ordered process: Clean > Edit > Pitch > EQ > Compress > FX > Level.',
      'Use reference tracks from professional utaite to calibrate your ears.',
      'Check your mix on phone speakers and earbuds before publishing.'
    ],
    content: [
      {
        heading: 'Step-by-Step Vocal Chain',
        body: '1. Gain staging: Level vocal tracks to average around -18dB RMS.\n2. Subtractive EQ: Remove room mud with narrow cuts.\n3. De-Essing: Prevent ear fatigue from piercing sibilance.\n4. Dynamic Compression: 3 to 6 dB of gentle gain reduction.\n5. Tonal Shaping: Gentle high-frequency lift for presence.\n6. Send Reverb: Plate or hall reverb on an aux track to glue the voice to the music.'
      }
    ]
  },

  // --- VISUALS ---
  {
    id: 'how-to-find-cover-artist',
    category: 'Visuals',
    title: 'How to Find a Cover Artist',
    shortDescription: 'Where to find talented illustrators, evaluate art styles, and budget for commissions.',
    difficulty: 'Beginner',
    readTime: '4 min read',
    iconName: 'Palette',
    keyTakeaways: [
      'Twitter/X, Skeb, and VGen are prime discovery platforms for cover illustrators.',
      'Check artist bios for commission status: "Commissions: OPEN" or "Skeb募集中".',
      'Review their portfolio for experience with song cover dimensions (1920x1080).'
    ],
    content: [
      {
        heading: 'Where Cover Illustrators Hang Out',
        body: 'The global and Japanese cover illustration community thrives on Twitter/X (#絵師募集, #commission, #coverart), VGen (creator platform tailored for VTubers and utaite), Skeb (Japanese commission portal), and dedicated Discord creative hubs.'
      },
      {
        heading: 'Budget Expectations',
        body: 'Beginner/hobbyist bust-up art starts around $25–$60, while experienced illustrators for full-body rendered cover art typically charge $80–$250+. Always respect an artist\'s stated rates.'
      }
    ]
  },
  {
    id: 'how-to-commission-artwork',
    category: 'Visuals',
    title: 'How to Commission Artwork',
    shortDescription: 'Communication etiquette, timelines, payment safety, and deliverables.',
    difficulty: 'Beginner',
    readTime: '5 min read',
    iconName: 'MessageSquareText',
    keyTakeaways: [
      'Send a clear, polite brief with visual references and deadlines.',
      'Request transparent background PNG layers for video editors.',
      'Pay via secure invoices (PayPal Goods & Services, VGen, or Stripe).'
    ],
    content: [
      {
        heading: 'The Ideal Commission Brief',
        body: 'Include: 1) Song title and link, 2) Character reference sheet or description, 3) Desired pose, mood, and expression, 4) Canvas resolution (16:9 1920x1080 or 4K), 5) Clear deadline (give at least 3–4 weeks), and 6) Required file formats (character on separate transparent layer from background).'
      }
    ]
  },
  {
    id: 'what-info-for-artist',
    category: 'Visuals',
    title: 'What Information Should I Give an Artist?',
    shortDescription: 'The comprehensive creative brief checklist artists love to receive.',
    difficulty: 'Beginner',
    readTime: '3 min read',
    iconName: 'FileText',
    keyTakeaways: [
      'Clear references eliminate endless revision rounds.',
      'Specify commercial vs personal usage upfront.',
      'Always clarify if the art will be used in a monetized YouTube video.'
    ],
    content: [
      {
        heading: 'Information Checklist to Send',
        body: '- Song Name & Link to original\n- Character Reference Images (hair color, eye color, outfit)\n- Pose Reference (or stick figure/mood board)\n- Aspect ratio (usually 16:9 for YouTube MV)\n- Deadline date\n- Separation requirements: (e.g. "Can I have character PNG separate from background PNG for video animation?")'
      }
    ]
  },
  {
    id: 'cover-thumbnail-basics',
    category: 'Visuals',
    title: 'Cover Thumbnail Basics',
    shortDescription: 'Composition, font contrast, character framing, and mobile readability.',
    difficulty: 'Beginner',
    readTime: '4 min read',
    iconName: 'Image',
    keyTakeaways: [
      'The thumbnail is your cover\'s billboard—keep it punchy and readable at small sizes.',
      'Use high contrast between text and background.',
      'Place character focus on the left or center to avoid the YouTube timestamp in bottom right.'
    ],
    content: [
      {
        heading: 'The 3-Second Rule',
        body: 'A scrolling user decides in 3 seconds whether to click. If the song title is tiny or illegible against a busy illustration, they will scroll past. Use bold typography with subtle drop-shadows or text outlines to ensure 100% legibility.'
      }
    ]
  },
  {
    id: 'simple-lyric-video',
    category: 'Visuals',
    title: 'How to Make a Simple Lyric Video',
    shortDescription: 'Create engaging music videos using pan & zoom, dust particles, and kinetic lyrics.',
    difficulty: 'Beginner',
    readTime: '4 min read',
    iconName: 'Video',
    keyTakeaways: [
      'Even a single static illustration can look alive with subtle camera motion.',
      'Slow 2% zoom-ins and slow horizontal pans keep the eye engaged.',
      'Animate lyrics in rhythm with your vocal delivery.'
    ],
    content: [
      {
        heading: 'Techniques That Make Still Art Feel Dynamic',
        body: '1. The Ken Burns Effect: Very subtle slow zooms into the character’s eyes during emotional chorus moments.\n2. Ambient Overlays: Subtle light leaks, dust motes, or rain/film grain on screen blend mode.\n3. Lyric Timing: Pop lyrics on the exact syllable of your singing.'
      }
    ]
  },
  {
    id: 'beginner-video-editing-software',
    category: 'Visuals',
    title: 'Beginner Video Editing Software',
    shortDescription: 'Free and accessible video editors: CapCut, DaVinci Resolve, AviUtl, and Canva.',
    difficulty: 'Beginner',
    readTime: '4 min read',
    iconName: 'Film',
    keyTakeaways: [
      'CapCut (Desktop) is fantastic for beginner text animations and quick effects.',
      'DaVinci Resolve is Hollywood-grade editing, completely free for Windows/Mac.',
      'AviUtl is the legendary classic lightweight editor used across Nico Nico Douga.'
    ],
    content: [
      {
        heading: 'Choosing Your Tool',
        body: 'If you want immediate auto-captioning and modern pre-built motion presets: CapCut Desktop.\nIf you want professional color grading, keyframe animation, and unlimited tracks: DaVinci Resolve.\nIf you have an older low-spec laptop: AviUtl with English patch.'
      }
    ]
  },

  // --- COLLABORATION ---
  {
    id: 'how-to-find-utaite-friends',
    category: 'Collaboration',
    title: 'How to Find Utaite Friends',
    shortDescription: 'Community spaces, Twitter/X tags, Discord servers, and making organic bonds.',
    difficulty: 'Beginner',
    readTime: '4 min read',
    iconName: 'Users',
    keyTakeaways: [
      'Friendships come from genuine support, not transactional requests.',
      'Use community hashtags on Twitter/X like #utaite, #歌い手好きと繋がりたい.',
      'Participate in cover singer Discord servers and voice events.'
    ],
    content: [
      {
        heading: 'The Secret to Organic Connections',
        body: 'Don\'t approach people asking: "Will you sing with me?" First, become a fan and supporter! Comment thoughtfully on their covers, share their milestones, and engage in creative conversations. When both people enjoy each other\'s music, collabs happen naturally.'
      }
    ]
  },
  {
    id: 'how-to-find-a-collab',
    category: 'Collaboration',
    title: 'How to Find a Cover Collab',
    shortDescription: 'Chorus battles, public auditions, multi-singer projects, and open casting calls.',
    difficulty: 'Beginner',
    readTime: '4 min read',
    iconName: 'RadioTower',
    keyTakeaways: [
      'Look for open community casting calls on Casting Call Club and Discord.',
      'Chorus battles (OCBs) are great tournaments to learn teamwork and fast recording.',
      'Duet calls are frequent on Twitter/X with #collabwanted.'
    ],
    content: [
      {
        heading: 'Where Casting Calls are Posted',
        body: 'Platforms like CastingCall.club regularly host auditions for Vocaloid chorus covers, anime group covers, and holiday specials. Join utaite Discord servers with dedicated `#project-auditions` channels.'
      }
    ]
  },
  {
    id: 'how-to-join-collab',
    category: 'Collaboration',
    title: 'How to Join a Collaboration',
    shortDescription: 'Audition samples, reading guidelines, deadline commitments, and communication.',
    difficulty: 'Beginner',
    readTime: '4 min read',
    iconName: 'UserCheck',
    keyTakeaways: [
      'Always submit clean, unmixed raw vocal samples for auditions.',
      'Only join if you can 100% guarantee meeting the recording deadline.',
      'Ghosting or going silent without communication ruins group projects.'
    ],
    content: [
      {
        heading: 'The Golden Rule: Reliable Deadlines',
        body: 'Organizers value reliability even more than Olympic-level vocal ability. If a singer delivers clean tracks on time and communicates politely, they will be invited back to every future project.'
      }
    ]
  },
  {
    id: 'host-own-collab',
    category: 'Collaboration',
    title: 'How to Host Your Own Collab',
    shortDescription: 'Planning timelines, managing line distribution, and keeping team momentum alive.',
    difficulty: 'Intermediate',
    readTime: '5 min read',
    iconName: 'FolderKanban',
    keyTakeaways: [
      'Create a clear color-coded lyric line distribution document.',
      'Set realistic buffer deadlines (ask for vocals 2 weeks before mixer needs them).',
      'Provide guide tracks and timing references for your singers.'
    ],
    content: [
      {
        heading: 'Managing a Multi-Singer Project',
        body: 'Create a shared Google Sheet containing: Singer name, assigned lines, status (Assigned, Auditioned, Lines In, Mixed, Verified). Maintain friendly check-ins with your team at the halfway mark.'
      }
    ]
  },
  {
    id: 'how-to-find-a-mixer',
    category: 'Collaboration',
    title: 'How to Find a Mixer',
    shortDescription: 'Navigating commissions, evaluating mix portfolios, and sending clean vocal stems.',
    difficulty: 'Beginner',
    readTime: '5 min read',
    iconName: 'SlidersHorizontal',
    keyTakeaways: [
      'Search #mixerforhire, #歌い手MIX, or VGen audio categories.',
      'Listen to the mixer\'s previous works with similar genres to your song.',
      'Always send stems aligned to 0:00 with tempo BPM and key included.'
    ],
    content: [
      {
        heading: 'What Mixers Charge',
        body: 'Hobbyist mixers in student communities sometimes mix for free or tip-based ($10–$25). Experienced intermediate mixers charge $35–$70, while top-tier utaite mixers charge $90–$200+ depending on harmony count and tuning depth.'
      },
      {
        heading: 'What Mixers Need From You',
        body: '1. Instrumental WAV file\n2. Dry vocal tracks starting at exactly 0:00 (no reverb baked in!)\n3. Song BPM and Key info\n4. Reference mix link (how you want the vocal style to feel)'
      }
    ]
  },
  {
    id: 'how-to-find-an-artist',
    category: 'Collaboration',
    title: 'How to Find an Artist',
    shortDescription: 'Approaching visual creators with respect, clear creative vision, and prompt payment.',
    difficulty: 'Beginner',
    readTime: '4 min read',
    iconName: 'Brush',
    keyTakeaways: [
      'Artists appreciate concise messages with budget and timeline up front.',
      'Check whether the artist allows their art to be used for YouTube videos.',
      'Never negotiate down an artist\'s advertised rates.'
    ],
    content: [
      {
        heading: 'How to Inquire Respectfully',
        body: 'State: "Hello [Artist Name], I love your art! I am planning a cover of [Song Title] and would love to commission a 16:9 illustration for a YouTube video. My target release is [Date], and my budget is [Amount]. Are you currently available for commissions?"'
      }
    ]
  },
  {
    id: 'collaboration-etiquette',
    category: 'Collaboration',
    title: 'Collaboration Etiquette: The Unwritten Rules',
    shortDescription: 'The essential community etiquette guidelines to build a respected reputation.',
    difficulty: 'Beginner',
    readTime: '4 min read',
    iconName: 'HeartHandshake',
    keyTakeaways: [
      'Never ghost! If life happens, send a quick message so projects aren\'t stalled.',
      'Do not give unsolicited harsh critique to fellow cover singers.',
      'Promote all your team members generously upon release.'
    ],
    content: [
      {
        heading: 'The 3 Cardinal Sins of Collabs',
        body: '1. Ghosting when a deadline approaches.\n2. Submitting low-effort, noisy phone mic recordings when you promised studio quality.\n3. Forgetting to credit someone in the video description or on social media.'
      }
    ]
  },
  {
    id: 'how-to-organize-credits',
    category: 'Collaboration',
    title: 'How to Organize Credits',
    shortDescription: 'The standard description and video credit layout for Japanese music covers.',
    difficulty: 'Beginner',
    readTime: '3 min read',
    iconName: 'ListOrdered',
    keyTakeaways: [
      'Follow the traditional Japanese hierarchy: Original creators first, then cover team.',
      'Include clickable links to every collaborator\'s primary social media.',
      'Double-check spelling of producer names and Japanese titles.'
    ],
    content: [
      {
        heading: 'The Standard Credit Template',
        body: '◆ Original Song\nMusic & Lyrics: [Original Producer Name] (Link to original video)\nVocals: [Original Vocalist / Hatsune Miku]\n\n◆ Cover Staff\nVocal: Your Name (@twitter)\nMix & Master: Mixer Name (@twitter)\nIllustration: Artist Name (@twitter)\nMovie / PV: Video Editor Name (@twitter)\nInstrumental: Piapro link'
      }
    ]
  }
];
