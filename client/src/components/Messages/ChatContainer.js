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
        addMessage(author, text, date){
            dispatch(ADD_MESSAGE(author, text, date))
        }
    }
}

export default connect(mapStateToPtops, mapDispatchToProps)(ChatMessages)