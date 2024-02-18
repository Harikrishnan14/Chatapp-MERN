import React, { useEffect, useState } from 'react'
import './ChatBox.css'
import { getUser } from '../../api/UserReq'
import { getMessages } from '../../api/MessageReq'
import { format } from 'timeago.js';
import InputEmoji from 'react-input-emoji'

const ChatBox = ({ chat, currentUser }) => {

    const [userData, setUserData] = useState(null)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")

    useEffect(() => {
        const userId = chat?.members?.find((id) => id !== currentUser)
        const getUserData = async () => {
            try {
                const { data } = await getUser(userId)
                setUserData(data)
            } catch (error) {
                console.log(error);
            }
        }
        if (chat !== null) {
            getUserData()

        }
    }, [chat, currentUser])

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const { data } = await getMessages(chat._id)
                setMessages(data)
            } catch (error) {
                console.log(error);
            }
        }
        if (chat !== null) {
            fetchMessages()
        }
    }, [chat])

    const handleChange = (newMessage) => {
        setNewMessage(newMessage)
    }

    return (
        <>
            <div className="chatbox-container">
                {chat ? (
                    <>
                        <div className="chat-header">
                            <div className="follower">
                                <div>
                                    <img src={userData?.profilePicture ? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture : process.env.REACT_APP_PUBLIC_FOLDER + 'defaultProfile.png'} alt="" className='follower-image' style={{ width: '50px', height: '50px' }} />
                                    <div className="name" style={{ fontSize: "0.8rem" }}>
                                        <span>{userData?.firstname} {userData?.lastname}</span>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
                        </div>

                        <div className="chat-body">
                            {messages.map((msg) => (
                                <>
                                    <div className={msg.senderId === currentUser ? "message own" : "message"}>
                                        <span>{msg.text}</span>
                                        <span>{format(msg.createdAt)}</span>

                                    </div>
                                </>
                            ))}
                        </div>

                        <div className="chat-sender">
                            <div>+</div>
                            <InputEmoji value={newMessage} onChange={handleChange} />
                            <div className="send-button button">Send</div>
                        </div>
                    </>
                ) : (
                    <span className='chatbox-empty-message'>Tap on a chat to start a conversation...</span>
                )}

            </div >
        </>
    )
}

export default ChatBox
