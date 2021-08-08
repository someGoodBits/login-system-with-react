import "./forms.css";

const Forms = ({title,children}) => {
    return ( 
        <div className="form">
            <div className="form-title">{title}</div>
            <div className="form-body">
                {children}
            </div>
        </div> 
    );
}
 
export default Forms;