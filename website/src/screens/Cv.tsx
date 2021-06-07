import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";

const Cv: React.FC = () =>
    <>
        <Navbar />
        <section className="section">
            <div className="container">
                <h2 className="title is-3">
                    Curriculum Vitae
                </h2>
                <p className="block">
                    You can find a summary of my professional and academic career below. If you want more details, you'll have to <Link to="/contact">
                        contact me
                    </Link>. 
                </p>
                <p className="block">
                    The CV. Really well presented with two time bars and stuff.
                </p>
            </div>
        </section>
    </>;

export default Cv;
