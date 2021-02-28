import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Dropdown, Header, Icon, Modal } from 'semantic-ui-react';
import ConfirmationModal from 'components/organisms/ConfirmationModal';

import firestoreDataManipulation from 'utils/firestoreDataManipulation';

type Props = {
  id: string;
};

const DeleteTastingSheetModal: FC<Props> = ({ id }) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const toggleModal = (bool: boolean) => {
    setOpen(bool);
  };

  const handleDelete = async () => {
    await firestoreDataManipulation({ id }, 'delete');
    history.go(0);
    toggleModal(false);
  };

  const trigger = <Dropdown.Item icon="trash" text="削除" />;

  return (
    <ConfirmationModal
      trigger={trigger}
      open={open}
      toggleModal={(bool) => toggleModal(bool)}
    >
      <Header icon>
        <Icon name="trash" />
        テイスティングシートの削除
      </Header>
      <Modal.Content>
        <p>「タイトルなし」（作成日時：yyyy/mm/dd hh:mm:ss) を削除しますか</p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={() => toggleModal(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" inverted onClick={handleDelete}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </ConfirmationModal>
  );
};

export default DeleteTastingSheetModal;
