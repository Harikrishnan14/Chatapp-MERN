import React, { useEffect, useState } from 'react'
import './Chat.css'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import { useSelector } from 'react-redux'
import { userChats } from '../../api/ChatReq'
import Conversation from '../../components/Conversation/Conversation'

const Chat = () => {

    const { user } = useSelector((state) => state.authReducer.authData)

    const [chats, setChats] = useState([])

    useEffect(() => {
        const getChats = async () => {
            try {
                const { data } = await userChats(user._id)
                setChats(data)
                // console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        getChats()
    }, [user])
    return (
        <div className='Chat'>
            <div className="left-side-chat">
                <LogoSearch />
                <div className="chat-container">
                    <h2>Chats</h2>
                    <div className="chat-list">
                        {chats.map((chat, id) => (
                            <div key={id}>
                                <Conversation data={chat} currentUserId={user._id} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="right-side-chat">
                RightSide
            </div>
        </div>
    )
}

export default Chat
