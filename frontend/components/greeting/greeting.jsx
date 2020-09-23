import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal';


const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => {
        const [isOpen, setIsOpen] = useState(false)
        return(
        <nav className="login-signup">
            <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
                <div><Link to="/signup" onClick={() => setIsOpen(true)}>Sign up!</Link>
                    <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
                </div>
        </nav>
    )};
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
