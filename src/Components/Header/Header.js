import React from "react";
import './Header.css'

export default function Header(props) {
    const text = props.isReden ? "unread" : "read";
    const num = props.isReden ? 0 : 7;
    return (
        <div className="container cont"
        onClick={props.handelAllRead}
        >
            <h5 className="col pt-3 pb-3">{props.title} <span className="num">{num}</span></h5>
            <p className="mark-read text-secondary">{props.markRead} {text}</p>
        </div>
    )
}