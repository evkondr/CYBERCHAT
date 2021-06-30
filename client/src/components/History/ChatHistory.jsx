import React from 'react'
import {connect} from 'react-redux'

class ChatHistory extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        // const {users} = this.props  
        return <aside className="chat__history">
                    <header>
                        <h3>HISTORY</h3>
                    </header>
                    {/* {users.map(user=> (<div className="person">
                        <div className="group">
                            <div className="person__avatar">
                                <img src={user.avatar} alt=""/>
                            </div>
                            <div className="person__status">
                                <p><span className='person__statu-light online'></span> online</p>
                            </div>
                        </div>
                        <div className="preson__name">
                                <p>{user.fullname}</p>
                        </div>
                    </div>))} */}
                    
                </aside>
            }
}

export default ChatHistory