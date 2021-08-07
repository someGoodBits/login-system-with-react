import { Route } from "react-router-dom";

const ProtectedRoute = ({component, ...rest }) => {
    return ( 
        <>
            PROTECTED_ROUTE
            <Route {...rest} component={component}/>
        </>
    );
}
 
export default ProtectedRoute;