
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultStae = fromJS({
	focused: false,
	list: []
});

export default (state = defaultStae, action) => {

	if(action.type === actionTypes.SEARCH_FOCUS) {
		return state.set('focused', true);
		/*{
			focused: true
		};*/
	}

	if(action.type === actionTypes.SEARCH_BLUR) {

		// immutable object set method, means that it will create the new object, but not change the old one.
		return state.set('focused', false);
		/*{
			focused: false
		};*/
	}

	if(action.type === actionTypes.CHANGE_LIST) {
		// console.log(action);
		return state.set('list', action.data);
	}




	return state;
}