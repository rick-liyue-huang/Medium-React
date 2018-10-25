
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
	type: actionTypes.CHANGE_LIST,
	// transfer to immutable array
	data: fromJS(data),
	totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
	type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
	type: actionTypes.SEARCH_BLUR
});

export const getList = () => {
	return (dispatch) => {
		// console.log(123);
		axios.get('/api/headerList.json')
			.then((res) => {
				const data = res.data;
				// console.log(data);
				dispatch(changeList(data.data));
			}).catch(() => {
				console.log('eee');
			})
	}
};

export const mouseEnter = () => ({
	type: actionTypes.MOUSE_ENTER
});

export const mouseLeave = () => ({
	type: actionTypes.MOUSE_LEAVE

});

export const pageChange = (page) => ({
	type: actionTypes.PAGE_CHANGE,
	page
});









