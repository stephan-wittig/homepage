import React from "react";
import { Navbar } from "../components";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

const App: React.FC = () =>
    <div className="App">
        <Router>
            <Navbar />
            <Routes />
        </Router>
    </div>;

export default App;
