import { createRef, useContext } from "react";
import { HOME_ROUTE } from "../../../routes";
import { signupUser } from "../../../util/auth";
import { UserContext } from "../../../util/userContext";


const Signup = (props) => {

    let usernameRef = createRef();
    let passwordRef = createRef();
    let {setUser} = useContext(UserContext);

    const handleSignup = () => {
        let username = usernameRef.current.value ;
        let password = passwordRef.current.value ;
        signupUser(username,password,(user)=>{
            setUser(user);
            props.history.push(HOME_ROUTE);
        });
    }

    return ( 
        <div className="signup">
            <input ref={usernameRef} type="text" />
            <input ref={passwordRef} type="password" />
            <button onClick={handleSignup}>Sign up</button>
        </div> 
    );
}
 
export default Signup;