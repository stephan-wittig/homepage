import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";

const Start: React.FC = () =>
    <>
        <section className="hero is-primary">
            <div className="hero-head">
                <Navbar hero />
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
                    <div className="container is-size-4 has-text-weight-medium">
                        Welcome to my homepage. I'm a software engineer currently studying at London School of Economics.
                        Before that, I used to work at Breaking Wave and Deutsche Bank.
                    </div>
                </section>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <h4 className="title is-3">
                    Areas of Expertise
                </h4>
                <p className="block">
                    Frontend and backend engineering. Leading projects. Requirement analysis. Devops. Digital identity and data protection. 
                </p>
                <p className="block">
                    You'll find more about my technical abilities and my career <Link to="/cv">
                        on my CV
                    </Link>.
                </p>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <h4 className="title is-3">
                    Interests and Hobbies
                </h4>
                <p className="block">
                    Cool technology: Data Science, Cloud and Blockchain. Modern economics and politics. Sailing. Baking and cooking. Travelling the world (mostly Europe though).
                </p>
            </div>
        </section>
    </>;

export default Start;
