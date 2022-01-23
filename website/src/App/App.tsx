import React from "react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { Aside, Footer } from "../components";
import Routes from "./Routes";
import { queryClient } from "./queryClient";

const App: React.FC = () =>
    <div className="app">
        <QueryClientProvider client={queryClient}>
        <Router>
            <Aside />
            <div className="app__content">
                <Routes />
                <Footer />
            </div>
        </Router>
        </QueryClientProvider>
    </div>;

export default App;
