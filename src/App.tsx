import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Container } from 'semantic-ui-react';

import SignIn from 'containers/pages/SignIn';
import TastingList from 'containers/pages/TastingList';
import TastingSheet from 'containers/pages/TastingSheet';

import paths from 'paths';

const App: FC = () => {
  return (
    <div className="App">
      <Container style={{ padding: '1rem 0' }}>
        <Switch>
          <Route path={paths.tasting}>
            <TastingSheet />
          </Route>
          <Route path={paths.tastingNew}>
            <TastingSheet />
          </Route>
          <Route path={paths.signIn}>
            <SignIn />
          </Route>
          <Route path={paths.list}>
            <TastingList />
          </Route>
        </Switch>
      </Container>
    </div>
  );
};

export default App;
