import React, { FC, useContext } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import FirebaseContext from 'contexts';

const Login: FC = () => {
  const { auth } = useContext(FirebaseContext);
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

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1">Login</Header>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </Grid.Column>
    </Grid>
  );
};

export default Login;
