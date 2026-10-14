import type { Lang } from './site';

type T = Record<Lang, string>;

export type Category = 'wine' | 'spirits' | 'painted' | 'custom';
export type Status = 'available' | 'order' | 'sold';
export type Decor = 'cord' | 'tiles' | 'engrave' | 'flowers' | 'rooftops' | 'wire';
export type Shape = 'wine' | 'round' | 'square' | 'flask' | 'tall';

export interface Product {
  slug: string;
  name: T;
  short: T;
  story: T;
  category: Category;
  status: Status;
  price: number;          // euros; 0 = "on request"
  height: number;         // cm
  materials: T;
  // Placeholder artwork. When real photos exist, add `photos: ['/img/...jpg']`
  // and the pages will use them instead of the illustration.
  art: { shape: Shape; glass: string; light: string; accent?: string; decor?: Decor };
  photos?: string[];
}

export const categories: { id: Category | 'all'; label: T }[] = [
  { id: 'all', label: { pt: 'Todas', en: 'All' } },
  { id: 'wine', label: { pt: 'Garrafas de vinho', en: 'Wine bottles' } },
  { id: 'spirits', label: { pt: 'Gin & licores', en: 'Gin & spirits' } },
  { id: 'painted', label: { pt: 'Pintadas à mão', en: 'Hand-painted' } },
  { id: 'custom', label: { pt: 'Personalizadas', en: 'Personalised' } },
];

export const statusLabel: Record<Status, T> = {
  available: { pt: 'Disponível', en: 'Available' },
  order: { pt: 'Por encomenda', en: 'Made to order' },
  sold: { pt: 'Vendida', en: 'Sold' },
};

