import React from 'react';
import './Notify.css'

export default function Notify (props) {
    return (
        <div className='container mb-3'>
            <div className='notify'>
                <img className='profile' src={props.profilePic}/>
                <p>
                <span className='name'>{`${props.name} ‎ `}</span> {props.mesg}
                <span className='party text-secondary'>{`‎  ${props.party}`}</span>
                </p>
                {props.picture && <img className='left-img' src={props.likedPic}/>}
                {(!props.opened || !props.markedRead) && <span className='red'>.</span>}
                <br />
            </div>
                <p className='time text-secondary'>{props.time}</p>
        </div>
    )
}