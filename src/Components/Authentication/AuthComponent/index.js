import React, { useContext } from 'react';
import { Authenticator } from 'aws-amplify-react';
import { Auth } from 'aws-amplify';
import queryString from 'query-string';
import currentUser from '../../../context/currentUser/currentUser.Context';
import PropTypes from 'prop-types'

export const LogOut = async () => {
  await Auth.signOut();
}

export const getCurrentUser = async () => {
  return await Auth.currentSession();
}

const AuthComponent = ({ location, history }) => {
  const user = useContext(currentUser);

  const handleStateChange = async (state) => {
    const values = queryString.parse(location.search)
    if (state === 'signedIn') {
      const currentUser = await getCurrentUser();
      user.onUserSignIn(currentUser);
      if (location.search !== null && location.search !== '') {
        history.push(values.redirect);
      } else {
        history.push('/');
      }
    } else if (state === 'signIn') {
      user.onUserLogOut();
    }
  };

  return (
    <div>
      <Authenticator
        authState="signIn"
        hideDefault={false}
        onStateChange={handleStateChange}
      >
      </Authenticator>
    </div>
  );
}

AuthComponent.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object
}

export default AuthComponent;