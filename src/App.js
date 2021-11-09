import React from 'react';
import HeaderLinks from './components/HeaderLinks';
import { ProtectedRouteAdmin } from './hoc/Permissions'
import currentUserContext from './context/currentUser/currentUser.Context'
import homeContext from './context/currentUser/homeContex/home.Context';

import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports'; 

// import aws_exports_prod from './aws-exports-prod'; <ProppedRoute exact path="/signin" render={AuthComponent} props={{test: "test"}} />

import Home from './pages/Home';

Amplify.configure(aws_exports);


const AppWithRouter = () => {
  const [_logged, setLogged] = React.useState(false);
  const [text, setText] = React.useState('primer valor');
  

  return  (
          
                              <Router>
                                <currentUserContext.Provider value={{logged: _logged, toggleLogged: () => {setLogged(!_logged)}}}>
                                  <HeaderLinks />
                                </currentUserContext.Provider>
                                <Switch>
                                  <homeContext.Provider value={{test: text, setTest: () => {setText(prev => prev+" _ ")}}}>
                                    <Route exact path="/" render={() => <Home/>} />
                                  </homeContext.Provider>
                                  <ProtectedRouteAdmin exact path="/" render={<h2>test2</h2>} props={{test: "test"}} />
                                </Switch>
                              </Router>

          );
};

export default AppWithRouter;