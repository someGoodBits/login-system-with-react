import { Link } from "react-router-dom";
import "./nav.css";

const Nav = ({title = "",buttons = []}) => {
    return ( 
    <div className="nav">
        <div className="site-logo">
            <Link to="/">SITE LOGO</Link>
            <span className="title">{title}</span>
        </div>
        <div className="buttons">
            {buttons.map((button,i) => <div key={i}>{button}</div>)}
        </div>
    </div> );
}
 
export default Nav;