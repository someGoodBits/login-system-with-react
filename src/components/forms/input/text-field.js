import "./input.css" ;
const TextField = ({passRef,placeholder="",icon,error=[]}) => {
    // we can add extra validation stuff here like minlength etc
    let hasError = error && error.length > 0 ;

    return ( 
        <div className={"field" + (icon ? " icon" : "")}>
            {icon ? <div className="icon">{icon}</div> : ""}
            <input ref={passRef} type="text" className={hasError ? "invalid" : ""} placeholder={placeholder} />
            {hasError ? (
                <div className="error-list">
                    {error.map((err,i) => <div key={i} className="error">{err}</div>)}
                </div>
            ):""}
        </div> 
    );
}
 
export default TextField;