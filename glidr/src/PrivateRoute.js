/*
    1. It has the same API as <Route />.
    2. It renders a <Route /> and passes all the props through to it.
    3. It checks if the user is authenticated, if they are, it renders the “component” prop. If not, it redirects the user to /login.
*/

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem('token')) {
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;

// props = {
//     component: GasPrice,
//     path: '/protected',
//     exact: true
// }

// const Component = props.component;
// const rest = {
//     path: props.path,
//     exact: props.exact
// }