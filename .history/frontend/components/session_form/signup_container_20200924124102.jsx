import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SignupForm from "./sign_up";
import { closeModal, openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors, session, entities: { users} }) => {
    return {
        currentUser: users[session.id],
        errors: errors.session,
        formType: 'a fan',
        navLink: <Link to="/login">Log in.</Link>
    }
};
const mapDispatchToProps = dispatch => {
    return {
        demoUser: (demoUser) => dispatch(login(demoUser)),
        processForm: (user) => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal()),
        openModal: () => dispatch(openModal()),
        otherForm: (
            // <button className="signup-link" onClick={() => dispatch(openModal('signup'))}>here</button>
            <Link to="/login"><button className="signup-login-link" onClick={() => dispatch(closeModal())}>here</button></Link>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);