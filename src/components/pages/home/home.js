import { useContext } from "react";
import { LOGIN_ROUTE } from "../../../routes";
import { UserContext } from "../../../util/userContext";


const Home = (props) => {

    const {setUser} = useContext(UserContext);

    const logoutUser = () => {
        setUser(null);
        props.history.push(LOGIN_ROUTE);
    }

    return (
        <div className="login">
            Home page
        </div>
    );
};

export default Home;
