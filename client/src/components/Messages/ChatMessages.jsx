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
        return <section className='chat__messages'>
                    <div className="current__user">
                        <div className="current__user-avatar">
                            <img src={JackieWelles} alt=""/>
                        </div>
                        <div className="current__user-info">
                                <h3>Chat with Jackie Welles</h3>
                                <p><span>0</span> messages</p>
                        </div>
                    </div>
                    <div className="current__user-messages">
                        <ul>
                            {messages.length>0?messages.map(msg =>(
                                
                                <li key={msg._id} ref={this.chatRef}>
                                <div className="message-body other">
                                    <div className="text">
                                        {msg.text}
                                    </div>
                                    <div className="data">
                                        <p className="data__author">{msg.author},</p>
                                        <p>{msg.date}</p>
                                    </div>   
                                </div>
                            </li>
                            )):'No messages'}
                            
                            {/* <li >
                                <div className="message-body my-message">
                                    <div className="text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing eli
                                    </div>
                                    <div className="data">
                                        <p className="data__author">Me,</p>
                                        <p>10:35 AM,Today</p>
                                    </div>   
                                </div>
                            </li>
                            <li>
                                <div className="message-body other">
                                    <div className="text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, accusamus?
                                    </div>
                                    <div className="data">
                                        <p className="data__author">Jackie Welles,</p>
                                        <p>10:40 AM,Today</p>
                                    </div>   
                                </div>
                            </li> */}
                        </ul> 
                    </div>
                    <div className="chat__messages-sendform">
                        <span className='label'>Message</span>
                        <form action="">
                            <textarea name="" id="" className='text-area' value={this.state.text} onChange={this.onChangeHandler}></textarea>
                            <button onClick={this.onSendMessage}>send</button>
                        </form>
                    </div>
                </section>
    }
}

export default ChatMessages