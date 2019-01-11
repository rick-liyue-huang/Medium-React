

/*
	immutable.js => get immutable object
*/
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

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
		case actionTypes.CHANGE_LIST:
			// return state
			// 	.set('list', action.data)
			// 	.set('totalPage', action.totalPage);
			return state.merge({
				list: action.data,
				totalPage: action.totalPage
			})
		case actionTypes.MOUSE_ENTER:
			return state.set('mouseIn', true)
		case actionTypes.MOUSE_LEAVE:
			return state.set('mouseIn', false)
		case actionTypes.CHANGE_PAGE:
			return state.set('page', action.page)
		default:
			return state;
	}
	
	/*if (action.type === actionTypes.SEARCH_FOCUS) {
		// return {
		// 	focused: true
		// }
		
		// immutable object set methods 
		// will combine the previous immutable object and set value,
		// to return the new object.
		// remember that: not return the old object
		return state.set('focused', true) 
	}

	if (action.type === actionTypes.SEARCH_BLUR) {
		// return {
		// 	focused: false
		// }
		return state.set('focused', false)
	}

	if(action.type === actionTypes.CHANGE_LIST) {
		// console.log(action);
		return state.set('list', action.data);
	}

	return state;*/
}











