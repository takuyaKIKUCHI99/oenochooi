import React, { FC } from 'react';

import TastingSubCategory from 'components/organisms/TastingSubCategory';
import TastingItems, { Attributes } from 'containers/molecules/TastingItems';

import { SubCategoryItems } from 'data/tastingSheet';

type Props = {
  subCategoryTitle: string;
  items: SubCategoryItems;
  updateCategory: (attributes: Attributes) => void;
};

const EnhancedTastingSubCategory: FC<Props> = ({
  subCategoryTitle,
  items,
  updateCategory,
}) => {
  return (
    <TastingSubCategory subCategoryTitle={subCategoryTitle}>
      <TastingItems
        subCategoryTitle={subCategoryTitle}
        items={items[subCategoryTitle]}
        updateCategory={updateCategory}
      />
    </TastingSubCategory>
  );
};

export default EnhancedTastingSubCategory;
