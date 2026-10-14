import type { Lang } from './site';

// ─────────────────────────────────────────────────────────────
//  Upcoming fairs & markets. Add a new entry and rebuild.
//  Past events are hidden automatically (at build time and in the browser).
//  Dates: 'YYYY-MM-DD'. `end` is optional for multi-day fairs.
// ─────────────────────────────────────────────────────────────
export interface FairEvent {
  name: string;
  start: string;
  end?: string;
  hours?: string;          // e.g. '10:00–19:00'
  venue: string;
  city: string;
  note?: Record<Lang, string>;
  link?: string;           // event page, if any
}

// Placeholder events — replace with her real calendar.
export const events: FairEvent[] = [
  {
    name: 'Feira de Artesanato do Estoril',
    start: '2026-10-24', end: '2026-10-25', hours: '15:00–23:00',
    venue: 'Jardim do Casino', city: 'Estoril',
    note: { pt: 'Banca nº 14, junto à entrada principal.', en: 'Stall no. 14, next to the main entrance.' },
  },
  {
    name: 'Mercado de Natal Campo de Ourique',
    start: '2026-11-28', end: '2026-11-29', hours: '10:00–19:00',
    venue: 'Mercado de Campo de Ourique', city: 'Lisboa',
    note: { pt: 'Peças de Natal em edição limitada.', en: 'Limited-edition Christmas pieces.' },
  },
  {
    name: 'LxMarket — Edição de Inverno',
    start: '2026-12-13', hours: '10:00–20:00',
    venue: 'LX Factory', city: 'Lisboa',
  },
];

export const mapsUrl = (e: FairEvent) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${e.venue}, ${e.city}`)}`;
