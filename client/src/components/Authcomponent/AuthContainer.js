import {connect} from 'react-redux'
import AuthComponent from './AuthComponent'
import {LOGIN} from '../../redux/actions'

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        onLogin: (bool) => {
            dispatch(LOGIN(bool))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent)