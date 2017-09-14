import AppDispatcher from '../dispatcher/AppDispatcher';
import ClickerConstant from '../constant/ClickerConstant';
import $ from 'jquery';


let ClickerAction = {
  enable: ()=> {
    let action = {
      type: ClickerConstant.ENABLE_CLICKER,
    };
    AppDispatcher.dispatch(action);

  },
  disable: ()=> {
    let action = {
      type: ClickerConstant.DISABLE_CLICKER,
    };
    AppDispatcher.dispatch(action);
  },
  setText(text) {
      const action = {
          type: ClickerConstant.SET_TEXT,
          text: text
      }
  }
}

module.exports = ClickerAction;
