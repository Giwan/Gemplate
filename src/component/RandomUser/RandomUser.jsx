import React from 'react'
import { connect } from 'react-redux'
import { fetchUserData } from '../../actions/actions'

const mapStateToProps = (state) => {
    return {
        user: state.userStore.user
    }
}

/**
 * where does the dispatch function come from?
 * Is this provided by the connect method?
 *
 * @param {[type]} user     [description]
 * @param {[type]} dispatch [description]
 */
let RandomUser = ({user, dispatch}) => {
    return (
        <div>
            <button onClick={()=> dispatch(fetchUserData())}>fetchUserData</button>
            <div>
                <h1>User Data:</h1>
                <h2>{user && user.results[0].email}</h2>
            </div>
        </div>
    )
}

/**
 * Connects the component to redux
 */
RandomUser = connect(mapStateToProps)(RandomUser);
export default RandomUser;
