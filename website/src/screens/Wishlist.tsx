import React from "react";
import WishesArchitecture from "../images/wishesArchitecture.svg?react";

const Wishlist: React.FC = () =>
    <>
        <section className="section">
            <div className="container block is-max-desktop">
                <h2 className="title is-2">
                    Wishes
                </h2>
                <div className="block">
                    <em>Coming soon</em>
                </div>
                <div className="block">
                    Since Amazon limited its list function to Amazon links, I'm now working on an app that lets you populate your wish list with ideas with or without shops links.
                </div>
                <div className="block">
                    <h2 className="title is-4">
                        Architecture
                    </h2>
                    <figure className="image">
                        <WishesArchitecture/>
                    </figure>
                </div>
            </div>

        </section>
    </>;

export default Wishlist;
