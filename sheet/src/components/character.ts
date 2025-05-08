export interface Character {
  general: General;
  physical: Physical;
  social: Social;
  mental: Mental;
  talent: Talent;
  skill: Skill;
  knowledge: Knowledge;
  virtue: Virtue;
  other: Other;
  id: string;
}

export interface CharacterProperty {
  value: number;
  specialization?: string;
}

export interface General {
  characterName: string;
  playerName: string;
  chronicleName: string;
  nature: string;
  demeanor: string;
  concept: string;
  clan: string;
  generation: number;
  sire: string;
}

export interface Physical {
  strength: CharacterProperty;
  dexterity: CharacterProperty;
  stamina: CharacterProperty;
}

export interface Social {
  charisma: CharacterProperty;
  manipulation: CharacterProperty;
  appearance: CharacterProperty;
}

export interface Mental {
  perception: CharacterProperty;
  intelligence: CharacterProperty;
  wits: CharacterProperty;
}

export interface Talent {
  alertness: CharacterProperty;
  athletics: CharacterProperty;
  awareness: CharacterProperty;
  brawl: CharacterProperty;
  empathy: CharacterProperty;
  expression: CharacterProperty;
  intimidation: CharacterProperty;
  leadership: CharacterProperty;
  legerdemain: CharacterProperty;
  subterfuge: CharacterProperty;
}

export interface Skill {
  animalKen: CharacterProperty;
  archery: CharacterProperty;
  commerce: CharacterProperty;
  brawl: CharacterProperty;
  etiquette: CharacterProperty;
  melee: CharacterProperty;
  performance: CharacterProperty;
  ride: CharacterProperty;
  stealth: CharacterProperty;
  survival: CharacterProperty;
}

export interface Knowledge {
  academics: CharacterProperty;
  enigmas: CharacterProperty;
  hearthWisdom: CharacterProperty;
  investigation: CharacterProperty;
  law: CharacterProperty;
  occult: CharacterProperty;
  medicine: CharacterProperty;
  politics: CharacterProperty;
  seneschal: CharacterProperty;
  theology: CharacterProperty;
}

export interface Virtue {
  continence: number;
  disposition: number;
  courage: number;
}

export interface Other {
  roadName: string;
  roadRating: number;
  roadAura: string;
  willpower: number;
  bloodPool: number;
}

export const characterSectionKeys = {
  general: [
    "characterName",
    "playerName",
    "chronicleName",
    "nature",
    "demeanor",
    "concept",
    "clan",
    "generation",
    "sire",
  ],
  physical: ["strength", "dexterity", "stamina"],
  social: ["charisma", "manipulation", "appearance"],
  mental: ["perception", "intelligence", "wits"],
  talent: [
    "alertness",
    "athletics",
    "awareness",
    "brawl",
    "empathy",
    "expression",
    "intimidation",
    "leadership",
    "legerdemain",
    "subterfuge",
  ],
  skill: [
    "animalKen",
    "archery",
    "commerce",
    "brawl",
    "etiquette",
    "melee",
    "performance",
    "ride",
    "stealth",
    "survival",
  ],
  knowledge: [
    "academics",
    "enigmas",
    "hearthWisdom",
    "investigation",
    "law",
    "occult",
    "medicine",
    "politics",
    "seneschal",
    "theology",
  ],
  virtue: ["continence", "disposition", "courage"],
  other: ["roadName", "roadRating", "roadAura", "willpower", "bloodPool"],
} as const;

export type CharacterSection = keyof typeof characterSectionKeys;
export type CharacterKey<S extends CharacterSection> =
  typeof characterSectionKeys[S][number];