import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Container } from 'semantic-ui-react';

import TastingList from 'containers/pages/TastingList';
import TastingSheet from 'containers/pages/TastingSheet';

const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Container style={{ padding: '1rem 0' }}>
          <Switch>
            <Route path="/tastingSheet">
              <TastingSheet />
            </Route>
            <Route path="/">
              <TastingList />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
};

export default App;
