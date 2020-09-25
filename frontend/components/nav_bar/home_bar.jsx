import React from 'react';
import { Link } from 'react-router-dom';
import DropDownContainer from './drop_down_container';


const HomeBar = ({ currentUser, logout, openModal }) => {
    const guestHomeBar = () => {
        // console.log('GUEST NAV BAR')
        return (
            <div className="guest-home-grid-container">
                <div className="guest-homebar-logo-container">
                    <p className="homebar-logo">▰</p>
                    <p className="homebar-sitename">RecordPress</p>
                    <div className="home-message">Discover amazing new music and <a className="cool-text">directly support</a> the artists who make it.</div>
                </div>
                <div className="login-search-container">
                <div className="guesthome-search-bar">SEARCH BAR</div>
                
                <button className="homebar-signup-item" onClick={() => openModal('signup')}>sign up</button>
                    <p className="homebar-login-item"><Link to="/login" className="homebar-login-link">log in</Link></p>
                </div>
            </div>
        )
    };

    const userHomeBar = () => {
        return (
            <div className="guest-container">
                <Link to="/" className="navbar-logo-container">
                    <p className="navBarLogo">▰</p>
                    <p className="site-name-logo">RecordPress</p>
                </Link>

                <DropDownContainer />
                {/* <div className= "drpdown">
                <button className="dropbtn">profile picture here</button>
                <div style={{display:"none"}} id="dropdown-items">
                     <a className="dropdown-list-item">
                         Your Site
                     </a>
                     <a className="dropdown-list-item"
                         onClick ={logout}>log out
                     </a>
                </div>
            </div> */}
            </div>
        )
    };

    return currentUser ? userHomeBar() : guestHomeBar();
};


export default HomeBar;