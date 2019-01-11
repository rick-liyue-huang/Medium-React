

/*
	immutable.js => get immutable object
*/
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
	focused: false
});

export default (state = defaultState, action) => {
	
	if (action.type === actionTypes.SEARCH_FOCUS) {
		/*return {
			focused: true
		}*/
		// immutable object set methods 
		// will combine the previous immutable object and set value,
		// to return the new object.
		// remember that: not return the old object
		return state.set('focused', true) 
	}

	if (action.type === actionTypes.SEARCH_BLUR) {
		/*return {
			focused: false
		}*/
		return state.set('focused', false)
	}

	return state;
}











