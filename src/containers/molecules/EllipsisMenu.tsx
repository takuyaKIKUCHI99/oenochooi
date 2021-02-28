import React, { FC } from 'react';

import EllipsisMenu from 'components/molecules/EllipsisMenu';
import DeleteTastingSheetModal from 'containers/organisms/DeleteTastingSheetModal';
import UpdateTitleModal from 'containers/organisms/UpdateTitleModal';

import firebase from 'firebase';

type Props = {
  id: string;
  title: string;
  createdAt: firebase.firestore.Timestamp;
};

const EnhancedEllipsisMenu: FC<Props> = ({ id, title, createdAt }) => (
  <EllipsisMenu>
    <UpdateTitleModal id={id} title={title} />
    <DeleteTastingSheetModal id={id} title={title} createdAt={createdAt} />
  </EllipsisMenu>
);

export default EnhancedEllipsisMenu;
