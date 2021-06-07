import React from "react";
import { LinkedInLink, SendEmailForm } from "../components";

const Contact: React.FC = () =>
    <section className="section">
        <div className="container">
            <h2 className="title is-3">
                Contact me
            </h2>
            <div className="block">
                If you use it you connect with me on LinkedIn™: <LinkedInLink>stephan-wittig</LinkedInLink>
            </div>
            <div className="block">
                Or you could use the following form to send me an email. Generally, I try to answer within a few days.
            </div>
            <SendEmailForm />
        </div>

    </section>;

export default Contact;
