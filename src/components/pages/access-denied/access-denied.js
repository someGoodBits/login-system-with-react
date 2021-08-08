import "./access-denied.css" ;
import { Link } from "react-router-dom"
import {ReactComponent as RightArrowIcon} from "../../../assets/icons/right-arrow.svg" ;

const AccessDenied = () => {
    return ( 
        <div className="access-denied">
            <span className="msg">You don't have <b>Permissions</b> to see this page</span>
            <Link to="/login">
                <div className="fancy-btn">
                    <span>Go to Login Page</span>
                    <span className="icon">
                        <RightArrowIcon stroke="#fff" />
                    </span>
                </div>
            </Link>
        </div> 
    );
}
 
export default AccessDenied;