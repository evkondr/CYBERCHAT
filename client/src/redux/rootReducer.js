import { combineReducers } from 'redux'
import usersReducer from './reducers/usersReducer'
import authReducer from './reducers/authReducer'
import alertReducer from './reducers/alertReducer'
import msgReducer from './reducers/msgReducer'
import loaderReducer from './reducers/loaderReducer'

const rootReducer = combineReducers({
    users: usersReducer,
    auth: authReducer,
    alert: alertReducer,
    messages: msgReducer,
    loader: loaderReducer
})
export default rootReducer