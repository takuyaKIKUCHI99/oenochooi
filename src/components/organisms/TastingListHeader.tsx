import React, { FC } from 'react';
import { Dropdown, Header } from 'semantic-ui-react';

const TastingListHeader: FC = () => (
  <>
    <Header as="h1" textAlign="center">
      テイスティングリスト
    </Header>
    <div
      className="action-menu"
      style={{ display: 'flex', justifyContent: 'flex-end' }}
    >
      <Dropdown text="テイスティングシート作成">
        <Dropdown.Menu>
          <Dropdown.Item
            text="赤ワイン"
            label={{ color: 'purple', empty: true, circular: true }}
          />
          <Dropdown.Item
            text="白ワイン"
            label={{ color: 'yellow', empty: true, circular: true }}
          />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  </>
);

export default TastingListHeader;
