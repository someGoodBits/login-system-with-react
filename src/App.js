import "./App.css";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom" ;
import Home from "./components/pages/home/home";
import Login from "./components/pages/login/login";
import Signup from "./components/pages/signup/signup";
import PageNotFound from "./components/pages/page-not-found/page-not-found";
import ProtectedRoute from "./components/protected-route/protected-route";

function App() {
    return (
        <Router>
            <Switch>
                <ProtectedRoute exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </Router>
    );
}

export default App;
