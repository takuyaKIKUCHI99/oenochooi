import React, { FC, ReactNode } from 'react';
import { Header } from 'semantic-ui-react';

type Props = {
  actionElement: ReactNode;
  headerTitle: string;
};

const TastingListHeader: FC<Props> = ({ actionElement, headerTitle }) => (
  <>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      {actionElement}
    </div>
    <Header as="h1" textAlign="center">
      {headerTitle}
    </Header>
  </>
);

export default TastingListHeader;
