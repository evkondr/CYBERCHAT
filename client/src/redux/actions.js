import axios from 'axios'

export const GET_USERS = (users) => ({type: 'GET_USERS', users})
export const SHOW_ALERT = (displayed, msg) => ({type: 'SHOW_ALERT', displayed, msg })
export const LOGIN = (userID, token) => ({type: 'LOGIN', userID, token})
export const LOGOUT = () => ({type: 'LOGOUT'})
export const ADD_MESSAGE = (author, text, date) => ({type: 'ADD_MESSAGE', author, text, date})

export const LOGIN_ASYNC = (email, password) => {
    return async (dispatch) => {
      try{
          const { data } = await axios.post('/api/auth/login', {
            email, password
          })
          const {token, userID} = data
          localStorage.setItem('storageKey', JSON.stringify({token, userID}))
          dispatch(LOGIN(userID, token))
      }catch(error){
          const {message} = error.response.data
          dispatch(SHOW_ALERT(true, message || 'something went wrong')) 
      }
    }
}