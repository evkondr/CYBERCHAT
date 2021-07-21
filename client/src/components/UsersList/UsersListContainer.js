import React from 'react'
import UsersList from './UsersList'
import { connect } from 'react-redux'
import { GET_USERS_ASYNC } from '../../redux/actions'

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getUsers(){
            dispatch(GET_USERS_ASYNC())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersList)