let init = {
    displayed: false,
    msg: ""
}

const alertReducer = (state = init, action) => {
    switch (action.type) {
        case "SHOW_ALERT":
            return {...state, displayed: action.displayed, msg: action.msg}
            break;
    
        default:
            return state
            break;
    }
}
export default alertReducer