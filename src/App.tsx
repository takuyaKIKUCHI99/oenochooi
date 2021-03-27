import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Container } from 'semantic-ui-react';

import Login from 'containers/pages/Login';
import TastingList from 'containers/pages/TastingList';
import TastingSheet from 'containers/pages/TastingSheet';

const App: FC = () => {
  return (
    <div className="App">
      <Container style={{ padding: '1rem 0' }}>
        <Switch>
          <Route path="/tastingSheet/:id">
            <TastingSheet />
          </Route>
          <Route path="/tastingSheet">
            <TastingSheet />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <TastingList />
          </Route>
        </Switch>
      </Container>
    </div>
  );
};

export default App;
