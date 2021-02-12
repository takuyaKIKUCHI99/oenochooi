import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import TastingSheetHeader from 'components/organisms/PageHeader';

import { WineType } from 'data/tastingCategories';

type Props = {
  wineType: WineType;
};

const EnhancedTastingSheetHeader: FC<Props> = ({ wineType }) => {
  const actionElement = <Link to="/">リストに戻る</Link>;

  const headerTitle =
    wineType === 'red'
      ? '赤ワイン・テイスティング用語選択用紙'
      : '白ワイン・テイスティング用語選択用紙';

  return (
    <TastingSheetHeader
      headerTitle={headerTitle}
      actionElement={actionElement}
    />
  );
};

export default EnhancedTastingSheetHeader;
