import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Aside, Footer } from "../components";
import Routes from "./Routes";

const App: React.FC = () =>
    <div className="app">
        <Router>
            <Aside />
            <div className="app__content">
                <Routes />
                <Footer />
            </div>
        </Router>
    </div>;

export default App;
