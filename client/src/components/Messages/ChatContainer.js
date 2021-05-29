import React from 'react'
import {connect} from 'react-redux'
import ChatMessages from './ChatMessages'
import { ADD_MESSAGE } from '../../redux/actions'

const mapStateToPtops = (state) => {
    return {
        messages: state.messages
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage(author, text){
            dispatch(ADD_MESSAGE(author, text))
        }
    }
}

export default connect(mapStateToPtops, mapDispatchToProps)(ChatMessages)