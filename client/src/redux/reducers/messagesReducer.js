const messages = [
    {
        id:1,
        author: 'Jackie Welles',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, accusamus?',
        date: '10:40 AM,Today'
    },
    {
        id:1,
        author: 'Dexter DeShawn',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing eli',
        date: '10:40 AM,Today'
    },
    {
        id:1,
        author: 'Jackie Welles',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, accusamus?',
        date: '10:40 AM,Today'
    }
]

const messagesReducer = (state = messages, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return [
                ...state, {
                    id:3,
                    author: action.author,
                    text: action.text,
                    date: new Date().toLocaleTimeString()
                }
            ]
            break;
        default:
            return state
            break;
    }
    return state
}
export default messagesReducer