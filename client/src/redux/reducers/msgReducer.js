const init = []

const msgReducer = (state = init, action) =>{
    switch (action.type) {
        case 'ADD_MESSAGE':
            return [...state, {author: action.author, text: action.text, date: action.date }]
            break;
        default:
            return state
            break;
    }
}
export default msgReducer