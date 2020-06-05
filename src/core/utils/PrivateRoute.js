import React from "react";
import { Route,Redirect } from "react-router-dom";
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children, ...rest }) => {
   const { isUserLogin } = useSelector(state => state.user);
    return (
      <Route
        {...rest}
        render={({ location }) =>
        isUserLogin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;
   
  