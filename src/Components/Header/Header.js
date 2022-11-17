import React from "react";
import './Header.css'

export default function Header(props) {

    return (
        <div className="container">
            <h5 className="col pt-3 pb-3">{props.title} <span className="num">{props.number}</span></h5>
        </div>
    )
}