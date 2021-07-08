const init = []

const msgReducer = (state = init, action) =>{
    switch (action.type) {
        case 'ADD_MESSAGE':
            return [...state, {_id: action.id, author: action.author, text: action.text, date: action.date }]
            break;
        case 'GET_MESSAGES':
            return [...action.messages]
            break;
        default:
            return state
            break;
    }
}
export default msgReducer