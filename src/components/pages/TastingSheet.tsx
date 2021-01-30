import React, { FC } from 'react';
import { Button, Container, Form, Grid, Header } from 'semantic-ui-react';
import { Categories } from 'components/organisms/TastingCategory';
import TastingCategory from 'containers/organisms/TastingCategory';
import { CategoryItems } from 'data/tastingCategories';

export type WineType = 'red' | 'white';
type Props = {
  appearance: CategoryItems;
  conclusion: CategoryItems;
  nose: CategoryItems;
  palate: CategoryItems;
  wineType: WineType;
  handleCategoryChange: (attributes: CategoryItems, title: Categories) => void;
};

const TastingSheet: FC<Props> = ({
  appearance,
  conclusion,
  nose,
  palate,
  wineType,
  handleCategoryChange,
}) => (
  <Container style={{ padding: '1rem 0' }}>
    <Header as="h1" textAlign="center">
      {wineType === 'red' ? '赤' : '白'}ワイン・テイスティング用語選択用紙
    </Header>
    <Form>
      <TastingCategory
        title="外観"
        category={appearance}
        handleCategoryChange={handleCategoryChange}
      />
      <TastingCategory
        title="香り"
        category={nose}
        handleCategoryChange={handleCategoryChange}
      />
      <TastingCategory
        title="味わい"
        category={palate}
        handleCategoryChange={handleCategoryChange}
      />
      <TastingCategory
        title="総合評価"
        category={conclusion}
        handleCategoryChange={handleCategoryChange}
      />
      <Grid centered>
        <Button primary size="huge" loading={false}>
          保存
        </Button>
      </Grid>
    </Form>
  </Container>
);

export default TastingSheet;
