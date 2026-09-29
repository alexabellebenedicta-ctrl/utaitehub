export type PageId = 
  | 'home' 
  | 'utaite-101' 
  | 'start-here' 
  | 'guides' 
  | 'daw-guide'
  | 'collaboration' 
  | 'resources' 
  | 'glossary' 
  | 'faq';

export type GuideCategory = 
  | 'Song Preparation'
  | 'Recording'
  | 'Audio & Mixing'
  | 'Visuals'
  | 'Collaboration';

export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Guide {
  id: string;
  category: GuideCategory;
  title: string;
  shortDescription: string;
  difficulty: DifficultyLevel;
  readTime: string;
  iconName: string;
  keyTakeaways: string[];
  content: {
    heading: string;
    body: string;
    tips?: string[];
    checklist?: string[];
  }[];
}

export type ResourceCategory = 'Recording' | 'Audio' | 'Visual' | 'Music' | 'Learning';

export interface ResourceItem {
  id: string;
  name: string;
  category: ResourceCategory;
  description: string;
  priceType: 'Free' | 'Paid' | 'Freemium';
  platform: string; // e.g. 'Windows / Mac', 'Browser', 'iOS / Android', 'Web'
  beginnerRating: 1 | 2 | 3 | 4 | 5; // 5 is easiest
  urlLabel: string;
  urlPlaceholder: string;
  recommendedFor: string;
  bestFor?: string;
  priceTier?: string;
  beginnerTip?: string;
}

export interface GlossaryTerm {
  term: string;
  japanese?: string;
  pronunciation?: string;
  shortDefinition: string;
  fullExplanation: string;
  exampleOrAnalogy?: string;
  relatedCategory: 'Song Prep' | 'Audio/Tech' | 'Community' | 'Recording';
}

export interface FaqItem {
  id: string;
  category: 'Getting Started' | 'Recording' | 'Mixing' | 'Collaboration' | 'Uploading';
  question: string;
  answer: string;
  extraTip?: string;
}

export interface RoadmapStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  summary: string;
  checklistItems: {
    id: string;
    text: string;
    tip?: string;
  }[];
  deepDive: {
    concept: string;
    whyItMatters: string;
    beginnerTrap: string;
    proAdvice: string;
  };
}

export interface DawComparison {
  name: string;
  tagline: string;
  bestSuitedFor: string;
  price: 'Free' | 'Paid' | 'Free Tier / Low-Cost';
  platforms: string[];
  level: 'Absolute Beginner' | 'Beginner' | 'Beginner to Advanced' | 'Intermediate to Pro';
  strengths: string[];
  considerations: string[];
  vocalRecordingScore: string;
}
