import { connect } from 'react-redux'; 
import React from 'react'; 
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions'; 
import LoginForm from "./log_in"; 

const mapStateToProps = ( {errors} ) => {
    return {
        errors: errors.session,
        formType: 'Log in', 
        navLink: (
        <Link to="/signup">here.</Link>
        )
    }
};
const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user))
    }
}

 export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);