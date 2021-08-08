/* Import Assets */
import "./login.css";
import "../../../styles/forms.css" ;
import {ReactComponent as UserIcon} from "../../../assets/icons/user.svg" ;
import {ReactComponent as LockIcon} from "../../../assets/icons/lock.svg" ;

/* Import Components */
import { createRef, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HOME_ROUTE, SIGNUP_ROUTE } from "../../../routes";
import { loginUser } from "../../../util/auth";
import { UserContext } from "../../../util/userContext";
import Nav from "../../nav/nav";
import Forms from "../../forms/forms";
import TextField from "../../forms/input/text-field";
import PasswordField from "../../forms/input/password-field";


const Login = (props) => {

    let {setUser} = useContext(UserContext);
    let [error,setError] = useState(null) ;
    let usernameRef = createRef() ;
    let passwordRef = createRef() ;
    let [usernameError,setUsernameError] = useState([]) ;
    let [passwordError,setPasswordError] = useState([]) ;

    const handleLogin = () => {
        let username = usernameRef.current.value ;
        let password = passwordRef.current.value ;

        let hasError = false ;

        if(username === "" ){
            setUsernameError(["Must Not Be Empty"]);
            hasError = true ;
        }

        if(password === "" ){
            setPasswordError(["Must Not Be Empty"]);
            hasError = true ;
        }

        if(!hasError)
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

    let buttons = [
        <div className="msg">Don't have a Account?</div>,
        <Link to={SIGNUP_ROUTE}>
            <button className="hollow">Sign up</button>
        </Link>
    ];

    return ( 
        <div className="login-page">
            <Nav title="Login" buttons={buttons} />
            <div className="container">
                <div className="form-container">
                    <Forms title="Login">
                        {error && <div className="error">{error}</div>}
                        <TextField error={usernameError} passRef={usernameRef} placeholder="Username" icon={<UserIcon />}/>
                        <PasswordField error={passwordError} passRef={passwordRef} placeholder="Password" icon={<LockIcon />}/>
                        <div className="actions">
                            <Link to={SIGNUP_ROUTE}>
                            <button className="hollow">Signup Instead</button>
                            </Link>
                            <button className="filled" onClick={handleLogin}>Login</button>
                        </div>
                    </Forms>
                </div>
            </div>
        </div>
    );
}
 
export default Login;