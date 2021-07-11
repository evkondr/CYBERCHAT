import axios from 'axios'
export const storageKey = 'user'
//USERS ACTIONS
export const GET_USERS = (users) => ({type: 'GET_USERS', users})
//LOGIN ACTIONS
export const SHOW_ALERT = (displayed, msg) => ({type: 'SHOW_ALERT', displayed, msg })
export const LOGIN = (token, userID) => ({type: 'LOGIN', token, userID})
export const LOGOUT = () => ({type: 'LOGOUT'})
export const LOGIN_ASYNC = (email, password) => {
  return async (dispatch) => {
    try{
        const { data } = await axios.post('/api/auth/login', {
          email, password
        })
        const {token, userID} = data
        localStorage.setItem(storageKey, JSON.stringify({token, userID}))
        dispatch(LOGIN(token, userID))
    }catch(error){
        const {message} = error.response.data
        dispatch(SHOW_ALERT(true, message || 'something went wrong')) 
    }
  }
}
//MESSAGES ACTIONS
export const ADD_MESSAGE = (id, author, text, date ) => ({type: 'ADD_MESSAGE', id, author, text, date })
export const GET_MESSAGES = (messages) => ({type:"GET_MESSAGES", messages})
export const GET_ASYNC_MESSAGES = (token) => {
  return async (dispatch) => {
    try{
      const {data} = await axios({
        url: '/api/chat',
        method: 'get',
        headers: {'Authorization': `Bearer ${token}`}
      })
      dispatch(GET_MESSAGES(data.messages))
    }catch(e){
      dispatch(LOGOUT())
      localStorage.removeItem(storageKey)
      console.log(e)
    }
  }
}


