import React, { useContext } from 'react';
import { userContext } from '../../App';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
  } from "react-router-dom";
  
const Privetroute = ({ children, ...rest }) => {
    const [loogeduser,setLoogeduser]=useContext(userContext)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loogeduser.email ? (
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
};

export default Privetroute;