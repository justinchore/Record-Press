import React from 'react'; 
import { Link } from 'react-router-dom'; 

const UserAuth = ({ currentUser, logout }) => {
    const loginSignup = () => (
        <div>
            <Link to="/login">log in</Link>
            <Link to="/signup">sign up</Link>
        </div>
    ); 

    const signedIn = () => (
        <div>
            <form onSubmit={logout}>
                <input type="submit">log out</input>
            </form>
        </div>
    ); 

    return  currentUser ? signedIn() : loginSignup(); 
}