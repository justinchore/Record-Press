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
import GreetingContainer from './greeting/greeting_container'; 
import { AuthRoute } from "../util/route_util"; 


const HIDDEN_SIGNUP = {
    display: 'none'
}

const App = () =>  {
    return (
    <div>
         <AuthRoute exact path = "/" component= {GreetingContainer} />
        <AuthRoute exact path="/login" component={ LoginContainer } /> 
            <div style={HIDDEN_SIGNUP}><AuthRoute exact path="/signup" component={SignupContainer} /></div>
    </div>
    )
}

export default App; 