import AppDispatcher from '../dispatcher/AppDispatcher';
import {
    EventEmitter
} from 'events';
import assign from 'object-assign';
import MainConstant from '../constant/MainConstant';

let timerState = false;
const CHANGE = 'change';

function timerOn(val) {
    timerState = val;
}


/*
 * Broadcast changes to all who are interested
 */
function emitChange() {
    MainStore.emit( CHANGE );
}

/*
 * Specify event listeners and the callbacks that will be
 * invoked once those events are triggered.
 * Using the event emitter we copy functions from the
 * built-in events obect to our MessageStore object.
 */
let MainStore = assign( {}, EventEmitter.prototype, {
    addChangeListener: function( callback ) {
        this.on( CHANGE, callback );
    },

    removeChangeListener: function( callback ) {
        this.removeListener( CHANGE, callback );
    },

    isClickerOn: () => clickerIsOn,
    getTimerState: () => timerState,
} );

function handleAction( action ) {
    switch ( action.type ) {
        case MainConstant.ENABLE_TIMER:
            timerOn(true);
            emitChange();
            break;
        case MainConstant.DISABLE_TIMER:
            timerOn(false);
            emitChange();
            break;
    }
}

/*
 * Register this store with the dispatcher and
 * tell it which function to call when something happens that
 * we're intrrested in.
 */
MainStore.dispatchToken = AppDispatcher.register( handleAction );
module.exports = MainStore;
