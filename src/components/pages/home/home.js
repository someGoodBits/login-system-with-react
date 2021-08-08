import "./home.css" ;
import { useContext } from "react";
import { LOGIN_ROUTE } from "../../../routes";
import { UserContext } from "../../../util/userContext";
import Nav from "../../nav/nav";
import ProfileCard from "../../profile-card/profile-card";


const Home = (props) => {

    const {user,setUser} = useContext(UserContext);

    const logoutUser = () => {
        setUser(null);
        props.history.push(LOGIN_ROUTE);
    }
    let buttons = [
        <button className="filled" onClick={logoutUser}>Sign out</button>
    ];

    return (
        <>
        <Nav title="Home" buttons={buttons}/>
        <div className="container">
            <ProfileCard user={user}/>
        </div>
        </>
    );
};

export default Home;
