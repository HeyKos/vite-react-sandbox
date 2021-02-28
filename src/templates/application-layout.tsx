import React, { useContext } from "react";
import { NestedRoutes } from "andculturecode-javascript-react";
import { siteMap } from "sitemap";
import { AuthContext } from "AuthProvider";
import "./application-layout.scss";
import MainNavigation from "molecules/main-navigation";

const COMPONENT_CLASS = "c-application-layout";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ApplicationLayout: React.FC<any> = (props: any) => {
    const authContext = useContext(AuthContext);
    return (
        <div className={COMPONENT_CLASS}>
            <MainNavigation user={authContext.user ?? undefined} />
            <div className={`${COMPONENT_CLASS}__panel`}>
                <NestedRoutes
                    isAuthenticated={authContext.authenticated ?? false}
                    redirectToIfNotFound={siteMap.errors.notFound}
                    redirectToIfUnauthenticated={siteMap.auth.login}
                    routes={props.routes}
                />
            </div>
        </div>
    );
};

export default ApplicationLayout;
