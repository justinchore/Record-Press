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
import HomeBarContainer from "./nav_bar/home_bar_container"; 
import ThinBarContainer from "./nav_bar/thin_bar_container";
import HomePageContainer from "./home_page/home_page_container";
import HeaderSelect from './nav_bar/header_select';
import { AuthRoute } from "../util/route_util"; 
import Modal from './modal';

const App = () =>  {
    // console.log("APP")
    return (
    <>    
        <Modal/>
        <header>
            { <HeaderSelect/> }
        </header>

        <section>
        <Switch>
         <Route exact path = "/" component= {HomePageContainer} />
        <AuthRoute exact path="/login" component={ LoginContainer } /> 
        {/* <AuthRoute exact path="/signup" className="signup-page" component={SignupContainer} /> */}
        </Switch>
        </section>
    </>
    )
}

export default App; 