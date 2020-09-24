import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import SignupContainer from "./session_form/signup_container"; 
import LoginContainer from "./session_form/login_container"; 
import NavBarContainer from './nav_bar/nav_bar_container'; 
import { AuthRoute } from "../util/route_util"; 
import Modal from './modal';

const App = () =>  {
    console.log("APP")
    return (
    <>    
        
        <Modal/>
        <Route exact path = "/" component= {NavBarContainer} /> 
        <Route exact path="/login" component={ LoginContainer } /> 
        {/* <AuthRoute exact path="/signup" className="signup-page" component={SignupContainer} /> */}
       
    </>
    )
}

export default App; 