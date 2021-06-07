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
        <span className="has-text-weight-light">
            Stephan
        </span>
        <span className="has-text-weight-medium">
            Wittig
        </span>
    </h1>;

const Navbar: React.FC<Props> = ({ hero }) => {
    const [ menuDisplayed, setMenuDisplayed ] = React.useState(false);
    const openMenu = React.useCallback(() => {
        setMenuDisplayed(true);
    }, [ setMenuDisplayed ]);
    const closeMenu = React.useCallback(() => {
        setMenuDisplayed(false);
    }, [ setMenuDisplayed ]);

    React.useEffect(() => {
        const className = menuDisplayed
            ? "app"
            : "navbar-burger";
        
        const action = menuDisplayed
            ? closeMenu
            : openMenu;

        const elements = document.getElementsByClassName(className);
        if ( elements.length !== 1) {
            // That's unexpected
            return;
        }

        elements[0].addEventListener("click", action);
        return () => {
            elements[0].removeEventListener("click", action);
        }
    }, [ menuDisplayed, closeMenu, openMenu ]);



    return <nav className={cx("navbar", { "is-dark": !hero})}>
        <div className="navbar__container container">
            <div className="navbar-brand">
                <div className="navbar__brand-item navbar-item">
                    {hero
                        ? <Brand hero />
                        : <Link to="/">
                            <Brand />
                        </Link>
                    }
                </div>

                <a 
                    role="button"
                    className={cx("navbar-burger", {"is-active": menuDisplayed})}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>

            <div className={cx("navbar-menu", {"is-active": menuDisplayed})}>
                <div className="navbar-end">
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
        </div>
    </nav>;
};

export default Navbar;
