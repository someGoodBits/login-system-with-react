import { Link } from "react-router-dom"

const AccessDenied = () => {
    return ( <div className="access-denied">
        You Dont Have Permission to see this page
        <Link to="/login">Go To Login Page</Link>
    </div> );
}
 
export default AccessDenied;