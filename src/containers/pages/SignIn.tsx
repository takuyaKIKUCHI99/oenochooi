import React, { FC, useContext } from 'react';
import firebase from 'firebase/app';
import FirebaseContext from 'contexts';

import SignIn from 'components/pages/SignIn';

const EnhancedSignIn: FC = () => {
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

  return <SignIn auth={auth} uiConfig={uiConfig} />;
};

export default EnhancedSignIn;
