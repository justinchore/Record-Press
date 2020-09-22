import React from 'react'; 
import { Link } from "react-router-dom"

const UserAuth = ({ currentUser, logout }) => {
    const loginSignup = () => (
        <div>
            <Link to="/login">log in</Link>
            <br></br>
            <Link to="/signup">sign up</Link>
        </div>
    ); 

    const signedIn = () => (
        <div>
            <form onSubmit={ logout }>
                <input type="submit" value="logout"></input>
            </form>
        </div>
    ); 

    return  currentUser ? signedIn() : loginSignup(); 
}

export default UserAuth; 