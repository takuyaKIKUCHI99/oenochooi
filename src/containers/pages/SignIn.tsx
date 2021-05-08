import React, { FC, useContext } from 'react';
import firebase from 'firebase/app';
import { FirebaseContext } from 'contexts';

import SignIn from 'components/pages/SignIn';

import paths from 'paths';

const EnhancedSignIn: FC = () => {
  const { auth } = useContext(FirebaseContext);

  const uiConfig: firebaseui.auth.Config = {
    signInOptions: [
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        customParameters: { lang: 'ja' },
      },
    ],
    signInSuccessUrl: paths.list,
  };

  return <SignIn auth={auth} uiConfig={uiConfig} />;
};

export default EnhancedSignIn;
