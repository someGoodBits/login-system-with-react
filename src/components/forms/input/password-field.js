import { useState } from "react";
import "./input.css" ;
import {ReactComponent as EyeOpenIcon } from "../../../assets/icons/eye-open.svg" ;
import {ReactComponent as EyeCloseIcon } from "../../../assets/icons/eye-close.svg" ;

const PasswordField = ({passRef,placeholder="",icon,error=[]}) => {
    // we can add extra validation stuff here like minlength etc
    let hasError = error && error.length > 0 ;

    const [showPassword,setShowPassword] = useState(false) ;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return ( 
        <div className={"password field" + (icon ? " icon" : "")}>
            {icon ? <div className="icon">{icon}</div> : ""}
            <input ref={passRef} type={showPassword ? "text" : "password"} className={hasError ? "invalid" : ""} placeholder={placeholder} />
            <div className="pass-toggle-btn" onClick={togglePasswordVisibility}>
                {showPassword ?  <EyeCloseIcon/>  : <EyeOpenIcon/> }
            
            </div>
            {hasError ? (
                <div className="error-list">
                    {error.map((err,i) => <div key={i} className="error">{err}</div>)}
                </div>
            ):""}
        </div> 
    );
}
 
export default PasswordField;