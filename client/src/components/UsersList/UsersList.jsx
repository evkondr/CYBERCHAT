import React from 'react'
import {connect} from 'react-redux'

class UsersList extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getUsers()
    }
    render(){
        const {users} = this.props  
        return <aside className="chat__history">
                    <header>
                        <h3>USERS</h3>
                    </header>
                    {users.map(user => (<div key={user._id} className="person">
                        <div className="group">
                            <div className="person__avatar">
                                <img src={`http://localhost:3000/${user.avatar}`} alt=""/>
                            </div>
                            <div className="person__status">
                                <p><span className='person__statu-light online'></span> online</p>
                            </div>
                        </div>
                        <div className="preson__name">
                                <p>{`${user.name} ${user.surname}`}</p>
                        </div>
                    </div>))}
                    
                </aside>
            }
}

export default UsersList