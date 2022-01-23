import React from "react";
import { LinkedInLink, SendEmailForm } from "../components";

const Contact: React.FC = () =>
    <>
        <section className="section">
            <div className="container block is-max-desktop">
                <h2 className="title is-2">
                    Contact me
                </h2>
                <div className="block">
                    If you use it you can connect with me on LinkedIn™: <LinkedInLink>stephan-wittig</LinkedInLink>
                </div>
                <div className="block">
                    Or you could use the following form to send me an email. Generally, I try to answer within a few days.
                </div>
            </div>
            <div className="block container is-max-desktop">
                <div className="message is-warning">
                    <div className="message-body">
                        The form for sending emails is currently under construction. 
                        Please return later or use LinkedIn to contact me. Thank you for your interest!
                    </div>
                </div>
            </div>
            <div className="container block is-max-desktop">
                <SendEmailForm />
            </div>

        </section>
    </>;

export default Contact;
