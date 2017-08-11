import React from 'react'
import { connect } from 'react-redux'
import { incrementClicker } from '../../actions/actions'

let ReduxClicker = ({dispatch}) => {
    return(
        <button onClick={()=> {
                dispatch(incrementClicker())
            }}>
            Redux Clicker
        </button>
    );
}

ReduxClicker = connect()(ReduxClicker);
export default ReduxClicker;
