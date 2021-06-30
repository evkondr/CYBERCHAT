import React from 'react'

class AuthComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
        this.signInHandler = this.signInHandler.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }
    signInHandler(e){
        e.preventDefault()
        this.props.onLogin(this.state.email, this.state.password)
    }
    onChangeHandler(e){
        const name = e.target.id;
        const value = e.target.value
        this.setState({[name]:value})
    }
    render(){
        const alert = this.props.alert
        return <div className="auth-block">
            <form action="">
                <ul>
                    <li>
                        <label htmlFor="email">Your email</label>
                        <input type="text" name="email" id="email" value={this.state.email} onChange={this.onChangeHandler}/></li>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={this.state.password} onChange={this.onChangeHandler}/>
                    </li>
                    <li>
                        <button onClick={this.signInHandler}>Sign in</button>
                    </li>
                </ul>
                {alert.displayed && <div className="auth-block_alert">
                    <p>{alert.msg}</p>  
                </div> } 
                
            </form>
        </div>
    }
}
export default AuthComponent