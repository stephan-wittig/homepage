import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () =>
    <footer className="footer">
        <div className="footer__content">
            <div className="block">
                Developed by Stephan Wittig.
            </div>
            <div className="block">
                Want to contact me? <Link to="/contact">
                    Find out how to
                </Link>
            </div>
        </div>
    </footer>;

export default Footer;
