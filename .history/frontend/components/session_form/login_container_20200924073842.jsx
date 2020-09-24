import { connect } from 'react-redux'; 
import React from 'react'; 
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions'; 
import LoginForm from "./log_in"; 
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = ( {errors} ) => {
    console.log(errors.session);
    return {
        errors: errors.session,
        formType: 'Log in'
    }
};
const mapDispatchToProps = dispatch => {
    console.log("props!");
    return {
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            // <button className="signup-link" onClick={() => dispatch(openModal('signup'))}>here</button>
            <Link to="/"><button className="login-signup-link" onClick={() => dispatch(openModal('signup'))}>here</button></Link>
        ), 
    }; 
};

 export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);