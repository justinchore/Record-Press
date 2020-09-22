import { connect } from 'react-redux'; 
import React from 'react'; 
import { login } from '../../actions/session_actions'; 
import LoginForm from "./sign_up"; 

const mapStateToProps = ( {errors} ) => {
    return {
        errors: errors.session,
        formType: 'Log in', 
        navLink: <Link to="/signup">sign up</Link>
    }
};
const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user))
    }
}

 export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);