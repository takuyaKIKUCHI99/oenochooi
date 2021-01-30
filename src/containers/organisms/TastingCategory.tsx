import React, { FC } from 'react';
import TastingCategory, {
  Categories,
} from 'components/organisms/TastingCategory';
import { Attributes } from 'containers/molecules/TastingItems';
import { CategoryItems } from 'data/tastingCategories';

type Props = {
  title: Categories;
  category: CategoryItems;
  handleCategoryChange: (attributes: CategoryItems, title: Categories) => void;
};

const EnhancedTastingCategory: FC<Props> = ({
  title,
  category,
  handleCategoryChange,
}) => {
  const subCategories = Object.keys(category);

  const updateCategory = (attributes: Attributes) => {
    const { subCategory, items } = attributes;
    const updatedCategory = { ...category, [subCategory]: { ...items } };
    handleCategoryChange(updatedCategory, title);
  };

  return (
    <TastingCategory
      category={category}
      subCategories={subCategories}
      title={title}
      updateCategory={updateCategory}
    />
  );
};

export default EnhancedTastingCategory;