export const products: Product[] = [
  {
    slug: 'douro-ambar',
    name: { pt: 'Douro Âmbar', en: 'Douro Amber' },
    short: { pt: 'Garrafa de tinto com luz quente e rolha de cortiça natural.', en: 'Red-wine bottle with warm light and a natural cork stopper.' },
    story: {
      pt: 'Uma garrafa de vinho do Douro, lixada à mão para um acabamento acetinado. Luzes LED de tom âmbar e rolha em cortiça portuguesa. Ideal para uma mesa de jantar ou estante.',
      en: 'A Douro wine bottle, hand-sanded to a satin finish. Amber-toned LED lights and a Portuguese cork stopper. Made for a dinner table or a bookshelf.',
    },
    category: 'wine', status: 'available', price: 35, height: 30,
    materials: { pt: 'Vidro reciclado, cortiça, LED a pilhas', en: 'Recycled glass, cork, battery LED' },
    art: { shape: 'wine', glass: '#5a3a1a', light: '#ffc469' },
  },
  {
    slug: 'atlantico',
    name: { pt: 'Atlântico', en: 'Atlantic' },
    short: { pt: 'Garrafa de gin azul com cordão de juta e luz fria.', en: 'Blue gin bottle with jute cord and cool light.' },
    story: {
      pt: 'Inspirada no mar de Cascais: vidro azul profundo, cordão de juta enrolado à mão no gargalo e luz branca suave como o fim de tarde na praia.',
      en: 'Inspired by the sea at Cascais: deep blue glass, hand-wound jute cord at the neck and a soft white light like late afternoon on the beach.',
    },
    category: 'spirits', status: 'available', price: 42, height: 26,
    materials: { pt: 'Vidro reciclado, juta, LED USB', en: 'Recycled glass, jute, USB LED' },
    art: { shape: 'round', glass: '#1d4e7a', light: '#d8f0ff', accent: '#c8a46a', decor: 'cord' },
  },
  {
    slug: 'azulejo',
    name: { pt: 'Azulejo', en: 'Azulejo' },
    short: { pt: 'Pintada à mão com padrão de azulejo lisboeta.', en: 'Hand-painted with a Lisbon tile pattern.' },
    story: {
      pt: 'Cada padrão é desenhado à mão com tinta para vidro e cozido no forno, por isso não há duas iguais. Uma homenagem às fachadas de Lisboa.',
      en: 'Each pattern is drawn by hand with glass paint and oven-cured, so no two are alike. A tribute to the façades of Lisbon.',
    },
    category: 'painted', status: 'order', price: 55, height: 28,
    materials: { pt: 'Vidro, tinta cerâmica, LED a pilhas', en: 'Glass, ceramic paint, battery LED' },
    art: { shape: 'square', glass: '#e8eef5', light: '#fff1c2', accent: '#2457a6', decor: 'tiles' },
  },
  {
    slug: 'verde-minho',
    name: { pt: 'Verde Minho', en: 'Minho Green' },
    short: { pt: 'Garrafa de vinho verde com luzes cintilantes.', en: 'Vinho verde bottle with twinkling lights.' },
    story: {
      pt: 'O verde clássico das garrafas do Minho ganha vida com luzes cintilantes. Um presente perfeito para quem gosta de vinho e de detalhes.',
      en: 'The classic green of Minho bottles brought to life with twinkling lights. A perfect gift for anyone who loves wine and small details.',
    },
    category: 'wine', status: 'available', price: 32, height: 31,
    materials: { pt: 'Vidro reciclado, cortiça, LED a pilhas', en: 'Recycled glass, cork, battery LED' },
    art: { shape: 'tall', glass: '#2f5a2a', light: '#ffe08a' },
  },
  {
    slug: 'para-sempre',
    name: { pt: 'Para Sempre', en: 'Forever' },
    short: { pt: 'Personalizada com nomes e data — para casamentos e aniversários.', en: 'Personalised with names and a date — for weddings and anniversaries.' },
    story: {
      pt: 'Gravada com os nomes e a data que escolher. Muitos casais usam a garrafa do vinho do próprio casamento — envie-me a sua e eu transformo-a.',
      en: 'Engraved with the names and date of your choice. Many couples use the bottle from their own wedding — send me yours and I will transform it.',
    },
    category: 'custom', status: 'order', price: 0, height: 30,
    materials: { pt: 'A sua garrafa ou uma minha, gravação, LED', en: 'Your bottle or one of mine, engraving, LED' },
    art: { shape: 'wine', glass: '#f3ece0', light: '#ffd28a', accent: '#b0894f', decor: 'engrave' },
  },
  {
    slug: 'rosa-tejo',
    name: { pt: 'Rosa Tejo', en: 'Tagus Rose' },
    short: { pt: 'Frasco rosado com flores secas e luz suave.', en: 'Blush flask with dried flowers and a soft glow.' },
    story: {
      pt: 'Um frasco de licor com flores secas colhidas à mão no interior, iluminadas por uma luz rosada. Delicado, romântico, único.',
      en: 'A liqueur flask with hand-picked dried flowers inside, lit by a rosy light. Delicate, romantic, one of a kind.',
    },
    category: 'spirits', status: 'sold', price: 38, height: 22,
    materials: { pt: 'Vidro, flores secas, LED a pilhas', en: 'Glass, dried flowers, battery LED' },
    art: { shape: 'flask', glass: '#c98a8f', light: '#ffd6dc', accent: '#7a9a5a', decor: 'flowers' },
  },
  {
    slug: 'noite-alfama',
    name: { pt: 'Noite em Alfama', en: 'Alfama Night' },
    short: { pt: 'Garrafa escura pintada com casario e estrelas.', en: 'Dark bottle painted with rooftops and stars.' },
    story: {
      pt: 'Os telhados de Alfama pintados à mão sobre vidro escuro. Quando acende, as janelas e as estrelas brilham.',
      en: 'The rooftops of Alfama hand-painted over dark glass. When it lights up, the windows and stars glow.',
    },
    category: 'painted', status: 'available', price: 58, height: 32,
    materials: { pt: 'Vidro reciclado, tinta para vidro, LED USB', en: 'Recycled glass, glass paint, USB LED' },
    art: { shape: 'tall', glass: '#1c1c2e', light: '#ffcf7a', accent: '#e9b45a', decor: 'rooftops' },
  },
  {
    slug: 'whisky-cobre',
    name: { pt: 'Cobre', en: 'Copper' },
    short: { pt: 'Garrafa quadrada de whisky com fio de cobre.', en: 'Square whisky bottle with copper wire lights.' },
    story: {
      pt: 'Uma garrafa robusta de whisky com fio de cobre e microluzes. Fica bem num escritório, num bar ou numa sala com madeira.',
      en: 'A sturdy whisky bottle with copper wire micro-lights. Looks great in a study, a bar or a wood-toned living room.',
    },
    category: 'spirits', status: 'available', price: 45, height: 25,
    materials: { pt: 'Vidro reciclado, cobre, LED USB', en: 'Recycled glass, copper, USB LED' },
    art: { shape: 'square', glass: '#8a5a2b', light: '#ffb85c', accent: '#c47a3c', decor: 'wire' },
  },
];

export const productUrl = (lang: Lang, slug: string) =>
  lang === 'pt' ? `/pecas/${slug}/` : `/en/pieces/${slug}/`;

export const formatPrice = (lang: Lang, price: number) =>
  price === 0
    ? (lang === 'pt' ? 'Sob consulta' : 'On request')
    : new Intl.NumberFormat(lang === 'pt' ? 'pt-PT' : 'en-GB', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(price);
