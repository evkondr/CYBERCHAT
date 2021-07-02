import React from 'react'
import {connect} from 'react-redux'
import ChatMessages from './ChatMessages'
import { ADD_MESSAGE, GET_ASYNC_MESSAGES } from '../../redux/actions'

const mapStateToPtops = (state) => {
    return {
        messages: state.messages,
        auth: state.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage(author, text, date){
            dispatch(ADD_MESSAGE(author, text, date))
        },
        getMessages(token){
            dispatch(GET_ASYNC_MESSAGES(token))
        }
    }
}

export default connect(mapStateToPtops, mapDispatchToProps)(ChatMessages)