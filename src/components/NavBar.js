import React from "react";

const handleClick = id => {
    document.getElementById(id).scrollIntoView();
};

export default function NavBar() {
    return (
        <nav>
            <ul className="navigationBar">
                <li onClick={() => handleClick("navPresentazione")}>TRADIZIONE</li>
                <li onClick={() => handleClick("navGusti")}>GUSTI</li>
                <li onClick={() => handleClick("navOnTheRoad")}>ON THE ROAD</li>
                <li onClick={() => handleClick("navTrackTheTruck")}>TRACK THE TRUCK</li>
                <li onClick={() => handleClick("navContatti")}>CONTATTI</li>
            </ul>
        </nav>
    )
};