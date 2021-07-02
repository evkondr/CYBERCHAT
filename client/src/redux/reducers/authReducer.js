let init = {
    token: null,
    userID: null
}
const authReducer = (state = init, action) => {
    switch (action.type) {
        case "LOGIN":
            return {...state, token: action.token, userID: action.userID }
            break;
        case "LOGOUT":
            return {...state, token: null, userID: null }
            break;
        default:
            return state
            break;
    }
}
export default authReducer