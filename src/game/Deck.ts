export enum Month {
  JANUARY,
  FEBRUARY,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPTEMBER,
  OCTOBER,
  NOVEMBER,
  DECEMBER
}
export enum CardType {
  KASU,
  TANZAKU,
  TANE,
  HIKARI
}
export enum TanzakuVariant {
  PLAIN,
  BLUE,
  POETRY
}
export enum TaneVariant {
  BUSH_WRARBLER,
  CUCKOO,
  EIGHT_PLANK_BRIDGE,
  BUTTERFLIES,
  BOAR,
  GEESE,
  SAKE_CUP,
  DEER,
  SWALLOW
}
export enum HikariVariant {
  CRANE_SUN,
  CURTAIN,
  FULL_MOON,
  ONO_NO_MICHIKAZE,
  CHINESE_PHOENIX
}

export type BaseCard<Type, Variant> = {
  id: number;
  month: Month;
  fileName: string;
  type: Type;
  variant: Variant;
};
export type KasuCard = BaseCard<CardType.KASU, null>;
export type TanzakuCard = BaseCard<CardType.TANZAKU, TanzakuVariant>;
export type TaneCard = BaseCard<CardType.TANE, TaneVariant>;
export type HikariCard = BaseCard<CardType.HIKARI, HikariVariant>;
export type Card = KasuCard | TanzakuCard | TaneCard | HikariCard;

export function createDeck() {
  return CARDS.map(function (card) {
    return { ...card };
  });
}

