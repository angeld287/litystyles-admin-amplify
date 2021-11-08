import React from 'react';
import HeaderLinks from './components/HeaderLinks';
import { ProtectedRouteAdmin } from './hoc/Permissions'

// import { Auth } from 'aws-amplify';

import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports'; 
// import aws_exports_prod from './aws-exports-prod'; 

Amplify.configure(aws_exports); 

const AppWithRouter = () => {

  return  (
            <Router>
              <HeaderLinks/>
              <Switch>
                <Route exact path="/" render={() => <h1>test</h1>} />
                <ProtectedRouteAdmin exact path="/" render={<h2>test2</h2>} props={{test: "test"}} />
              </Switch>
            </Router>
          );
};

export default AppWithRouter;