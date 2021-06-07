import React from "react";
import { Switch, Route } from "react-router-dom";
import { Footer, Navbar, NotFoundBanner } from "../components";
import { Contact, Cv, Start } from "../screens";

const Routes: React.FC = () =>
    <Switch>
        <Route exact path="/">
            <Start />
            <Footer />
        </Route>
        <Route path="/cv">
            <Navbar />
            <Cv />
            <Footer />
        </Route>
        <Route path="/contact">
            <Navbar />
            <Contact />
            <Footer />
        </Route>
        <Route>
            <NotFoundBanner />
            <Start />
            <Footer />
        </Route>
    </Switch>

export default Routes;
