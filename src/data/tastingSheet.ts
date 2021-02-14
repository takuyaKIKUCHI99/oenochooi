export type WineType = 'red' | 'white';
export type CategoryTitles = '外観' | '香り' | '味わい' | '総合評価';

type Item = {
  label: string;
  value: boolean;
};

export type Items = {
  [key: number]: Item;
};

export type SubCategoryItems = {
  [key: string]: Items;
};

type SubCategoryTitles = {
  外観: string[];
  香り: string[];
  味わい: string[];
  総合評価: string[];
};

export const SUB_CATEGORY_TITLES: SubCategoryTitles = {
  外観: ['清澄度', '輝き', '色調', '濃淡', '粘性', '外観の印象'],
  香り: ['第一印象', '果実', '花_植物', '芳香_香辛料_化学物質', '香りの印象'],
  味わい: [
    'アタック',
    '甘み',
    '酸味',
    'タンニン分',
    'バランス',
    'アルコール',
    '余韻',
  ],
  総合評価: [
    '評価',
    '適正温度',
    'グラス',
    'デカンタージュ',
    '収穫年',
    '生産国',
    '主なブドウ品種',
  ],
};
