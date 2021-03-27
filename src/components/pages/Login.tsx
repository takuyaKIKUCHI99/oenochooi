import React, { FC } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../../firebase';

const uiConfig: firebaseui.auth.Config = {
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      customParameters: { lang: 'ja' },
    },
  ],
  callbacks: {
    signInSuccessWithAuthResult: (
      authResult: firebase.auth.UserCredential,
      redirectUrl: string,
    ) => {
      console.log({ authResult });
      console.log({ redirectUrl });

      return false;
    },
  },
};

const Login: FC = () => (
  <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h1">Login</Header>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </Grid.Column>
  </Grid>
);

export default Login;
