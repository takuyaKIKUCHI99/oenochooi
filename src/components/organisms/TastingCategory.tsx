import React, { FC } from 'react';

import { Header, Grid } from 'semantic-ui-react';
import TastingSubCategory from 'containers/organisms/TastingSubCategory';
import { Attributes } from 'containers/molecules/TastingItems';

import { CategoryTitles, SubCategoryItems } from 'data/tastingSheet';

type Props = {
  categoryTitle: CategoryTitles;
  subCategoryTitles: string[];
  items: SubCategoryItems;
  updateCategory: (attributes: Attributes) => void;
};

const TastingCategory: FC<Props> = ({
  categoryTitle,
  subCategoryTitles,
  items,
  updateCategory,
}) => (
  <Grid celled>
    <Grid.Column width={2} verticalAlign="middle" textAlign="center">
      <Header as="h2">{categoryTitle}</Header>
    </Grid.Column>
    <Grid.Column width={14} style={{ padding: 0 }}>
      {subCategoryTitles.map((subCategoryTitle) => (
        <TastingSubCategory
          subCategoryTitle={subCategoryTitle}
          items={items}
          updateCategory={updateCategory}
        />
      ))}
    </Grid.Column>
  </Grid>
);

export default TastingCategory;
