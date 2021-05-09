import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Container } from 'semantic-ui-react';

import TastingList from 'containers/pages/TastingList';
import TastingSheet from 'containers/pages/TastingSheet';

import paths from 'paths';

const App: FC = () => (
  <div className="App">
    <Container style={{ padding: '1rem 0' }}>
      <Switch>
        <Route path={paths.tasting} component={TastingSheet} />
        <Route path={paths.tastingNew} component={TastingSheet} />
        <Route path={paths.list} component={TastingList} />
        <Redirect to={paths.list} />
      </Switch>
    </Container>
  </div>
);

export default App;
