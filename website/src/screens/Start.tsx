import React from "react";
import { Navbar } from "../components";

const Start: React.FC = () =>
    <>
        <section className="hero is-medium is-info">
            <div className="hero-head">
                <Navbar colourless />
            </div>
            <div className="hero-body">
                <div className="container has-text-right">
                    <h3 className="title is-1">
                        Software Development Specialist
                    </h3>
                    <p className="subtitle is-4">
                        Interesting bits about me
                    </p>
                </div>
            </div>
            <div className="hero-footer">
                <section className="section">
                    <div className="container">
                        Short introduction. Blablabla
                    </div>
                </section>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <h4 className="title is-3">
                    Areas of Expertise
                </h4>
                <p>
                    Boring stuff. Frontend and backend engineering. Leading projects. Requirement analysis. Devops.
                </p>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <h4 className="title is-3">
                    Interests and Hobbies
                </h4>
                <p>
                    More interesting stuff. Modern economics and politics. Sailing. Baking and cooking. Travelling Europe.
                </p>
            </div>
        </section>
    </>;

export default Start;
