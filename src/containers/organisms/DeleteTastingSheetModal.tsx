import React, { FC, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Dropdown, Header, Icon, Modal } from 'semantic-ui-react';
import ModalHolder from 'components/organisms/ModalHolder';

import firestoreDataManipulation from 'utils/functions/firestoreDataManipulation';
import dateFormatter from 'utils/functions/dateFormatter';

import firebase from 'firebase';
import FirebaseContext from 'contexts';

type Props = {
  id: string;
  title: string;
  createdAt: firebase.firestore.Timestamp;
};

const DeleteTastingSheetModal: FC<Props> = ({ id, title, createdAt }) => {
  const history = useHistory();
  const { db } = useContext(FirebaseContext);
  const [open, setOpen] = useState(false);

  const toggleModal = (bool: boolean) => {
    setOpen(bool);
  };

  const handleDelete = async () => {
    await firestoreDataManipulation(db, 'delete', id);
    history.go(0);
    toggleModal(false);
  };

  const trigger = <Dropdown.Item icon="trash" text="削除" />;

  return (
    <ModalHolder
      trigger={trigger}
      open={open}
      toggleModal={(bool) => toggleModal(bool)}
    >
      <Header icon>
        <Icon name="trash" />
        テイスティングシートの削除
      </Header>
      <Modal.Content>
        <p>
          {`「${title || 'タイトルなし'}」（作成日時：${dateFormatter(
            createdAt.toDate(),
          )})
          を削除しますか`}
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={() => toggleModal(false)}>
          <Icon name="remove" /> キャンセル
        </Button>
        <Button color="green" inverted onClick={handleDelete}>
          <Icon name="checkmark" /> 削除
        </Button>
      </Modal.Actions>
    </ModalHolder>
  );
};

export default DeleteTastingSheetModal;
