import React, { useContext } from 'react';
import { Auth } from 'aws-amplify';
import currentUser from '../../../context/currentUser/currentUser.Context';
import PropTypes from 'prop-types'

export const LogOut = async () => {
  await Auth.signOut();
}

export const getCurrentUser = async () => {
  return await Auth.currentSession();
}

const AuthComponent = () => {
  const user = useContext(currentUser);
  console.log(user)
  return (
    <div>
      <h1>test</h1>
    </div>
  );
}

AuthComponent.propTypes = {
  children: PropTypes.any
}

export default AuthComponent;