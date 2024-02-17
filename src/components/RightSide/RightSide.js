import React, { useState } from 'react'
import './RightSide.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'
import { Link } from 'react-router-dom'

const RightSide = () => {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div className='RightSide'>
            <div className="nav-icons">
                <Link to="../home">
                    <img src={Home} alt='' />
                </Link>
                <UilSetting />
                <img src={Noti} alt='' />
                <Link to="../chat">
                    <img src={Comment} alt='' />
                </Link>
            </div>
            <TrendCard />
            <button className='button r-button' onClick={() => setOpenModal(true)} >Share</button>
            <ShareModal openModal={openModal} setOpenModal={setOpenModal} />
        </div>
    )
}

export default RightSide
