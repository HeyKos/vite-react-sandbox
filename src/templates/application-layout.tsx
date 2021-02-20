import * as React from "react";
import { NestedRoutes } from "andculturecode-javascript-react";
import { siteMap } from "sitemap";

// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------

const COMPONENT_CLASS = "c-application-layout";

// #endregion Constants

// ---------------------------------------------------------------------------------------------
// #region Component
// ---------------------------------------------------------------------------------------------

const ApplicationLayout: React.FC<any> = (props: any) => {
    return (
        <React.Fragment>
            <div className={COMPONENT_CLASS}>
                <div className={`${COMPONENT_CLASS}__panel`}>
                    <NestedRoutes
                        isAuthenticated={false}
                        redirectToIfNotFound={siteMap.errors.notFound}
                        redirectToIfUnauthenticated={siteMap.errors.accessDenied}
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