export const CARDS: Card[] = [
  {
    id: 1,
    month: Month.JANUARY,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_January_Kasu_1_Alt.svg'
  },
  {
    id: 2,
    month: Month.JANUARY,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_January_Kasu_2_Alt.svg'
  },
  {
    id: 3,
    month: Month.JANUARY,
    type: CardType.TANZAKU,
    variant: TanzakuVariant.POETRY,
    fileName: 'Hanafuda_January_Tanzaku_Alt.svg'
  },
  {
    id: 4,
    month: Month.JANUARY,
    type: CardType.HIKARI,
    variant: HikariVariant.CRANE_SUN,
    fileName: 'Hanafuda_January_Hikari_Alt.svg'
  },

  {
    id: 5,
    month: Month.FEBRUARY,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_February_Kasu_1_Alt.svg'
  },
  {
    id: 6,
    month: Month.FEBRUARY,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_February_Kasu_2_Alt.svg'
  },
  {
    id: 7,
    month: Month.FEBRUARY,
    type: CardType.TANZAKU,
    variant: TanzakuVariant.POETRY,
    fileName: 'Hanafuda_February_Tanzaku_Alt.svg'
  },
  {
    id: 8,
    month: Month.FEBRUARY,
    type: CardType.TANE,
    variant: TaneVariant.BUSH_WRARBLER,
    fileName: 'Hanafuda_February_Tane_Alt.svg'
  },

  {
    id: 9,
    month: Month.MARCH,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_March_Kasu_1_Alt.svg'
  },
  {
    id: 10,
    month: Month.MARCH,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_March_Kasu_2_Alt.svg'
  },
  {
    id: 11,
    month: Month.MARCH,
    type: CardType.TANZAKU,
    variant: TanzakuVariant.POETRY,
    fileName: 'Hanafuda_March_Tanzaku_Alt.svg'
  },
  {
    id: 12,
    month: Month.MARCH,
    type: CardType.HIKARI,
    variant: HikariVariant.CURTAIN,
    fileName: 'Hanafuda_March_Hikari_Alt.svg'
  },

  {
    id: 13,
    month: Month.APRIL,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_April_Kasu_1_Alt.svg'
  },
  {
    id: 14,
    month: Month.APRIL,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_April_Kasu_2_Alt.svg'
  },
  {
    id: 15,
    month: Month.APRIL,
    type: CardType.TANZAKU,
    variant: TanzakuVariant.PLAIN,
    fileName: 'Hanafuda_April_Tanzaku_Alt.svg'
  },
  {
    id: 16,
    month: Month.APRIL,
    type: CardType.TANE,
    variant: TaneVariant.CUCKOO,
    fileName: 'Hanafuda_April_Tane_Alt.svg'
  },

  {
    id: 17,
    month: Month.MAY,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_May_Kasu_1_Alt.svg'
  },
  {
    id: 18,
    month: Month.MAY,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_May_Kasu_2_Alt.svg'
  },
  {
    id: 19,
    month: Month.MAY,
    type: CardType.TANZAKU,
    variant: TanzakuVariant.PLAIN,
    fileName: 'Hanafuda_May_Tanzaku_Alt.svg'
  },
  {
    id: 20,
    month: Month.MAY,
    type: CardType.TANE,
    variant: TaneVariant.EIGHT_PLANK_BRIDGE,
    fileName: 'Hanafuda_May_Tane_Alt.svg'
  },

  {
    id: 21,
    month: Month.JUNE,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_June_Kasu_1_Alt.svg'
  },
  {
    id: 22,
    month: Month.JUNE,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_June_Kasu_2_Alt.svg'
  },
  {
    id: 23,
    month: Month.JUNE,
    type: CardType.TANZAKU,
    variant: TanzakuVariant.BLUE,
    fileName: 'Hanafuda_June_Tanzaku_Alt.svg'
  },
  {
    id: 24,
    month: Month.JUNE,
    type: CardType.TANE,
    variant: TaneVariant.BUTTERFLIES,
    fileName: 'Hanafuda_June_Tane_Alt.svg'
  },

  {
    id: 25,
    month: Month.JULY,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_July_Kasu_1_Alt.svg'
  },
  {
    id: 26,
    month: Month.JULY,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_July_Kasu_2_Alt.svg'
  },
  {
    id: 27,
    month: Month.JULY,
    type: CardType.TANZAKU,
    variant: TanzakuVariant.PLAIN,
    fileName: 'Hanafuda_July_Tanzaku_Alt.svg'
  },
  {
    id: 28,
    month: Month.JULY,
    type: CardType.TANE,
    variant: TaneVariant.BOAR,
    fileName: 'Hanafuda_July_Tane_Alt.svg'
  },

  {
    id: 29,
    month: Month.AUGUST,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_August_Kasu_1_Alt.svg'
  },
  {
    id: 30,
    month: Month.AUGUST,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_August_Kasu_2_Alt.svg'
  },
  {
    id: 31,
    month: Month.AUGUST,
    type: CardType.TANE,
    variant: TaneVariant.GEESE,
    fileName: 'Hanafuda_August_Tane_Alt.svg'
  },
  {
    id: 32,
    month: Month.AUGUST,
    type: CardType.HIKARI,
    variant: HikariVariant.FULL_MOON,
    fileName: 'Hanafuda_August_Hikari_Alt.svg'
  },

  {
    id: 33,
    month: Month.SEPTEMBER,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_September_Kasu_1_Alt.svg'
  },
  {
    id: 34,
    month: Month.SEPTEMBER,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_September_Kasu_2_Alt.svg'
  },
  {
    id: 35,
    month: Month.SEPTEMBER,
    type: CardType.TANZAKU,
    variant: TanzakuVariant.BLUE,
    fileName: 'Hanafuda_September_Tanzaku_Alt.svg'
  },
  {
    id: 36,
    month: Month.SEPTEMBER,
    type: CardType.TANE,
    variant: TaneVariant.SAKE_CUP,
    fileName: 'Hanafuda_September_Tane_Alt.svg'
  },

  {
    id: 37,
    month: Month.OCTOBER,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_October_Kasu_1_Alt.svg'
  },
  {
    id: 38,
    month: Month.OCTOBER,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_October_Kasu_2_Alt.svg'
  },
  {
    id: 39,
    month: Month.OCTOBER,
    type: CardType.TANZAKU,
    variant: TanzakuVariant.BLUE,
    fileName: 'Hanafuda_October_Tanzaku_Alt.svg'
  },
  {
    id: 40,
    month: Month.OCTOBER,
    type: CardType.TANE,
    variant: TaneVariant.DEER,
    fileName: 'Hanafuda_October_Tane_Alt.svg'
  },

  {
    id: 41,
    month: Month.NOVEMBER,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_November_Kasu_Alt.svg'
  },
  {
    id: 42,
    month: Month.NOVEMBER,
    type: CardType.TANZAKU,
    variant: TanzakuVariant.PLAIN,
    fileName: 'Hanafuda_November_Tanzaku_Alt.svg'
  },
  {
    id: 43,
    month: Month.NOVEMBER,
    type: CardType.TANE,
    variant: TaneVariant.SWALLOW,
    fileName: 'Hanafuda_November_Tane_Alt.svg'
  },
  {
    id: 44,
    month: Month.NOVEMBER,
    type: CardType.HIKARI,
    variant: HikariVariant.ONO_NO_MICHIKAZE,
    fileName: 'Hanafuda_November_Hikari_Alt.svg'
  },

  {
    id: 45,
    month: Month.DECEMBER,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_December_Kasu_Alt.svg'
  },
  {
    id: 46,
    month: Month.DECEMBER,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_December_Kasu_1_Alt.svg'
  },
  {
    id: 47,
    month: Month.DECEMBER,
    type: CardType.KASU,
    variant: null,
    fileName: 'Hanafuda_December_Kasu_2_Alt.svg'
  },
  {
    id: 48,
    month: Month.DECEMBER,
    type: CardType.HIKARI,
    variant: HikariVariant.CHINESE_PHOENIX,
    fileName: 'Hanafuda_December_Hikari_Alt.svg'
  }
];
