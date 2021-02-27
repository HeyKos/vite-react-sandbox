import React, { useContext } from "react";
import { NestedRoutes } from "andculturecode-javascript-react";
import { siteMap } from "sitemap";
import { AuthContext } from "AuthProvider";

// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------

const COMPONENT_CLASS = "c-application-layout";

// #endregion Constants

// ---------------------------------------------------------------------------------------------
// #region Component
// ---------------------------------------------------------------------------------------------

const ApplicationLayout: React.FC<any> = (props: any) => {
    const authContext = useContext(AuthContext);
    return (
        <React.Fragment>
            <div className={COMPONENT_CLASS}>
                <div className={`${COMPONENT_CLASS}__panel`}>
                    <NestedRoutes
                        isAuthenticated={authContext.authenticated ?? false}
                        redirectToIfNotFound={siteMap.errors.notFound}
                        redirectToIfUnauthenticated={siteMap.auth.login}
                        routes={props.routes}
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

// #endregion Component

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export default ApplicationLayout;

// #endregion Exports