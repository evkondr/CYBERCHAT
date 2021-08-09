let init = {
    isloading: false
}
const loaderReducer = (state=init, action) => {
    switch (action.type) {
        case 'SET_LOADER':
            return {...state, isloading: action.bool}
            break;
    
        default:
            return state
            break;
    }
}
export default loaderReducer