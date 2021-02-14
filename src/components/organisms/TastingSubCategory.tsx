import React, { FC } from 'react';
import { Header, Grid } from 'semantic-ui-react';
import TastingItems, { Attributes } from 'containers/molecules/TastingItems';
import { SubCategoryItems } from 'data/tastingSheet';

type Props = {
  subCategoryTitle: string;
  items: SubCategoryItems;
  updateCategory: (attributes: Attributes) => void;
};

const TastingSubCategory: FC<Props> = ({
  subCategoryTitle,
  items,
  updateCategory,
}) => (
  <Grid
    celled
    key={subCategoryTitle}
    style={{ margin: 0, boxShadow: '0px 0px 0px 0.5px #d4d4d5' }}
  >
    <Grid.Column width={2} verticalAlign="middle" textAlign="center">
      <Header as="h3" style={{ whiteSpace: 'pre-line' }}>
        {subCategoryTitle.replace(/_/g, '\n')}
      </Header>
    </Grid.Column>
    <Grid.Column width={14} verticalAlign="middle">
      <TastingItems
        subCategoryTitle={subCategoryTitle}
        items={items[subCategoryTitle]}
        updateCategory={updateCategory}
      />
    </Grid.Column>
  </Grid>
);

export default TastingSubCategory;
