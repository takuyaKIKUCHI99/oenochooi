import React, { FC } from 'react';
import { List } from 'semantic-ui-react';
import ListItem from 'containers/organisms/ListItem';
import { TastingSheetDoc } from 'components/organisms/ListItem';
import TastingListHeader from 'containers/organisms/TastingListHeader';

type Props = {
  tastingSheets: TastingSheetDoc[];
};

const TastingList: FC<Props> = ({ tastingSheets }) => (
  <>
    <header>
      <TastingListHeader />
    </header>
    <main>
      <List selection verticalAlign="middle">
        {tastingSheets.map((tastingSheet) => (
          <ListItem
            key={tastingSheet.id}
            tastingSheet={tastingSheet}
            id={tastingSheet.id}
          />
        ))}
      </List>
    </main>
  </>
);

export default TastingList;
