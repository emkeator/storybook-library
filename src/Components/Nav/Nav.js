import React, {Component} from 'react';
import logo from './../../images/superbaby.svg';


export default class Nav extends Component {
    render() {
        console.log(window.location);
        return(
            <nav id="Nav" style={{display: window.location.hash.includes('book') ? 'none' : 'flex'}}>
                <img id="logo" src={logo} alt="child standing on books"/>                
                <span>username</span>
                <a href="http://localhost:3005/auth"><span className="logInOut">Login</span></a>
                <a href="http://localhost:3005/auth/logout"><span className="logInOut">Logout</span></a>                              
            </nav>
        );
    }
}