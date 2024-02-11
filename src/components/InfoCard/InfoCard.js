import React, { useEffect, useState } from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as UserApi from '../../api/UserReq.js'
import { logout } from '../../actions/AuthAction.js'

const InfoCard = () => {

    const [openModal, setOpenModal] = useState(false)
    const [profileUser, setProfileUser] = useState({})

    const dispatch = useDispatch()

    const params = useParams()
    const profileUserId = params.id

    const { user } = useSelector((state) => state.authReducer.authData)

    useEffect(() => {
        const fetchProfileUser = async () => {
            if (profileUserId === user._id) {
                setProfileUser(user)
            } else {
                const profileUser = await UserApi.getUser(profileUserId);
                setProfileUser(profileUser)
            }
        }
        fetchProfileUser();
    }, [user]);

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div className='InfoCard'>
            <div className="info-head">
                <h4>Profile Info</h4>
                {user._id === profileUser ? (
                    <div>
                        <UilPen width='2rem' height='1.2rem' onClick={() => setOpenModal(true)} />
                        <ProfileModal openModal={openModal} setOpenModal={setOpenModal} />
                    </div>
                ) : ("")}
                <div>
                    <UilPen width='2rem' height='1.2rem' onClick={() => setOpenModal(true)} />
                    <ProfileModal openModal={openModal} setOpenModal={setOpenModal} data={user} />
                </div>
            </div>
            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>{profileUser.relationshipStatus}</span>
            </div>
            <div className="info">
                <span>
                    <b>Lives in </b>
                </span>
                <span>{profileUser.livesIn}, {profileUser.country}</span>
            </div>
            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span>{profileUser.worksAt}</span>
            </div>
            <button className='button logout-btn' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default InfoCard
