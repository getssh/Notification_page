import React from "react";
import './Header.css'

export default function Header(props) {
    const text = props.isReden ? "unread" : "read";
    const num = props.number;
    return (
        <div className="container cont"
        >
            <h5 className="col pt-3 pb-3">{props.title} <span className="num">{num}</span></h5>
            <p className="mark-read text-secondary"
            onClick={props.handelAllRead}
            >{props.markRead} {text}</p>
        </div>
    )
}