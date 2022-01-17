import React from "react";
import { LinkedInLink, Navbar, SendEmailForm } from "../components";

const Contact: React.FC = () =>
    <>
        <section className="section">
            <div className="container block">
                <h2 className="title is-3">
                    Contact me
                </h2>
                <div className="block">
                    If you use it you can connect with me on LinkedIn™: <LinkedInLink>stephan-wittig</LinkedInLink>
                </div>
                <div className="block">
                    Or you could use the following form to send me an email. Generally, I try to answer within a few days.
                </div>
            </div>
            <div className="container block is-max-desktop">
                <SendEmailForm />
            </div>

        </section>
    </>;

export default Contact;
