import React from "react";

export default function Sezione(props) {
    return (
        <section className={`infoSection ${props.data.class}`} id={props.data.id}>
            <div className="circleContainer">
                <img src={props.data.url}
                    title={props.data.title}
                    alt={props.data.title} />
            </div>

            <div className="section__text">
                <h2>{props.data.h2}</h2>
                <p>{props.data.text}</p>
            </div>
        </section>
    )
};