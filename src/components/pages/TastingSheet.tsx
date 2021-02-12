import React, { FC } from 'react';

import { Button, Form, Grid } from 'semantic-ui-react';
import { Categories } from 'components/organisms/TastingCategory';
import TastingSheetHeader from 'containers/organisms/TastingSheetHeader';
import TastingCategory from 'containers/organisms/TastingCategory';

import { CategoryItems, WineType } from 'data/tastingCategories';

type Props = {
  appearance: CategoryItems;
  conclusion: CategoryItems;
  nose: CategoryItems;
  palate: CategoryItems;
  wineType: WineType;
  loading: boolean;
  handleCategoryChange: (attributes: CategoryItems, title: Categories) => void;
  handleSubmit: () => void;
};

const TastingSheet: FC<Props> = ({
  appearance,
  conclusion,
  nose,
  palate,
  wineType,
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
