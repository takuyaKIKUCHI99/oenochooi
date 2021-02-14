import { SubCategoryItems } from 'data/tastingSheet';

/**
 * テイスティング解答用紙・用語選択用紙・赤ワイン用 2021年版
 * https://www.wine-jyuken.com/media/second_exam/comment-sheet-r.pdf
 */
export const APPEARANCE_DEFAULT: SubCategoryItems = {
  清澄度: {
    1: {
      label: '澄んだ',
      value: false,
    },
    2: {
      label: '深みのある',
      value: false,
    },
    3: {
      label: 'やや濁った',
      value: false,
    },
    4: {
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
      label: '艶のある',
      value: false,
    },
    3: {
      label: 'モヤがかかった',
      value: false,
    },
  },
  色調: {
    1: {
      label: '紫がかった',
      value: false,
    },
    2: {
      label: '黒味を帯びた',
      value: false,
    },
    3: {
      label: 'オレンジがかった',
      value: false,
    },
    4: {
      label: '縁が明るい',
      value: false,
    },
    5: {
      label: 'ルビー（ラズベリーレッド）',
      value: false,
    },
    6: {
      label: 'ガーネット（ダークチェリーレッド）',
      value: false,
    },
    7: {
      label: 'レンガ',
      value: false,
    },
  },
  濃淡: {
    1: {
      label: '無色に近い',
      value: false,
    },
    2: {
      label: '明るい',
      value: false,
    },
    3: {
      label: 'やや明るい',
      value: false,
    },
    4: {
      label: 'やや濃い',
      value: false,
    },
    5: {
      label: '濃い',
      value: false,
    },
    6: {
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
      label: '若い状態を抜けた',
      value: false,
    },
    3: {
      label: 'やや熟成した',
      value: false,
    },
    4: {
      label: '熟成した',
      value: false,
    },
    5: {
      label: '参加熟成のニュアンス',
      value: false,
    },
    6: {
      label: '軽快な',
      value: false,
    },
    7: {
      label: '成熟度が高い',
      value: false,
    },
    8: {
      label: '濃縮感が強い',
      value: false,
    },
  },
};

export const NOSE_DEFAULT: SubCategoryItems = {
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
      label: '華やかな',
      value: false,
    },
    7: {
      label: '濃縮感がある',
      value: false,
    },
    8: {
      label: '深みのある',
      value: false,
    },
    9: {
      label: '複雑な',
      value: false,
    },
  },
  果実: {
    1: {
      label: 'イチゴ',
      value: false,
    },
    2: {
      label: 'ラズベリー',
      value: false,
    },
    3: {
      label: 'ブルーベリー',
      value: false,
    },
    4: {
      label: 'カシス',
      value: false,
    },
    5: {
      label: 'ブラックベリー',
      value: false,
    },
    6: {
      label: 'ブラックチェリー',
      value: false,
    },
    7: {
      label: '干しプラム',
      value: false,
    },
    8: {
      label: '乾燥イチジク',
      value: false,
    },
  },
  花_植物: {
    1: {
      label: 'バラ',
      value: false,
    },
    2: {
      label: 'すみれ',
      value: false,
    },
    3: {
      label: '牡丹',
      value: false,
    },
    4: {
      label: 'ゼラニウム',
      value: false,
    },
    5: {
      label: 'ピーマン',
      value: false,
    },
    6: {
      label: 'トマト',
      value: false,
    },
    7: {
      label: 'メントール',
      value: false,
    },
    8: {
      label: 'シダ',
      value: false,
    },
    9: {
      label: 'ローリエ',
      value: false,
    },
    10: {
      label: '杉',
      value: false,
    },
    11: {
      label: '針葉樹',
      value: false,
    },
    12: {
      label: 'ユーカリ',
      value: false,
    },
    13: {
      label: 'ドライハーブ',
      value: false,
    },
    14: {
      label: 'タバコ',
      value: false,
    },
    15: {
      label: '紅茶',
      value: false,
    },
    16: {
      label: 'キノコ',
      value: false,
    },
    17: {
      label: '土',
      value: false,
    },
  },
  芳香_香辛料_化学物質: {
    1: {
      label: '動物的なニュアンス',
      value: false,
    },
    2: {
      label: '鉄分',
      value: false,
    },
    3: {
      label: '生肉',
      value: false,
    },
    4: {
      label: 'グリエ',
      value: false,
    },
    5: {
      label: '乾いた肉',
      value: false,
    },
    6: {
      label: 'なめし革',
      value: false,
    },
    7: {
      label: 'ロースト',
      value: false,
    },
    8: {
      label: 'コーヒー',
      value: false,
    },
    9: {
      label: 'チョコレート',
      value: false,
    },
    10: {
      label: 'ヴァニラ',
      value: false,
    },
    11: {
      label: '黒胡椒',
      value: false,
    },
    12: {
      label: '丁子',
      value: false,
    },
    13: {
      label: 'シナモン',
      value: false,
    },
    14: {
      label: 'ナツメグ',
      value: false,
    },
    15: {
      label: '甘草',
      value: false,
    },
    16: {
      label: 'タール',
      value: false,
    },
    17: {
      label: '樹脂',
      value: false,
    },
    18: {
      label: 'ヨード',
      value: false,
    },
    19: {
      label: 'アルコール',
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
      label: '複雑性がある',
      value: false,
    },
    6: {
      label: '第1アロマが強い',
      value: false,
    },
    7: {
      label: '第2アロマが強い',
      value: false,
    },
    8: {
      label: 'ニュートラル',
      value: false,
    },
    9: {
      label: '木樽からのニュアンス',
      value: false,
    },
  },
};

export const PALATE_DEFAULT: SubCategoryItems = {
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
  タンニン分: {
    1: {
      label: 'サラサラとした',
      value: false,
    },
    2: {
      label: '緻密',
      value: false,
    },
    3: {
      label: '力強い',
      value: false,
    },
    4: {
      label: '収斂性のある',
      value: false,
    },
    5: {
      label: 'ヴィロードのような',
      value: false,
    },
    6: {
      label: 'シルキーな',
      value: false,
    },
    7: {
      label: '溶け込んだ',
      value: false,
    },
  },
  バランス: {
    1: {
      label: 'スマートな',
      value: false,
    },
    2: {
      label: '骨格のしっかりとした',
      value: false,
    },
    3: {
      label: '固い',
      value: false,
    },
    4: {
      label: '豊満な',
      value: false,
    },
    5: {
      label: '力強い',
      value: false,
    },
    6: {
      label: '流れるような',
      value: false,
    },
    7: {
      label: 'ふくよかな',
      value: false,
    },
    8: {
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

export const CONCLUSION_DEFAULT: SubCategoryItems = {
  評価: {
    1: {
      label: 'シンプル、フレッシュ感を楽しむ',
      value: false,
    },
    2: {
      label: 'エレガントで余韻が長い',
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
      label: '10度未満',
      value: false,
    },
    2: {
      label: '10-13度',
      value: false,
    },
    3: {
      label: '14-16度',
      value: false,
    },
    4: {
      label: '17-20度',
      value: false,
    },
    5: {
      label: '21度以上',
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
  デカンタージュ: {
    1: {
      label: '必要なし',
      value: false,
    },
    2: {
      label: '直前',
      value: false,
    },
    3: {
      label: '事前(1時間以上前)',
      value: false,
    },
  },
};
