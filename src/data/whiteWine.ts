import { SubCategoryItems, SubCategoryTitles } from 'data/tastingSheet';

/**
 * テイスティング解答用紙・用語選択用紙・白ワイン用 2021年版
 * https://www.wine-jyuken.com/media/second_exam/comment-sheet-w.pdf
 */
export const WHITE_APPEARANCE_DEFAULT: SubCategoryItems = {
  清澄度: {
    1: {
      label: '澄んだ',
      value: false,
    },
    2: {
      label: 'やや濁った',
      value: false,
    },
    3: {
      label: '濁った',
      value: false,
    },
  },
  輝き: {
    1: {
      label: '輝きのある',
      value: false,
    },
    2: {
      label: '落ち着いた',
      value: false,
    },
    3: {
      label: 'モヤがかかった',
      value: false,
    },
  },
  色調: {
    1: {
      label: 'グリーンがかった',
      value: false,
    },
    2: {
      label: '黄金色がかった',
      value: false,
    },
    3: {
      label: 'レモンイエロー',
      value: false,
    },
    4: {
      label: 'イエロー',
      value: false,
    },
    5: {
      label: '黄金色',
      value: false,
    },
    6: {
      label: 'トパーズ',
      value: false,
    },
    7: {
      label: 'オレンジ',
      value: false,
    },
    8: {
      label: 'アンバー',
      value: false,
    },
  },
  濃淡: {
    1: {
      label: '無色に近い',
      value: false,
    },
    2: {
      label: '淡い',
      value: false,
    },
    3: {
      label: 'やや濃い',
      value: false,
    },
    4: {
      label: '濃い',
      value: false,
    },
    5: {
      label: '非常に濃い',
      value: false,
    },
  },
  粘性: {
    1: {
      label: 'さらっとした',
      value: false,
    },
    2: {
      label: 'やや軽い',
      value: false,
    },
    3: {
      label: 'やや強い',
      value: false,
    },
    4: {
      label: '強い',
      value: false,
    },
  },
  外観の印象: {
    1: {
      label: '若々しい',
      value: false,
    },
    2: {
      label: 'やや発展した',
      value: false,
    },
    3: {
      label: '熟成のニュアンスが見える',
      value: false,
    },
    4: {
      label: '熟成した',
      value: false,
    },
    5: {
      label: '軽快な',
      value: false,
    },
    6: {
      label: '成熟度が高い',
      value: false,
    },
    7: {
      label: '濃縮感がある',
      value: false,
    },
  },
};

export const WHITE_NOSE_DEFAULT: SubCategoryItems = {
  第一印象: {
    1: {
      label: '閉じている',
      value: false,
    },
    2: {
      label: '控えめ',
      value: false,
    },
    3: {
      label: '開いている',
      value: false,
    },
    4: {
      label: '強い',
      value: false,
    },
    5: {
      label: 'チャーミングな',
      value: false,
    },
    6: {
      label: '心地よい',
      value: false,
    },
    7: {
      label: '華やかな',
      value: false,
    },
    8: {
      label: '濃縮感がある',
      value: false,
    },
    9: {
      label: '深みのある',
      value: false,
    },
    10: {
      label: '複雑な',
      value: false,
    },
  },
  果実: {
    1: {
      label: '柑橘類',
      value: false,
    },
    2: {
      label: '青リンゴ',
      value: false,
    },
    3: {
      label: 'リンゴ',
      value: false,
    },
    4: {
      label: '洋梨',
      value: false,
    },
    5: {
      label: 'マスカット',
      value: false,
    },
    6: {
      label: '花梨',
      value: false,
    },
    7: {
      label: '白桃',
      value: false,
    },
    8: {
      label: 'アプリコット',
      value: false,
    },
    9: {
      label: 'パイナップル',
      value: false,
    },
    10: {
      label: 'パッションフルーツ',
      value: false,
    },
    11: {
      label: 'ライチ',
      value: false,
    },
  },
  花_植物: {
    1: {
      label: 'すいかずら',
      value: false,
    },
    2: {
      label: 'アカシア',
      value: false,
    },
    3: {
      label: '白バラ',
      value: false,
    },
    4: {
      label: 'キンモクセイ',
      value: false,
    },
    5: {
      label: '菩提樹',
      value: false,
    },
    6: {
      label: '草のような',
      value: false,
    },
    7: {
      label: 'ミント',
      value: false,
    },
    8: {
      label: 'タイム',
      value: false,
    },
    9: {
      label: 'アニス',
      value: false,
    },
    10: {
      label: 'ヴェルヴェーヌ',
      value: false,
    },
    11: {
      label: 'アーモンド',
      value: false,
    },
    12: {
      label: 'ヘーゼルナッツ',
      value: false,
    },
  },
  芳香_香辛料_化学物質: {
    1: {
      label: '貝殻',
      value: false,
    },
    2: {
      label: '石灰',
      value: false,
    },
    3: {
      label: '火打石',
      value: false,
    },
    4: {
      label: '鉱物',
      value: false,
    },
    5: {
      label: '海の香り',
      value: false,
    },
    6: {
      label: 'トースト',
      value: false,
    },
    7: {
      label: 'ヴァニラ',
      value: false,
    },
    8: {
      label: 'コリアンダー',
      value: false,
    },
    9: {
      label: '白胡椒',
      value: false,
    },
    10: {
      label: '丁子',
      value: false,
    },
    11: {
      label: '香木',
      value: false,
    },
    12: {
      label: 'お香',
      value: false,
    },
    13: {
      label: 'ジンジャーブレッド',
      value: false,
    },
    14: {
      label: '硫黄',
      value: false,
    },
    15: {
      label: 'パン・ド・ミ',
      value: false,
    },
    16: {
      label: 'ハチミツ',
      value: false,
    },
    17: {
      label: '乳製品',
      value: false,
    },
    18: {
      label: 'フェノール',
      value: false,
    },
    19: {
      label: '麝香',
      value: false,
    },
    20: {
      label: '花の蜜',
      value: false,
    },
  },
  香りの印象: {
    1: {
      label: '若々しい',
      value: false,
    },
    2: {
      label: '嫌気的な',
      value: false,
    },
    3: {
      label: '発展的な',
      value: false,
    },
    4: {
      label: '熟成感が現れている',
      value: false,
    },
    5: {
      label: '酸化熟成の段階',
      value: false,
    },
    6: {
      label: '酸化した',
      value: false,
    },
    7: {
      label: '第1アロマが強い',
      value: false,
    },
    8: {
      label: '第2アロマが強い',
      value: false,
    },
    9: {
      label: 'ニュートラル',
      value: false,
    },
    10: {
      label: '木樽からのニュアンス',
      value: false,
    },
    11: {
      label: '発展的な',
      value: false,
    },
    12: {
      label: '複雑性がある',
      value: false,
    },
  },
};

