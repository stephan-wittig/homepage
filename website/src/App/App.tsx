import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

const App: React.FC = () =>
    <div className="app">
        <Router>
            <Routes />
        </Router>
    </div>;

export default App;
