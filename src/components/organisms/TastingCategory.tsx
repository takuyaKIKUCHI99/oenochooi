import React, { FC } from 'react';
import { Header, Grid } from 'semantic-ui-react';
import TastingItems, { Attributes } from 'containers/molecules/TastingItems';
import { CategoryTitles, SubCategoryItems } from 'data/tastingCategories';

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
      {subCategoryTitles.map((subCategory) => (
        <Grid
          celled
          key={subCategory}
          style={{ margin: 0, boxShadow: '0px 0px 0px 0.5px #d4d4d5' }}
        >
          <Grid.Column width={2} verticalAlign="middle" textAlign="center">
            <Header as="h3" style={{ whiteSpace: 'pre-line' }}>
              {subCategory.replace(/_/g, '\n')}
            </Header>
          </Grid.Column>
          <Grid.Column width={14} verticalAlign="middle">
            <TastingItems
              subCategory={subCategory}
              items={items[subCategory]}
              updateCategory={updateCategory}
            />
          </Grid.Column>
        </Grid>
      ))}
    </Grid.Column>
  </Grid>
);

export default TastingCategory;
