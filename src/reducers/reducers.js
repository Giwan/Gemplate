import { combineReducers } from 'redux'

// TODO import actions
import {
    INCREMENT_NUMBER,
    GET_USER_DATA
} from '../actions/actions'

function app(state = {
    clickNumber: 0
}, action) {
    switch(action.type) {
        case INCREMENT_NUMBER:
        return {
            ...state,
            clickNumber: state.clickNumber + action.payload
        }
        default:
            return state
    }
}

function userStore(state = {
    user: null
}, action) {
    switch(action.type) {
        case GET_USER_DATA:
        return {
            ...state,
            user: action.payload
        }
    }

    return state;
}

const myapp = combineReducers({
    app,
    userStore
});
export default myapp;
