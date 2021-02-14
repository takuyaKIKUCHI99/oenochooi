import React, { FC, ReactNode } from 'react';

import TastingListHeader from 'containers/organisms/TastingListHeader';

type Props = {
  children: ReactNode;
};

const TastingList: FC<Props> = ({ children }) => (
  <>
    <header>
      <TastingListHeader />
    </header>
    <main>{children}</main>
  </>
);

export default TastingList;
