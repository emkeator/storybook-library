import React, {Component} from 'react';
import logo from './../../images/superbaby.svg';


export default class Nav extends Component {
    render() {
        return(
            <nav id="Nav">
                <img id="logo" src={logo} alt="child standing on books"/>                
                <span>username</span>
                <a href="http://localhost:3001/auth"><span className="logInOut">Login</span></a>
                <a href="http://localhost:3001/auth/logout"><span className="logInOut">Logout</span></a>                              
            </nav>
        );
    }
}