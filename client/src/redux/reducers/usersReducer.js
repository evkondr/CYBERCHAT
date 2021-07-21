const users = [] 

const usersReducer = (state=users, action) => {
    switch (action.type) {
        case "GET_USERS":
            return [...action.users]
            break;
    
        default:
            return state
            break;
            
    }
}
export default usersReducer
