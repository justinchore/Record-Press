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
        processForm: (user) => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal()),
        openModal: () => dispatch(openModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);