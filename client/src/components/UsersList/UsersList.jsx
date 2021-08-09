import React from 'react'
import {connect} from 'react-redux'
import Preloader from '../Preloader/Preloader'
class UsersList extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getUsers()
    }
    render(){
        const {users, loader} = this.props
        return <aside className="users-list">
                    <header className="users-list__header">
                        <h3 className="users-list__title">USERS</h3>
                    </header>
                    {loader.isloading && <Preloader />}
                    {users.map(user => (<div key={user._id} className="user-block users-list__item">
                        <div className="theme-avatar user-block__avatar">
                            <img className="img" src={`http://localhost:3000/${user.avatar}`} alt=""/>
                        </div>
                        <div className="user-block__group">
                            <div className="user-block__name">
                                <p>{`${user.name} ${user.surname}`}</p>
                            </div>
                            <div className="user-block__status">
                                <p><span className='user-block__status-light user-block__status-light--online'></span> online</p>
                            </div>        
                        </div>
                        
                    </div>))}
                    
                </aside>
            }
}

export default UsersList