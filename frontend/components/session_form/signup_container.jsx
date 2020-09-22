import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SignupForm from "./sign_up";

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign up for a Bandcamp fan account',
        navLink: <Link to="/login">Log in.</Link>
    }
};
const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);