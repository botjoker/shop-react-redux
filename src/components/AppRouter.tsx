import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom'
import { publicRoutes, RouteNames } from "../utils/router";

const AppRouter = () => {
    return (
        <Switch>
            {
                publicRoutes.map(route => 
                    <Route 
                        path={route.path} 
                        exact={route.exact} 
                        component={route.component} 
                        key={route.path}
                    />
                )
            }
            <Redirect to={RouteNames.MAIN_PAGE}/>
        </Switch>
    )
};

export default AppRouter