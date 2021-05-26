import React from 'react'

import JackieWelles from '../../images/JackieWelles.png'

class ChatMessages extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props)
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
                            {messages.map(msg =>(
                                <li>
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
                            ))}
                            
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
                            </li>*/}
                        </ul> 
                    </div>
                    <div className="chat__messages-sendform">
                        <span className='label'>Message</span>
                        <form action="">
                            <textarea name="" id="" className='text-area' ></textarea>
                            <button>send</button>
                        </form>
                    </div>
                </section>
    }
}

export default ChatMessages