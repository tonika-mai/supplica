import React from "react";

import Gusto from "./Gusto";
import { elencoGusti } from "../data";

export default function Gusti() {
    const gustoComponents = elencoGusti.map(gusto => <Gusto key={gusto.id} info={gusto} />)

    return (
        <section className="gustiSection" id="navGusti">
            <h2>Scopri tutti i gusti!</h2>
            <div className="gustiContainer">
                {gustoComponents}
            </div>
        </section>
    )
};