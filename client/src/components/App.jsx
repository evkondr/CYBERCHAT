import React, { Fragment } from "react"
import {connect} from 'react-redux'
import { io } from "socket.io-client"

import Header from '../components/Header'
import HistoryContainer from "./History/HistoryContainer"
import ChatContainer from "./Messages/chatContainer"
import AuthContainer from './Authcomponent/AuthContainer' 

const socket = io('http://localhost:3000');

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.isLoggedIn)
        return <Fragment>
            <div className='filter'></div> 
            <div className='wrap'>
                <Header />
                {!this.props.isLoggedIn?<AuthContainer/>:
                <main className='chat'>
                    <HistoryContainer />
                    <ChatContainer />
                </main>
                }
            </div>
        </Fragment> 
    }
}
const mapStateToProps = (state) => {
    return{
        isLoggedIn: state.auth.isLoggedIn
    }
}
export default connect(mapStateToProps)(App)