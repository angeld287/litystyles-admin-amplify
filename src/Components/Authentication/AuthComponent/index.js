import React, { useContext } from 'react';

import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { Auth } from 'aws-amplify';

import currentUser from '../../../context/currentUser/currentUser.Context';
import PropTypes from 'prop-types'

export const LogOut = async () => {
  await Auth.signOut();

}

export const getCurrentUser = async () => {
  return await Auth.currentSession();
}

const AuthComponent = ({ children }) => {
  const [authState, setAuthState] = React.useState();
  const userContext = useContext(currentUser);

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);

      if (nextAuthState === AuthState.SignedIn) {
        userContext.onUserSignIn(authData);
      } else if (nextAuthState === AuthState.SignIn) {
        userContext.onUserLogOut();
      }

    });
  }, []);

  return authState === AuthState.SignedIn && userContext.user ? (
    <div className="App">
      {children}
    </div>
  ) : (
    <AmplifyAuthenticator />
  );

}

AuthComponent.propTypes = {
  children: PropTypes.any
}

export default AuthComponent;