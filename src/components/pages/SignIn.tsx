import React, { FC } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

type Props = {
  auth: firebase.auth.Auth | null;
  uiConfig: firebaseui.auth.Config;
};

const SignIn: FC<Props> = ({ auth, uiConfig }) => {
  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1">Sign in</Header>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </Grid.Column>
    </Grid>
  );
};

export default SignIn;
