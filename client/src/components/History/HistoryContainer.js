import React from 'react'
import ChatHistory from './ChatHistory'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps)(ChatHistory)