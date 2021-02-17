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
  [key: string]: Items | string;
};

export type SubCategoryTitles = {
  外観: string[];
  香り: string[];
  味わい: string[];
  総合評価: string[];
};

export const INPUT_SUB_CATEGORIES = ['収穫年', '生産国', '主なブドウ品種'];
