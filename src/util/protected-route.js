import { Route } from "react-router-dom";
import AccessDenied from "../components/pages/access-denied/access-denied";

/**
 * This Component checks if the user is logged in or not
 * It redirects to login page if user is not logged in
 * @param  {Object} user        Current User Object
 * @param  {String} redirect    Path to page to redirect if usr is not logged in
 * @param  {Object} component   Component to render if user is loged in
 */
const ProtectedRoute = ({ user, redirect, component, ...rest }) => {
    return (
        <>
            {user ? (
                <Route {...rest} component={component} />
            ) : (
                <AccessDenied />
            )}
        </>
    );
};

export default ProtectedRoute;
