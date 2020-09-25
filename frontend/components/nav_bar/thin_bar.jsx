import React from 'react';
import { Link } from 'react-router-dom';
import DropDownContainer from './drop_down_container'; 


const ThinBar = ({ currentUser, logout, openModal }) => {
    const guestThinBar = () => {
        // console.log('GUEST NAV BAR')
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
                    <button className="navbar-signup-button" onClick={()=> openModal('signup')}>sign up</button>
                 </li> 
             </ul>
        </div>
    )};

    const userThinBar = () => {
        return(
        <div className="guest-container">
            <Link to="/" className="navbar-logo-container">
                <p className="navBarLogo">▰</p>
                <p className="site-name-logo">RecordPress</p>
            </Link>

            <DropDownContainer/>
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

    return currentUser ? userThinBar() : guestThinBar();
};


export default ThinBar;
