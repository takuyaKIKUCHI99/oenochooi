import React, { FC } from 'react';

import { Button, Form, Grid } from 'semantic-ui-react';
import TastingSheetHeader from 'containers/organisms/TastingSheetHeader';
import TastingCategory from 'containers/organisms/TastingCategory';

import { CategoryTitles, SubCategoryItems, WineType } from 'data/tastingSheet';

type Props = {
  wineType: WineType;
  appearance: SubCategoryItems;
  nose: SubCategoryItems;
  palate: SubCategoryItems;
  conclusion: SubCategoryItems;
  loading: boolean;
  handleCategoryChange: (
    attributes: SubCategoryItems,
    categoryTitle: CategoryTitles,
  ) => void;
  handleSubmit: () => void;
};

const TastingSheet: FC<Props> = ({
  wineType,
  appearance,
  nose,
  palate,
  conclusion,
  loading,
  handleCategoryChange,
  handleSubmit,
}) => (
  <>
    <header>
      <TastingSheetHeader wineType={wineType} />
    </header>
    <main>
      <Form>
        <TastingCategory
          categoryTitle="外観"
          items={appearance}
          handleCategoryChange={handleCategoryChange}
        />
        <TastingCategory
          categoryTitle="香り"
          items={nose}
          handleCategoryChange={handleCategoryChange}
        />
        <TastingCategory
          categoryTitle="味わい"
          items={palate}
          handleCategoryChange={handleCategoryChange}
        />
        <TastingCategory
          categoryTitle="総合評価"
          items={conclusion}
          handleCategoryChange={handleCategoryChange}
        />
        <Grid centered style={{ paddingBottom: '1rem' }}>
          <Button
            basic
            disabled={loading}
            loading={loading}
            onClick={handleSubmit}
          >
            保存
          </Button>
        </Grid>
      </Form>
    </main>
  </>
);

export default TastingSheet;
