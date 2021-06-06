import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const NotFoundBanner: React.FC = () => {
    const location = useLocation();

    return <section className="not-found-banner container">
        <div className="not-found-banner__notification notification is-warning">
            The requested resource <span className="is-family-code">
                {location.pathname}
            </span> could not be found.
            You were redirected to the start page instead.
            <Link to="/" className="delete"></Link>
        </div>
    </section>;
}
export default NotFoundBanner;
