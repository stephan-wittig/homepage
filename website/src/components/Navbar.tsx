import React from "react";
import { Link, NavLink, NavLinkProps } from "react-router-dom";
import cx from "classnames";

const NavbarLink: React.FC<NavLinkProps> = (linkProps) =>
    <NavLink
        { ...linkProps }
        className="navbar-item is-tab"
        activeClassName="is-active"
    />;

interface Props {
    colourless?: boolean;
}

const Navbar: React.FC<Props> = ({ colourless }) =>
    <nav className={cx("navbar", { "is-dark": !colourless})}>
        <div className="navbar-brand">
            <div className="navbar-item">
                <Link to="/">
                    <h1 className={cx("title is-4", { "has-text-primary": !colourless})}>
                        Stephan Wittig
                    </h1>
                </Link>
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
