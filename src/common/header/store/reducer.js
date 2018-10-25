
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultStae = fromJS({
	focused: false,
	mouseIn: false,
	list: [],
	page: 1,
	totalPage: 1
});

export default (state = defaultStae, action) => {

	switch(action.type) {
		case actionTypes.SEARCH_FOCUS:
			return state.set('focused', true);
		case actionTypes.SEARCH_BLUR:
			return state.set('focused', false);
		case actionTypes.CHANGE_LIST:
			return state.merge({
				list: action.data,
				totalPage: action.totalPage
			});
			// return state.set('list', action.data).set('totalPage', action.totalPage);
		case actionTypes.MOUSE_ENTER:
			return state.set('mouseIn', true);
		case actionTypes.MOUSE_LEAVE:
			return state.set('mouseIn', false);
		case actionTypes.PAGE_CHANGE:
			return state.set('page', action.page);
		default:
			return state;
	}

	/*
	if(action.type === actionTypes.SEARCH_FOCUS) {
		return state.set('focused', true);
		// {
		// 	focused: true
		// };
	}
	if(action.type === actionTypes.SEARCH_BLUR) {
		// immutable object set method, means that it will create the new object, but not change the old one.
		return state.set('focused', false);
	}
	if(action.type === actionTypes.CHANGE_LIST) {
		// console.log(action);
		return state.set('list', action.data);
	}
	return state;*/
}