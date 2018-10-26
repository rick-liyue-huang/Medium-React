
import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const changeHomeData = (result) => ({
	type: actionTypes.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
	type: actionTypes.ADD_ARTICLE_LIST,
	list: fromJS(list),
	nextPage
});

export const getHomeInfo = () => {
	return (dispatch) => {

		axios.get('/api/home.json')
			.then((res) => {
				const result = res.data.data;
				// console.log(result);
				dispatch(changeHomeData(result));
			})
			.catch(() => {
				console.log('eee');
			});
	}
}

export const getMoreList = (page) => {

	// by redux-thunk, to write async method
	return (dispatch) => {
		axios.get('/api/homeMore.json?page='+ page)
			.then((res) => {
				const result = res.data.data;
				dispatch(addHomeList(result, page + 1));
				// console.log(result);
			})
	}
}

export const toggleTopShow = (flag) => ({
	type: actionTypes.TOGGLE_SCROLL_TOP,
	flag
})

















