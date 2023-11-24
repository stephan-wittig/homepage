import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import cx from "classnames";

const AsideLink: React.FC<NavLinkProps> = (linkProps) =>
    <NavLink
        { ...linkProps }
        className={({isActive}) => cx("aside__link", {"is-active": isActive})}
    />;

const Brand: React.FC = () => 
    <div className="has-text-primary">
        <span className="has-text-weight-light">
            Stephan
        </span>
        <span className="has-text-weight-medium">
            Wittig
        </span>
    </div>;

const Aside: React.FC = () => {
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

    return <nav className="aside">
        <div className="aside__container has-background-light">
            <div className="aside__brand">
                <div className="aside__brand-item">
                    <Brand />
                </div>

                <a 
                    role="button"
                    className={cx("navbar-burger", {"is-active": menuDisplayed})}
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
            </div>

            <div className={cx("aside__menu", {"is-active": menuDisplayed})}>
                    <AsideLink to="/">
                        Start
                    </AsideLink>
                    <AsideLink to="/cv">
                        CV
                    </AsideLink>
                    <AsideLink to="/wishes">
                        Wishes (WIP)
                    </AsideLink>
                    <AsideLink to="/contact">
                        Contact
                    </AsideLink>
            </div>
        </div>
    </nav>;
};

export default Aside;
