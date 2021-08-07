import { createRef, useContext, useState } from "react";
import { HOME_ROUTE } from "../../../routes";
import { loginUser } from "../../../util/auth";
import { UserContext } from "../../../util/userContext";


const Login = (props) => {

    let {setUser} = useContext(UserContext);
    let [error,setError] = useState(null) ;
    let usernameRef = createRef() ;
    let passwordRef = createRef() ;

    const handleLogin = () => {
        let username = usernameRef.current.value ;
        let password = passwordRef.current.value ;
        loginUser(username,password,(data,error) => {
            if(error) {
                setError(error.code) ;
            } else {
                // set user and redirect to home page
                setUser(data);
                props.history.push(HOME_ROUTE);
            }
        });
    }

    return ( 
        <div className="login-page">
            <input ref={usernameRef} type="text" />
            <input ref={passwordRef} type="password" />
            <button onClick={handleLogin}>Login</button>
            <div className="errors">
                {error}
            </div>
        </div>
    );
}
 
export default Login;