import JackieWelles from '../../images/JackieWelles.png'
import DexterDeShawn from '../../images/DexterDeShawn.jpg'
const users = [
    {
        avatar: JackieWelles,
        fullname: 'Jackie Welles',
        messages: []
    },
    {
        avatar: DexterDeShawn,
        fullname: 'Dexter DeShawn',
        messages: []
    }
] 
const usersReducer = (state=users, action) => {
    return state
}
export default usersReducer
