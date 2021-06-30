import {connect} from 'react-redux'
import AuthComponent from './AuthComponent'
import {LOGIN_ASYNC} from '../../redux/actions'

const mapStateToProps = (state) => {
    return {
        alert: state.alert
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onLogin: (email, password) => {
            dispatch(LOGIN_ASYNC(email, password))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent)