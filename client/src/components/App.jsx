import React, { Fragment } from "react"
import {connect} from 'react-redux'
import { LOGIN } from '../redux/actions'


import Header from '../components/Header'
import ChatHistory from "./History/ChatHistory"
// import HistoryContainer from "./History/HistoryContainer"
import ChatContainer from "./Messages/chatContainer"
import AuthContainer from './Authcomponent/AuthContainer' 


class App extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const data = JSON.parse(localStorage.getItem('storageKey'))
        if(data){
            this.props.login(data.token, data.userID)
        }
    }
    render(){
        return <Fragment>
            <div className='filter'></div> 
            <div className='wrap'>
                <Header />
                {this.props.token?<main className='chat'>
                    <ChatHistory />
                    <ChatContainer />
                </main>:<AuthContainer/>}
            </div>
        </Fragment> 
    }
}
const mapStateToProps = (state) => {
    return{
        token: state.auth.token
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        login: (token, userID)=>{
            dispatch(LOGIN(token, userID))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)