import React from 'react'

class AuthComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            name: '',
            surname: '',
            registerMode: false 
        }
        this.signInHandler = this.signInHandler.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.changeMode = this.changeMode.bind(this)
        this.cancelHandler = this.cancelHandler.bind(this)
    }
    //Sign in button handler
    signInHandler(e){
        e.preventDefault()
        this.props.onLogin(this.state.email, this.state.password)
    }
    //Inputs change handler 
    onChangeHandler(e){
        const name = e.target.id;
        const value = e.target.value
        this.setState({[name]:value})
    }
    //Change mode between registration and sign in 
    changeMode(e){
        e.preventDefault()
        this.setState(state => ({registerMode: !state.registerMode }))
    }
    //Cancel registration
    cancelHandler(e){
        e.preventDefault()
        this.setState({registerMode: false})
    }
    render(){
        const alert = this.props.alert
        return <div className="auth-block">
            <form action="">
                <ul>
                    {this.state.registerMode && <li>
                       <label htmlFor="name">Your name</label>
                        <input type="text" name="mane" id="name" value={this.state.name} onChange={this.onChangeHandler}/>
                    </li>
                    }
                    {this.state.registerMode && <li>
                       <label htmlFor="surname">Your surname</label>
                        <input type="text" name="surname" id="surname" value={this.state.surname} onChange={this.onChangeHandler}/>
                    </li>
                    }
                    
                    <li>
                       <label htmlFor="email">Your email</label>
                        <input type="text" name="email" id="email" value={this.state.email} onChange={this.onChangeHandler}/>
                    </li>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={this.state.password} onChange={this.onChangeHandler}/>
                    </li>
                    <li className='botton-group'>
                        {this.state.registerMode && <button onClick={this.cancelHandler}>cancel</button>}
                        {!this.state.registerMode && <button onClick={this.signInHandler}>Sign in</button>}
                        {!this.state.registerMode?<button onClick={this.changeMode}>Register</button>:<button onClick={this.register}>Register</button>}
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