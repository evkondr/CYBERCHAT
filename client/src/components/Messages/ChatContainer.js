import React from 'react'
import {connect} from 'react-redux'
import ChatMessages from './ChatMessages'

const mapStateToPtops = (state) => {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToPtops)(ChatMessages)