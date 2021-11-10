import React from 'react';
import HeaderLinks from './components/HeaderLinks';
import currentUser from './context/currentUser/currentUser.Context'
import communContext from './context/communContex/commun.Context';

import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';

import Amplify from 'aws-amplify';

import aws_exports from './aws-exports';
// import aws_exports_prod from './aws-exports-prod';

import Home from './pages/Home';
import { ProppedRoute } from './hoc/Permissions';
import AuthComponent from './components/Authentication/AuthComponent';

Amplify.configure(aws_exports);

const AppWithRouter = () => {
  const [user, setUser] = React.useState(null);
  const [commun, setCommun] = React.useState({});

  return  (   
        <currentUser.Provider value={{user: user, onUserLogOut: () => setUser(null), onUserSignIn: (_currentUser) => setUser(_currentUser)}}>
          <communContext.Provider value={{commun: commun, setCommun: (_) => {setCommun(p => {return {...p, _}})}}}>
            <Router>
              <HeaderLinks />
              <Switch>
                <Route exact path="/" render={() => <Home/>} />
                <ProppedRoute exact path="/signin" render={AuthComponent} />
              </Switch>
            </Router>
          </communContext.Provider>
        </currentUser.Provider>
      );
};

export default AppWithRouter;