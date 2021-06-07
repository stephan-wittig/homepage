import React from "react";
import { Link, NavLink, NavLinkProps } from "react-router-dom";
import cx from "classnames";

interface Props {
    hero?: boolean;
}

const NavbarLink: React.FC<NavLinkProps> = (linkProps) =>
    <NavLink
        { ...linkProps }
        className="navbar-item is-tab"
        activeClassName="is-active"
    />;

type BrandProps = Pick<Props, "hero">; 

const Brand: React.FC<BrandProps> = ( { hero } ) => 
    <h1 className={cx("is-size-4", {"has-text-primary": !hero})}>
        {console.log("hero", hero)}
        <span className="has-text-weight-light">
            Stephan
        </span>
        <span className="has-text-weight-medium">
            Wittig
        </span>
    </h1>;

const Navbar: React.FC<Props> = ({ hero }) =>
    <nav className={cx("navbar", { "is-dark": !hero})}>
        <div className="navbar-brand">
            <div className="navbar-item">
                {hero
                    ? <Brand hero />
                    : <Link to="/">
                        <Brand />
                    </Link>
                }
            </div>

            <a role="button" className="navbar-burger">
                <span></span>
                <span></span>
                <span></span>
            </a>
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
