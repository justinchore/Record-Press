import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal';
import SignupContainer from '../session_form/signup_container';


const NavBars = ({ currentUser, logout }) => {
    console.log(currentUser); 
    const [isOpen, setIsOpen] = useState(false);
    const guestNavBar = () => {
        console.log('GUEST NAV BAR')
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
                    <p><Link onClick={()=>setIsOpen(true)}to="/signup">sign up</Link>
                        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                            <SignupContainer/> 
                        </Modal></p>
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
            <ul className="nav-list">
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
