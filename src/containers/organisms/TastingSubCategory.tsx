import React, { FC } from 'react';

import { Input } from 'semantic-ui-react';
import TastingSubCategory from 'components/organisms/TastingSubCategory';
import TastingItems, { Attributes } from 'containers/molecules/TastingItems';

import {
  INPUT_SUB_CATEGORIES,
  SubCategoryItems,
  Items,
} from 'data/tastingSheet';

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
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const stringValue = `${e.target.value}`;
    updateCategory({ subCategoryTitle, items: stringValue });
  };

  // Text or Checkboxes
  const content = () => {
    if (INPUT_SUB_CATEGORIES.includes(subCategoryTitle)) {
      return (
        <Input
          fluid
          transparent
          value={items[subCategoryTitle]}
          onChange={handleInput}
        />
      );
    }

    const checkboxItems = items[subCategoryTitle] as Items;

    return (
      <TastingItems
        subCategoryTitle={subCategoryTitle}
        items={checkboxItems}
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
