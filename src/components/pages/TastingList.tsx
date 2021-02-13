import React, { FC } from 'react';
import { List } from 'semantic-ui-react';
import ListItem from 'containers/organisms/ListItem';
import { TastingSheetsDoc } from 'components/organisms/ListItem';
import TastingListHeader from 'containers/organisms/TastingListHeader';

type Props = {
  tastingSheets: TastingSheetsDoc[];
};

const TastingList: FC<Props> = ({ tastingSheets }) => (
  <>
    <header>
      <TastingListHeader />
    </header>
    <main>
      <List selection verticalAlign="middle">
        {tastingSheets.map((doc) => (
          <ListItem key={doc.id} tastingSheet={doc.tastingSheet} id={doc.id} />
        ))}
      </List>
    </main>
  </>
);

export default TastingList;
