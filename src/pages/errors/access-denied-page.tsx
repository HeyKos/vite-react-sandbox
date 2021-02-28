import * as React from "react";

const AccessDeniedPage: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <main className="c-access-denied-page">
        <h1>We can't let you see this page</h1>
        <p>To access this page, you may need to log in.</p>
      </main>
    </React.Fragment>
  );
};

export default AccessDeniedPage;
