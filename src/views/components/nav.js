import { NavLink, Route, BrowserRouter, Switch } from "react-router-dom";
import { Home, About } from "../pages/pages";

export function Nav() {
    return (
        <>
            <NavLink
                exact
                to="/"
                activeStyle={{ color: "#aaa", textDecoration: "underline" }}
            >
                HOME
            </NavLink>
            <NavLink
                exact
                to="/about"
                activeStyle={{ color: "#aaa", textDecoration: "underline" }}
            >
                ABOUT
            </NavLink>
        </>
    );
}

export function Content() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
            </Switch>
        </>
    );
}
