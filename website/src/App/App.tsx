import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "../components";
import Routes from "./Routes";

const App: React.FC = () =>
    <div className="app">
        <Router>
            <Routes />
            <Footer />
        </Router>
    </div>;

export default App;
