import AppDispatcher from '../dispatcher/AppDispatcher';
import MainConstant from '../constant/MainConstant';


const MainAction = {
  enable: ()=> {
      MainAction.disable();
    let action = {
      type: MainConstant.ENABLE_TIMER,
    };
    AppDispatcher.dispatch(action);

  },
  disable: ()=> {
    let action = {
      type: MainConstant.DISABLE_TIMER,
    };
    AppDispatcher.dispatch(action);
  }
}

module.exports = MainAction;
