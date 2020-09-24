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

    const userNavBar = () => (
        <div className="guest-container">
            <Link to="/" className="navbar-logo-container">
                <p className="navBarLogo">▰</p>
                <p className="site-name-logo">RecordPress</p>
            </Link>
            <div className= "drpdown">
                <button className="dropbtn">profile picture here</button>
                <div className="dropdown-items">
                     <a className="dropdown-list-item">
                         <p>Your Site</p>
                     </a>
                     <a className="list-item">
                         <p onClick ={logout}>log out</p>
                     </a>
                </div>
            </div>
        </div>
    );

    return currentUser ? userNavBar() : guestNavBar();
};


export default NavBars;
