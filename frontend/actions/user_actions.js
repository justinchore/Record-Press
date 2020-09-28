import React from 'react';
import * as APIUtil from '../util/user_api_util';

export const CREATE_USER = 'CREATE_USER'; 
export const RECEIVE_USER = 'RECEIVE_USER'; 
export const RECEIVE_USERS = 'RECEIVE_USERS'; 
export const RECEIVE_USER_ERRPRS = 'RECEIVE_USER_ERRORS'

export const addUser = (currentUser) => {
    return {
        type: CREATE_USER, 
        currentUser
    }
}

export const receiveUser = (currentUser) => {
    return {
        type: RECEIVE_USER, 
        currentUser 
    }
}

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const receiveUserErrors = (errors) => {
    return {
        type: RECEIVE_USER_ERRORS,
        errors
    }
}

export const createUser = user => dispatch => {
    return APIUtil.createUser(user).then(user => dispatch(addUser(user)))
}

export const fetchUser = userId => dispatch => {
    return APIUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)), err => dispatch(receiveUserErrors(err.responseJSON)))
} 


