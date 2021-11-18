import React from 'react';
import currentUser from './context/currentUser/currentUser.Context'
import communContext from './context/communContex/commun.context';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
// import aws_exports_prod from './aws-exports-prod';

import ProductProvider from './providers/products/products.provider';
import AuthComponent from './components/Authentication/AuthComponent';
import AppRoutes from './Routes';

Amplify.configure(aws_exports);

const App = () => {
  const [user, setUser] = React.useState(JSON.parse(sessionStorage.getItem('CURRENT_USER_SESSION')));
  const [error, setError] = React.useState(null);

  const setLoggedUserInfo = (_currentUser) => {
    sessionStorage.setItem('CURRENT_USER_SESSION', JSON.stringify(_currentUser));
    const userFromStorage = JSON.parse(sessionStorage.getItem('CURRENT_USER_SESSION'))
    setUser(userFromStorage);
  }

  const setUserToNull = () => {
    sessionStorage.setItem('CURRENT_USER_SESSION', null);
    setUser(null);
  }

  return (
    <ProductProvider>
      <currentUser.Provider value={{
        user: user, onUserLogOut: setUserToNull, onUserSignIn: setLoggedUserInfo
      }}>
        <communContext.Provider value={{ error: error, setError: (_) => { setError(_) } }}>
          <AuthComponent>
            <AppRoutes user={user} />
          </AuthComponent>
        </communContext.Provider>
      </currentUser.Provider>
    </ProductProvider>
  );
};

export default App;