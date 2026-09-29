import { DawComparison } from '../types';

export const DAW_COMPARISONS: DawComparison[] = [
  {
    name: 'BandLab',
    tagline: 'Instant cloud recording right in your web browser',
    bestSuitedFor: 'Absolute beginners who want to record their first takes without installing complex software.',
    price: 'Free',
    platforms: ['Browser', 'Windows', 'Mac', 'iOS', 'Android'],
    level: 'Absolute Beginner',
    strengths: [
      '100% free with unlimited cloud storage',
      'Runs directly in Google Chrome/Brave/Edge without setup',
      'Includes basic built-in vocal effects, autotune, and compressor presets',
      'Mobile app lets you record vocal ideas on your phone anywhere'
    ],
    considerations: [
      'Internet connection required for the browser version',
      'Limited advanced manual pitch correction tools compared to desktop DAWs',
      'Less suited for multi-track 20+ vocal harmony stacks'
    ],
    vocalRecordingScore: '9/10 for instant simplicity'
  },
  {
    name: 'GarageBand',
    tagline: 'The sleek, intuitive creative studio pre-installed on Apple hardware',
    bestSuitedFor: 'Apple users (Mac, iPad, iPhone) wanting a polished, zero-cost starting point.',
    price: 'Free',
    platforms: ['Mac', 'iOS'],
    level: 'Beginner',
    strengths: [
      'Pre-installed free on all Mac and iOS devices',
      'Extremely clean, gorgeous interface that never overwhelms',
      'Supports third-party AU audio plugins (like free reverbs and EQs)',
      'Projects open seamlessly in professional Logic Pro when you are ready to upgrade'
    ],
    considerations: [
      'Exclusively available on Apple platforms (no Windows version)',
      'Lacks advanced precision audio slicing and manual pitch curve control'
    ],
    vocalRecordingScore: '9.5/10 for Mac users'
  },
  {
    name: 'Audacity',
    tagline: 'The lightweight, open-source audio editor for quick vocal takes',
    bestSuitedFor: 'Simple recording, audio trimming, quick pitch shifting, and podcast-style takes.',
    price: 'Free',
    platforms: ['Windows', 'Mac', 'Linux'],
    level: 'Beginner',
    strengths: [
      'Lightweight, open-source, and installs in seconds',
      'Quickest way to transpose an instrumental key or cut an audio snippet',
      'Runs smoothly on virtually any computer, even 10-year-old laptops',
      'Zero cost forever with active open-source updates'
    ],
    considerations: [
      'Destructive editing workflow (applying an effect rewrites the waveform)',
      'Lacks a traditional modern real-time mixing console with smooth faders',
      'Clunky for serious multi-track vocal balancing and sidechaining'
    ],
    vocalRecordingScore: '7/10 for recording / 10/10 for quick edits'
  },
  {
    name: 'REAPER',
    tagline: 'The undisputed powerhouse favorite of the utaite mixing community',
    bestSuitedFor: 'Users who want deep control, incredible stability, and professional vocal tuning.',
    price: 'Free Tier / Low-Cost',
    platforms: ['Windows', 'Mac', 'Linux'],
    level: 'Beginner to Advanced',
    strengths: [
      'Tiny 15MB download size, rock-solid stability, almost never crashes',
      'Generous 60-day full evaluation period (with no hard lockouts afterward)',
      'Affordable $60 discounted license for hobbyists',
      'Built-in ReaTune for manual pitch correction and ReaFir for noise reduction',
      'Huge community of utaite mixers share templates, themes, and shortcuts'
    ],
    considerations: [
      'Default user interface can look utilitarian and technical at first glance',
      'Requires a day or two of learning the initial keyboard shortcuts'
    ],
    vocalRecordingScore: '10/10 Community Gold Standard'
  },
  {
    name: 'FL Studio',
    tagline: 'The visually vibrant production hub with NewTone vocal tuning',
    bestSuitedFor: 'Creators interested in beatmaking, music production, and vibrant visual workflows.',
    price: 'Paid',
    platforms: ['Windows', 'Mac'],
    level: 'Beginner to Advanced',
    strengths: [
      'Lifetime free updates (buy once, own every future version forever)',
      'NewTone plugin (Signature edition+) offers intuitive pitch correction similar to Melodyne',
      'Vibrant piano roll and beatmaking workflow',
      'Extensive library of high-quality native synthesizers and effects'
    ],
    considerations: [
      'Multi-track vocal comping is slightly less streamlined than dedicated linear DAWs',
      'More expensive initial entry price ($99–$199) for versions with full vocal recording'
    ],
    vocalRecordingScore: '8.5/10'
  },
  {
    name: 'Studio One',
    tagline: 'Modern drag-and-drop workflow with deep Melodyne integration',
    bestSuitedFor: 'Singers who want effortless drag-and-drop workflow and native pitch editing.',
    price: 'Paid',
    platforms: ['Windows', 'Mac'],
    level: 'Beginner to Advanced',
    strengths: [
      'Native ARA (Audio Random Access) integration with Celemony Melodyne',
      'Drag-and-drop everything: effects, tracks, and instruments',
      'Super clean and contemporary user interface',
      'Dedicated mastering project page in the Professional version'
    ],
    considerations: [
      'Prime (free version) has discontinued plugin support; Artist/Pro is paid',
      'Can be resource-intensive on older systems'
    ],
    vocalRecordingScore: '9.5/10'
  }
];
