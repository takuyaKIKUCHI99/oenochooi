import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Dropdown, Header, Icon, Modal } from 'semantic-ui-react';
import ModalHolder from 'components/organisms/ModalHolder';

import firestoreDataManipulation from 'utils/firestoreDataManipulation';

type Props = {
  id: string;
};

const UpdateTitleModal: FC<Props> = ({ id }) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const toggleModal = (bool: boolean) => {
    setOpen(bool);
  };

  const handleSubmit = async () => {
    await firestoreDataManipulation({ id }, 'update');
    history.go(0);
    toggleModal(false);
  };

  const trigger = <Dropdown.Item icon="edit" text="タイトル編集" />;

  return (
    <ModalHolder
      trigger={trigger}
      open={open}
      toggleModal={(bool) => toggleModal(bool)}
    >
      <Header icon>
        <Icon name="edit" />
        テイスティングシートのタイトルを編集
      </Header>
      <Modal.Content>
        <p>「タイトルなし」（作成日時：yyyy/mm/dd hh:mm:ss) を削除しますか</p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={() => toggleModal(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button color="green" inverted onClick={handleSubmit}>
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </ModalHolder>
  );
};

export default UpdateTitleModal;
