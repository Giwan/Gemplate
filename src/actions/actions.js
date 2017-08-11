import * as axios from "axios";

export const INCREMENT_NUMBER = "INCREMENT_NUMBER"
export const GET_USER_DATA = "GET_USER_DATA"
export const FETCHING_USER_DATA = "FETCHING_USER_DATA"
export function incrementClicker() {
    return {
        type: INCREMENT_NUMBER,
        payload: 1
    }
}

export function fetchingUserData() {
    return {
        type: FETCHING_USER_DATA
    }
}

export function fetchUserDataSucceeded(data) {
    return {
        type: GET_USER_DATA,
        payload: data
    }
}

export function fetchUserDataFaileed(error) {
    return {
        type: GET_USER_DATA_FAILED,
        payload: error
    }
}


// Thunk
export function fetchUserData() {
    return function(dispatch) {
        dispatch( fetchingUserData() );

        return axios.get(`https://randomuser.me/api/`)
        .then( response => dispatch(fetchUserDataSucceeded(response.data)))
        .catch( error => dispatch(fetchUserDataFaileed(error)))
    }
}
