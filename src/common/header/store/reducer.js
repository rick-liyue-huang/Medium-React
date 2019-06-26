
import { fromJS } from 'immutable';
import { actionTypes } from './index';

// const defaultState = {
//   focused: false
// };
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {

  switch(action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.GET_HEADER_LIST:
      // return state.set('list', action.data).set('totalPage', action.totalPage);
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      });
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionTypes.CHANGE_HEADER_LIST:
      return state.set('page', action.page)
    default:
      return state;
  }

  /*
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
  if(action.type === actionTypes.CHANGE_HEADER_LIST) {
    // console.log('test');
    // return state;
    return state.set('list', action.data);
  }
  return state;
  */
}