import React, { useEffect, useState } from 'react'
import './FollowersCard.css'
import User from '../User/User'
import { useSelector } from 'react-redux'
import { getAllUser } from '../../api/UserReq'

const FollowersCard = () => {

    const [person, setPerson] = useState([])

    const { user } = useSelector((state) => state.authReducer.authData)

    useEffect(() => {
        const fetchPerson = async () => {
            const { data } = await getAllUser()
            setPerson(data)
        }
        fetchPerson()
    }, [])

    return (
        <div className='FollowersCard'>
            <h3>People you may know</h3>
            {person.map((person, id) => {
                if (person._id !== user._id) {
                    return (
                        <User person={person} key={id} />
                    )
                }
            })}
        </div>
    )
}

export default FollowersCard
