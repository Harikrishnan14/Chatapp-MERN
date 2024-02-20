import React, { useEffect, useState } from 'react'
import './ChatBox.css'
import { getUser } from '../../api/UserReq'
import { addMessage, getMessages } from '../../api/MessageReq'
import { format } from 'timeago.js';
import InputEmoji from 'react-input-emoji'

const ChatBox = ({ chat, currentUser, setSendMessage, recieveMessage }) => {

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

    const handleSend = async (e) => {
        e.preventDefault()
        const message = {
            senderId: currentUser,
            text: newMessage,
            chatId: chat._id
        }

        //Sending to DB
        try {
            const { data } = await addMessage(message)
            setMessages([...messages, data])
            setNewMessage("")
        } catch (error) {

            console.log(error);
        }

        //Sending to socket server
        const recieverId = chat.members.find((id) => id !== currentUser)
        setSendMessage({ ...message, recieverId })
    }

    useEffect(() => {
        if (recieveMessage !== null && recieveMessage.chatId === chat._id) {
            setMessages([...messages, recieveMessage])
        }
    }, [recieveMessage])

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
                                <div className={msg.senderId === currentUser ? "message own" : "message"} key={msg._id}>
                                    <span>{msg.text}</span>
                                    <span>{format(msg.createdAt)}</span>

                                </div>
                            ))}
                        </div>

                        <div className="chat-sender">
                            <div>+</div>
                            <InputEmoji value={newMessage} onChange={handleChange} />
                            <div className="send-button button" onClick={handleSend}>Send</div>
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
