import React from "react";
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

const App: React.FC = () => {
  const routeArray = CoreUtils.objectToArray(routes);

  return (
    <Router>
      <React.Fragment>
        {/*
        ------------------------------------------------------------------------------------------
        Main Content
        ------------------------------------------------------------------------------------------
        */}
        <Switch>
            <NestedRoutes
                isAuthenticated={false}
                redirectToIfNotFound={siteMap.errors.notFound}
                redirectToIfUnauthenticated={siteMap.errors.accessDenied}
                routes={routeArray}
            />
        </Switch>
      </React.Fragment>
    </Router>
  )
};

export default App
