import React, { useState } from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal'

const InfoCard = () => {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div className='InfoCard'>
            <div className="info-head">
                <h4>Your Info</h4>
                <div>
                    <UilPen width='2rem' height='1.2rem' onClick={() => setOpenModal(true)} />
                    <ProfileModal openModal={openModal} setOpenModal={setOpenModal} />
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
