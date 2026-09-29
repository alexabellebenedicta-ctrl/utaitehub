import { RoadmapStep } from '../types';

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    stepNumber: '01',
    title: 'Choose a Song',
    subtitle: 'Pick a track you genuinely love that fits your current vocal range',
    summary: 'Your first cover should build confidence and momentum. Choose a song you are deeply familiar with, whose melody feels comfortable, and that has an accessible instrumental.',
    checklistItems: [
      { id: 'step1-1', text: 'Do you genuinely like listening to and singing this song?', tip: 'You will listen to it 100+ times during recording and editing.' },
      { id: 'step1-2', text: 'Is the vocal range manageable without straining?', tip: 'Check the highest note and lowest note before committing.' },
      { id: 'step1-3', text: 'Is the rhythmic speed comfortable for your breath control?', tip: 'Fast rap or rapid Japanese lyrics can easily overwhelm a beginner.' },
      { id: 'step1-4', text: 'Is an official or high-quality off-vocal instrumental available?', tip: 'Always verify you can legally access the backing track first.' },
      { id: 'step1-5', text: 'Do you know the lyrics and melody by heart?', tip: 'Muscle memory frees your mind to focus on expressive singing.' }
    ],
    deepDive: {
      concept: 'Comfort Over Flashiness',
      whyItMatters: 'Many beginners pick a viral song with whistle tones or 240 BPM tongue-twisters on Day 1, get frustrated during recording, and abandon the project.',
      beginnerTrap: 'Trying to mimic the exact pitch or timbre of a Vocaloid synthesizer or a veteran singer with 10 years of training.',
      proAdvice: 'Choose a mid-tempo song with clean melodic lines. Songs by 40mP, DECO*27, or classic J-pop ballads are beloved for a reason: they are rewarding and melodic.'
    }
  },
  {
    stepNumber: '02',
    title: 'Find an Instrumental',
    subtitle: 'Source legitimate off-vocals (inst) and verify creator usage terms',
    summary: 'In Japanese music culture, producers often release official karaoke files called “off-vocal” or “inst”. Respecting the producer’s distribution guidelines is central to utaite etiquette.',
    checklistItems: [
      { id: 'step2-1', text: 'Check the original YouTube or Niconico video description for download links (e.g. Piapro, Google Drive, Dropbox).', tip: 'Official Vocaloid producers almost always link their Piapro page.' },
      { id: 'step2-2', text: 'Download lossless WAV audio if available (or high-bitrate 320kbps MP3).', tip: 'Avoid using low-quality YouTube rippers which degrade the mix.' },
      { id: 'step2-3', text: 'Read the creator’s terms of use (規約 / Kiyaku).', tip: 'Look for phrases like "歌ってみたでの使用OK" (OK for covers) and non-commercial caveats.' },
      { id: 'step2-4', text: 'Note down the song BPM (tempo) and original key.', tip: 'Most producer Piapro pages list the BPM, saving you hours of alignment later.' },
      { id: 'step2-5', text: 'Save the producer’s exact title, credits, and link for your description.', tip: 'Never claim or upload without crediting the original composer and lyricist.' }
    ],
    deepDive: {
      concept: 'What is an "Off-Vocal" vs "Instrumental"?',
      whyItMatters: 'An "off-vocal" (オフボーカル) is a mix with lead vocals muted, often retaining backing harmonies, or completely devoid of any voice. Legitimate tracks maintain sound fidelity.',
      beginnerTrap: 'Using an AI vocal-remover on an official commercial Spotify release. AI isolation leaves watery artifacts and phase cancellation.',
      proAdvice: 'If the producer does not provide an instrumental, look for an authorized community acoustic guitar or piano arrangement. Always credit the acoustic arranger!'
    }
  },
  {
    stepNumber: '03',
    title: 'Choose Your Key',
    subtitle: 'Transposing the backing track to highlight your vocal strengths',
    summary: 'The original key was written for a specific singer or synthetic voice. Changing the key (transposing) is standard industry practice, not cheating!',
    checklistItems: [
      { id: 'step3-1', text: 'Identify the highest peak note of the chorus and sing it naturally.', tip: 'If your throat feels constricted or pinched, lower the key by 2 to 4 semitones.' },
      { id: 'step3-2', text: 'Check your lowest note in the verses.', tip: 'If lowering makes the verses sound muddy or whispery, find a balanced middle ground.' },
      { id: 'step3-3', text: 'Test pitch shifting the instrumental using Audacity, REAPER, or an online pitch shifter.', tip: 'Use high-quality pitch shift algorithms that preserve tempo.' },
      { id: 'step3-4', text: 'Record a rough scratch take in both original key and -2 / -3.', tip: 'Listen back with fresh ears to judge which sounds more effortless and confident.' },
      { id: 'step3-5', text: 'Document the exact transposition value (e.g., -2 key / +1 key) for your mixer.', tip: 'Your mixer must know if the track is transposed so pitch correction tools match.' }
    ],
    deepDive: {
      concept: 'Why the Original Key is NOT Automatically Best',
      whyItMatters: 'Vocaloid songs are often tuned in unnaturally high octaves (C5–G5) because software voices have no physical vocal cords to fatigue. Human voices need tailored keys.',
      beginnerTrap: 'Believing that lowering the key is a sign of weakness. Some of the most famous utaite (e.g. Mafumafu, Eve, Sou, Ado) regularly adjust keys for their range.',
      proAdvice: 'Shift by semitones (+1, +2, -1, -2, -3). A -2 or -3 semitone shift drops the track by one whole step to one-and-a-half steps, instantly relieving vocal strain.'
    }
  },
  {
    stepNumber: '04',
    title: 'Record Your Vocals',
    subtitle: 'Capture clean, undistorted vocal takes in a quiet environment',
    summary: 'Good mixing starts with a clean recording. No mixer or plugin can rescue severe background noise, heavy clipping, or hollow room echo.',
    checklistItems: [
      { id: 'step4-1', text: 'Microphone plugged in and correct input selected in your DAW/audio settings.', tip: 'Make sure your DAW isn\'t accidentally recording through your laptop mic!' },
      { id: 'step4-2', text: 'Closed-back headphones plugged in (NEVER use open speakers while recording).', tip: 'Prevent backing track audio from bleeding into your vocal mic.' },
      { id: 'step4-3', text: 'Set your input gain properly (aim for peaks between -12dB and -6dB).', tip: 'Leave "headroom". Never allow audio meters to enter red (0dB clipping).' },
      { id: 'step4-4', text: 'Distance: 15–20 cm (about one hand span) from mic with a pop filter.', tip: 'Pop filters prevent harsh "P", "B", and "T" air bursts from distorting the capsule.' },
      { id: 'step4-5', text: 'Minimize room flutter echo (hang blankets or record facing a wardrobe of clothes).', tip: 'Soft clothing and duvets absorb acoustic reflections wonderfully on a budget.' },
      { id: 'step4-6', text: 'Record section by section (Verse 1, Chorus 1) rather than doing one exhausting take.', tip: 'Punching in gives you fresh breath and clean energy for every phrase.' }
    ],
    deepDive: {
      concept: 'Headroom & The "Fix It in the Mix" Myth',
      whyItMatters: 'Digital clipping occurs when sound exceeds 0dBFS. This produces harsh, unfixable digital distortion. Recording at a moderate level avoids this completely.',
      beginnerTrap: 'Singing with reverb enabled on your recorded track. Always record completely DRY (no effects baked into the audio file).',
      proAdvice: 'Sing with physical expression. Step back 5 cm for loud belt notes and lean in slightly for intimate breathy whispers.'
    }
  },
  {
    stepNumber: '05',
    title: 'Edit & Mix',
    subtitle: 'Tune, align, balance, and blend vocals into the backing track',
    summary: 'Vocal production transforms raw takes into a polished song. Understand what each stage does whether you do it yourself or hire a community mixer.',
    checklistItems: [
      { id: 'step5-1', text: 'Comping & Cleanup: Select your best takes, cut silent sections, and mute mouth clicks.', tip: 'Smooth fade-ins and fade-outs eliminate clicks at cut points.' },
      { id: 'step5-2', text: 'Timing Correction: Align syllables to lock tightly to the song’s groove and beat.', tip: 'Snapping phrases to the rhythm makes the cover sound tight and confident.' },
      { id: 'step5-3', text: 'Pitch Correction (Tuning): Gentle melody tuning using Melodyne, Auto-Tune, or ReaTune.', tip: 'Natural tuning keeps vocal character; robotic hard-tuning is a stylistic choice.' },
      { id: 'step5-4', text: 'Mixing (EQ, Compression, De-essing): Carving space so vocals sit naturally inside the instrumental.', tip: 'EQ removes muddiness, compression controls dynamics, de-esser tames harsh "S" sounds.' },
      { id: 'step5-5', text: 'Space & FX: Add tasteful reverb, delay, stereo widening, and special effects.', tip: 'Sync delay time to song tempo (BPM) for a polished, cohesive atmosphere.' },
      { id: 'step5-6', text: 'Export stems: If hiring a mixer, export all vocal tracks starting at 0:00 without clipping.', tip: 'Synchronized start times (all starting at 0:00) is the #1 rule mixers ask for.' }
    ],
    deepDive: {
      concept: 'Editing vs Mixing vs Mastering',
      whyItMatters: 'Beginners often confuse these. Editing is fixing raw timing/pitch; mixing is balancing vocal tone against music; mastering is final loudness/stereo optimization.',
      beginnerTrap: 'Sending 15 vocal clips scattered randomly across the timeline to a mixer without rendering them from 0:00.',
      proAdvice: 'If you are mixing yourself, reference the original song frequently at the exact same listening volume to check your vocal balance.'
    }
  },
  {
    stepNumber: '06',
    title: 'Create Your Visuals',
    subtitle: 'Prepare eye-catching cover illustration, typography, and video',
    summary: 'Visual presentation invites listeners to click and listen. From custom character art to elegant typography over royalty-free photography, visuals set the mood.',
    checklistItems: [
      { id: 'step6-1', text: 'Decide your visual approach: Original character art, commissioned illustration, or photo collage.', tip: 'You do not need an expensive full illustration! Clean typography can look stunning.' },
      { id: 'step6-2', text: 'Standard video resolution: 1920x1080 (16:9) or 1080x1920 for YouTube Shorts/TikTok.', tip: 'Ensure crystal-clear clarity for mobile and desktop screens.' },
      { id: 'step6-3', text: 'Thumbnail creation: High-contrast, readable title, singer name, and expressive artwork.', tip: 'Shrink your thumbnail to 100px wide to test if it is readable on mobile feeds.' },
      { id: 'step6-4', text: 'Video assembly: Add animated lyrics, subtle camera zooms, dust particles, or audio spectrum.', tip: 'Free software like CapCut, DaVinci Resolve, or AviUtl works wonders.' },
      { id: 'step6-5', text: 'Verify credits screen: Display original composer, vocal, mix, art, and video credits in video.', tip: 'A dedicated credits card at the end of the video shows professionalism.' }
    ],
    deepDive: {
      concept: 'The Power of the Thumbnail',
      whyItMatters: 'Over 80% of cover clicks depend on thumbnail composition and title clarity. A cluttered or blurry thumbnail gets overlooked.',
      beginnerTrap: 'Using uncredited fan art found on Pinterest or Google Images. Never use artists’ work without explicit written permission!',
      proAdvice: 'If commissioning an artist, contact them 3–4 weeks in advance with clear references (pose, expression, aspect ratio, transparent PNG layers).'
    }
  },
  {
    stepNumber: '07',
    title: 'Upload Your Cover',
    subtitle: 'Format your title, write full attribution, and upload your master file',
    summary: 'Presentation and metadata make your cover discoverable and respectful to the original creators.',
    checklistItems: [
      { id: 'step7-1', text: 'Title standard: Song Name - Original Producer / Covered by YourName 【歌ってみた】', tip: 'Include the iconic Japanese tag 【歌ってみた】 (Utattemita) for search discoverability.' },
      { id: 'step7-2', text: 'Full description credits: Link the original song URL, original composer, lyrics, mix, art, video.', tip: 'Always include the original YouTube or Niconico link at the very top of description.' },
      { id: 'step7-3', text: 'Upload high-bitrate video (MP4 H.264, 320kbps AAC audio).', tip: 'Avoid double-compressing your audio.' },
      { id: 'step7-4', text: 'Set appropriate tags/keywords: #歌ってみた, #utaite, song name, producer name, #cover.', tip: 'Help algorithms connect your video to listeners searching for that song.' },
      { id: 'step7-5', text: 'Set release schedule or premiere if you want to watch live with friends.', tip: 'Scheduling gives you time to review description links and thumbnail preview.' }
    ],
    deepDive: {
      concept: 'Description Etiquette & Respecting Original Creators',
      whyItMatters: 'Utaite culture has thrived for over 15 years because community singers openly celebrate and respect the composers who write the music.',
      beginnerTrap: 'Leaving the description blank or only linking your own social media.',
      proAdvice: 'Keep a saved "Credits Template" text file on your desktop so every upload is formatted consistently and effortlessly.'
    }
  },
  {
    stepNumber: '08',
    title: 'Share Your Cover',
    subtitle: 'Engage with listeners, support fellow creators, and celebrate your first release',
    summary: 'Celebrate your achievement! Making your first cover is a huge milestone. Share it kindly without spamming.',
    checklistItems: [
      { id: 'step8-1', text: 'Create short preview clips (15–30 sec chorus snippet) for Twitter/X, TikTok, and YouTube Shorts.', tip: 'Vertical short-form video is currently the fastest way for new listeners to hear your voice.' },
      { id: 'step8-2', text: 'Tag your collaborators (mixer, artist, video editor) with warm appreciation.', tip: 'Public gratitude strengthens friendships and makes people excited to work with you again.' },
      { id: 'step8-3', text: 'Share in dedicated utaite Discord communities and cover feedback groups.', tip: 'Look for self-promo channels specifically made for sharing new covers.' },
      { id: 'step8-4', text: 'Reply to comments thoughtfully and warmly.', tip: 'Genuine connection turns casual listeners into supportive lifelong fans.' },
      { id: 'step8-5', text: 'Take notes on what you learned for your NEXT cover project!', tip: 'Every single cover will improve your pitch, tone, and production speed.' }
    ],
    deepDive: {
      concept: 'Building Relationships, Not Just Numbers',
      whyItMatters: 'The utaite community is built on mutual support. The best way to get support is to genuinely listen to, comment on, and share other people\'s covers.',
      beginnerTrap: 'Spamming direct messages or pasting your link under unrelated videos.',
      proAdvice: 'Don\'t be discouraged by initial view counts. Focus on the joy of creating music. Consistency and genuine artistic passion always shine through.'
    }
  }
];
