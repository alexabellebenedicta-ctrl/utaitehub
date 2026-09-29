import { ResourceItem } from '../types';

export const RESOURCES_DATA: ResourceItem[] = [
  // --- RECORDING ---
  {
    id: 'res-at2020',
    name: 'Audio-Technica AT2020 / AT2020USB-X',
    category: 'Recording',
    description: 'The iconic entry-level cardioid condenser microphone. Crisp, clean high frequencies, durable metal body, and widely praised in the utaite scene.',
    priceType: 'Paid',
    platform: 'Hardware (XLR / USB)',
    beginnerRating: 5,
    urlLabel: 'Hardware Reference',
    urlPlaceholder: 'https://www.audio-technica.com',
    recommendedFor: 'Singers looking for their first serious studio condenser microphone.'
  },
  {
    id: 'res-shure-sm58',
    name: 'Shure SM58 / SE Electronics V7',
    category: 'Recording',
    description: 'Industry-standard dynamic vocal microphones. Outstanding at rejecting untreated bedroom echo and background fan noise while offering warm, punchy tone.',
    priceType: 'Paid',
    platform: 'Hardware (XLR)',
    beginnerRating: 5,
    urlLabel: 'Hardware Reference',
    urlPlaceholder: 'https://www.shure.com',
    recommendedFor: 'Singers in untreated rooms with street noise or computer fan hum.'
  },
  {
    id: 'res-scarlett-solo',
    name: 'Focusrite Scarlett Solo / 2i2',
    category: 'Recording',
    description: 'The world\'s most popular USB audio interface for solo creators. Transparent preamps, 24-bit/192kHz conversion, direct monitoring, and intuitive halo gain indicators.',
    priceType: 'Paid',
    platform: 'Windows / Mac',
    beginnerRating: 5,
    urlLabel: 'Hardware Reference',
    urlPlaceholder: 'https://focusrite.com',
    recommendedFor: 'Connecting any XLR microphone to your computer with zero latency.'
  },
  {
    id: 'res-ath-m50x',
    name: 'Audio-Technica ATH-M50x / ATH-M20x',
    category: 'Recording',
    description: 'Closed-back studio monitor headphones with zero sound bleed into your microphone. Accurate frequency response for tracking vocals and checking mixes.',
    priceType: 'Paid',
    platform: 'Hardware (3.5mm / 6.3mm)',
    beginnerRating: 5,
    urlLabel: 'Hardware Reference',
    urlPlaceholder: 'https://www.audio-technica.com',
    recommendedFor: 'Tracking vocals without backing track leaking into your microphone.'
  },

  // --- AUDIO & DAWS ---
  {
    id: 'res-reaper',
    name: 'Cockos REAPER',
    category: 'Audio',
    description: 'Ultra-lightweight, customizable, and rock-solid digital audio workstation. Widely regarded as the premier tool for vocal tuning, comping, and mixing.',
    priceType: 'Freemium',
    platform: 'Windows / Mac / Linux',
    beginnerRating: 4,
    urlLabel: 'Download REAPER',
    urlPlaceholder: 'https://www.reaper.fm',
    recommendedFor: 'Anyone wanting the most trusted vocal-mixing DAW in the utaite community.'
  },
  {
    id: 'res-bandlab',
    name: 'BandLab',
    category: 'Audio',
    description: 'Free, web-based digital audio workstation with real-time autotune, vocal FX presets, and zero installation required. Also runs seamlessly on iOS and Android.',
    priceType: 'Free',
    platform: 'Browser / iOS / Android',
    beginnerRating: 5,
    urlLabel: 'Open BandLab',
    urlPlaceholder: 'https://www.bandlab.com',
    recommendedFor: 'Absolute beginners recording their first cover within 5 minutes.'
  },
  {
    id: 'res-audacity',
    name: 'Audacity',
    category: 'Audio',
    description: 'Open-source audio editor. The quickest tool to change instrumental pitch (transpose), adjust audio tempo, cut snippets, or export MP3/WAV files.',
    priceType: 'Free',
    platform: 'Windows / Mac / Linux',
    beginnerRating: 5,
    urlLabel: 'Download Audacity',
    urlPlaceholder: 'https://www.audacityteam.org',
    recommendedFor: 'Transposing backing tracks and quick vocal trimming.'
  },
  {
    id: 'res-tokyo-dawn',
    name: 'Tokyo Dawn Records (TDR Free Plugins)',
    category: 'Audio',
    description: 'TDR Nova (dynamic equalizer) and TDR Kotelnikov (mastering compressor) are two of the cleanest, highest-fidelity free plugins in audio production history.',
    priceType: 'Free',
    platform: 'VST3 / AU / AAX',
    beginnerRating: 4,
    urlLabel: 'Get TDR Plugins',
    urlPlaceholder: 'https://www.tokyodawn.net',
    recommendedFor: 'Precision vocal EQ, de-essing, and transparent dynamic control.'
  },
  {
    id: 'res-valhalla',
    name: 'Valhalla Supermassive & VintageVerb',
    category: 'Audio',
    description: 'Valhalla Supermassive is a completely free, legendary reverb and delay plugin capable of lush, expansive, dreamy vocal atmospheres.',
    priceType: 'Free',
    platform: 'VST3 / AU / AAX',
    beginnerRating: 5,
    urlLabel: 'Get Valhalla DSP',
    urlPlaceholder: 'https://valhalladsp.com',
    recommendedFor: 'Lush, ethereal vocal reverb and tempo-synced delay tails.'
  },
  {
    id: 'res-melodyne',
    name: 'Celemony Melodyne',
    category: 'Audio',
    description: 'The undisputed worldwide standard for manual pitch correction, timing adjustment, and vocal note manipulation. Preserves natural human timbre and vibrato.',
    priceType: 'Paid',
    platform: 'Windows / Mac (Standalone / Plugin)',
    beginnerRating: 4,
    urlLabel: 'Celemony Melodyne',
    urlPlaceholder: 'https://www.celemony.com',
    recommendedFor: 'Singers and mixers who want flawless, natural-sounding vocal pitch tuning.'
  },

  // --- VISUAL ---
  {
    id: 'res-davinci',
    name: 'DaVinci Resolve',
    category: 'Visual',
    description: 'Industry-standard Hollywood video editing and color grading suite with an astonishingly generous free version. Perfect for 1080p and 4K music video PV creation.',
    priceType: 'Free',
    platform: 'Windows / Mac / Linux',
    beginnerRating: 3,
    urlLabel: 'DaVinci Resolve',
    urlPlaceholder: 'https://www.blackmagicdesign.com',
    recommendedFor: 'Creators wanting full control over lyric motion graphics and color grading.'
  },
  {
    id: 'res-capcut',
    name: 'CapCut Desktop',
    category: 'Visual',
    description: 'Beginner-friendly video editor with rapid automatic lyric captions, trendy transition presets, keyframe animation, and built-in particle overlay effects.',
    priceType: 'Freemium',
    platform: 'Windows / Mac / Mobile',
    beginnerRating: 5,
    urlLabel: 'CapCut Desktop',
    urlPlaceholder: 'https://www.capcut.com',
    recommendedFor: 'Fast lyric video creation and TikTok / YouTube Shorts edits.'
  },
  {
    id: 'res-ibispaint',
    name: 'IbisPaint / Clip Studio Paint',
    category: 'Visual',
    description: 'Popular digital painting software used widely across Japan and the global anime art community for character illustration, thumbnails, and graphic elements.',
    priceType: 'Freemium',
    platform: 'Windows / Mac / iPad / Android',
    beginnerRating: 4,
    urlLabel: 'Illustration Software',
    urlPlaceholder: 'https://ibispaint.com',
    recommendedFor: 'Illustrating cover art, thumbnail assets, and character graphics.'
  },
  {
    id: 'res-canva',
    name: 'Canva',
    category: 'Visual',
    description: 'Web-based graphic design platform with thousands of font combinations, drop-shadow text presets, and pre-sized 1280x720 YouTube thumbnail canvases.',
    priceType: 'Freemium',
    platform: 'Web / Browser',
    beginnerRating: 5,
    urlLabel: 'Open Canva',
    urlPlaceholder: 'https://www.canva.com',
    recommendedFor: 'Quick, high-contrast, clickable cover thumbnails without Photoshop.'
  },

  // --- MUSIC & OFF-VOCALS ---
  {
    id: 'res-piapro',
    name: 'Piapro (ピアプロ)',
    category: 'Music',
    description: 'Crypton Future Media’s official creator collaboration portal. The primary home where Vocaloid producers upload official master instrumentals, lyrics, and stems.',
    priceType: 'Free',
    platform: 'Web / Japanese & English',
    beginnerRating: 4,
    urlLabel: 'Visit Piapro',
    urlPlaceholder: 'https://piapro.jp',
    recommendedFor: 'Downloading official uncompressed WAV Vocaloid off-vocals and reading author terms.'
  },
  {
    id: 'res-nicocommons',
    name: 'Niconico Commons (ニコニ・コモンズ)',
    category: 'Music',
    description: 'Digital materials database affiliated with Niconico Douga. Producers register their works and provide materials (off-vocals, video backgrounds, sound effects) with clear license terms.',
    priceType: 'Free',
    platform: 'Web',
    beginnerRating: 3,
    urlLabel: 'Niconico Commons',
    urlPlaceholder: 'https://commons.nicovideo.jp',
    recommendedFor: 'Checking usage rights and downloading licensed video/audio materials.'
  },
  {
    id: 'res-vocaloid-wiki',
    name: 'Vocaloid Lyrics Wiki & VocaDB',
    category: 'Music',
    description: 'The definitive encyclopedic database for Vocaloid and CeVIO songs. Includes verified romaji lyrics, kanji, official producer links, BPM, and song key documentation.',
    priceType: 'Free',
    platform: 'Web',
    beginnerRating: 5,
    urlLabel: 'VocaDB Database',
    urlPlaceholder: 'https://vocadb.net',
    recommendedFor: 'Looking up verified song BPM, key, producer credits, and romaji lyrics.'
  },

  // --- LEARNING & TECHNIQUE ---
  {
    id: 'res-vocal-warmups',
    name: 'Warm-Up & Vocal Health Guides',
    category: 'Learning',
    description: 'Curated 10-minute vocal warmup routines focusing on semi-occluded vocal tract (SOVT) exercises (straw phonation, lip trills) to expand range safely.',
    priceType: 'Free',
    platform: 'Web / Video',
    beginnerRating: 5,
    urlLabel: 'Vocal Exercises',
    urlPlaceholder: 'https://youtube.com',
    recommendedFor: 'Singers wanting to protect their voice and expand high range with zero strain.'
  },
  {
    id: 'res-jp-pronunciation',
    name: 'Japanese Diction & Vowel Formant Basics',
    category: 'Learning',
    description: 'A primer on clean Japanese vowel articulation (A, I, U, E, O), sokuon (small tsu / pauses), and pitch accent to sing Japanese covers naturally and expressively.',
    priceType: 'Free',
    platform: 'Web Guide',
    beginnerRating: 5,
    urlLabel: 'Diction Guide',
    urlPlaceholder: 'https://utaitehub.internal',
    recommendedFor: 'Non-native Japanese speakers wanting authentic, musical pronunciation.'
  }
];
