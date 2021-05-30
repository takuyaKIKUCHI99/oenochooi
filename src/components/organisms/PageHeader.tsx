import React, { FC, ReactNode } from 'react';
import { Header } from 'semantic-ui-react';

type Props = {
  actionElement: ReactNode;
  headerTitle: string;
};

const PageHeader: FC<Props> = ({ actionElement, headerTitle }) => (
  <>
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      {actionElement}
    </div>
    <Header as="h1" textAlign="center">
      {headerTitle}
    </Header>
  </>
);

export default PageHeader;
