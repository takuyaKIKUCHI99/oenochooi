import React, { FC, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Button,
  Dropdown,
  Header,
  Icon,
  Input,
  Modal,
} from 'semantic-ui-react';
import ModalHolder from 'components/organisms/ModalHolder';

import firestoreDataManipulation from 'utils/functions/firestoreDataManipulation';
import FirebaseContext from 'contexts';

type Props = {
  id: string;
  title: string;
};

const UpdateTitleModal: FC<Props> = ({ id, title }) => {
  const history = useHistory();
  const { db } = useContext(FirebaseContext);
  const [open, setOpen] = useState(false);
  const [titleInput, setTitleInput] = useState(title);

  const toggleModal = (bool: boolean) => {
    setOpen(bool);
  };

  const handleSubmit = async () => {
    await firestoreDataManipulation(db, 'update', id, { title: titleInput });
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
        <Input
          fluid
          value={titleInput}
          placeholder="タイトルを入力してください"
          onChange={(event) => setTitleInput(event.target.value)}
        />
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
