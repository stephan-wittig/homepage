import React from "react";

interface NavbarLinkProps {
    label: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ label }) =>
    <div className="navbar-item is-tab">
        {label}
    </div>;

const Navbar: React.FC = () =>
    <nav className="navbar is-dark">
        <div className="navbar-brand">
            <div className="navbar-item">
                <h1 className="title is-4 has-text-primary">
                    Stephan Wittig
                </h1>
            </div>

            <button className="navbar-burger">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>

        <div className="navbar-menu">
            <div className="navbar-end pr-5">
                <NavbarLink label="Start" />
                <NavbarLink label="Resume" />
                <NavbarLink label="Contact" />
            </div>
        </div>
    </nav>;

export default Navbar;
