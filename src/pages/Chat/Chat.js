import React, { useEffect, useRef, useState } from 'react'
import './Chat.css'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import { useSelector } from 'react-redux'
import { userChats } from '../../api/ChatReq'
import Conversation from '../../components/Conversation/Conversation'
import { Link } from 'react-router-dom'
import { UilSetting } from '@iconscout/react-unicons'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import ChatBox from '../../components/ChatBox/ChatBox'
import { io } from 'socket.io-client'

const Chat = () => {

    const { user } = useSelector((state) => state.authReducer.authData)

    const [chats, setChats] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const [sendMessage, setSendMessage] = useState(null)
    const [recieveMessage, setRecieveMessage] = useState(null)

    const socket = useRef()

    useEffect(() => {
        socket.current = io('http://localhost:8800')
        socket.current.emit("new-user-add", user._id)
        socket.current.on("get-users", (users) => {
            setOnlineUsers(users)
        })
    }, [user])

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

    //Send message to socket server
    useEffect(() => {
        if (sendMessage !== null) {
            socket.current.emit("send-message", sendMessage)
        }
    }, [sendMessage])

    //Recieve message from socket server
    useEffect(() => {
        socket.current.on("recieve-message", (data) => {
            setRecieveMessage(data)
        })
    }, [])

    return (
        <div className='Chat'>
            <div className="left-side-chat">
                <LogoSearch />
                <div className="chat-container">
                    <h2>Chats</h2>
                    <div className="chat-list">
                        {chats.map((chat, id) => (
                            <div key={id} onClick={() => setCurrentChat(chat)}>
                                <Conversation data={chat} currentUserId={user._id} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="right-side-chat">
                <div style={{ width: "20rem", alignSelf: 'flex-end' }}>
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
                </div>
                <ChatBox chat={currentChat} currentUser={user._id} setSendMessage={setSendMessage} recieveMessage={recieveMessage} />
            </div>
        </div>
    )
}

export default Chat
