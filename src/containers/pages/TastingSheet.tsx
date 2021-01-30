import React, { FC, useState } from 'react';
import { Categories } from 'components/organisms/TastingCategory';
import TastingSheet, { WineType } from 'components/pages/TastingSheet';
import {
  appearanceDefault,
  conclusionDefault,
  nodeDefault,
  palateDefault,
  CategoryItems,
} from 'data/tastingCategories';

type Props = {
  wineType: WineType;
};

const EnhancedTastingSheet: FC<Props> = ({ wineType }) => {
  const [appearance, setAppearance] = useState<CategoryItems>(
    appearanceDefault,
  );
  const [nose, setNose] = useState<CategoryItems>(nodeDefault);
  const [palate, setPalate] = useState<CategoryItems>(palateDefault);
  const [conclusion, setConclusion] = useState<CategoryItems>(
    conclusionDefault,
  );

  const handleCategoryChange = (
    attributes: CategoryItems,
    title: Categories,
  ) => {
    if (title === '外観') setAppearance(attributes);
    if (title === '香り') setNose(attributes);
    if (title === '味わい') setPalate(attributes);
    if (title === '総合評価') setConclusion(attributes);
  };

  return (
    <TastingSheet
      appearance={appearance}
      conclusion={conclusion}
      nose={nose}
      palate={palate}
      wineType={wineType}
      handleCategoryChange={handleCategoryChange}
    />
  );
};

export default EnhancedTastingSheet;
