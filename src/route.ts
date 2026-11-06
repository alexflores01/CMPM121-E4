export type Kind = "drone" | "dart" | "turret" | "lancer";
export type Formation = "line" | "vee" | "column" | "pincer";

export interface Wave {
  kind: Kind;
  formation: Formation;
  count: number;
  at: number; //tick within the sector
  x?: number; //vee: center x, column: fixed x (line/pincer ignore it)
}

export interface Sector {
  name: string;
  subtitle: string;
  length: number; //ticks
  waves: Wave[];
}

/** stats shared by every enemy of a kind */
export const KINDS = {
  drone: { hp: 2, score: 100, radius: 13, drop: 0.015, shoots: true },
  dart: { hp: 1, score: 150, radius: 12, drop: 0.015, shoots: false },
  turret: { hp: 12, score: 400, radius: 19, drop: 0.3, shoots: true },
  lancer: { hp: 4, score: 250, radius: 15, drop: 0.06, shoots: true },
};

export const SECTORS: Sector[] = [
  {
    name: "Outer Drift",
    subtitle: "Scouts ahead",
    length: 1560,
    waves: [
      { kind: "drone", formation: "line", count: 4, at: 60 },
      { kind: "drone", formation: "vee", count: 5, at: 360, x: 168 },
      { kind: "drone", formation: "vee", count: 5, at: 660, x: 312 },
      { kind: "drone", formation: "line", count: 6, at: 960 },
      { kind: "drone", formation: "column", count: 4, at: 1200, x: 120 },
      { kind: "drone", formation: "column", count: 4, at: 1260, x: 360 },
    ],
  },
  {
    name: "Shatter Belt",
    subtitle: "Divers incoming",
    length: 1800,
    waves: [
      { kind: "drone", formation: "vee", count: 6, at: 60, x: 240 },
      { kind: "dart", formation: "line", count: 4, at: 300 },
      { kind: "dart", formation: "column", count: 5, at: 600, x: 144 },
      { kind: "dart", formation: "column", count: 5, at: 720, x: 336 },
      { kind: "drone", formation: "line", count: 7, at: 1020 },
      { kind: "dart", formation: "vee", count: 5, at: 1140, x: 240 },
      { kind: "dart", formation: "line", count: 6, at: 1440 },
    ],
  },
  {
    name: "Gun Lanes",
    subtitle: "Turrets online",
    length: 1920,
    waves: [
      { kind: "turret", formation: "line", count: 1, at: 60 },
      { kind: "drone", formation: "vee", count: 6, at: 240, x: 240 },
      { kind: "turret", formation: "line", count: 2, at: 540 },
      { kind: "dart", formation: "column", count: 6, at: 840, x: 240 },
      { kind: "turret", formation: "line", count: 2, at: 1080 },
      { kind: "drone", formation: "line", count: 6, at: 1140 },
      { kind: "turret", formation: "line", count: 3, at: 1500 },
    ],
  },
  {
    name: "Lancer Gate",
    subtitle: "Crossfire",
    length: 1920,
    waves: [
      { kind: "lancer", formation: "pincer", count: 4, at: 60 },
      { kind: "dart", formation: "vee", count: 6, at: 360, x: 240 },
      { kind: "lancer", formation: "pincer", count: 6, at: 600 },
      { kind: "turret", formation: "line", count: 2, at: 780 },
      { kind: "lancer", formation: "pincer", count: 6, at: 1140 },
      { kind: "drone", formation: "vee", count: 8, at: 1260, x: 240 },
      { kind: "dart", formation: "line", count: 8, at: 1560 },
    ],
  },
  {
    name: "Last Approach",
    subtitle: "Everything they have",
    length: 2040,
    waves: [
      { kind: "turret", formation: "line", count: 3, at: 60 },
      { kind: "lancer", formation: "pincer", count: 6, at: 180 },
      { kind: "dart", formation: "column", count: 6, at: 540, x: 120 },
      { kind: "dart", formation: "column", count: 6, at: 540, x: 360 },
      { kind: "drone", formation: "vee", count: 9, at: 900, x: 240 },
      { kind: "turret", formation: "line", count: 2, at: 1020 },
      { kind: "lancer", formation: "pincer", count: 8, at: 1320 },
      { kind: "dart", formation: "vee", count: 8, at: 1560, x: 240 },
    ],
  },
];

export const ROUTE_NAMES = [...SECTORS.map((s) => s.name), "The warden"];
