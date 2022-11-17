import React from 'react';
import './Notify.css'

export default function Notify (props) {
    return (
        <div className='container'>
            <div className='notify'>
                <img className='profile' src={props.profilePic}/>
                <p className='name'>{`${props.name} ‎ `}</p>
                <p className='mseg text-secondary'>{props.mesg}</p>
                <p className='party text-secondary'>{`‎  ${props.party}`}</p>
                {props.picture && <img className='left-img' src={props.likedPic}/>}
                <p className='time text-secondary'>{props.time}</p>
            </div>
        </div>
    )
}