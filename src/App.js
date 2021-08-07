import "./App.css";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom" ;
import { UserContext } from "./util/userContext";
import { useEffect, useState } from "react";

/* Pages and Components */
import Home from "./components/pages/home/home";
import Login from "./components/pages/login/login";
import Signup from "./components/pages/signup/signup";
import PageNotFound from "./components/pages/page-not-found/page-not-found";
import ProtectedRoute from "./util/protected-route";


function App() {

    // state variable user to store current user
    const [user,setUser] = useState(null);

    // load persited user if any
    useEffect(()=>{
        let user = localStorage.getItem("user") ;
        if(user) {
            setUser(JSON.parse(user));
        }
    },[]);

    // Save user any time user changes
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(user));
    },[user]);

    return (
        <UserContext.Provider value={{user,setUser}}>
            <Router>
                <Switch>
                    <ProtectedRoute exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
