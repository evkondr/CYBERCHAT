import React from 'react'

import JackieWelles from '../../images/JackieWelles.png'
import socket from '../../io/socket'

class ChatMessages extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            text: ''
        }
        this.chatRef = React.createRef()
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSendMessage = this.onSendMessage.bind(this)
    }
    onSendMessage(e){
        e.preventDefault()
        const {userID} = this.props.auth
        socket.emit('message_in', {userID, text:this.state.text})
        this.setState({text: ''})
    }
    onChangeHandler(e){
        this.setState({text: e.target.value})
    }
    componentDidUpdate(){
        this.chatRef.current && this.chatRef.current.scrollIntoView({behavior: "smooth"})
    }
    componentDidMount(){
        const {token} = this.props.auth
        const {addMessage, getMessages}  = this.props
        socket.on('message_out', message => {
            addMessage(message._id, message.author, message.text, message.date)
        })
        getMessages(token)
    }

    render(){
        const {messages} = this.props
        return <section className='chat-section'>
                    <div className="chat-section__user">
                        <div className="theme-avatar chat-section__user-avatar">
                            <img class="img" src={JackieWelles} alt=""/>
                        </div>
                        <div className="chat-section__user-info">
                                <h3>Chat with Jackie Welles</h3>
                                <p><span>0</span> messages</p>
                        </div>
                    </div>
                    <div className="chat-messages">
                        <ul className="chat-messages__list">
                            {messages.length>0?messages.map(msg =>(
                                
                                <li key={msg._id} ref={this.chatRef}>
                                <div className="message-body message-body__item">
                                    <div className="message-body__text">
                                        {msg.text}
                                    </div>
                                    <div className="message-body__data">
                                        <p className="message-body__author">{msg.author},</p>
                                        <p>{msg.date}</p>
                                    </div>   
                                </div>
                            </li>
                            )):'No messages'}
                        </ul> 
                    </div>
                    <div className="messages-send-block">
                        <span className="messages-send-block__label">Message</span>
                        <form className="messages-send-block__form" action="">
                            <textarea className="messages-send-block__text-area" name="" id=""  value={this.state.text} onChange={this.onChangeHandler}></textarea>
                            <button className="theme-button messages-send-block__button" onClick={this.onSendMessage}>send</button>
                        </form>
                    </div>
                </section>
    }
}

export default ChatMessages