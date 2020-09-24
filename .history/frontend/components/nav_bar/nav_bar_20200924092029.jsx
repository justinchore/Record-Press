import React from 'react';
import { Link } from 'react-router-dom';
import SignupContainer from '../session_form/signup_container';


const NavBars = ({ currentUser, logout, openModal }) => {
    const guestNavBar = () => {
        console.log('GUEST NAV BAR')
    return(
        <div className = "guest-container">
            <Link to="/" className = "navbar-logo-container">
                <p className="navBarLogo">▰</p>
                <p className="site-name-logo">RecordPress</p>
            </Link>
             <ul className="nav-list">
                 <li className="list-item">
                    <p><Link to="/login">log in</Link></p>
                 </li>
                <li className="list-item"> 
                    <button className="signup-button" onClick={()=> openModal('signup')}>sign up</button>
                 </li> 
             </ul>
        </div>
    )};

    const userNavBar = () => {
        const show_hide = () => {
            let click = document.getElementById("dropdown-items");
            if (click.style.display === "none"){
                click.style.display = "block"; 
            } else {
                click.style.display = "none"
            }
        }
    
        return(
        <div className="guest-container">
            <Link to="/" className="navbar-logo-container">
                <p className="navBarLogo">▰</p>
                <p className="site-name-logo">RecordPress</p>
            </Link>
            <div className= "drpdown">
                <button onClick={show_hide()}className="dropbtn">profile picture here</button>
                <div style={{display:"none"}} id ="dropdown-items">
                     <a className="dropdown-list-item">
                         Your Site
                     </a>
                     <a className="dropdown-list-item"
                         onClick ={logout}>log out
                     </a>
                </div>
            </div>
        </div>
        )
    };

    return currentUser ? userNavBar() : guestNavBar();
};


export default NavBars;
