import React, { FC } from 'react';
import { List } from 'semantic-ui-react';
import ListItem from 'containers/organisms/ListItem';
import { TastingSheetsDoc } from 'components/organisms/ListItem';
import TastingListHeader from 'containers/organisms/TastingListHeader';

type Props = {
  tastingSheets: TastingSheetsDoc[] | undefined;
};

const TastingList: FC<Props> = ({ tastingSheets }) => (
  <>
    <header>
      <TastingListHeader />
    </header>
    <main>
      {tastingSheets?.length ? (
        <List selection verticalAlign="middle">
          <ListItem tastingSheets={tastingSheets} />
        </List>
      ) : (
        <p>まだテイスティングアイテムがありません</p>
      )}
    </main>
  </>
);

export default TastingList;
