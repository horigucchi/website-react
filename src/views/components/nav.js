import { NavLink, Route, BrowserRouter, Switch } from "react-router-dom";
import { Home, About } from "../pages/pages";

const url = "/website-react";

export function Nav() {
    return (
        <>
            <NavLink
                exact
                to={url + "/"}
                activeStyle={{ color: "#aaa", textDecoration: "underline" }}
            >
                HOME
            </NavLink>
            <NavLink
                exact
                to={url + "/about"}
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
                <Route exact path={url + "/"} component={Home}></Route>
                <Route exact path={url + "/about"} component={About}></Route>
            </Switch>
        </>
    );
}
