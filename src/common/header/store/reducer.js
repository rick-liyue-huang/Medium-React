
import { actionTypes } from './index';

const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  if(action.type === actionTypes.SEARCH_FOCUS) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = true;
    return newState;
  }
  if(action.type === actionTypes.SEARCH_BLUR) {
    return {
      focused: false
    }
  }
  return state;
}