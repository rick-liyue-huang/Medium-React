
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultStae = fromJS({
	focused: false
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




	return state;
}