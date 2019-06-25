
import { fromJS } from 'immutable';
import { actionTypes } from './index';

// const defaultState = {
//   focused: false
// };
const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, action) => {
  if(action.type === actionTypes.SEARCH_FOCUS) {
    return state.set('focused', true);
    // const newState = JSON.parse(JSON.stringify(state));
    // newState.focused = true;
    // return newState;
  }
  if(action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false);
    // return {
    //   focused: false
    // }
  }
  return state;
}