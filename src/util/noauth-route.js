import { Redirect, Route } from "react-router-dom";

/**
 * This Component allows route only if user is not logged in
 * @param  {Object} user        Current User Object
 * @param  {String} redirect    Path to page to redirect if user is logged in
 * @param  {Object} component   Component to render if user is not loged in
 */
const NoAuthRoute = ({ user, redirect, component, ...rest }) => {
    return user ? (
        <Redirect to={redirect} />
    ) : (
        <Route {...rest} component={component} />
    );
};

export default NoAuthRoute;
