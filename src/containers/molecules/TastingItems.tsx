import React, { FC } from 'react';
import { Items } from 'data/tastingSheet';
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
  const keys = Object.keys(items).map((el) => parseInt(el, 10));

  const toggleItemValue = (key: number) => {
    const targetItem = items[key];
    const updatedItems = {
      ...items,
      [key]: { label: targetItem.label, value: !targetItem.value },
    };
    updateCategory({ subCategory, items: updatedItems });
  };

  return (
    <TastingItems keys={keys} items={items} toggleItemValue={toggleItemValue} />
  );
};

export default EnhancedTastingItems;
