import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";

const Start: React.FC = () =>
    <>
        <section className="hero is-medium start__hero">
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
                        Welcome to my homepage. I'm a professional software engineer currently working at Breaking Wave in London.
                        Later this year, I'm going to start studying at London School of Economics.
                    </div>
                </section>
            </div>
        </section>
        <section className="section start__skills">
            <div className="container">
                <h4 className="title is-3">
                    Areas of Expertise
                </h4>
                <p className="block">
                    Boring stuff. Frontend and backend engineering. Leading projects. Requirement analysis. Devops.
                </p>
                <p className="block">
                    You'll find more about my technical abilities and my career <Link to="/cv">
                        on my CV
                    </Link>.
                </p>
            </div>
        </section>
        <section className="section start__interests">
            <div className="container">
                <h4 className="title is-3">
                    Interests and Hobbies
                </h4>
                <p className="block">
                    More interesting stuff. Cool technology: Data Science, Cloud and Blockchain. Modern economics and politics. Sailing. Baking and cooking. Travelling Europe.
                </p>
            </div>
        </section>
    </>;

export default Start;
