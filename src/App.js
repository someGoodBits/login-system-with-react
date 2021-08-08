import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "./util/userContext";
import { useEffect, useState } from "react";
import * as AppRoutes from "./routes";
import ProtectedRoute from "./util/protected-route";
import NoAuthRoute from "./util/noauth-route";

/* Pages and Components */
import Home from "./components/pages/home/home";
import Login from "./components/pages/login/login";
import Signup from "./components/pages/signup/signup";
import PageNotFound from "./components/pages/page-not-found/page-not-found";

function App() {
    // state variable user to store current user
    const [user, setUser] = useState(null);

    // load persited user if any
    useEffect(() => {
        let user = localStorage.getItem("user");
        if (user) {
            setUser(JSON.parse(user));
        }
    }, []);

    // Save user any time user changes
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Router>
                <Switch>
                    <ProtectedRoute
                        exact
                        path={AppRoutes.HOME_ROUTE}
                        user={user}
                        redirect={AppRoutes.HOME_ROUTE}
                        component={Home}
                    />
                    <NoAuthRoute
                        exact
                        path={AppRoutes.LOGIN_ROUTE}
                        user={user}
                        redirect={AppRoutes.HOME_ROUTE}
                        component={Login}
                    />
                    <NoAuthRoute
                        exact
                        path={AppRoutes.SIGNUP_ROUTE}
                        user={user}
                        redirect={AppRoutes.HOME_ROUTE}
                        component={Signup}
                    />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
