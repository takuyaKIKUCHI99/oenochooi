import React, { FC } from 'react';
import { Checkbox } from 'semantic-ui-react';
import { Items } from 'data/tastingCategories';

type Props = {
  items: Items;
  keys: number[];
  toggleItemValue: (key: number) => void;
};

const TastingItems: FC<Props> = ({ keys, items, toggleItemValue }) => (
  <>
    {keys.map((key) => (
      <Checkbox
        checked={items[key].value}
        key={key}
        label={items[key].label}
        style={{ margin: '0.5rem 1rem' }}
        onChange={() => toggleItemValue(key)}
      />
    ))}
  </>
);

export default TastingItems;
