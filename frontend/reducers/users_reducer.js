import {RECEIVE_CURRENT_USER} from '../actions/session_actions'; 
import {
    CREATE_USER,
    RECEIVE_USER,
    RECEIVE_USERS,
    CLEAR_USERS
} from "../actions/user_actions"; 

const usersReducer = (state = {}, action) => {
    Object.freeze(state)
    // debugger
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
        case CREATE_USER: 
            // debugger
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
        case RECEIVE_USER: 
            // debugger
            return Object.assign({}, { [action.currentUser.id]: action.currentUser })
        case CLEAR_USERS: 
            return {}; 
        // case RECEIVE_USERS:
        //     return Object.assign({}, state, action.users )
         default: 
            return state; 
    }
}

export default usersReducer; 