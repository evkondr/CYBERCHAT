import React from 'react'
import logo from '../images/Cyberchat.png'


class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return<header class="header">
                <div className="logo">
                    <img class="img" src={logo} alt="" />
                </div>
            </header>
    }
}

export default Header