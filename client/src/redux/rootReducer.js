import { combineReducers } from 'redux'
import userReducer from './reducers/userReducer'
import authReducer from './reducers/authReducer'
import alertReducer from './reducers/alertReducer'
import msgReducer from './reducers/msgReducer'

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    alert: alertReducer,
    messages: msgReducer
})
export default rootReducer