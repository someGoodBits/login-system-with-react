import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../../util/userContext";

const Login = () => {

    let {user,setUser} = useContext(UserContext);

    return ( 
        <>
            { user ?
                <Redirect to="/" />
             : 
                <div className="login">
                    Login
                    <button onClick={()=>{
                        setUser({
                            username : "admin",
                            bio : "Hello i am Admin"
                        });
                    }}>Login</button>
                </div>
            }
        </>
    );
}
 
export default Login;