export const WHITE_PALATE_DEFAULT: SubCategoryItems = {
  アタック: {
    1: {
      label: '軽い',
      value: false,
    },
    2: {
      label: 'やや軽い',
      value: false,
    },
    3: {
      label: 'やや強い',
      value: false,
    },
    4: {
      label: '強い',
      value: false,
    },
    5: {
      label: 'インパクトのある',
      value: false,
    },
  },
  甘み: {
    1: {
      label: 'ドライ',
      value: false,
    },
    2: {
      label: 'ソフトな',
      value: false,
    },
    3: {
      label: 'まろやか',
      value: false,
    },
    4: {
      label: '豊かな',
      value: false,
    },
    5: {
      label: '残糖がある',
      value: false,
    },
  },
  酸味: {
    1: {
      label: 'なめらかな',
      value: false,
    },
    2: {
      label: '生き生きとした',
      value: false,
    },
    3: {
      label: '爽やかな',
      value: false,
    },
    4: {
      label: '堅い',
      value: false,
    },
    5: {
      label: 'シャープな',
      value: false,
    },
    6: {
      label: '力強い',
      value: false,
    },
  },
  苦味: {
    1: {
      label: '控えめ',
      value: false,
    },
    2: {
      label: '穏やかな',
      value: false,
    },
    3: {
      label: 'コク（深み）を与える',
      value: false,
    },
    4: {
      label: '旨みをともなった',
      value: false,
    },
    5: {
      label: '強い',
      value: false,
    },
  },
  バランス: {
    1: {
      label: 'スリムな',
      value: false,
    },
    2: {
      label: 'スムースな',
      value: false,
    },
    3: {
      label: '溌剌とした',
      value: false,
    },
    4: {
      label: 'ドライな',
      value: false,
    },
    5: {
      label: 'まろやかな',
      value: false,
    },
    6: {
      label: 'ねっとりした',
      value: false,
    },
    7: {
      label: 'コンパクトな',
      value: false,
    },
    8: {
      label: '豊潤な',
      value: false,
    },
    9: {
      label: '厚みのある',
      value: false,
    },
    10: {
      label: 'ふくよかな',
      value: false,
    },
    11: {
      label: 'ジューシーな',
      value: false,
    },
  },
  アルコール: {
    1: {
      label: '軽め',
      value: false,
    },
    2: {
      label: 'やや軽め',
      value: false,
    },
    3: {
      label: '中程度',
      value: false,
    },
    4: {
      label: 'やや強め',
      value: false,
    },
    5: {
      label: '熱さを感じる',
      value: false,
    },
  },
  余韻: {
    1: {
      label: '短い',
      value: false,
    },
    2: {
      label: 'やや短い',
      value: false,
    },
    3: {
      label: 'やや長い',
      value: false,
    },
    4: {
      label: '長い',
      value: false,
    },
  },
};

export const WHITE_CONCLUSION_DEFAULT: SubCategoryItems = {
  評価: {
    1: {
      label: 'シンプル、フレッシュ感を楽しむ',
      value: false,
    },
    2: {
      label: 'エレガントでミネラリー',
      value: false,
    },
    3: {
      label: '成熟度が高く豊か',
      value: false,
    },
    4: {
      label: '濃縮し力強い',
      value: false,
    },
    5: {
      label: 'ポテンシャルがある',
      value: false,
    },
  },
  適正温度: {
    1: {
      label: '8度未満',
      value: false,
    },
    2: {
      label: '8-10度',
      value: false,
    },
    3: {
      label: '11-14度',
      value: false,
    },
    4: {
      label: '15-18度',
      value: false,
    },
    5: {
      label: '19度以上',
      value: false,
    },
  },
  グラス: {
    1: {
      label: '小ぶり',
      value: false,
    },
    2: {
      label: '中庸',
      value: false,
    },
    3: {
      label: '大ぶり',
      value: false,
    },
  },
};

export const WHITE_SUB_CATEGORY_TITLES: SubCategoryTitles = {
  外観: ['清澄度', '輝き', '色調', '濃淡', '粘性', '外観の印象'],
  香り: ['第一印象', '果実', '花_植物', '芳香_香辛料_化学物質', '香りの印象'],
  味わい: [
    'アタック',
    '甘み',
    '酸味',
    '苦味',
    'バランス',
    'アルコール',
    '余韻',
  ],
  総合評価: [
    '評価',
    '適正温度',
    'グラス',
    '収穫年',
    '生産国',
    '主なブドウ品種',
  ],
};
