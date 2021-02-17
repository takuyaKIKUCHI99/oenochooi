import React, { FC, ReactNode } from 'react';
import { Header, Grid } from 'semantic-ui-react';

type Props = {
  subCategoryTitle: string;
  children: ReactNode;
};

const TastingSubCategory: FC<Props> = ({ subCategoryTitle, children }) => (
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
      {children}
    </Grid.Column>
  </Grid>
);

export default TastingSubCategory;
