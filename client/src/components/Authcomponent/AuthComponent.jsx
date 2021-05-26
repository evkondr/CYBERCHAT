import React from 'react'

class AuthComponent extends React.Component {
    constructor(props){
        super(props)
        this.signInHandler = this.signInHandler.bind(this)
    }
    signInHandler(e){
        e.preventDefault()
        this.props.onLogin(true)
    }
    render(){
        return <div className="auth-block">
            <form action="">
                <ul>
                    <li>
                        <label htmlFor="email">Your email</label>
                        <input type="text" name="email"/></li>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"/>
                    </li>
                    <li>
                        <button onClick={this.signInHandler}>Sign in</button>
                    </li>
                </ul>  
            </form>
        </div>
    }
}
export default AuthComponent