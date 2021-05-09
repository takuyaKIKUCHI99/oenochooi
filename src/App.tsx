import React, { FC, useContext, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import { Container } from 'semantic-ui-react';

import TastingList from 'containers/pages/TastingList';
import TastingSheet from 'containers/pages/TastingSheet';

import paths from 'paths';
import { UserContext, FirebaseContext } from './contexts';

const App: FC = () => {
  const history = useHistory();
  const { auth } = useContext(FirebaseContext);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    if (auth) {
      auth.onAuthStateChanged((authUser) => {
        if (!authUser) history.push('/signIn');
        setUser(authUser);
      });
    }
  }, [auth, history, setUser]);

  return (
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
};

export default App;
