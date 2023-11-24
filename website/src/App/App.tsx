import React from "react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { Aside, Footer } from "../components";
import { queryClient } from "./queryClient";
import { Routes, Route } from "react-router-dom";
import { NotFoundBanner } from "../components";
import { Contact, Cv, Start, Wishlist } from "../screens";

const App: React.FC = () =>
    <div className="app">
        <QueryClientProvider client={queryClient}>
        <Router>
            <Aside />
            <div className="app__content">
            <Routes>
                <Route path="/" element={<Start />}/>
                <Route path="/cv" element={<Cv />}/>
                <Route path="/wishes" element={<Wishlist />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route element={<>
                    <NotFoundBanner />
                    <Start />
                </>}/>
            </Routes>
                <Footer />
            </div>
        </Router>
        </QueryClientProvider>
    </div>;

export default App;
