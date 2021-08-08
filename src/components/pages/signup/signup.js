import { createRef, useContext, useState } from "react";
import { HOME_ROUTE, LOGIN_ROUTE } from "../../../routes";
import { signupUser } from "../../../util/auth";
import { UserContext } from "../../../util/userContext";
import Forms from "../../forms/forms";
import PasswordField from "../../forms/input/password-field";
import TextField from "../../forms/input/text-field";
import Nav from "../../nav/nav";

import {ReactComponent as UserIcon} from "../../../assets/icons/user.svg" ;
import {ReactComponent as LockIcon} from "../../../assets/icons/lock.svg" ;
import { Link } from "react-router-dom";

const Signup = (props) => {

    let usernameRef = createRef();
    let passwordRef = createRef();
    let {setUser} = useContext(UserContext);
    let [error,setError] = useState(null) ;
    let [usernameError,setUsernameError] = useState([]) ;
    let [passwordError,setPasswordError] = useState([]) ;

    const handleSignup = () => {
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
            signupUser(username,password,(user)=>{
                if(error) {
                    setError(error.code) ;
                } else {
                    // set user and redirect to home page
                    setUser(user);
                    props.history.push(HOME_ROUTE);
                }
            });
    }

    let buttons = [
        <div className="msg">Already Have a Account?</div>,
        <Link to={LOGIN_ROUTE}>
            <button className="hollow">Login</button>
        </Link>
    ];

    return ( 
        <div className="signup-page">
            <Nav title="Sign up" buttons={buttons} />
            <div className="container">
                <div className="form-container">
                    <Forms title="Sign up">
                        {error && <div className="error">{error}</div>}
                        <TextField error={usernameError} passRef={usernameRef} placeholder="Username" icon={<UserIcon />}/>
                        <PasswordField error={passwordError} passRef={passwordRef} placeholder="Password" icon={<LockIcon />}/>
                        <div className="actions">
                            <Link to={LOGIN_ROUTE}>
                            <button className="hollow">Login instead</button>
                            </Link>
                            <button className="filled" onClick={handleSignup}>Sign up</button>
                        </div>
                    </Forms>
                </div>
            </div>
        </div>
    );
}
 
export default Signup;