import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "./userContext";


const ProtectedRoute = ({component, ...rest }) => {

    let {user} = useContext(UserContext);

    return ( 
        <>
            { user ? 
                <Route {...rest} component={component}/> 
            :
                <Redirect to="/login" />
            }
        </>
    );
}
 
export default ProtectedRoute;