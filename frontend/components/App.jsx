import React from 'react'
import { Route,  } from 'react-router-dom';

import FanSignupContainer from "./session_form/fan_signup_container"; 
import LoginContainer from "./session_form/login_container"; 
import UserAuthContainer from "./main_nav_bar/user_auth_container"; 

const App = () =>  (
    <div>
        <h1>Record Press</h1>
        < UserAuthContainer/>
        <Route path="/login" component={ LoginContainer } /> 
        <Route path="/signup" component={ FanSignupContainer }/> 
    </div>
)

export default App; 