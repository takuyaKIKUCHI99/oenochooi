import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container } from 'semantic-ui-react';

import List from 'containers/pages/List';
import TastingSheet from 'containers/pages/TastingSheet';

const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Container style={{ padding: '1rem 0' }}>
          <Route path="/tasting-sheet">
            <TastingSheet wineType="red" />
          </Route>
          <Route path="/">
            <List />
          </Route>
        </Container>
      </div>
    </Router>
  );
};

export default App;
