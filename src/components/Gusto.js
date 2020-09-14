import React from "react";

export default function Gusto(props) {
    return (
        <div className="gustoCard">
            <img src={props.info.url} alt={props.info.title} className="gustoImg" />
            <p className="gustoTitle">{props.info.title}</p>
        </div>
    )
};