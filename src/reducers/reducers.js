import { combineReducers } from 'redux'

// TODO import actions
import {
    INCREMENT_NUMBER
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

const myapp = combineReducers({app});
export default myapp;
