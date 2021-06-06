import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

const NavbarLink: React.FC<NavLinkProps> = (linkProps) =>
    <NavLink
        { ...linkProps }
        className="navbar-item is-tab"
        activeClassName="is-active"
    />;

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
                <NavbarLink exact to="/">
                    Start
                </NavbarLink>
                <NavbarLink to="/cv">
                    CV
                </NavbarLink>
                <NavbarLink to="/contact">
                    Contact
                </NavbarLink>
            </div>
        </div>
    </nav>;

export default Navbar;
