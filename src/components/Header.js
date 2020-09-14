import React from "react";
import Header1 from "../imgs/header_nice.jpg";
import Header2 from "../imgs/shop_cropped.jpg";

export default function Header() {
    return (
        <header>
            <picture>
                <source media="(min-width: 800px)" srcSet={Header1} />
                <img src={Header2} alt="Il punto vendita Supplìca" />
            </picture>
        </header>
    )
};