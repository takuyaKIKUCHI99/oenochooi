import React, { FC, useContext, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Container } from 'semantic-ui-react';

import SignIn from 'containers/pages/SignIn';
import TastingList from 'containers/pages/TastingList';
import TastingSheet from 'containers/pages/TastingSheet';

import paths from 'paths';
import { UserContext, FirebaseContext } from './contexts';

const App: FC = () => {
  const { auth } = useContext(FirebaseContext);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (auth) {
      auth.onAuthStateChanged((authUser) => {
        setUser(authUser);
      });
    }
  }, [auth, setUser]);

  return (
    <div className="App">
      <Container style={{ padding: '1rem 0' }}>
        {!user ? (
          <Switch>
            <Route path={paths.signIn} component={SignIn} />
            <Redirect to={paths.signIn} />
          </Switch>
        ) : (
          <Switch>
            <Route path={paths.tasting} component={TastingSheet} />
            <Route path={paths.tastingNew} component={TastingSheet} />
            <Route path={paths.list} component={TastingList} />
            <Redirect to={paths.list} />
          </Switch>
        )}
      </Container>
    </div>
  );
};

export default App;
