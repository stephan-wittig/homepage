import React from "react";
import { Link } from "react-router-dom";
import { LinkedInLink } from "../components";

const Cv: React.FC = () =>
    <>
        <section className="section">
            <div className="container is-max-desktop">
                <h2 className="title is-3">
                    Curriculum Vitae
                </h2>
                <p className="block">
                    You can find a summary of my professional and academic career below. If you want more details, you'll have to <Link to="/contact">
                        contact me
                    </Link>. 
                </p>
                <p className="block">
                    <div className="message is-warning">
                        <div className="message-body">
                        I will add my CV here soon-ish. Most of it is already on LinkedIn™: <LinkedInLink>stephan-wittig</LinkedInLink>
                        </div>
                    </div>
                </p>
            </div>
        </section>
    </>;

export default Cv;
