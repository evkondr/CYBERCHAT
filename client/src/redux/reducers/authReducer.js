let init = {
    userID: null,
    token: null
}
const authReducer = (state = init, action) => {
    switch (action.type) {
        case "LOGIN":
            return {...state, userID: action.userID, token: action.token}
            break;
        case "LOGOUT":
            return {...state, userID: null, token: null}
            break;
        default:
            return state
            break;
    }
}
export default authReducer