import React from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'

const InfoCard = () => {
    return (
        <div className='InfoCard'>
            <div className="info-head">
                <h4>Your Info</h4>
                <div>
                    <UilPen width='2rem' height='1.2rem' />
                </div>
            </div>
            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>in Releationship</span>
            </div>
            <div className="info">
                <span>
                    <b>Lives in </b>
                </span>
                <span>Kerala</span>
            </div>
            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span>Google</span>
            </div>
            <button className='button logout-btn'>Logout</button>
        </div>
    )
}

export default InfoCard
