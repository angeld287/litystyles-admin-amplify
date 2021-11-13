import React from 'react';
import HeaderLinks from './components/HeaderLinks';
import currentUser from './context/currentUser/currentUser.Context'
import communContext from './context/communContex/commun.context';

import {
  BrowserRouter as Router, Switch
} from 'react-router-dom';

import Amplify from 'aws-amplify';

import aws_exports from './aws-exports';
// import aws_exports_prod from './aws-exports-prod';

import Home from './pages/Home';
import { ProppedRoute, ProtectedRouteAdmin } from './hoc/Permissions';
import AuthComponent from './components/Authentication/AuthComponent';
import ProductProvider from './providers/products/products.provider';
import Business from './pages/Business';

Amplify.configure(aws_exports);

const AppWithRouter = () => {
  const [user, setUser] = React.useState(JSON.parse(sessionStorage.getItem('CURRENT_USER_SESSION')));
  const [commun, setCommun] = React.useState({});

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
        <communContext.Provider value={{ commun: commun, setCommun: (_) => { setCommun(p => { return { ...p, _ } }) } }}>
          <Router>
            <HeaderLinks />
            <Switch>
              <ProtectedRouteAdmin exact path="/" render={Home} user={user} />
              <ProtectedRouteAdmin exact path="/business" render={Business} user={user} />
              <ProppedRoute exact path="/signin" render={AuthComponent} />
            </Switch>
          </Router>
        </communContext.Provider>
      </currentUser.Provider>
    </ProductProvider>
  );
};

export default AppWithRouter;