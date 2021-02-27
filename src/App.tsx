import React, { useContext } from "react";
import { NestedRoutes } from "andculturecode-javascript-react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { routes } from "routes";
import { siteMap } from "sitemap";
import { CoreUtils } from "andculturecode-javascript-core";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'App.css'
import { AuthContext, AuthProvider } from "AuthProvider";

const App: React.FC = () => {
  const routeArray = CoreUtils.objectToArray(routes);
  const {loadingAuthState, authenticated} = useContext(AuthContext);

  if (loadingAuthState) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <AuthProvider>
      <Router>
        <React.Fragment>
          {/*
          ------------------------------------------------------------------------------------------
          Main Content
          ------------------------------------------------------------------------------------------
          */}
          <Switch>
              <NestedRoutes
                isAuthenticated={authenticated ?? false}
                redirectToIfNotFound={siteMap.errors.notFound}
                redirectToIfUnauthenticated={siteMap.auth.login}
                routes={routeArray} />
          </Switch>
        </React.Fragment>
      </Router>
    </AuthProvider>
  )
};

export default App
