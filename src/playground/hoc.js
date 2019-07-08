import React from 'react';
import ReactDom from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => props => (
  <div>
    {props.isAdmin && <p>This is private Info.</p>}
    <WrappedComponent {...props} />
  </div>
);

const requireAuthentication = WrappedComponent => props => (
  <div>
    {!props.isAuthenticated && <p>Please login to view</p>  <WrappedComponent {...props} />}
   
  </div>
);

// requireAuthentication

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDom.render(
  // <AdminInfo isAdmin info="These are the details" />
  <AuthInfo isAuthenticated={false} info="These are the details" />,
  document.getElementById('app')
);
