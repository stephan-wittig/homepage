import React from "react";
import { Link, NavLink, NavLinkProps } from "react-router-dom";
import cx from "classnames";

const AsideLink: React.FC<NavLinkProps> = (linkProps) =>
    <NavLink
        { ...linkProps }
        className="aside__link"
        activeClassName="is-active"
    />;

const Brand: React.FC = () => 
    <h1 className="is-size-2 has-text-primary">
        <span className="has-text-weight-light">
            Stephan
        </span>
        <span className="has-text-weight-medium">
            Wittig
        </span>
    </h1>;

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
            : "aside__arrow";
        
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
        <div className="aside__container">
            <div className="aside__brand">
                <div className="aside__brand-item">
                    <Link to="/">
                        <Brand />
                    </Link>
                </div>

                <a 
                    role="button"
                    className={cx("aside__arrow", {"is-active": menuDisplayed})}
                >
                  
                </a>
            </div>

            <div className={cx("aside__menu", {"is-active": menuDisplayed})}>
                    <AsideLink exact to="/">
                        Start
                    </AsideLink>
                    <AsideLink to="/cv">
                        CV
                    </AsideLink>
                    <AsideLink to="/contact">
                        Contact
                    </AsideLink>
            </div>
        </div>
    </nav>;
};

export default Aside;
