import { GlossaryTerm } from '../types';

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'Acapella',
    japanese: 'アカペラ',
    pronunciation: 'ah-kuh-pel-luh',
    shortDefinition: 'Solo vocals recorded or isolated without any background instrumental music.',
    fullExplanation: 'In the cover community, your "acapella" or "raw vocal stem" is the clean audio recording of just your voice. You send your dry acapellas to audio mixers so they can process and blend them into the instrumental track.',
    exampleOrAnalogy: 'Imagine a singer singing alone in a quiet room with no headphones on—that isolated voice is the acapella.',
    relatedCategory: 'Recording'
  },
  {
    term: 'BPM',
    japanese: 'テンポ / BPM',
    pronunciation: 'Beats Per Minute',
    shortDefinition: 'Beats Per Minute. The numerical measurement of a song’s tempo or speed.',
    fullExplanation: 'BPM tells your DAW how fast the musical grid ticks. Setting your DAW’s tempo to match the song’s BPM ensures that time-synced delays, reverbs, and metronomes lock perfectly into rhythm with the music.',
    exampleOrAnalogy: '60 BPM feels like the ticking seconds of a clock; 120 BPM is a brisk pop song; 180+ BPM is a high-octane rock or Vocaloid sprint.',
    relatedCategory: 'Song Prep'
  },
  {
    term: 'Clipping',
    japanese: '音割れ (Oto-ware)',
    pronunciation: 'klip-ping',
    shortDefinition: 'Harsh digital distortion that occurs when an audio signal exceeds maximum allowable level (0 dBFS).',
    fullExplanation: 'In digital recording, 0 dBFS is the ceiling. If your vocal volume surpasses this limit, the tops and bottoms of the sound wave are literally chopped flat ("clipped"), creating an abrasive electric crunch that cannot be repaired after the fact.',
    exampleOrAnalogy: 'Trying to pour 12 ounces of water into an 8-ounce glass—the overflow spills over and causes a mess.',
    relatedCategory: 'Recording'
  },
  {
    term: 'Comping',
    japanese: 'テイクまとめ (Take Matome)',
    pronunciation: 'kom-ping',
    shortDefinition: 'Composite editing: assembling the finest phrases from multiple recorded takes into one flawless master take.',
    fullExplanation: 'Singers rarely deliver an entire song without a single imperfect note or breath stumble. Comping allows you to record 3–5 takes of each verse, then select the best line from Take 1, the best transition from Take 3, and crossfade them seamlessly.',
    exampleOrAnalogy: 'Taking the best group photos and photoshopping the person who blinked with their smiling version from another frame.',
    relatedCategory: 'Audio/Tech'
  },
  {
    term: 'Compression',
    japanese: 'コンプレッサー',
    pronunciation: 'kuhm-presh-uhn',
    shortDefinition: 'An audio processor that automatically narrows dynamic range, making quiet whispers louder and loud peaks softer.',
    fullExplanation: 'Without compression, a listener might struggle to hear your quiet breathy verses and get their eardrums blasted when you belt the chorus. A compressor acts like an automatic hand riding the volume fader, keeping your vocal presence smooth and consistent.',
    exampleOrAnalogy: 'An attentive sound engineer gently turning down the volume during loud screams and nudging it up during whispers.',
    relatedCategory: 'Audio/Tech'
  },
  {
    term: 'DAW',
    japanese: 'DAW (ディー・エー・ダブリュー)',
    pronunciation: 'Digital Audio Workstation',
    shortDefinition: 'Digital Audio Workstation. Software used to record, edit, arrange, mix, and produce audio.',
    fullExplanation: 'A DAW is your virtual recording studio on your computer or tablet. Examples include REAPER, BandLab, GarageBand, FL Studio, and Studio One. You import your backing track into one lane and record your microphone onto other lanes.',
    exampleOrAnalogy: 'The digital equivalent of a full multi-track tape deck, mixing board, and rack of studio effects in one window.',
    relatedCategory: 'Audio/Tech'
  },
  {
    term: 'De-Esser',
    japanese: 'ディエッサー',
    pronunciation: 'dee-es-er',
    shortDefinition: 'A specialized dynamic frequency controller that reduces harsh sibilant sounds ("S", "Sh", "T", "Ch").',
    fullExplanation: 'Certain human vocal consonants create piercing high-frequency blasts (between 5kHz and 9kHz). A de-esser automatically attenuates only those frequencies when they spike, preventing painful ear fatigue for your listeners.',
    exampleOrAnalogy: 'A pair of sunglasses designed to tint only blinding reflections while keeping the rest of the scenery bright.',
    relatedCategory: 'Audio/Tech'
  },
  {
    term: 'Delay',
    japanese: 'ディレイ',
    pronunciation: 'dih-lay',
    shortDefinition: 'An audio effect that records an incoming vocal signal and plays it back after a set period, creating timed echoes.',
    fullExplanation: 'When synced to the song’s BPM (e.g. 1/4 note or 1/8 note delays), delay gives vocals a spacious, majestic tail that floats behind the melody without muddying the vocal like excessive reverb might.',
    exampleOrAnalogy: 'Shouting into a canyon and hearing your voice bounce back in rhythmic intervals: "Echo... echo... echo..."',
    relatedCategory: 'Audio/Tech'
  },
  {
    term: 'Doubling',
    japanese: 'ダブリング',
    pronunciation: 'duhb-ling',
    shortDefinition: 'Recording a second vocal take singing the identical melody and layering it with the lead vocal.',
    fullExplanation: 'Singing the same line twice (not copy-pasting, but actually singing a second take) introduces natural, microscopic variations in timing and timbre. When panned left and right, it makes a vocal line sound massive, wide, and punchy.',
    exampleOrAnalogy: 'Two people singing in unison—it sounds significantly thicker and more immersive than a single voice.',
    relatedCategory: 'Recording'
  },
  {
    term: 'EQ (Equalization)',
    japanese: 'イコライザー (EQ)',
    pronunciation: 'ee-kyoo',
    shortDefinition: 'The process of boosting or cutting specific frequency ranges (bass, midrange, treble) within an audio signal.',
    fullExplanation: 'EQ lets you sculpt vocal tone. You use high-pass filters to cut sub-bass rumble, cut "muddy" frequencies around 400Hz, and add "air" or sparkle around 10kHz–12kHz so your voice glides above the instruments.',
    exampleOrAnalogy: 'Adjusting brightness, contrast, and color saturation on a photograph, but for sound frequencies.',
    relatedCategory: 'Audio/Tech'
  },
  {
    term: 'Gain',
    japanese: 'ゲイン / 入力レベル',
    pronunciation: 'gayn',
    shortDefinition: 'The input sensitivity or amplification level applied to your microphone signal before processing.',
    fullExplanation: 'Gain is not the same as listening volume. Gain dictates how sensitive your microphone is when capturing sound. Setting gain too high causes clipping; setting gain too low raises the noise floor when amplified later.',
    exampleOrAnalogy: 'Setting the shutter aperture on a camera: too wide and the image is overexposed and washed out; too narrow and it is dark and grainy.',
    relatedCategory: 'Recording'
  },
  {
    term: 'Harmony',
    japanese: 'ハモり (Hamori)',
    pronunciation: 'hahr-muh-nee',
    shortDefinition: 'Vocal notes sung simultaneously with the main melody that complement it according to musical chords.',
    fullExplanation: 'Harmonies are typically sung a third (3rd) or fifth (5th) interval above or below the lead melody. In Japanese covers, well-crafted hamori elevate the emotional impact of the chorus dramatically.',
    exampleOrAnalogy: 'A choir where one person sings the main tune and others sing complementary supportive tones that create rich chords.',
    relatedCategory: 'Song Prep'
  },
  {
    term: 'Inst / Instrumental',
    japanese: 'インスト / オフボーカル',
    pronunciation: 'in-struh-men-tl',
    shortDefinition: 'The musical backing track containing all drums, bass, synths, and guitars without the lead vocal.',
    fullExplanation: 'In the utaite world, "inst" and "off-vocal" are used interchangeably to refer to the official karaoke backing audio released by composers for fan covers.',
    exampleOrAnalogy: 'The whole band playing on stage while the singer takes a step back from the microphone.',
    relatedCategory: 'Song Prep'
  },
  {
    term: 'Key',
    japanese: 'キー (Key)',
    pronunciation: 'kee',
    shortDefinition: 'The primary tonal center and scale (e.g. C Major, A Minor) upon which a musical composition is built.',
    fullExplanation: 'Every song has a key that determines which notes sound harmonic. When a song is too high or too low for your comfortable vocal range, changing the key lets you sing in your optimal vocal resonance zone.',
    exampleOrAnalogy: 'The elevation of a staircase—you can raise or lower the whole staircase by several steps so you can step on it comfortably.',
    relatedCategory: 'Song Prep'
  },
  {
    term: 'Mastering',
    japanese: 'マスタリング',
    pronunciation: 'mas-ter-ing',
    shortDefinition: 'The final quality-control and loudness-optimization stage of a finished stereo audio file.',
    fullExplanation: 'Mastering is the bridge between a finished mix and commercial release. It balances overall tonal warmth, applies subtle stereo widening, and brings loudness to standard streaming levels (typically -14 LUFS for YouTube).',
    exampleOrAnalogy: 'Polishing, framing, and varnishing a completed painting before hanging it in the gallery.',
    relatedCategory: 'Audio/Tech'
  },
  {
    term: 'Mixing',
    japanese: 'MIX (ミックス)',
    pronunciation: 'mik-sing',
    shortDefinition: 'The art of balancing, blending, and processing separate vocal tracks and the instrumental into a unified song.',
    fullExplanation: 'Mixing takes raw vocal recordings and applies volume leveling, panning, EQ, compression, pitch correction, reverbs, and automation so the voice sits naturally inside the music rather than clashing awkwardly over top.',
    exampleOrAnalogy: 'Blending ingredients in baking—flour, sugar, and butter harmonizing into a delicious, seamless pastry.',
    relatedCategory: 'Audio/Tech'
  },
  {
    term: 'Nico Nico Douga',
    japanese: 'ニコニコ動画',
    pronunciation: 'nee-koh nee-koh doh-gah',
    shortDefinition: 'The iconic Japanese video-sharing website where utaite culture and the 【歌ってみた】 movement originated.',
    fullExplanation: 'Founded in 2006, Niconico is famous for its synchronized on-screen rolling comments. It was the birthplace of Vocaloid culture and virtually all legendary first-generation utaite (e.g. Mafumafu, Soraru, Gero, Nano).',
    exampleOrAnalogy: 'The historic digital town square and cradle of Japanese internet music culture.',
    relatedCategory: 'Community'
  },
  {
    term: 'Off-vocal',
    japanese: 'オフボーカル (Off-vocal)',
    pronunciation: 'awf voh-kuhl',
    shortDefinition: 'The Japanese music industry term for an instrumental or karaoke version of a song.',
    fullExplanation: 'Often categorized as "Chorus On" (contains the backing Vocaloid harmonies) or "Chorus Off" (100% voice-free). Creators download off-vocals from Piapro, YouTube description links, or single CDs to record covers.',
    exampleOrAnalogy: 'A karaoke track prepared specifically for you to take the center stage microphone.',
    relatedCategory: 'Song Prep'
  },
  {
    term: 'Piapro',
    japanese: 'ピアプロ (Piapro)',
    pronunciation: 'pee-ah-proh',
    shortDefinition: 'Crypton Future Media’s collaborative platform where Vocaloid producers share off-vocals, stems, and lyrics.',
    fullExplanation: 'When a Vocaloid producer publishes a new song, they almost always upload the official master WAV instrumental to Piapro. Users create a free account to download off-vocals and inspect creator licensing rules.',
    exampleOrAnalogy: 'The official digital library where Japanese music composers hand out backing tracks to community singers.',
    relatedCategory: 'Song Prep'
  },
  {
    term: 'Pitch Correction',
    japanese: 'ピッチ補正 (Pitch Hosei)',
    pronunciation: 'pitch kuh-rek-shuhn',
    shortDefinition: 'Software tools (like Melodyne or Auto-Tune) that nudge vocal notes onto precise musical pitches.',
    fullExplanation: 'Human voices naturally have micro-cents of drift. Pitch correction software identifies note center and gently pulls it into harmonic lock with the song’s scale, making chords and multi-layered harmonies sound lush and sweet.',
    exampleOrAnalogy: 'Spelling and grammar check for singing—it catches tiny slips while preserving your unique voice and expression.',
    relatedCategory: 'Audio/Tech'
  },
  {
    term: 'Plugin',
    japanese: 'プラグイン (Plugin / VST)',
    pronunciation: 'pluhg-in',
    shortDefinition: 'A software add-on installed into your DAW to provide specific effects (reverb, EQ, compression) or virtual instruments.',
    fullExplanation: 'Plugins adhere to standard formats like VST3, AU, or AAX. When you want a vintage plate reverb, you open a reverb plugin in your DAW track insert slot.',
    exampleOrAnalogy: 'Apps installed on your smartphone to give it new superpowers beyond the basic phone dialer.',
    relatedCategory: 'Audio/Tech'
  },
  {
    term: 'Reverb',
    japanese: 'リバーブ (残響)',
    pronunciation: 'ree-vurb',
    shortDefinition: 'The persistence of sound after it is produced, creating the acoustic sensation of singing in an expansive room.',
    fullExplanation: 'Without reverb, close-mic recordings can sound dry, claustrophobic, and unnatural. Reverb simulates natural reflections from walls and ceilings, transporting the singer into a studio room, concert hall, or cathedral.',
    exampleOrAnalogy: 'Singing in a tiled bathroom or cathedral versus singing with your head buried inside a heavy blanket.',
    relatedCategory: 'Audio/Tech'
  },
  {
    term: 'Stem',
    japanese: 'パラデータ / ステム (Stem)',
    pronunciation: 'stem',
    shortDefinition: 'Individual isolated audio tracks exported with synchronized start points (starting from 0:00).',
    fullExplanation: 'When preparing vocals for an audio mixer, you export each separate vocal take (Main, Harmonies, Ad-libs) as a WAV file starting at the exact same timestamp (0:00). This ensures everything lines up automatically on the mixer’s timeline.',
    exampleOrAnalogy: 'A set of puzzle pieces where all edges line up automatically because they are cut from the same frame.',
    relatedCategory: 'Audio/Tech'
  },
  {
    term: 'Transpose',
    japanese: '移調 / キー変更',
    pronunciation: 'trans-pohz',
    shortDefinition: 'To shift the musical pitch of a composition up or down by a specific number of semitones.',
    fullExplanation: 'If a song’s highest note is an F5 and your maximum comfortable note is D5, transposing the instrumental down by 3 semitones shifts the climax note down into your sweet spot without altering the song’s tempo.',
    exampleOrAnalogy: 'Shifting gears in a bicycle so you can pedal smoothly up a steep hill.',
    relatedCategory: 'Song Prep'
  },
  {
    term: 'Utattemita',
    japanese: '【歌ってみた】',
    pronunciation: 'oo-taht-tay-mee-tah',
    shortDefinition: 'Literally "I tried singing [it]". The quintessential Japanese tag and title format for online vocal covers.',
    fullExplanation: 'Coined in the early days of Nico Nico Douga, this humble phrase reflects the collaborative, exploratory spirit of the community. Today, it remains the standard search tag across YouTube and Japanese streaming for cover songs.',
    exampleOrAnalogy: 'The universal badge of honor indicating: "Here is my personal vocal interpretation of this beloved song."',
    relatedCategory: 'Community'
  },
  {
    term: 'Vocal Editing',
    japanese: 'ボーカルエディット',
    pronunciation: 'voh-kuhl ed-it-ing',
    shortDefinition: 'The preparation phase before mixing: comping best takes, aligning timing, muting noises, and smoothing breaths.',
    fullExplanation: 'A clean vocal edit removes mouth clicks, breath gasps that are too loud, aligns delayed syllables to the kick drum or snare, and ensures all tracks are spotless before EQ and compression are touched.',
    exampleOrAnalogy: 'Sanding and prepping wood before applying primer and paint.',
    relatedCategory: 'Audio/Tech'
  }
];
