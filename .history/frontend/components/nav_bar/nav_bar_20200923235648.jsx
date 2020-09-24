import React from 'react';
import { Link } from 'react-router-dom';
import SignupContainer from '../session_form/signup_container';


const NavBars = ({ currentUser, logout, openModal }) => {
    console.log(currentUser); 
    const guestNavBar = () => {
        console.log('GUEST NAV BAR')
        console.log(currentUser); 
        console.log(logout); 
        console.log(openModal);
    return(
        <div className = "guest-container">
            <div className = "navbar-logo-container">
                <p className="navBarLogo">▰</p>
                <p className="site-name-logo">RecordPress</p>
            </div>
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
            <div className="navbar-logo-container">
                <p className="navBarLogo">▰</p>
                <p className="site-name-logo">RecordPress</p>
            </div>
            <ul className="">
                <button className="dropbtn">profile picture here</button>
                <li className="list-item">
                    <p>Your Site</p>
                </li>
                <li className="list-item">
                    <p onClick ={logout}>log out</p>
                </li>
            </ul>
        </div>
    );

    return currentUser ? userNavBar() : guestNavBar();
};


export default NavBars;
