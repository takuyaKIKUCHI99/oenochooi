import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import List from 'containers/pages/List';
import TastingSheet from 'containers/pages/TastingSheet';

const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/tasting-sheet">
          <TastingSheet wineType="red" />
        </Route>
        <Route path="/">
          <List />
        </Route>
      </div>
    </Router>
  );
};

export default App;
