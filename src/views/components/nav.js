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
            <NavLink
                exact
                to={url + "/skills"}
                activeStyle={{ color: "#aaa", textDecoration: "underline" }}
            >
                SKILLS
            </NavLink>
            <NavLink
                exact
                to={url + "/works"}
                activeStyle={{ color: "#aaa", textDecoration: "underline" }}
            >
                WORKS
            </NavLink>
            <NavLink
                exact
                to={url + "/contact"}
                activeStyle={{ color: "#aaa", textDecoration: "underline" }}
            >
                CONTACT
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
