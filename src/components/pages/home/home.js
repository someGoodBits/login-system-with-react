import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../../util/userContext";

const Home = () => {
    let { user, setUser } = useContext(UserContext);

    return (
        <div className="login">
            Home page
            <button
                onClick={() => {
                    setUser(null);
                }}
            >
                Logout
            </button>
        </div>
    );
};

export default Home;
