import React, { FC } from 'react';
import { Items } from 'data/tastingCategories';
import TastingItems from 'components/molecules/TastingItems';

export type Attributes = {
  subCategory: string;
  items: Items;
};
type Props = {
  items: Items;
  subCategory: string;
  updateCategory: (attributes: Attributes) => void;
};

const EnhancedTastingItems: FC<Props> = ({
  subCategory,
  items,
  updateCategory,
}) => {
  const keys = Object.keys(items);

  const updateSubCategory = (item: string) => {
    const prev = items[item];
    const updatedItems = { ...items, [item]: !prev };
    updateCategory({ subCategory, items: updatedItems });
  };

  return (
    <TastingItems
      keys={keys}
      items={items}
      updateSubCategory={updateSubCategory}
    />
  );
};

export default EnhancedTastingItems;
