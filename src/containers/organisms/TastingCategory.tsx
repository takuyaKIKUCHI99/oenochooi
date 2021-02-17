import React, { FC } from 'react';

import TastingCategory from 'components/organisms/TastingCategory';
import { Attributes } from 'containers/molecules/TastingItems';

import { CategoryTitles, SubCategoryItems, WineType } from 'data/tastingSheet';
import { RED_SUB_CATEGORY_TITLES } from 'data/redWine';
import { WHITE_SUB_CATEGORY_TITLES } from 'data/whiteWine';

type Props = {
  wineType: WineType;
  categoryTitle: CategoryTitles;
  items: SubCategoryItems;
  handleCategoryChange: (
    attributes: SubCategoryItems,
    title: CategoryTitles,
  ) => void;
};

const EnhancedTastingCategory: FC<Props> = ({
  wineType,
  categoryTitle,
  items,
  handleCategoryChange,
}) => {
  const subCategoryTitles =
    wineType === 'red'
      ? RED_SUB_CATEGORY_TITLES[categoryTitle]
      : WHITE_SUB_CATEGORY_TITLES[categoryTitle];

  const updateCategory = (attributes: Attributes) => {
    const { subCategoryTitle } = attributes;
    const { items: updatedItems } = attributes;
    const value =
      typeof updatedItems === 'string' ? updatedItems : { ...updatedItems };
    const updatedCategory = {
      ...items,
      [subCategoryTitle]: value,
    };
    handleCategoryChange(updatedCategory, categoryTitle);
  };

  return (
    <TastingCategory
      items={items}
      categoryTitle={categoryTitle}
      subCategoryTitles={subCategoryTitles}
      updateCategory={updateCategory}
    />
  );
};

export default EnhancedTastingCategory;
