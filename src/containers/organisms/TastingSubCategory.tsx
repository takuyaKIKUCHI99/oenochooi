import React, { FC } from 'react';

import { Input } from 'semantic-ui-react';
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
  const inputSubCategories = ['収穫年', '生産国', '主なブドウ品種'];

  // Text or Checkboxes
  const content = () => {
    if (inputSubCategories.includes(subCategoryTitle)) {
      return <Input transparent />;
    }

    return (
      <TastingItems
        subCategoryTitle={subCategoryTitle}
        items={items[subCategoryTitle]}
        updateCategory={updateCategory}
      />
    );
  };

  return (
    <TastingSubCategory subCategoryTitle={subCategoryTitle}>
      {content()}
    </TastingSubCategory>
  );
};

export default EnhancedTastingSubCategory;
