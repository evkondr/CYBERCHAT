import {combineReducers} from 'redux'
import usersReducer from './reducers/usersReducer'
import messagesReducer from './reducers/messagesReducer'
import authReducer from './reducers/authReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    messages: messagesReducer
})
export default rootReducer