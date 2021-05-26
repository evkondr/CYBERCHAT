let init = {
    isLoggedIn: false
}
const authReducer = (state = init, action) => {
    switch (action.type) {
        case "LOGIN":
            return {...state, isLoggedIn: action.bool}
            break;
    
        default:
            return state
            break;
    }
}
export default authReducer