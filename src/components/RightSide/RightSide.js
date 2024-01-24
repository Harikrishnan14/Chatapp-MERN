import React, { useState } from 'react'
import './RightSide.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'

const RightSide = () => {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div className='RightSide'>
            <div className="nav-icons">
                <img src={Home} alt='' />
                <UilSetting />
                <img src={Noti} alt='' />
                <img src={Comment} alt='' />
            </div>
            <TrendCard />
            <button className='button r-button' onClick={() => setOpenModal(true)} >Share</button>
            <ShareModal openModal={openModal} setOpenModal={setOpenModal} />
        </div>
    )
}

export default RightSide
