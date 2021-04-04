import React, { FC, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import { FirebaseContext, UserContext } from 'contexts';

import SignIn from 'components/pages/SignIn';

import paths from 'paths';

const EnhancedSignIn: FC = () => {
  const { auth } = useContext(FirebaseContext);
  const { setCredential } = useContext(UserContext);
  const history = useHistory();

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
        if (!authResult) throw new Error('Signin failed');
        setCredential(authResult);
        const dest = redirectUrl || paths.list;
        history.replace(dest);

        return false;
      },
    },
  };

  return <SignIn auth={auth} uiConfig={uiConfig} />;
};

export default EnhancedSignIn;
