import React from 'react';
import './Notify.css'

export default function Notify (props) {

    const idName = props.opened ?
        "reden" : "not-reden";
    return (
        <div className={`${idName} container mb-3`}
        onClick={props.handelToggle}
        >
            <div className='notify'
            onClick={props.handelToggle}
            >
                <img className='profile' src={props.profilePic}/>
                <p>
                <span className='name'>{`${props.name} ‎ `}</span> {props.mesg}
                <span className='party text-secondary'>{`‎  ${props.party}`}</span>
                </p>
                {props.picture && <img className='left-img' src={props.likedPic}/>}
                {!(props.markedRead || props.opened) && <span className='red'>.</span>}
                <br />
            </div>
                <p className='time text-secondary'>{props.time}</p>
                {
                    props.dm &&
                    <div className='dm'>
                        <p className='dm-ph text-secondary'>{props.dmContent}</p>
                    </div>
                }
        </div>
    )
}