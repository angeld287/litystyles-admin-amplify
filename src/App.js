import React, { useContext } from 'react';
import CurrentUserProvider from './providers/currentUser/currentUser.provider'
import communContext from './context/communContex/commun.context';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
// import aws_exports_prod from './aws-exports-prod';

import AuthComponent from './components/Authentication/AuthComponent';
import AppRoutes from './Routes';
import "./App.css"
import { CategorieProvider, SubCategorieProvider, ProductProvider, currentUser } from './providers/index';

Amplify.configure(aws_exports);

const App = () => {
  const [error, setError] = React.useState(null);

  const userContext = useContext(currentUser);

  return (
    <CurrentUserProvider>
      <AuthComponent>
        <ProductProvider>
          <CategorieProvider>
            <SubCategorieProvider>
              <communContext.Provider value={{ error: error, setError: (_) => { setError(_) } }}>
                <AppRoutes user={userContext.user} />
              </communContext.Provider>
            </SubCategorieProvider>
          </CategorieProvider>
        </ProductProvider>
      </AuthComponent>
    </CurrentUserProvider>
  );
};

export default App;