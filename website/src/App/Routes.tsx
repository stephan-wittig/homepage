import React from "react";
import { Switch, Route } from "react-router-dom";
import { NotFoundBanner } from "../components";
import { Contact, Cv, Start } from "../screens";

const Routes: React.FC = () =>
    <Switch>
        <Route exact path="/">
            <Start />
        </Route>
        <Route path="/cv">
            <Cv />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
        <Route>
            <NotFoundBanner />
            <Start />
        </Route>
    </Switch>

export default Routes;
