import React, { FC } from 'react';
import TastingCategory from 'components/organisms/TastingCategory';
import { Attributes } from 'containers/molecules/TastingItems';
import {
  SUB_CATEGORY_TITLES,
  CategoryTitles,
  SubCategoryItems,
} from 'data/tastingSheet';

type Props = {
  categoryTitle: CategoryTitles;
  items: SubCategoryItems;
  handleCategoryChange: (
    attributes: SubCategoryItems,
    title: CategoryTitles,
  ) => void;
};

const EnhancedTastingCategory: FC<Props> = ({
  categoryTitle,
  items,
  handleCategoryChange,
}) => {
  const subCategoryTitles = SUB_CATEGORY_TITLES[categoryTitle];

  const updateCategory = (attributes: Attributes) => {
    const { subCategoryTitle } = attributes;
    const updatedItems = attributes.items;
    const updatedCategory = {
      ...items,
      [subCategoryTitle]: { ...updatedItems },
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
